// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Carian`
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
    [0x0102A0, 0x0102D0]
  ]
});
testPropertyEscapes(
  /^\p{Script=Carian}+$/u,
  matchSymbols,
  "\\p{Script=Carian}"
);
testPropertyEscapes(
  /^\p{Script=Cari}+$/u,
  matchSymbols,
  "\\p{Script=Cari}"
);
testPropertyEscapes(
  /^\p{sc=Carian}+$/u,
  matchSymbols,
  "\\p{sc=Carian}"
);
testPropertyEscapes(
  /^\p{sc=Cari}+$/u,
  matchSymbols,
  "\\p{sc=Cari}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01029F],
    [0x0102D1, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Carian}+$/u,
  nonMatchSymbols,
  "\\P{Script=Carian}"
);
testPropertyEscapes(
  /^\P{Script=Cari}+$/u,
  nonMatchSymbols,
  "\\P{Script=Cari}"
);
testPropertyEscapes(
  /^\P{sc=Carian}+$/u,
  nonMatchSymbols,
  "\\P{sc=Carian}"
);
testPropertyEscapes(
  /^\P{sc=Cari}+$/u,
  nonMatchSymbols,
  "\\P{sc=Cari}"
);

reportCompare(0, 0);
