// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Old_Uyghur`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000640,
    0x010AF2
  ],
  ranges: [
    [0x010F70, 0x010F89]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Old_Uyghur}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Old_Uyghur}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Ougr}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Ougr}"
);
testPropertyEscapes(
  /^\p{scx=Old_Uyghur}+$/u,
  matchSymbols,
  "\\p{scx=Old_Uyghur}"
);
testPropertyEscapes(
  /^\p{scx=Ougr}+$/u,
  matchSymbols,
  "\\p{scx=Ougr}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00063F],
    [0x000641, 0x00DBFF],
    [0x00E000, 0x010AF1],
    [0x010AF3, 0x010F6F],
    [0x010F8A, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Old_Uyghur}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Old_Uyghur}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Ougr}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Ougr}"
);
testPropertyEscapes(
  /^\P{scx=Old_Uyghur}+$/u,
  nonMatchSymbols,
  "\\P{scx=Old_Uyghur}"
);
testPropertyEscapes(
  /^\P{scx=Ougr}+$/u,
  nonMatchSymbols,
  "\\P{scx=Ougr}"
);

reportCompare(0, 0);
