var feedCat = require(process.argv[2]);
var tape = require('tape');

tape('Throw Error', (test) => {
    test.throws(feedCat.bind(null,'chocolate'));
    test.deepEqual(feedCat('anything'), 'yum', 'its not yummy');
    test.end();
})