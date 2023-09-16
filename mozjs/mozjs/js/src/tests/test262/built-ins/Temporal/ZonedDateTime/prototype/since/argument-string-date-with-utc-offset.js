// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: UTC offset not valid with format that does not include a time
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const timeZone = new Temporal.TimeZone("UTC");
const instance = new Temporal.ZonedDateTime(0n, timeZone);

const validStrings = [
  "1970-01-01T00Z[UTC]",
  "1970-01-01T00Z[!UTC]",
  "1970-01-01T00+00:00[UTC]",
  "1970-01-01T00+00:00[!UTC]",
];

for (const arg of validStrings) {
  const result = instance.since(arg);

  TemporalHelpers.assertDuration(
    result,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    `"${arg}" is a valid UTC offset with time for ZonedDateTime`
  );
}

const invalidStrings = [
  "2022-09-15Z[UTC]",
  "2022-09-15Z[Europe/Vienna]",
  "2022-09-15+00:00[UTC]",
  "2022-09-15-02:30[America/St_Johns]",
];

for (const arg of invalidStrings) {
  assert.throws(
    RangeError,
    () => instance.since(arg),
    `"${arg}" UTC offset without time is not valid for ZonedDateTime`
  );
}

reportCompare(0, 0);
