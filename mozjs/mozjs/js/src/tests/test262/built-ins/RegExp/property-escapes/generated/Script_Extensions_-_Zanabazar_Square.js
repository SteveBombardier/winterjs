// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Zanabazar_Square`
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
    [0x011A00, 0x011A47]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Zanabazar_Square}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Zanabazar_Square}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Zanb}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Zanb}"
);
testPropertyEscapes(
  /^\p{scx=Zanabazar_Square}+$/u,
  matchSymbols,
  "\\p{scx=Zanabazar_Square}"
);
testPropertyEscapes(
  /^\p{scx=Zanb}+$/u,
  matchSymbols,
  "\\p{scx=Zanb}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0119FF],
    [0x011A48, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Zanabazar_Square}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Zanabazar_Square}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Zanb}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Zanb}"
);
testPropertyEscapes(
  /^\P{scx=Zanabazar_Square}+$/u,
  nonMatchSymbols,
  "\\P{scx=Zanabazar_Square}"
);
testPropertyEscapes(
  /^\P{scx=Zanb}+$/u,
  nonMatchSymbols,
  "\\P{scx=Zanb}"
);

reportCompare(0, 0);
