// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.dateuntil
description: UTC offset not valid with format that does not include a time
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const instance = new Temporal.Calendar("iso8601");

const validStrings = [
  "2000-05-02T00+00:00",
  "2000-05-02T00+00:00[UTC]",
  "2000-05-02T00+00:00[!UTC]",
  "2000-05-02T00-02:30[America/St_Johns]",
];

for (const arg of validStrings) {
  TemporalHelpers.assertDuration(
    instance.dateUntil(arg, arg),
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    `"${arg}" is a valid UTC offset with time for PlainDate`
  );
}

const invalidStrings = [
  "2022-09-15Z",
  "2022-09-15Z[UTC]",
  "2022-09-15Z[Europe/Vienna]",
  "2022-09-15+00:00",
  "2022-09-15+00:00[UTC]",
  "2022-09-15-02:30",
  "2022-09-15-02:30[America/St_Johns]",
];

for (const arg of invalidStrings) {
  assert.throws(
    RangeError,
    () => instance.dateUntil(arg, new Temporal.PlainDate(1977, 11, 19)),
    `"${arg}" UTC offset without time is not valid for PlainDate (first argument)`
  );
  assert.throws(
    RangeError,
    () => instance.dateUntil(new Temporal.PlainDate(1977, 11, 19), arg),
    `"${arg}" UTC offset without time is not valid for PlainDate (second argument)`
  );
}

reportCompare(0, 0);
