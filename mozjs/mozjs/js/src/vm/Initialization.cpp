/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*-
 * vim: set ts=8 sts=2 et sw=2 tw=80:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* SpiderMonkey initialization and shutdown code. */

#include "js/Initialization.h"

#include "mozilla/Assertions.h"
#if JS_HAS_INTL_API
#  include "mozilla/intl/ICU4CLibrary.h"
#endif
#include "mozilla/TextUtils.h"

#include "jstypes.h"

#include "builtin/AtomicsObject.h"
#include "builtin/TestingFunctions.h"
#include "gc/Statistics.h"
#include "jit/Assembler.h"
#include "jit/Ion.h"
#include "jit/JitOptions.h"
#include "jit/Simulator.h"
#include "js/Utility.h"
#include "threading/ProtectedData.h"  // js::AutoNoteSingleThreadedRegion
#include "util/Poison.h"
#include "vm/ArrayBufferObject.h"
#include "vm/DateTime.h"
#include "vm/HelperThreads.h"
#include "vm/Runtime.h"
#include "vm/Time.h"
#ifdef MOZ_VTUNE
#  include "vtune/VTuneWrapper.h"
#endif
#include "wasm/WasmProcess.h"

using js::FutexThread;
using JS::detail::InitState;
using JS::detail::libraryInitState;

InitState JS::detail::libraryInitState;

#ifdef DEBUG
static unsigned MessageParameterCount(const char* format) {
  unsigned numfmtspecs = 0;
  for (const char* fmt = format; *fmt != '\0'; fmt++) {
    if (*fmt == '{' && mozilla::IsAsciiDigit(fmt[1])) {
      ++numfmtspecs;
    }
  }
  return numfmtspecs;
}

static void CheckMessageParameterCounts() {
  // Assert that each message format has the correct number of braced
  // parameters.
#  define MSG_DEF(name, count, exception, format) \
    MOZ_ASSERT(MessageParameterCount(format) == count);
#  include "js/friend/ErrorNumbers.msg"
#  undef MSG_DEF
}
#endif /* DEBUG */

#if defined(JS_RUNTIME_CANONICAL_NAN)
namespace JS::detail {
uint64_t CanonicalizedNaNBits;
}  // namespace JS::detail
#endif

static void SetupCanonicalNaN() {
  // Compute the standard NaN value that the hardware generates.
  volatile double infinity = mozilla::PositiveInfinity<double>();
  volatile double hardwareNaN = infinity - infinity;
  uint64_t hardwareNaNBits = mozilla::BitwiseCast<uint64_t>(hardwareNaN);
  hardwareNaNBits &= ~mozilla::FloatingPoint<double>::kSignBit;

#if defined(JS_NONCANONICAL_HARDWARE_NAN)
  // If the NaN generated by hardware operations is not compatible
  // with our canonical NaN, we must canonicalize every double. This
  // is implemented for C++ code in Value::bitsFromDouble, but is not
  // implemented for JIT code.
#  if !defined(JS_CODEGEN_NONE)
#    error "No JIT support for non-canonical hardware NaN"
#  endif

  (void)hardwareNaNBits;
#elif defined(JS_RUNTIME_CANONICAL_NAN)
  // Determine canonical NaN at startup. It must still match the ValueIsDouble
  // requirements.
  MOZ_RELEASE_ASSERT(JS::detail::ValueIsDouble(hardwareNaNBits));
  JS::detail::CanonicalizedNaNBits = hardwareNaNBits;
#else
  // Assert that the NaN generated by hardware operations is
  // compatible with the canonical NaN we use for JS::Value. This is
  // true for all of our supported platforms, but not for SPARC.
  MOZ_RELEASE_ASSERT(hardwareNaNBits == JS::detail::CanonicalizedNaNBits,
                     "Unexpected default hardware NaN value");
#endif
}

#define RETURN_IF_FAIL(code)           \
  do {                                 \
    if (!code) return #code " failed"; \
  } while (0)

extern "C" void install_rust_hooks();

