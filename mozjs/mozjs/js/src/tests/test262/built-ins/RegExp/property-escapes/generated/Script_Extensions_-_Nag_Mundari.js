// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Nag_Mundari`
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
    [0x01E4D0, 0x01E4F9]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Nag_Mundari}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Nag_Mundari}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Nagm}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Nagm}"
);
testPropertyEscapes(
  /^\p{scx=Nag_Mundari}+$/u,
  matchSymbols,
  "\\p{scx=Nag_Mundari}"
);
testPropertyEscapes(
  /^\p{scx=Nagm}+$/u,
  matchSymbols,
  "\\p{scx=Nagm}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01E4CF],
    [0x01E4FA, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Nag_Mundari}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Nag_Mundari}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Nagm}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Nagm}"
);
testPropertyEscapes(
  /^\P{scx=Nag_Mundari}+$/u,
  nonMatchSymbols,
  "\\P{scx=Nag_Mundari}"
);
testPropertyEscapes(
  /^\P{scx=Nagm}+$/u,
  nonMatchSymbols,
  "\\P{scx=Nagm}"
);

reportCompare(0, 0);
