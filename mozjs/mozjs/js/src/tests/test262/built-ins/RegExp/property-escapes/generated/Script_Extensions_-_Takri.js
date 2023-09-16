// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Takri`
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
    [0x000964, 0x000965],
    [0x00A830, 0x00A839],
    [0x011680, 0x0116B9],
    [0x0116C0, 0x0116C9]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Takri}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Takri}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Takr}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Takr}"
);
testPropertyEscapes(
  /^\p{scx=Takri}+$/u,
  matchSymbols,
  "\\p{scx=Takri}"
);
testPropertyEscapes(
  /^\p{scx=Takr}+$/u,
  matchSymbols,
  "\\p{scx=Takr}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000963],
    [0x000966, 0x00A82F],
    [0x00A83A, 0x00DBFF],
    [0x00E000, 0x01167F],
    [0x0116BA, 0x0116BF],
    [0x0116CA, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Takri}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Takri}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Takr}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Takr}"
);
testPropertyEscapes(
  /^\P{scx=Takri}+$/u,
  nonMatchSymbols,
  "\\P{scx=Takri}"
);
testPropertyEscapes(
  /^\P{scx=Takr}+$/u,
  nonMatchSymbols,
  "\\P{scx=Takr}"
);

reportCompare(0, 0);