JS_PUBLIC_API const char* JS::detail::InitWithFailureDiagnostic(
    bool isDebugBuild, FrontendOnly frontendOnly /* = FrontendOnly::No */) {
  // Verify that our DEBUG setting matches the caller's.
#ifdef DEBUG
  MOZ_RELEASE_ASSERT(isDebugBuild);
#else
  MOZ_RELEASE_ASSERT(!isDebugBuild);
#endif

  MOZ_ASSERT(libraryInitState == InitState::Uninitialized,
             "must call JS_Init once before any JSAPI operation except "
             "JS_SetICUMemoryFunctions");
  MOZ_ASSERT(!JSRuntime::hasLiveRuntimes(),
             "how do we have live runtimes before JS_Init?");

  libraryInitState = InitState::Initializing;

#ifdef JS_STANDALONE
  // The rust hooks are initialized by Gecko on non-standalone builds.
  install_rust_hooks();
#endif

  PRMJ_NowInit();

  if (frontendOnly == FrontendOnly::No) {
    // The first invocation of `ProcessCreation` creates a temporary thread
    // and crashes if that fails, i.e. because we're out of memory. To prevent
    // that from happening at some later time, get it out of the way during
    // startup.
    mozilla::TimeStamp::ProcessCreation();
  }

#ifdef DEBUG
  CheckMessageParameterCounts();
#endif

  SetupCanonicalNaN();

  if (frontendOnly == FrontendOnly::No) {
    RETURN_IF_FAIL(js::TlsContext.init());
  }

#if defined(DEBUG) || defined(JS_OOM_BREAKPOINT)
  RETURN_IF_FAIL(js::oom::InitThreadType());
#endif

#if defined(FUZZING)
  js::oom::InitLargeAllocLimit();
#endif

#if defined(JS_GC_ALLOW_EXTRA_POISONING)
  if (getenv("JSGC_EXTRA_POISONING")) {
    js::gExtraPoisoningEnabled = true;
  }
#endif

  js::InitMallocAllocator();

  RETURN_IF_FAIL(js::Mutex::Init());

  js::gc::InitMemorySubsystem();  // Ensure gc::SystemPageSize() works.

  RETURN_IF_FAIL(js::wasm::Init());

  js::coverage::InitLCov();

  if (frontendOnly == FrontendOnly::No) {
    RETURN_IF_FAIL(js::jit::InitializeJit());
  }

  RETURN_IF_FAIL(js::InitDateTimeState());

  if (frontendOnly == FrontendOnly::No) {
#ifdef MOZ_VTUNE
    RETURN_IF_FAIL(js::vtune::Initialize());
#endif
  }

#if JS_HAS_INTL_API
  if (mozilla::intl::ICU4CLibrary::Initialize().isErr()) {
    return "ICU4CLibrary::Initialize() failed";
  }
#endif  // JS_HAS_INTL_API

  if (frontendOnly == FrontendOnly::No) {
    RETURN_IF_FAIL(js::CreateHelperThreadsState());
    RETURN_IF_FAIL(FutexThread::initialize());
    RETURN_IF_FAIL(js::gcstats::Statistics::initialize());
    RETURN_IF_FAIL(js::InitTestingFunctions());
  }

  RETURN_IF_FAIL(js::SharedImmutableStringsCache::initSingleton());
  RETURN_IF_FAIL(js::frontend::WellKnownParserAtoms::initSingleton());

  if (frontendOnly == FrontendOnly::No) {
#ifdef JS_SIMULATOR
    RETURN_IF_FAIL(js::jit::SimulatorProcess::initialize());
#endif

#ifndef JS_CODEGEN_NONE
    // This is forced by InitializeJit.
    MOZ_ASSERT(js::jit::CPUFlagsHaveBeenComputed());
#endif
  }

  libraryInitState = InitState::Running;
  return nullptr;
}

#undef RETURN_IF_FAIL

JS_PUBLIC_API bool JS::InitSelfHostedCode(JSContext* cx, SelfHostedCache cache,
                                          SelfHostedWriter writer) {
  MOZ_RELEASE_ASSERT(!cx->runtime()->hasInitializedSelfHosting(),
                     "JS::InitSelfHostedCode() called more than once");

  js::AutoNoteSingleThreadedRegion anstr;

  JSRuntime* rt = cx->runtime();

  if (!rt->initSelfHostingStencil(cx, cache, writer)) {
    return false;
  }

  if (!rt->initializeAtoms(cx)) {
    return false;
  }

  if (!rt->initSelfHostingFromStencil(cx)) {
    return false;
  }

  if (js::jit::HasJitBackend()) {
    if (!rt->createJitRuntime(cx)) {
      return false;
    }
  }

  return true;
}

