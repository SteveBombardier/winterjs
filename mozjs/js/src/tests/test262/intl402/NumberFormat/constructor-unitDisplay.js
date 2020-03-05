// |reftest| skip-if(release_or_beta) -- Intl.NumberFormat-unified is not released yet
// Copyright 2019 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializenumberformat
description: Checks handling of the compactDisplay option to the NumberFormat constructor.
info: |
    InitializeNumberFormat ( numberFormat, locales, options )

    23. Let signDisplay be ? GetOption(options, "signDisplay", "string", « "auto", "never", "always", "exceptZero" », "auto").
    24. Set numberFormat.[[SignDisplay]] to signDisplay.

features: [Intl.NumberFormat-unified]
---*/

const values = [
  [undefined, "short"],
  ["short"],
  ["narrow"],
  ["long"],
];

for (const [value, expected = value] of values) {
  const nf = new Intl.NumberFormat([], {
    style: "unit",
    unitDisplay: value,
    unit: "hour",
  });
  const resolvedOptions = nf.resolvedOptions();
  assert.sameValue("unitDisplay" in resolvedOptions, true);
  assert.sameValue(resolvedOptions.unitDisplay, expected);
}

reportCompare(0, 0);