// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Runic`
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
    [0x0016A0, 0x0016EA],
    [0x0016EE, 0x0016F8]
  ]
});
testPropertyEscapes(
  /^\p{Script=Runic}+$/u,
  matchSymbols,
  "\\p{Script=Runic}"
);
testPropertyEscapes(
  /^\p{Script=Runr}+$/u,
  matchSymbols,
  "\\p{Script=Runr}"
);
testPropertyEscapes(
  /^\p{sc=Runic}+$/u,
  matchSymbols,
  "\\p{sc=Runic}"
);
testPropertyEscapes(
  /^\p{sc=Runr}+$/u,
  matchSymbols,
  "\\p{sc=Runr}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00169F],
    [0x0016EB, 0x0016ED],
    [0x0016F9, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Runic}+$/u,
  nonMatchSymbols,
  "\\P{Script=Runic}"
);
testPropertyEscapes(
  /^\P{Script=Runr}+$/u,
  nonMatchSymbols,
  "\\P{Script=Runr}"
);
testPropertyEscapes(
  /^\P{sc=Runic}+$/u,
  nonMatchSymbols,
  "\\P{sc=Runic}"
);
testPropertyEscapes(
  /^\P{sc=Runr}+$/u,
  nonMatchSymbols,
  "\\P{sc=Runr}"
);

reportCompare(0, 0);
