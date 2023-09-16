// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth
description: >
  A Temporal.Calendar instance passed to new PlainYearMonth() does not have
  its 'calendar' property observably checked
features: [Temporal]
---*/

const arg = new Temporal.Calendar("iso8601");
Object.defineProperty(arg, "calendar", {
  get() {
    throw new Test262Error("calendar.calendar should not be accessed");
  },
});

new Temporal.PlainYearMonth(2000, 5, arg, 1);
new Temporal.PlainYearMonth(2000, 5, { calendar: arg }, 1);

reportCompare(0, 0);
