// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Caucasian_Albanian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x01056F
  ],
  ranges: [
    [0x010530, 0x010563]
  ]
});
testPropertyEscapes(
  /^\p{Script=Caucasian_Albanian}+$/u,
  matchSymbols,
  "\\p{Script=Caucasian_Albanian}"
);
testPropertyEscapes(
  /^\p{Script=Aghb}+$/u,
  matchSymbols,
  "\\p{Script=Aghb}"
);
testPropertyEscapes(
  /^\p{sc=Caucasian_Albanian}+$/u,
  matchSymbols,
  "\\p{sc=Caucasian_Albanian}"
);
testPropertyEscapes(
  /^\p{sc=Aghb}+$/u,
  matchSymbols,
  "\\p{sc=Aghb}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01052F],
    [0x010564, 0x01056E],
    [0x010570, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Caucasian_Albanian}+$/u,
  nonMatchSymbols,
  "\\P{Script=Caucasian_Albanian}"
);
testPropertyEscapes(
  /^\P{Script=Aghb}+$/u,
  nonMatchSymbols,
  "\\P{Script=Aghb}"
);
testPropertyEscapes(
  /^\P{sc=Caucasian_Albanian}+$/u,
  nonMatchSymbols,
  "\\P{sc=Caucasian_Albanian}"
);
testPropertyEscapes(
  /^\P{sc=Aghb}+$/u,
  nonMatchSymbols,
  "\\P{sc=Aghb}"
);

reportCompare(0, 0);
