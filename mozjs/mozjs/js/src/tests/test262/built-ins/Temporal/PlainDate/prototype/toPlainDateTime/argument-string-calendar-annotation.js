// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.toplaindatetime
description: Various forms of calendar annotation; critical flag has no effect
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const tests = [
  ["12:34:56.987654321[u-ca=iso8601]", "without time zone"],
  ["12:34:56.987654321[UTC][u-ca=iso8601]", "with time zone"],
  ["12:34:56.987654321[!u-ca=iso8601]", "with ! and no time zone"],
  ["12:34:56.987654321[UTC][!u-ca=iso8601]", "with ! and time zone"],
  ["T12:34:56.987654321[u-ca=iso8601]", "with T and no time zone"],
  ["T12:34:56.987654321[UTC][u-ca=iso8601]", "with T and time zone"],
  ["T12:34:56.987654321[!u-ca=iso8601]", "with T, !, and no time zone"],
  ["T12:34:56.987654321[UTC][!u-ca=iso8601]", "with T, !, and time zone"],
  ["1970-01-01T12:34:56.987654321[u-ca=iso8601]", "with date and no time zone"],
  ["1970-01-01T12:34:56.987654321[UTC][u-ca=iso8601]", "with date and time zone"],
  ["1970-01-01T12:34:56.987654321[!u-ca=iso8601]", "with !, date, and no time zone"],
  ["1970-01-01T12:34:56.987654321[UTC][!u-ca=iso8601]", "with !, date, and time zone"],
  ["1970-01-01T12:34:56.987654321[u-ca=iso8601][u-ca=discord]", "second annotation ignored"],
  ["1970-01-01T12:34:56.987654321[u-ca=iso8601][!u-ca=discord]", "second annotation ignored even with !"],
];

const instance = new Temporal.PlainDate(2000, 5, 2);

tests.forEach(([arg, description]) => {
  const result = instance.toPlainDateTime(arg);

  TemporalHelpers.assertPlainDateTime(
    result,
    2000, 5, "M05", 2, 12, 34, 56, 987, 654, 321,
    `calendar annotation (${description})`
  );
});

reportCompare(0, 0);
