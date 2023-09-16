// |reftest| shell-option(--enable-change-array-by-copy) skip-if(!Array.prototype.with||!xulRuntime.shell) -- change-array-by-copy is not enabled unconditionally, requires shell-options
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSorted
description: >
  Array.prototype.toSorted ignores @@species
info: |
  Array.prototype.toSorted ( compareFn )

  ...
  8. Let A be ? ArrayCreate(𝔽(len)).
  ...
features: [change-array-by-copy]
---*/

var a = [];
a.constructor = {};
a.constructor[Symbol.species] = function () {}

assert.sameValue(Object.getPrototypeOf(a.toSorted()), Array.prototype);

var b = [];
Object.defineProperty(b, "constructor", {
  get() {
    throw new Test262Error("Should not get .constructor");
  }
});

b.toSorted();

reportCompare(0, 0);
