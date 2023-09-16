// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Khitan_Small_Script`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x016FE4
  ],
  ranges: [
    [0x018B00, 0x018CD5]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Khitan_Small_Script}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Khitan_Small_Script}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Kits}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Kits}"
);
testPropertyEscapes(
  /^\p{scx=Khitan_Small_Script}+$/u,
  matchSymbols,
  "\\p{scx=Khitan_Small_Script}"
);
testPropertyEscapes(
  /^\p{scx=Kits}+$/u,
  matchSymbols,
  "\\p{scx=Kits}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x016FE3],
    [0x016FE5, 0x018AFF],
    [0x018CD6, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Khitan_Small_Script}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Khitan_Small_Script}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Kits}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Kits}"
);
testPropertyEscapes(
  /^\P{scx=Khitan_Small_Script}+$/u,
  nonMatchSymbols,
  "\\P{scx=Khitan_Small_Script}"
);
testPropertyEscapes(
  /^\P{scx=Kits}+$/u,
  nonMatchSymbols,
  "\\P{scx=Kits}"
);

reportCompare(0, 0);
