// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.tostring
description: RangeError thrown when roundingMode option not one of the allowed string values
features: [Temporal]
---*/

const duration = new Temporal.Duration(0, 0, 0, 0, 12, 34, 56, 123, 987, 500);
for (const roundingMode of ["other string", "cile", "CEIL", "ce\u0131l", "auto", "halfexpand", "floor\0"]) {
  assert.throws(RangeError, () => duration.toString({ smallestUnit: "microsecond", roundingMode }));
}

reportCompare(0, 0);
