var fancify = require(process.argv[2]);
var tape = require('tape');

tape('Fancify strings', (test) => {
	// regular fancify
    test.deepEqual(fancify("Hello"), "~*~Hello~*~", "Did Not Match!");
    // caps lock fancify
    test.deepEqual(fancify("Hello", true), "~*~HELLO~*~", "Did Not Match!");
    // set character fancify
    test.deepEqual(fancify("Hello", false, '!'), "~!~Hello~!~", "Did Not Match!");    
    // set character fancify
    test.deepEqual(fancify("Hello", true, '!'), "~!~HELLO~!~", "Did Not Match!");    
    test.end()
})