// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.tozoneddatetime
description: Time zone names are case insensitive
features: [Temporal]
---*/

const instance = new Temporal.PlainDateTime(2000, 5, 2); 

const timeZone = 'uTc';
const result = instance.toZonedDateTime(timeZone);
assert.sameValue(result.timeZone.id, 'UTC', `Time zone created from string "${timeZone}"`);

reportCompare(0, 0);
