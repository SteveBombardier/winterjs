// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: sec-names-and-keywords
description: |
  Test that Unicode v14.0.0 ID_Start characters are accepted as
  identifier start characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
---*/

var \u0870;
var \u0871;
var \u0872;
var \u0873;
var \u0874;
var \u0875;
var \u0876;
var \u0877;
var \u0878;
var \u0879;
var \u087A;
var \u087B;
var \u087C;
var \u087D;
var \u087E;
var \u087F;
var \u0880;
var \u0881;
var \u0882;
var \u0883;
var \u0884;
var \u0885;
var \u0886;
var \u0887;
var \u0889;
var \u088A;
var \u088B;
var \u088C;
var \u088D;
var \u088E;
var \u08B5;
var \u08C8;
var \u08C9;
var \u0C5D;
var \u0CDD;
var \u170D;
var \u171F;
var \u1B4C;
var \u2C2F;
var \u2C5F;
var \u9FFD;
var \u9FFE;
var \u9FFF;
var \uA7C0;
var \uA7C1;
var \uA7D0;
var \uA7D1;
var \uA7D3;
var \uA7D5;
var \uA7D6;
var \uA7D7;
var \uA7D8;
var \uA7D9;
var \uA7F2;
var \uA7F3;
var \uA7F4;
var \u{10570};
var \u{10571};
var \u{10572};
var \u{10573};
var \u{10574};
var \u{10575};
var \u{10576};
var \u{10577};
var \u{10578};
var \u{10579};
var \u{1057A};
var \u{1057C};
var \u{1057D};
var \u{1057E};
var \u{1057F};
var \u{10580};
var \u{10581};
var \u{10582};
var \u{10583};
var \u{10584};
var \u{10585};
var \u{10586};
var \u{10587};
var \u{10588};
var \u{10589};
var \u{1058A};
var \u{1058C};
var \u{1058D};
var \u{1058E};
var \u{1058F};
var \u{10590};
var \u{10591};
var \u{10592};
var \u{10594};
var \u{10595};
var \u{10597};
var \u{10598};
var \u{10599};
var \u{1059A};
var \u{1059B};
var \u{1059C};
var \u{1059D};
var \u{1059E};
var \u{1059F};
var \u{105A0};
var \u{105A1};
var \u{105A3};
var \u{105A4};
var \u{105A5};
var \u{105A6};
var \u{105A7};
var \u{105A8};
var \u{105A9};
var \u{105AA};
var \u{105AB};
var \u{105AC};
var \u{105AD};
var \u{105AE};
var \u{105AF};
var \u{105B0};
var \u{105B1};
var \u{105B3};
var \u{105B4};
var \u{105B5};
var \u{105B6};
var \u{105B7};
var \u{105B8};
var \u{105B9};
var \u{105BB};
var \u{105BC};
var \u{10780};
var \u{10781};
var \u{10782};
var \u{10783};
var \u{10784};
var \u{10785};
var \u{10787};
var \u{10788};
var \u{10789};
var \u{1078A};
var \u{1078B};
var \u{1078C};
var \u{1078D};
var \u{1078E};
var \u{1078F};
var \u{10790};
var \u{10791};
var \u{10792};
var \u{10793};
var \u{10794};
var \u{10795};
var \u{10796};
var \u{10797};
var \u{10798};
var \u{10799};
var \u{1079A};
var \u{1079B};
var \u{1079C};
var \u{1079D};
var \u{1079E};
var \u{1079F};
var \u{107A0};
var \u{107A1};
var \u{107A2};
var \u{107A3};
var \u{107A4};
var \u{107A5};
var \u{107A6};
var \u{107A7};
var \u{107A8};
var \u{107A9};
var \u{107AA};
var \u{107AB};
var \u{107AC};
var \u{107AD};
var \u{107AE};
var \u{107AF};
var \u{107B0};
var \u{107B2};
var \u{107B3};
var \u{107B4};
var \u{107B5};
var \u{107B6};
var \u{107B7};
var \u{107B8};
var \u{107B9};
var \u{107BA};
var \u{10F70};
var \u{10F71};
var \u{10F72};
var \u{10F73};
var \u{10F74};
var \u{10F75};
var \u{10F76};
var \u{10F77};
var \u{10F78};
var \u{10F79};
var \u{10F7A};
var \u{10F7B};
var \u{10F7C};
var \u{10F7D};
var \u{10F7E};
var \u{10F7F};
var \u{10F80};
var \u{10F81};
var \u{11071};
var \u{11072};
var \u{11075};
var \u{11740};
var \u{11741};
var \u{11742};
var \u{11743};
var \u{11744};
var \u{11745};
var \u{11746};
var \u{11AB0};
var \u{11AB1};
var \u{11AB2};
var \u{11AB3};
var \u{11AB4};
var \u{11AB5};
var \u{11AB6};
var \u{11AB7};
var \u{11AB8};
var \u{11AB9};
var \u{11ABA};
var \u{11ABB};
var \u{11ABC};
var \u{11ABD};
var \u{11ABE};
var \u{11ABF};
var \u{12F90};
var \u{12F91};
var \u{12F92};
var \u{12F93};
var \u{12F94};
var \u{12F95};
var \u{12F96};
var \u{12F97};
var \u{12F98};
var \u{12F99};
var \u{12F9A};
var \u{12F9B};
var \u{12F9C};
var \u{12F9D};
var \u{12F9E};
var \u{12F9F};
var \u{12FA0};
var \u{12FA1};
var \u{12FA2};
var \u{12FA3};
var \u{12FA4};
var \u{12FA5};
var \u{12FA6};
var \u{12FA7};
var \u{12FA8};
var \u{12FA9};
var \u{12FAA};
var \u{12FAB};
var \u{12FAC};
var \u{12FAD};
var \u{12FAE};
var \u{12FAF};
var \u{12FB0};
var \u{12FB1};
var \u{12FB2};
var \u{12FB3};
var \u{12FB4};
var \u{12FB5};
var \u{12FB6};
var \u{12FB7};
var \u{12FB8};
var \u{12FB9};
var \u{12FBA};
var \u{12FBB};
var \u{12FBC};
var \u{12FBD};
var \u{12FBE};
var \u{12FBF};
var \u{12FC0};
var \u{12FC1};
var \u{12FC2};
var \u{12FC3};
var \u{12FC4};
var \u{12FC5};
var \u{12FC6};
var \u{12FC7};
var \u{12FC8};
var \u{12FC9};
var \u{12FCA};
var \u{12FCB};
var \u{12FCC};
var \u{12FCD};
var \u{12FCE};
var \u{12FCF};
var \u{12FD0};
var \u{12FD1};
var \u{12FD2};
var \u{12FD3};
var \u{12FD4};
var \u{12FD5};
var \u{12FD6};
var \u{12FD7};
var \u{12FD8};
var \u{12FD9};
var \u{12FDA};
var \u{12FDB};
var \u{12FDC};
var \u{12FDD};
var \u{12FDE};
var \u{12FDF};
var \u{12FE0};
var \u{12FE1};
var \u{12FE2};
var \u{12FE3};
var \u{12FE4};
var \u{12FE5};
var \u{12FE6};
var \u{12FE7};
var \u{12FE8};
var \u{12FE9};
var \u{12FEA};
var \u{12FEB};
var \u{12FEC};
var \u{12FED};
var \u{12FEE};
var \u{12FEF};
var \u{12FF0};
var \u{16A70};
var \u{16A71};
var \u{16A72};
var \u{16A73};
var \u{16A74};
var \u{16A75};
var \u{16A76};
var \u{16A77};
var \u{16A78};
var \u{16A79};
var \u{16A7A};
var \u{16A7B};
var \u{16A7C};
var \u{16A7D};
var \u{16A7E};
var \u{16A7F};
var \u{16A80};
var \u{16A81};
var \u{16A82};
var \u{16A83};
var \u{16A84};
var \u{16A85};
var \u{16A86};
var \u{16A87};
var \u{16A88};
var \u{16A89};
var \u{16A8A};
var \u{16A8B};
var \u{16A8C};
var \u{16A8D};
var \u{16A8E};
var \u{16A8F};
var \u{16A90};
var \u{16A91};
var \u{16A92};
var \u{16A93};
var \u{16A94};
var \u{16A95};
var \u{16A96};
var \u{16A97};
var \u{16A98};
var \u{16A99};
var \u{16A9A};
var \u{16A9B};
var \u{16A9C};
var \u{16A9D};
var \u{16A9E};
var \u{16A9F};
var \u{16AA0};
var \u{16AA1};
var \u{16AA2};
var \u{16AA3};
var \u{16AA4};
var \u{16AA5};
var \u{16AA6};
var \u{16AA7};
var \u{16AA8};
var \u{16AA9};
var \u{16AAA};
var \u{16AAB};
var \u{16AAC};
var \u{16AAD};
var \u{16AAE};
var \u{16AAF};
var \u{16AB0};
var \u{16AB1};
var \u{16AB2};
var \u{16AB3};
var \u{16AB4};
var \u{16AB5};
var \u{16AB6};
var \u{16AB7};
var \u{16AB8};
var \u{16AB9};
var \u{16ABA};
var \u{16ABB};
var \u{16ABC};
var \u{16ABD};
var \u{16ABE};
var \u{1AFF0};
var \u{1AFF1};
var \u{1AFF2};
var \u{1AFF3};
var \u{1AFF5};
var \u{1AFF6};
var \u{1AFF7};
var \u{1AFF8};
var \u{1AFF9};
var \u{1AFFA};
var \u{1AFFB};
var \u{1AFFD};
var \u{1AFFE};
var \u{1B11F};
var \u{1B120};
var \u{1B121};
var \u{1B122};
var \u{1DF00};
var \u{1DF01};
var \u{1DF02};
var \u{1DF03};
var \u{1DF04};
var \u{1DF05};
var \u{1DF06};
var \u{1DF07};
var \u{1DF08};
var \u{1DF09};
var \u{1DF0A};
var \u{1DF0B};
var \u{1DF0C};
var \u{1DF0D};
var \u{1DF0E};
var \u{1DF0F};
var \u{1DF10};
var \u{1DF11};
var \u{1DF12};
var \u{1DF13};
var \u{1DF14};
var \u{1DF15};
var \u{1DF16};
var \u{1DF17};
var \u{1DF18};
var \u{1DF19};
var \u{1DF1A};
var \u{1DF1B};
var \u{1DF1C};
var \u{1DF1D};
var \u{1DF1E};
var \u{1E290};
var \u{1E291};
var \u{1E292};
var \u{1E293};
var \u{1E294};
var \u{1E295};
var \u{1E296};
var \u{1E297};
var \u{1E298};
var \u{1E299};
var \u{1E29A};
var \u{1E29B};
var \u{1E29C};
var \u{1E29D};
var \u{1E29E};
var \u{1E29F};
var \u{1E2A0};
var \u{1E2A1};
var \u{1E2A2};
var \u{1E2A3};
var \u{1E2A4};
var \u{1E2A5};
var \u{1E2A6};
var \u{1E2A7};
var \u{1E2A8};
var \u{1E2A9};
var \u{1E2AA};
var \u{1E2AB};
var \u{1E2AC};
var \u{1E2AD};
var \u{1E7E0};
var \u{1E7E1};
var \u{1E7E2};
var \u{1E7E3};
var \u{1E7E4};
var \u{1E7E5};
var \u{1E7E6};
var \u{1E7E8};
var \u{1E7E9};
var \u{1E7EA};
var \u{1E7EB};
var \u{1E7ED};
var \u{1E7EE};
var \u{1E7F0};
var \u{1E7F1};
var \u{1E7F2};
var \u{1E7F3};
var \u{1E7F4};
var \u{1E7F5};
var \u{1E7F6};
var \u{1E7F7};
var \u{1E7F8};
var \u{1E7F9};
var \u{1E7FA};
var \u{1E7FB};
var \u{1E7FC};
var \u{1E7FD};
var \u{1E7FE};
var \u{2A6DE};
var \u{2A6DF};
var \u{2B735};
var \u{2B736};
var \u{2B737};
var \u{2B738};

reportCompare(0, 0);
