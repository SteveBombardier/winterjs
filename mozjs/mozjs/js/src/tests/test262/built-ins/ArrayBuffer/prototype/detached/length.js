// |reftest| skip -- arraybuffer-transfer is not supported
// Copyright (C) 2023 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-arraybuffer.prototype.detached
description: >
  get ArrayBuffer.prototype.detached.length is 0.
info: |
  get ArrayBuffer.prototype.detached

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, has a length
    property whose value is an integer. Unless otherwise specified, this
    value is equal to the largest number of named arguments shown in the
    subclause headings for the function description, including optional
    parameters. However, rest parameters shown using the form “...name”
    are not included in the default argument count.

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.

includes: [propertyHelper.js]
features: [ArrayBuffer, arraybuffer-transfer]
---*/

var desc = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'detached');

verifyProperty(desc.get, 'length', {
  value: 0,
  enumerable: false,
  writable: false,
  configurable: true
});

reportCompare(0, 0);
