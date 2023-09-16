// |reftest| shell-option(--enable-well-formed-unicode-strings) skip-if(!String.prototype.isWellFormed||!xulRuntime.shell) -- String.prototype.isWellFormed is not enabled unconditionally, requires shell-options
// Copyright (C) 2022 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.iswellformed
description: >
  String.prototype.isWellFormed.length value and descriptor.
info: |
  String.prototype.isWellFormed( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [String.prototype.isWellFormed]
---*/

verifyProperty(String.prototype.isWellFormed, 'length', {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});

reportCompare(0, 0);
