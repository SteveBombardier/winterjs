// |reftest| skip error:SyntaxError -- regexp-v-flag is not supported
// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Basic_Emoji` (property of strings) with the `u` flag throws an early error. Properties of strings are only supported through the `v` flag.
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-patterns-static-semantics-early-errors
features: [regexp-unicode-property-escapes, regexp-v-flag]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/\p{Basic_Emoji}/u;
