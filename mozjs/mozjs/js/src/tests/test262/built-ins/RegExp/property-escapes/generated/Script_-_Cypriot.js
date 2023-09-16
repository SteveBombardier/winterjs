// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Cypriot`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x010808,
    0x01083C,
    0x01083F
  ],
  ranges: [
    [0x010800, 0x010805],
    [0x01080A, 0x010835],
    [0x010837, 0x010838]
  ]
});
testPropertyEscapes(
  /^\p{Script=Cypriot}+$/u,
  matchSymbols,
  "\\p{Script=Cypriot}"
);
testPropertyEscapes(
  /^\p{Script=Cprt}+$/u,
  matchSymbols,
  "\\p{Script=Cprt}"
);
testPropertyEscapes(
  /^\p{sc=Cypriot}+$/u,
  matchSymbols,
  "\\p{sc=Cypriot}"
);
testPropertyEscapes(
  /^\p{sc=Cprt}+$/u,
  matchSymbols,
  "\\p{sc=Cprt}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x010809,
    0x010836
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0107FF],
    [0x010806, 0x010807],
    [0x010839, 0x01083B],
    [0x01083D, 0x01083E],
    [0x010840, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Cypriot}+$/u,
  nonMatchSymbols,
  "\\P{Script=Cypriot}"
);
testPropertyEscapes(
  /^\P{Script=Cprt}+$/u,
  nonMatchSymbols,
  "\\P{Script=Cprt}"
);
testPropertyEscapes(
  /^\P{sc=Cypriot}+$/u,
  nonMatchSymbols,
  "\\P{sc=Cypriot}"
);
testPropertyEscapes(
  /^\P{sc=Cprt}+$/u,
  nonMatchSymbols,
  "\\P{sc=Cprt}"
);

reportCompare(0, 0);
