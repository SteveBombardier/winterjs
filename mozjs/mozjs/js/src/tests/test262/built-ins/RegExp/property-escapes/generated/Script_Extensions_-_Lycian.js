// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Lycian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010280, 0x01029C]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Lycian}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Lycian}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Lyci}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Lyci}"
);
testPropertyEscapes(
  /^\p{scx=Lycian}+$/u,
  matchSymbols,
  "\\p{scx=Lycian}"
);
testPropertyEscapes(
  /^\p{scx=Lyci}+$/u,
  matchSymbols,
  "\\p{scx=Lyci}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01027F],
    [0x01029D, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Lycian}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Lycian}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Lyci}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Lyci}"
);
testPropertyEscapes(
  /^\P{scx=Lycian}+$/u,
  nonMatchSymbols,
  "\\P{scx=Lycian}"
);
testPropertyEscapes(
  /^\P{scx=Lyci}+$/u,
  nonMatchSymbols,
  "\\P{scx=Lyci}"
);

reportCompare(0, 0);
