// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Line_Separator`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x002028
  ],
  ranges: []
});
testPropertyEscapes(
  /^\p{General_Category=Line_Separator}+$/u,
  matchSymbols,
  "\\p{General_Category=Line_Separator}"
);
testPropertyEscapes(
  /^\p{General_Category=Zl}+$/u,
  matchSymbols,
  "\\p{General_Category=Zl}"
);
testPropertyEscapes(
  /^\p{gc=Line_Separator}+$/u,
  matchSymbols,
  "\\p{gc=Line_Separator}"
);
testPropertyEscapes(
  /^\p{gc=Zl}+$/u,
  matchSymbols,
  "\\p{gc=Zl}"
);
testPropertyEscapes(
  /^\p{Line_Separator}+$/u,
  matchSymbols,
  "\\p{Line_Separator}"
);
testPropertyEscapes(
  /^\p{Zl}+$/u,
  matchSymbols,
  "\\p{Zl}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x002027],
    [0x002029, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Line_Separator}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Line_Separator}"
);
testPropertyEscapes(
  /^\P{General_Category=Zl}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Zl}"
);
testPropertyEscapes(
  /^\P{gc=Line_Separator}+$/u,
  nonMatchSymbols,
  "\\P{gc=Line_Separator}"
);
testPropertyEscapes(
  /^\P{gc=Zl}+$/u,
  nonMatchSymbols,
  "\\P{gc=Zl}"
);
testPropertyEscapes(
  /^\P{Line_Separator}+$/u,
  nonMatchSymbols,
  "\\P{Line_Separator}"
);
testPropertyEscapes(
  /^\P{Zl}+$/u,
  nonMatchSymbols,
  "\\P{Zl}"
);

reportCompare(0, 0);