static void ShutdownImpl(JS::detail::FrontendOnly frontendOnly) {
  using FrontendOnly = JS::detail::FrontendOnly;

  MOZ_ASSERT(
      libraryInitState == InitState::Running,
      "JS_ShutDown must only be called after JS_Init and can't race with it");
#ifdef DEBUG
  if (JSRuntime::hasLiveRuntimes()) {
    // Gecko is too buggy to assert this just yet.
    fprintf(stderr,
            "WARNING: YOU ARE LEAKING THE WORLD (at least one JSRuntime "
            "and everything alive inside it, that is) AT JS_ShutDown "
            "TIME.  FIX THIS!\n");
  }
#endif

  js::frontend::WellKnownParserAtoms::freeSingleton();
  js::SharedImmutableStringsCache::freeSingleton();

  if (frontendOnly == FrontendOnly::No) {
    FutexThread::destroy();

    js::DestroyHelperThreadsState();

#ifdef JS_SIMULATOR
    js::jit::SimulatorProcess::destroy();
#endif
  }

  js::wasm::ShutDown();

  // The only difficult-to-address reason for the restriction that you can't
  // call JS_Init/stuff/JS_ShutDown multiple times is the Windows PRMJ
  // NowInit initialization code, which uses PR_CallOnce to initialize the
  // PRMJ_Now subsystem.  (For reinitialization to be permitted, we'd need to
  // "reset" the called-once status -- doable, but more trouble than it's
  // worth now.)  Initializing that subsystem from JS_Init eliminates the
  // problem, but initialization can take a comparatively long time (15ms or
  // so), so we really don't want to do it in JS_Init, and we really do want
  // to do it only when PRMJ_Now is eventually called.
  PRMJ_NowShutdown();

#if JS_HAS_INTL_API
  mozilla::intl::ICU4CLibrary::Cleanup();
#endif  // JS_HAS_INTL_API

  if (frontendOnly == FrontendOnly::No) {
#ifdef MOZ_VTUNE
    js::vtune::Shutdown();
#endif  // MOZ_VTUNE
  }

  js::FinishDateTimeState();

  if (frontendOnly == FrontendOnly::No) {
    js::jit::ShutdownJit();
  }

  MOZ_ASSERT_IF(!JSRuntime::hasLiveRuntimes(), !js::WasmReservedBytes());

  js::ShutDownMallocAllocator();

  libraryInitState = InitState::ShutDown;
}

JS_PUBLIC_API void JS_ShutDown(void) {
  ShutdownImpl(JS::detail::FrontendOnly::No);
}

JS_PUBLIC_API void JS_FrontendOnlyShutDown(void) {
  ShutdownImpl(JS::detail::FrontendOnly::Yes);
}

JS_PUBLIC_API bool JS_SetICUMemoryFunctions(JS_ICUAllocFn allocFn,
                                            JS_ICUReallocFn reallocFn,
                                            JS_ICUFreeFn freeFn) {
  MOZ_ASSERT(libraryInitState == InitState::Uninitialized,
             "must call JS_SetICUMemoryFunctions before any other JSAPI "
             "operation (including JS_Init)");

#if JS_HAS_INTL_API
  return mozilla::intl::ICU4CLibrary::SetMemoryFunctions(
             {allocFn, reallocFn, freeFn})
      .isOk();
#else
  return true;
#endif
}

#if defined(ENABLE_WASM_SIMD) && \
    (defined(JS_CODEGEN_X64) || defined(JS_CODEGEN_X86))
void JS::SetAVXEnabled(bool enabled) {
  if (enabled) {
    js::jit::CPUInfo::SetAVXEnabled();
  } else {
    js::jit::CPUInfo::SetAVXDisabled();
  }
}
#endif

JS_PUBLIC_API void JS::DisableJitBackend() {
  MOZ_ASSERT(libraryInitState == InitState::Uninitialized,
             "DisableJitBackend must be called before JS_Init");
  MOZ_ASSERT(!JSRuntime::hasLiveRuntimes(),
             "DisableJitBackend must be called before creating a JSContext");
  js::jit::JitOptions.disableJitBackend = true;
}
