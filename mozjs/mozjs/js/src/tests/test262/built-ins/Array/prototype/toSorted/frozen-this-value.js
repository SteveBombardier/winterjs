// |reftest| shell-option(--enable-change-array-by-copy) skip-if(!Array.prototype.with||!xulRuntime.shell) -- change-array-by-copy is not enabled unconditionally, requires shell-options
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSorted
description: >
  Array.prototype.toSorted works on frozen objects
features: [change-array-by-copy]
includes: [compareArray.js]
---*/

var arr = Object.freeze([2, 0, 1]);
var result = arr.toSorted();
assert.compareArray(result, [0, 1, 2]);

var arrayLike = Object.freeze({ length: 3, 0: 2, 1: 0, 2: 1 });
result = Array.prototype.toSorted.call(arrayLike);
assert.compareArray(result, [0, 1, 2]);

reportCompare(0, 0);
