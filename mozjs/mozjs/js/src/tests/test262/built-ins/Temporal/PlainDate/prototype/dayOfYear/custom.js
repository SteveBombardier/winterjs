// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.plaindate.prototype.dayofyear
description: Custom calendar tests for dayOfYear().
includes: [compareArray.js]
features: [Temporal]
---*/

let calls = 0;
class CustomCalendar extends Temporal.Calendar {
  constructor() {
    super("iso8601");
  }
  dayOfYear(...args) {
    ++calls;
    assert.compareArray(args, [pd], "dayOfYear arguments");
    return 7;
  }
}

const calendar = new CustomCalendar();
const pd = new Temporal.PlainDate(1830, 8, 25, calendar);
const result = pd.dayOfYear;
assert.sameValue(result, 7, "result");
assert.sameValue(calls, 1, "calls");

reportCompare(0, 0);
