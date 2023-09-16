// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Multani`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x011288
  ],
  ranges: [
    [0x000A66, 0x000A6F],
    [0x011280, 0x011286],
    [0x01128A, 0x01128D],
    [0x01128F, 0x01129D],
    [0x01129F, 0x0112A9]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Multani}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Multani}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Mult}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Mult}"
);
testPropertyEscapes(
  /^\p{scx=Multani}+$/u,
  matchSymbols,
  "\\p{scx=Multani}"
);
testPropertyEscapes(
  /^\p{scx=Mult}+$/u,
  matchSymbols,
  "\\p{scx=Mult}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x011287,
    0x011289,
    0x01128E,
    0x01129E
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000A65],
    [0x000A70, 0x00DBFF],
    [0x00E000, 0x01127F],
    [0x0112AA, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Multani}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Multani}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Mult}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Mult}"
);
testPropertyEscapes(
  /^\P{scx=Multani}+$/u,
  nonMatchSymbols,
  "\\P{scx=Multani}"
);
testPropertyEscapes(
  /^\P{scx=Mult}+$/u,
  nonMatchSymbols,
  "\\P{scx=Mult}"
);

reportCompare(0, 0);
