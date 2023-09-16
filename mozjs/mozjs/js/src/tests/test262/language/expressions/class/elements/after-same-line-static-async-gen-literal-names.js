// |reftest| async
// This file was procedurally generated from the following sources:
// - src/class-elements/literal-names.case
// - src/class-elements/productions/cls-expr-after-same-line-static-async-gen.template
/*---
description: Literal property names (field definitions after a static async generator in the same line)
esid: prod-FieldDefinition
features: [class-fields-public, class, async-iteration]
flags: [generated, async]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PropertyName

---*/
const fn = function() {}



var C = class {
  static async *m() { return 42; } a; b = 42;
  c = fn;
  
}

var c = new C();

assert(
  !Object.prototype.hasOwnProperty.call(c, "m"),
  "m doesn't appear as an own property on the C instance"
);
assert(
  !Object.prototype.hasOwnProperty.call(C.prototype, "m"),
  "m doesn't appear as an own property on the C prototype"
);

verifyProperty(C, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
}, {restore: true});

C.m().next().then(function(v) {
  assert.sameValue(v.value, 42);
  assert.sameValue(v.done, true);

  function assertions() {
    // Cover $DONE handler for async cases.
    function $DONE(error) {
      if (error) {
        throw new Test262Error('Test262:AsyncTestFailure')
      }
    }
    assert(
      !Object.prototype.hasOwnProperty.call(C.prototype, "a"),
      "a doesn't appear as an own property on C prototype"
    );
    assert(
      !Object.prototype.hasOwnProperty.call(C, "a"),
      "a doesn't appear as an own property on C constructor"
    );

    verifyProperty(c, "a", {
      value: undefined,
      enumerable: true,
      writable: true,
      configurable: true
    });

    assert(
      !Object.prototype.hasOwnProperty.call(C.prototype, "b"),
      "b doesn't appear as an own property on C prototype"
    );
    assert(
      !Object.prototype.hasOwnProperty.call(C, "b"),
      "b doesn't appear as an own property on C constructor"
    );

    verifyProperty(c, "b", {
      value: 42,
      enumerable: true,
      writable: true,
      configurable: true
    });

    assert(
      !Object.prototype.hasOwnProperty.call(C.prototype, "c"),
      "c doesn't appear as an own property on C prototype"
    );
    assert(
      !Object.prototype.hasOwnProperty.call(C, "c"),
      "c doesn't appear as an own property on C constructor"
    );

    verifyProperty(c, "c", {
      value: fn,
      enumerable: true,
      writable: true,
      configurable: true
    });

  }

  return Promise.resolve(assertions());
}).then($DONE, $DONE);
