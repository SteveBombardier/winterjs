// |jit-test| skip-if: !('oomTest' in this)

a = evalcx("lazy")
oomTest(function() {
    a.b
})
