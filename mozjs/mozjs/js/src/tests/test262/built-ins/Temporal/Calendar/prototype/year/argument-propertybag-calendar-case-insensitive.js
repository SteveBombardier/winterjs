// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.year
description: The calendar name is case-insensitive
features: [Temporal]
---*/

const instance = new Temporal.Calendar("iso8601");

const calendar = "IsO8601";

let arg = { year: 1976, monthCode: "M11", day: 18, calendar };
const result1 = instance.year(arg);
assert.sameValue(result1, 1976, "Calendar is case-insensitive");

arg = { year: 1976, monthCode: "M11", day: 18, calendar: { calendar } };
const result2 = instance.year(arg);
assert.sameValue(result2, 1976, "Calendar is case-insensitive (nested property)");

reportCompare(0, 0);
