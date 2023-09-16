// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Dogra`
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
    [0x011800, 0x01183B]
  ]
});
testPropertyEscapes(
  /^\p{Script=Dogra}+$/u,
  matchSymbols,
  "\\p{Script=Dogra}"
);
testPropertyEscapes(
  /^\p{Script=Dogr}+$/u,
  matchSymbols,
  "\\p{Script=Dogr}"
);
testPropertyEscapes(
  /^\p{sc=Dogra}+$/u,
  matchSymbols,
  "\\p{sc=Dogra}"
);
testPropertyEscapes(
  /^\p{sc=Dogr}+$/u,
  matchSymbols,
  "\\p{sc=Dogr}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0117FF],
    [0x01183C, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Dogra}+$/u,
  nonMatchSymbols,
  "\\P{Script=Dogra}"
);
testPropertyEscapes(
  /^\P{Script=Dogr}+$/u,
  nonMatchSymbols,
  "\\P{Script=Dogr}"
);
testPropertyEscapes(
  /^\P{sc=Dogra}+$/u,
  nonMatchSymbols,
  "\\P{sc=Dogra}"
);
testPropertyEscapes(
  /^\P{sc=Dogr}+$/u,
  nonMatchSymbols,
  "\\P{sc=Dogr}"
);

reportCompare(0, 0);
