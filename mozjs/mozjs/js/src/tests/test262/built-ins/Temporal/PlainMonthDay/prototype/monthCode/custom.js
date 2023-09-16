// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.plainmonthday.prototype.monthcode
description: Custom calendar tests for monthCode().
includes: [compareArray.js]
features: [Temporal]
---*/

let calls = 0;
class CustomCalendar extends Temporal.Calendar {
  constructor() {
    super("iso8601");
  }
  monthCode(...args) {
    ++calls;
    assert.compareArray(args, [instance], "monthCode arguments");
    return "M01";
  }
}

const calendar = new CustomCalendar();
const instance = new Temporal.PlainMonthDay(8, 25, calendar);
const result = instance.monthCode;
assert.sameValue(result, "M01", "result");
assert.sameValue(calls, 1, "calls");

reportCompare(0, 0);
