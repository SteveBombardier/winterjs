// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: sec-names-and-keywords
description: |
  Test that Unicode v6.0.0 ID_Start characters are accepted as
  identifier start characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
---*/

var \u0526;
var \u0527;
var \u0620;
var \u0840;
var \u0841;
var \u0842;
var \u0843;
var \u0844;
var \u0845;
var \u0846;
var \u0847;
var \u0848;
var \u0849;
var \u084A;
var \u084B;
var \u084C;
var \u084D;
var \u084E;
var \u084F;
var \u0850;
var \u0851;
var \u0852;
var \u0853;
var \u0854;
var \u0855;
var \u0856;
var \u0857;
var \u0858;
var \u0973;
var \u0974;
var \u0975;
var \u0976;
var \u0977;
var \u0CF1;
var \u0CF2;
var \u0D29;
var \u0D3A;
var \u0D4E;
var \u0F8C;
var \u1BC0;
var \u1BC1;
var \u1BC2;
var \u1BC3;
var \u1BC4;
var \u1BC5;
var \u1BC6;
var \u1BC7;
var \u1BC8;
var \u1BC9;
var \u1BCA;
var \u1BCB;
var \u1BCC;
var \u1BCD;
var \u1BCE;
var \u1BCF;
var \u1BD0;
var \u1BD1;
var \u1BD2;
var \u1BD3;
var \u1BD4;
var \u1BD5;
var \u1BD6;
var \u1BD7;
var \u1BD8;
var \u1BD9;
var \u1BDA;
var \u1BDB;
var \u1BDC;
var \u1BDD;
var \u1BDE;
var \u1BDF;
var \u1BE0;
var \u1BE1;
var \u1BE2;
var \u1BE3;
var \u1BE4;
var \u1BE5;
var \u2095;
var \u2096;
var \u2097;
var \u2098;
var \u2099;
var \u209A;
var \u209B;
var \u209C;
var \u31B8;
var \u31B9;
var \u31BA;
var \uA660;
var \uA661;
var \uA78D;
var \uA78E;
var \uA790;
var \uA791;
var \uA7A0;
var \uA7A1;
var \uA7A2;
var \uA7A3;
var \uA7A4;
var \uA7A5;
var \uA7A6;
var \uA7A7;
var \uA7A8;
var \uA7A9;
var \uA7FA;
var \uAB01;
var \uAB02;
var \uAB03;
var \uAB04;
var \uAB05;
var \uAB06;
var \uAB09;
var \uAB0A;
var \uAB0B;
var \uAB0C;
var \uAB0D;
var \uAB0E;
var \uAB11;
var \uAB12;
var \uAB13;
var \uAB14;
var \uAB15;
var \uAB16;
var \uAB20;
var \uAB21;
var \uAB22;
var \uAB23;
var \uAB24;
var \uAB25;
var \uAB26;
var \uAB28;
var \uAB29;
var \uAB2A;
var \uAB2B;
var \uAB2C;
var \uAB2D;
var \uAB2E;
var \u{11003};
var \u{11004};
var \u{11005};
var \u{11006};
var \u{11007};
var \u{11008};
var \u{11009};
var \u{1100A};
var \u{1100B};
var \u{1100C};
var \u{1100D};
var \u{1100E};
var \u{1100F};
var \u{11010};
var \u{11011};
var \u{11012};
var \u{11013};
var \u{11014};
var \u{11015};
var \u{11016};
var \u{11017};
var \u{11018};
var \u{11019};
var \u{1101A};
var \u{1101B};
var \u{1101C};
var \u{1101D};
var \u{1101E};
var \u{1101F};
var \u{11020};
var \u{11021};
var \u{11022};
var \u{11023};
var \u{11024};
var \u{11025};
var \u{11026};
var \u{11027};
var \u{11028};
var \u{11029};
var \u{1102A};
var \u{1102B};
var \u{1102C};
var \u{1102D};
var \u{1102E};
var \u{1102F};
var \u{11030};
var \u{11031};
var \u{11032};
var \u{11033};
var \u{11034};
var \u{11035};
var \u{11036};
var \u{11037};
var \u{16800};
var \u{16801};
var \u{16802};
var \u{16803};
var \u{16804};
var \u{16805};
var \u{16806};
var \u{16807};
var \u{16808};
var \u{16809};
var \u{1680A};
var \u{1680B};
var \u{1680C};
var \u{1680D};
var \u{1680E};
var \u{1680F};
var \u{16810};
var \u{16811};
var \u{16812};
var \u{16813};
var \u{16814};
var \u{16815};
var \u{16816};
var \u{16817};
var \u{16818};
var \u{16819};
var \u{1681A};
var \u{1681B};
var \u{1681C};
var \u{1681D};
var \u{1681E};
var \u{1681F};
var \u{16820};
var \u{16821};
var \u{16822};
var \u{16823};
var \u{16824};
var \u{16825};
var \u{16826};
var \u{16827};
var \u{16828};
var \u{16829};
var \u{1682A};
var \u{1682B};
var \u{1682C};
var \u{1682D};
var \u{1682E};
var \u{1682F};
var \u{16830};
var \u{16831};
var \u{16832};
var \u{16833};
var \u{16834};
var \u{16835};
var \u{16836};
var \u{16837};
var \u{16838};
var \u{16839};
var \u{1683A};
var \u{1683B};
var \u{1683C};
var \u{1683D};
var \u{1683E};
var \u{1683F};
var \u{16840};
var \u{16841};
var \u{16842};
var \u{16843};
var \u{16844};
var \u{16845};
var \u{16846};
var \u{16847};
var \u{16848};
var \u{16849};
var \u{1684A};
var \u{1684B};
var \u{1684C};
var \u{1684D};
var \u{1684E};
var \u{1684F};
var \u{16850};
var \u{16851};
var \u{16852};
var \u{16853};
var \u{16854};
var \u{16855};
var \u{16856};
var \u{16857};
var \u{16858};
var \u{16859};
var \u{1685A};
var \u{1685B};
var \u{1685C};
var \u{1685D};
var \u{1685E};
var \u{1685F};
var \u{16860};
var \u{16861};
var \u{16862};
var \u{16863};
var \u{16864};
var \u{16865};
var \u{16866};
var \u{16867};
var \u{16868};
var \u{16869};
var \u{1686A};
var \u{1686B};
var \u{1686C};
var \u{1686D};
var \u{1686E};
var \u{1686F};
var \u{16870};
var \u{16871};
var \u{16872};
var \u{16873};
var \u{16874};
var \u{16875};
var \u{16876};
var \u{16877};
var \u{16878};
var \u{16879};
var \u{1687A};
var \u{1687B};
var \u{1687C};
var \u{1687D};
var \u{1687E};
var \u{1687F};
var \u{16880};
var \u{16881};
var \u{16882};
var \u{16883};
var \u{16884};
var \u{16885};
var \u{16886};
var \u{16887};
var \u{16888};
var \u{16889};
var \u{1688A};
var \u{1688B};
var \u{1688C};
var \u{1688D};
var \u{1688E};
var \u{1688F};
var \u{16890};
var \u{16891};
var \u{16892};
var \u{16893};
var \u{16894};
var \u{16895};
var \u{16896};
var \u{16897};
var \u{16898};
var \u{16899};
var \u{1689A};
var \u{1689B};
var \u{1689C};
var \u{1689D};
var \u{1689E};
var \u{1689F};
var \u{168A0};
var \u{168A1};
var \u{168A2};
var \u{168A3};
var \u{168A4};
var \u{168A5};
var \u{168A6};
var \u{168A7};
var \u{168A8};
var \u{168A9};
var \u{168AA};
var \u{168AB};
var \u{168AC};
var \u{168AD};
var \u{168AE};
var \u{168AF};
var \u{168B0};
var \u{168B1};
var \u{168B2};
var \u{168B3};
var \u{168B4};
var \u{168B5};
var \u{168B6};
var \u{168B7};
var \u{168B8};
var \u{168B9};
var \u{168BA};
var \u{168BB};
var \u{168BC};
var \u{168BD};
var \u{168BE};
var \u{168BF};
var \u{168C0};
var \u{168C1};
var \u{168C2};
var \u{168C3};
var \u{168C4};
var \u{168C5};
var \u{168C6};
var \u{168C7};
var \u{168C8};
var \u{168C9};
var \u{168CA};
var \u{168CB};
var \u{168CC};
var \u{168CD};
var \u{168CE};
var \u{168CF};
var \u{168D0};
var \u{168D1};
var \u{168D2};
var \u{168D3};
var \u{168D4};
var \u{168D5};
var \u{168D6};
var \u{168D7};
var \u{168D8};
var \u{168D9};
var \u{168DA};
var \u{168DB};
var \u{168DC};
var \u{168DD};
var \u{168DE};
var \u{168DF};
var \u{168E0};
var \u{168E1};
var \u{168E2};
var \u{168E3};
var \u{168E4};
var \u{168E5};
var \u{168E6};
var \u{168E7};
var \u{168E8};
var \u{168E9};
var \u{168EA};
var \u{168EB};
var \u{168EC};
var \u{168ED};
var \u{168EE};
var \u{168EF};
var \u{168F0};
var \u{168F1};
var \u{168F2};
var \u{168F3};
var \u{168F4};
var \u{168F5};
var \u{168F6};
var \u{168F7};
var \u{168F8};
var \u{168F9};
var \u{168FA};
var \u{168FB};
var \u{168FC};
var \u{168FD};
var \u{168FE};
var \u{168FF};
var \u{16900};
var \u{16901};
var \u{16902};
var \u{16903};
var \u{16904};
var \u{16905};
var \u{16906};
var \u{16907};
var \u{16908};
var \u{16909};
var \u{1690A};
var \u{1690B};
var \u{1690C};
var \u{1690D};
var \u{1690E};
var \u{1690F};
var \u{16910};
var \u{16911};
var \u{16912};
var \u{16913};
var \u{16914};
var \u{16915};
var \u{16916};
var \u{16917};
var \u{16918};
var \u{16919};
var \u{1691A};
var \u{1691B};
var \u{1691C};
var \u{1691D};
var \u{1691E};
var \u{1691F};
var \u{16920};
var \u{16921};
var \u{16922};
var \u{16923};
var \u{16924};
var \u{16925};
var \u{16926};
var \u{16927};
var \u{16928};
var \u{16929};
var \u{1692A};
var \u{1692B};
var \u{1692C};
var \u{1692D};
var \u{1692E};
var \u{1692F};
var \u{16930};
var \u{16931};
var \u{16932};
var \u{16933};
var \u{16934};
var \u{16935};
var \u{16936};
var \u{16937};
var \u{16938};
var \u{16939};
var \u{1693A};
var \u{1693B};
var \u{1693C};
var \u{1693D};
var \u{1693E};
var \u{1693F};
var \u{16940};
var \u{16941};
var \u{16942};
var \u{16943};
var \u{16944};
var \u{16945};
var \u{16946};
var \u{16947};
var \u{16948};
var \u{16949};
var \u{1694A};
var \u{1694B};
var \u{1694C};
var \u{1694D};
var \u{1694E};
var \u{1694F};
var \u{16950};
var \u{16951};
var \u{16952};
var \u{16953};
var \u{16954};
var \u{16955};
var \u{16956};
var \u{16957};
var \u{16958};
var \u{16959};
var \u{1695A};
var \u{1695B};
var \u{1695C};
var \u{1695D};
var \u{1695E};
var \u{1695F};
var \u{16960};
var \u{16961};
var \u{16962};
var \u{16963};
var \u{16964};
var \u{16965};
var \u{16966};
var \u{16967};
var \u{16968};
var \u{16969};
var \u{1696A};
var \u{1696B};
var \u{1696C};
var \u{1696D};
var \u{1696E};
var \u{1696F};
var \u{16970};
var \u{16971};
var \u{16972};
var \u{16973};
var \u{16974};
var \u{16975};
var \u{16976};
var \u{16977};
var \u{16978};
var \u{16979};
var \u{1697A};
var \u{1697B};
var \u{1697C};
var \u{1697D};
var \u{1697E};
var \u{1697F};
var \u{16980};
var \u{16981};
var \u{16982};
var \u{16983};
var \u{16984};
var \u{16985};
var \u{16986};
var \u{16987};
var \u{16988};
var \u{16989};
var \u{1698A};
var \u{1698B};
var \u{1698C};
var \u{1698D};
var \u{1698E};
var \u{1698F};
var \u{16990};
var \u{16991};
var \u{16992};
var \u{16993};
var \u{16994};
var \u{16995};
var \u{16996};
var \u{16997};
var \u{16998};
var \u{16999};
var \u{1699A};
var \u{1699B};
var \u{1699C};
var \u{1699D};
var \u{1699E};
var \u{1699F};
var \u{169A0};
var \u{169A1};
var \u{169A2};
var \u{169A3};
var \u{169A4};
var \u{169A5};
var \u{169A6};
var \u{169A7};
var \u{169A8};
var \u{169A9};
var \u{169AA};
var \u{169AB};
var \u{169AC};
var \u{169AD};
var \u{169AE};
var \u{169AF};
var \u{169B0};
var \u{169B1};
var \u{169B2};
var \u{169B3};
var \u{169B4};
var \u{169B5};
var \u{169B6};
var \u{169B7};
var \u{169B8};
var \u{169B9};
var \u{169BA};
var \u{169BB};
var \u{169BC};
var \u{169BD};
var \u{169BE};
var \u{169BF};
var \u{169C0};
var \u{169C1};
var \u{169C2};
var \u{169C3};
var \u{169C4};
var \u{169C5};
var \u{169C6};
var \u{169C7};
var \u{169C8};
var \u{169C9};
var \u{169CA};
var \u{169CB};
var \u{169CC};
var \u{169CD};
var \u{169CE};
var \u{169CF};
var \u{169D0};
var \u{169D1};
var \u{169D2};
var \u{169D3};
var \u{169D4};
var \u{169D5};
var \u{169D6};
var \u{169D7};
var \u{169D8};
var \u{169D9};
var \u{169DA};
var \u{169DB};
var \u{169DC};
var \u{169DD};
var \u{169DE};
var \u{169DF};
var \u{169E0};
var \u{169E1};
var \u{169E2};
var \u{169E3};
var \u{169E4};
var \u{169E5};
var \u{169E6};
var \u{169E7};
var \u{169E8};
var \u{169E9};
var \u{169EA};
var \u{169EB};
var \u{169EC};
var \u{169ED};
var \u{169EE};
var \u{169EF};
var \u{169F0};
var \u{169F1};
var \u{169F2};
var \u{169F3};
var \u{169F4};
var \u{169F5};
var \u{169F6};
var \u{169F7};
var \u{169F8};
var \u{169F9};
var \u{169FA};
var \u{169FB};
var \u{169FC};
var \u{169FD};
var \u{169FE};
var \u{169FF};
var \u{16A00};
var \u{16A01};
var \u{16A02};
var \u{16A03};
var \u{16A04};
var \u{16A05};
var \u{16A06};
var \u{16A07};
var \u{16A08};
var \u{16A09};
var \u{16A0A};
var \u{16A0B};
var \u{16A0C};
var \u{16A0D};
var \u{16A0E};
var \u{16A0F};
var \u{16A10};
var \u{16A11};
var \u{16A12};
var \u{16A13};
var \u{16A14};
var \u{16A15};
var \u{16A16};
var \u{16A17};
var \u{16A18};
var \u{16A19};
var \u{16A1A};
var \u{16A1B};
var \u{16A1C};
var \u{16A1D};
var \u{16A1E};
var \u{16A1F};
var \u{16A20};
var \u{16A21};
var \u{16A22};
var \u{16A23};
var \u{16A24};
var \u{16A25};
var \u{16A26};
var \u{16A27};
var \u{16A28};
var \u{16A29};
var \u{16A2A};
var \u{16A2B};
var \u{16A2C};
var \u{16A2D};
var \u{16A2E};
var \u{16A2F};
var \u{16A30};
var \u{16A31};
var \u{16A32};
var \u{16A33};
var \u{16A34};
var \u{16A35};
var \u{16A36};
var \u{16A37};
var \u{16A38};
var \u{1B000};
var \u{1B001};
var \u{2B740};
var \u{2B741};
var \u{2B742};
var \u{2B743};
var \u{2B744};
var \u{2B745};
var \u{2B746};
var \u{2B747};
var \u{2B748};
var \u{2B749};
var \u{2B74A};
var \u{2B74B};
var \u{2B74C};
var \u{2B74D};
var \u{2B74E};
var \u{2B74F};
var \u{2B750};
var \u{2B751};
var \u{2B752};
var \u{2B753};
var \u{2B754};
var \u{2B755};
var \u{2B756};
var \u{2B757};
var \u{2B758};
var \u{2B759};
var \u{2B75A};
var \u{2B75B};
var \u{2B75C};
var \u{2B75D};
var \u{2B75E};
var \u{2B75F};
var \u{2B760};
var \u{2B761};
var \u{2B762};
var \u{2B763};
var \u{2B764};
var \u{2B765};
var \u{2B766};
var \u{2B767};
var \u{2B768};
var \u{2B769};
var \u{2B76A};
var \u{2B76B};
var \u{2B76C};
var \u{2B76D};
var \u{2B76E};
var \u{2B76F};
var \u{2B770};
var \u{2B771};
var \u{2B772};
var \u{2B773};
var \u{2B774};
var \u{2B775};
var \u{2B776};
var \u{2B777};
var \u{2B778};
var \u{2B779};
var \u{2B77A};
var \u{2B77B};
var \u{2B77C};
var \u{2B77D};
var \u{2B77E};
var \u{2B77F};
var \u{2B780};
var \u{2B781};
var \u{2B782};
var \u{2B783};
var \u{2B784};
var \u{2B785};
var \u{2B786};
var \u{2B787};
var \u{2B788};
var \u{2B789};
var \u{2B78A};
var \u{2B78B};
var \u{2B78C};
var \u{2B78D};
var \u{2B78E};
var \u{2B78F};
var \u{2B790};
var \u{2B791};
var \u{2B792};
var \u{2B793};
var \u{2B794};
var \u{2B795};
var \u{2B796};
var \u{2B797};
var \u{2B798};
var \u{2B799};
var \u{2B79A};
var \u{2B79B};
var \u{2B79C};
var \u{2B79D};
var \u{2B79E};
var \u{2B79F};
var \u{2B7A0};
var \u{2B7A1};
var \u{2B7A2};
var \u{2B7A3};
var \u{2B7A4};
var \u{2B7A5};
var \u{2B7A6};
var \u{2B7A7};
var \u{2B7A8};
var \u{2B7A9};
var \u{2B7AA};
var \u{2B7AB};
var \u{2B7AC};
var \u{2B7AD};
var \u{2B7AE};
var \u{2B7AF};
var \u{2B7B0};
var \u{2B7B1};
var \u{2B7B2};
var \u{2B7B3};
var \u{2B7B4};
var \u{2B7B5};
var \u{2B7B6};
var \u{2B7B7};
var \u{2B7B8};
var \u{2B7B9};
var \u{2B7BA};
var \u{2B7BB};
var \u{2B7BC};
var \u{2B7BD};
var \u{2B7BE};
var \u{2B7BF};
var \u{2B7C0};
var \u{2B7C1};
var \u{2B7C2};
var \u{2B7C3};
var \u{2B7C4};
var \u{2B7C5};
var \u{2B7C6};
var \u{2B7C7};
var \u{2B7C8};
var \u{2B7C9};
var \u{2B7CA};
var \u{2B7CB};
var \u{2B7CC};
var \u{2B7CD};
var \u{2B7CE};
var \u{2B7CF};
var \u{2B7D0};
var \u{2B7D1};
var \u{2B7D2};
var \u{2B7D3};
var \u{2B7D4};
var \u{2B7D5};
var \u{2B7D6};
var \u{2B7D7};
var \u{2B7D8};
var \u{2B7D9};
var \u{2B7DA};
var \u{2B7DB};
var \u{2B7DC};
var \u{2B7DD};
var \u{2B7DE};
var \u{2B7DF};
var \u{2B7E0};
var \u{2B7E1};
var \u{2B7E2};
var \u{2B7E3};
var \u{2B7E4};
var \u{2B7E5};
var \u{2B7E6};
var \u{2B7E7};
var \u{2B7E8};
var \u{2B7E9};
var \u{2B7EA};
var \u{2B7EB};
var \u{2B7EC};
var \u{2B7ED};
var \u{2B7EE};
var \u{2B7EF};
var \u{2B7F0};
var \u{2B7F1};
var \u{2B7F2};
var \u{2B7F3};
var \u{2B7F4};
var \u{2B7F5};
var \u{2B7F6};
var \u{2B7F7};
var \u{2B7F8};
var \u{2B7F9};
var \u{2B7FA};
var \u{2B7FB};
var \u{2B7FC};
var \u{2B7FD};
var \u{2B7FE};
var \u{2B7FF};
var \u{2B800};
var \u{2B801};
var \u{2B802};
var \u{2B803};
var \u{2B804};
var \u{2B805};
var \u{2B806};
var \u{2B807};
var \u{2B808};
var \u{2B809};
var \u{2B80A};
var \u{2B80B};
var \u{2B80C};
var \u{2B80D};
var \u{2B80E};
var \u{2B80F};
var \u{2B810};
var \u{2B811};
var \u{2B812};
var \u{2B813};
var \u{2B814};
var \u{2B815};
var \u{2B816};
var \u{2B817};
var \u{2B818};
var \u{2B819};
var \u{2B81A};
var \u{2B81B};
var \u{2B81C};
var \u{2B81D};

reportCompare(0, 0);
