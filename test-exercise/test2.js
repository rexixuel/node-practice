var isCoolNumber = require(process.argv[2]);
var assert = require('assert');

assert.ok(isCoolNumber(42), "It Failed");