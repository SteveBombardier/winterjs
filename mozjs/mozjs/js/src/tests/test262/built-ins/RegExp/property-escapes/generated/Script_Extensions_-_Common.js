// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Common`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000D7,
    0x0000F7,
    0x000374,
    0x00037E,
    0x000385,
    0x000387,
    0x000605,
    0x0006DD,
    0x0008E2,
    0x000E3F,
    0x003000,
    0x003004,
    0x003012,
    0x003020,
    0x003036,
    0x00327F,
    0x0033FF,
    0x00AB5B,
    0x00FEFF,
    0x01D4A2,
    0x01D4BB,
    0x01D546,
    0x01F7F0,
    0x0E0001
  ],
  ranges: [
    [0x000000, 0x000040],
    [0x00005B, 0x000060],
    [0x00007B, 0x0000A9],
    [0x0000AB, 0x0000B9],
    [0x0000BB, 0x0000BF],
    [0x0002B9, 0x0002DF],
    [0x0002E5, 0x0002E9],
    [0x0002EC, 0x0002FF],
    [0x000FD5, 0x000FD8],
    [0x0016EB, 0x0016ED],
    [0x002000, 0x00200B],
    [0x00200E, 0x00202E],
    [0x002030, 0x002064],
    [0x002066, 0x002070],
    [0x002074, 0x00207E],
    [0x002080, 0x00208E],
    [0x0020A0, 0x0020C0],
    [0x002100, 0x002125],
    [0x002127, 0x002129],
    [0x00212C, 0x002131],
    [0x002133, 0x00214D],
    [0x00214F, 0x00215F],
    [0x002189, 0x00218B],
    [0x002190, 0x002426],
    [0x002440, 0x00244A],
    [0x002460, 0x0027FF],
    [0x002900, 0x002B73],
    [0x002B76, 0x002B95],
    [0x002B97, 0x002BFF],
    [0x002E00, 0x002E42],
    [0x002E44, 0x002E5D],
    [0x002FF0, 0x002FFB],
    [0x003248, 0x00325F],
    [0x0032B1, 0x0032BF],
    [0x0032CC, 0x0032CF],
    [0x003371, 0x00337A],
    [0x003380, 0x0033DF],
    [0x004DC0, 0x004DFF],
    [0x00A708, 0x00A721],
    [0x00A788, 0x00A78A],
    [0x00AB6A, 0x00AB6B],
    [0x00FE10, 0x00FE19],
    [0x00FE30, 0x00FE44],
    [0x00FE47, 0x00FE52],
    [0x00FE54, 0x00FE66],
    [0x00FE68, 0x00FE6B],
    [0x00FF01, 0x00FF20],
    [0x00FF3B, 0x00FF40],
    [0x00FF5B, 0x00FF60],
    [0x00FFE0, 0x00FFE6],
    [0x00FFE8, 0x00FFEE],
    [0x00FFF9, 0x00FFFD],
    [0x010190, 0x01019C],
    [0x0101D0, 0x0101FC],
    [0x01CF50, 0x01CFC3],
    [0x01D000, 0x01D0F5],
    [0x01D100, 0x01D126],
    [0x01D129, 0x01D166],
    [0x01D16A, 0x01D17A],
    [0x01D183, 0x01D184],
    [0x01D18C, 0x01D1A9],
    [0x01D1AE, 0x01D1EA],
    [0x01D2C0, 0x01D2D3],
    [0x01D2E0, 0x01D2F3],
    [0x01D300, 0x01D356],
    [0x01D372, 0x01D378],
    [0x01D400, 0x01D454],
    [0x01D456, 0x01D49C],
    [0x01D49E, 0x01D49F],
    [0x01D4A5, 0x01D4A6],
    [0x01D4A9, 0x01D4AC],
    [0x01D4AE, 0x01D4B9],
    [0x01D4BD, 0x01D4C3],
    [0x01D4C5, 0x01D505],
    [0x01D507, 0x01D50A],
    [0x01D50D, 0x01D514],
    [0x01D516, 0x01D51C],
    [0x01D51E, 0x01D539],
    [0x01D53B, 0x01D53E],
    [0x01D540, 0x01D544],
    [0x01D54A, 0x01D550],
    [0x01D552, 0x01D6A5],
    [0x01D6A8, 0x01D7CB],
    [0x01D7CE, 0x01D7FF],
    [0x01EC71, 0x01ECB4],
    [0x01ED01, 0x01ED3D],
    [0x01F000, 0x01F02B],
    [0x01F030, 0x01F093],
    [0x01F0A0, 0x01F0AE],
    [0x01F0B1, 0x01F0BF],
    [0x01F0C1, 0x01F0CF],
    [0x01F0D1, 0x01F0F5],
    [0x01F100, 0x01F1AD],
    [0x01F1E6, 0x01F1FF],
    [0x01F201, 0x01F202],
    [0x01F210, 0x01F23B],
    [0x01F240, 0x01F248],
    [0x01F260, 0x01F265],
    [0x01F300, 0x01F6D7],
    [0x01F6DC, 0x01F6EC],
    [0x01F6F0, 0x01F6FC],
    [0x01F700, 0x01F776],
    [0x01F77B, 0x01F7D9],
    [0x01F7E0, 0x01F7EB],
    [0x01F800, 0x01F80B],
    [0x01F810, 0x01F847],
    [0x01F850, 0x01F859],
    [0x01F860, 0x01F887],
    [0x01F890, 0x01F8AD],
    [0x01F8B0, 0x01F8B1],
    [0x01F900, 0x01FA53],
    [0x01FA60, 0x01FA6D],
    [0x01FA70, 0x01FA7C],
    [0x01FA80, 0x01FA88],
    [0x01FA90, 0x01FABD],
    [0x01FABF, 0x01FAC5],
    [0x01FACE, 0x01FADB],
    [0x01FAE0, 0x01FAE8],
    [0x01FAF0, 0x01FAF8],
    [0x01FB00, 0x01FB92],
    [0x01FB94, 0x01FBCA],
    [0x01FBF0, 0x01FBF9],
    [0x0E0020, 0x0E007F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Common}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Common}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Zyyy}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Zyyy}"
);
testPropertyEscapes(
  /^\p{scx=Common}+$/u,
  matchSymbols,
  "\\p{scx=Common}"
);
testPropertyEscapes(
  /^\p{scx=Zyyy}+$/u,
  matchSymbols,
  "\\p{scx=Zyyy}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0000AA,
    0x0000BA,
    0x000386,
    0x00202F,
    0x002065,
    0x00207F,
    0x002126,
    0x002132,
    0x00214E,
    0x002B96,
    0x002E43,
    0x00FE53,
    0x00FE67,
    0x00FF00,
    0x00FFE7,
    0x01D455,
    0x01D49D,
    0x01D4AD,
    0x01D4BA,
    0x01D4BC,
    0x01D4C4,
    0x01D506,
    0x01D515,
    0x01D51D,
    0x01D53A,
    0x01D53F,
    0x01D545,
    0x01D551,
    0x01F0C0,
    0x01F0D0,
    0x01F200,
    0x01FABE,
    0x01FB93
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000041, 0x00005A],
    [0x000061, 0x00007A],
    [0x0000C0, 0x0000D6],
    [0x0000D8, 0x0000F6],
    [0x0000F8, 0x0002B8],
    [0x0002E0, 0x0002E4],
    [0x0002EA, 0x0002EB],
    [0x000300, 0x000373],
    [0x000375, 0x00037D],
    [0x00037F, 0x000384],
    [0x000388, 0x000604],
    [0x000606, 0x0006DC],
    [0x0006DE, 0x0008E1],
    [0x0008E3, 0x000E3E],
    [0x000E40, 0x000FD4],
    [0x000FD9, 0x0016EA],
    [0x0016EE, 0x001FFF],
    [0x00200C, 0x00200D],
    [0x002071, 0x002073],
    [0x00208F, 0x00209F],
    [0x0020C1, 0x0020FF],
    [0x00212A, 0x00212B],
    [0x002160, 0x002188],
    [0x00218C, 0x00218F],
    [0x002427, 0x00243F],
    [0x00244B, 0x00245F],
    [0x002800, 0x0028FF],
    [0x002B74, 0x002B75],
    [0x002C00, 0x002DFF],
    [0x002E5E, 0x002FEF],
    [0x002FFC, 0x002FFF],
    [0x003001, 0x003003],
    [0x003005, 0x003011],
    [0x003013, 0x00301F],
    [0x003021, 0x003035],
    [0x003037, 0x003247],
    [0x003260, 0x00327E],
    [0x003280, 0x0032B0],
    [0x0032C0, 0x0032CB],
    [0x0032D0, 0x003370],
    [0x00337B, 0x00337F],
    [0x0033E0, 0x0033FE],
    [0x003400, 0x004DBF],
    [0x004E00, 0x00A707],
    [0x00A722, 0x00A787],
    [0x00A78B, 0x00AB5A],
    [0x00AB5C, 0x00AB69],
    [0x00AB6C, 0x00DBFF],
    [0x00E000, 0x00FE0F],
    [0x00FE1A, 0x00FE2F],
    [0x00FE45, 0x00FE46],
    [0x00FE6C, 0x00FEFE],
    [0x00FF21, 0x00FF3A],
    [0x00FF41, 0x00FF5A],
    [0x00FF61, 0x00FFDF],
    [0x00FFEF, 0x00FFF8],
    [0x00FFFE, 0x01018F],
    [0x01019D, 0x0101CF],
    [0x0101FD, 0x01CF4F],
    [0x01CFC4, 0x01CFFF],
    [0x01D0F6, 0x01D0FF],
    [0x01D127, 0x01D128],
    [0x01D167, 0x01D169],
    [0x01D17B, 0x01D182],
    [0x01D185, 0x01D18B],
    [0x01D1AA, 0x01D1AD],
    [0x01D1EB, 0x01D2BF],
    [0x01D2D4, 0x01D2DF],
    [0x01D2F4, 0x01D2FF],
    [0x01D357, 0x01D371],
    [0x01D379, 0x01D3FF],
    [0x01D4A0, 0x01D4A1],
    [0x01D4A3, 0x01D4A4],
    [0x01D4A7, 0x01D4A8],
    [0x01D50B, 0x01D50C],
    [0x01D547, 0x01D549],
    [0x01D6A6, 0x01D6A7],
    [0x01D7CC, 0x01D7CD],
    [0x01D800, 0x01EC70],
    [0x01ECB5, 0x01ED00],
    [0x01ED3E, 0x01EFFF],
    [0x01F02C, 0x01F02F],
    [0x01F094, 0x01F09F],
    [0x01F0AF, 0x01F0B0],
    [0x01F0F6, 0x01F0FF],
    [0x01F1AE, 0x01F1E5],
    [0x01F203, 0x01F20F],
    [0x01F23C, 0x01F23F],
    [0x01F249, 0x01F25F],
    [0x01F266, 0x01F2FF],
    [0x01F6D8, 0x01F6DB],
    [0x01F6ED, 0x01F6EF],
    [0x01F6FD, 0x01F6FF],
    [0x01F777, 0x01F77A],
    [0x01F7DA, 0x01F7DF],
    [0x01F7EC, 0x01F7EF],
    [0x01F7F1, 0x01F7FF],
    [0x01F80C, 0x01F80F],
    [0x01F848, 0x01F84F],
    [0x01F85A, 0x01F85F],
    [0x01F888, 0x01F88F],
    [0x01F8AE, 0x01F8AF],
    [0x01F8B2, 0x01F8FF],
    [0x01FA54, 0x01FA5F],
    [0x01FA6E, 0x01FA6F],
    [0x01FA7D, 0x01FA7F],
    [0x01FA89, 0x01FA8F],
    [0x01FAC6, 0x01FACD],
    [0x01FADC, 0x01FADF],
    [0x01FAE9, 0x01FAEF],
    [0x01FAF9, 0x01FAFF],
    [0x01FBCB, 0x01FBEF],
    [0x01FBFA, 0x0E0000],
    [0x0E0002, 0x0E001F],
    [0x0E0080, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Common}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Common}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Zyyy}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Zyyy}"
);
testPropertyEscapes(
  /^\P{scx=Common}+$/u,
  nonMatchSymbols,
  "\\P{scx=Common}"
);
testPropertyEscapes(
  /^\P{scx=Zyyy}+$/u,
  nonMatchSymbols,
  "\\P{scx=Zyyy}"
);

reportCompare(0, 0);
