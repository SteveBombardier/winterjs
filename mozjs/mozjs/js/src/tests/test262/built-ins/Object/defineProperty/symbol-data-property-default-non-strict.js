// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.4
description: >
    Symbol used as property for property definition
flags: [noStrict]
features: [Symbol]
includes: [propertyHelper.js]
---*/
var sym = Symbol();
var obj = {};


Object.defineProperty(obj, sym, {
  value: 1,
});

assert.sameValue(sym in obj, true, "The result of `sym in obj` is `true`");
verifyProperty(obj, sym, {
  value: 1,
  configurable: false,
  writable: false,
  enumerable: false,
});

assert.sameValue(
  Object.prototype.propertyIsEnumerable.call(obj, sym),
  false,
  "`Object.prototype.propertyIsEnumerable.call(obj, sym)` returns `false`"
);

assert.sameValue(delete obj[sym], false, "The result of `delete obj[sym]` is `false`");

assert.notSameValue(
  Object.getOwnPropertyDescriptor(obj, sym),
  undefined,
  "`Object.getOwnPropertyDescriptor(obj, sym)` does not return `undefined`"
);

obj[sym] = 2;

assert.sameValue(obj[sym], 1, "The value of `obj[sym]` is `1`");

reportCompare(0, 0);
