// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Marchen`
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
    [0x011C70, 0x011C8F],
    [0x011C92, 0x011CA7],
    [0x011CA9, 0x011CB6]
  ]
});
testPropertyEscapes(
  /^\p{Script=Marchen}+$/u,
  matchSymbols,
  "\\p{Script=Marchen}"
);
testPropertyEscapes(
  /^\p{Script=Marc}+$/u,
  matchSymbols,
  "\\p{Script=Marc}"
);
testPropertyEscapes(
  /^\p{sc=Marchen}+$/u,
  matchSymbols,
  "\\p{sc=Marchen}"
);
testPropertyEscapes(
  /^\p{sc=Marc}+$/u,
  matchSymbols,
  "\\p{sc=Marc}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x011CA8
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x011C6F],
    [0x011C90, 0x011C91],
    [0x011CB7, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Marchen}+$/u,
  nonMatchSymbols,
  "\\P{Script=Marchen}"
);
testPropertyEscapes(
  /^\P{Script=Marc}+$/u,
  nonMatchSymbols,
  "\\P{Script=Marc}"
);
testPropertyEscapes(
  /^\P{sc=Marchen}+$/u,
  nonMatchSymbols,
  "\\P{sc=Marchen}"
);
testPropertyEscapes(
  /^\P{sc=Marc}+$/u,
  nonMatchSymbols,
  "\\P{sc=Marc}"
);

reportCompare(0, 0);
