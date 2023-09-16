// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Chakma`
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
    [0x0009E6, 0x0009EF],
    [0x001040, 0x001049],
    [0x011100, 0x011134],
    [0x011136, 0x011147]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Chakma}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Chakma}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Cakm}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Cakm}"
);
testPropertyEscapes(
  /^\p{scx=Chakma}+$/u,
  matchSymbols,
  "\\p{scx=Chakma}"
);
testPropertyEscapes(
  /^\p{scx=Cakm}+$/u,
  matchSymbols,
  "\\p{scx=Cakm}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x011135
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0009E5],
    [0x0009F0, 0x00103F],
    [0x00104A, 0x00DBFF],
    [0x00E000, 0x0110FF],
    [0x011148, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Chakma}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Chakma}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Cakm}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Cakm}"
);
testPropertyEscapes(
  /^\P{scx=Chakma}+$/u,
  nonMatchSymbols,
  "\\P{scx=Chakma}"
);
testPropertyEscapes(
  /^\P{scx=Cakm}+$/u,
  nonMatchSymbols,
  "\\P{scx=Cakm}"
);

reportCompare(0, 0);
