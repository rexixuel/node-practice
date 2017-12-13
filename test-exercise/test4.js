var repeatCallback = require(process.argv[2]);
var tape = require('tape');

tape('Callbacks', (test) => {
    test.plan(4)
    repeatCallback(4, () => {
    	test.pass('callback called');
    })
})