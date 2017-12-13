var chai = require('chai');
var expect = chai.expect;
let askMom = require('../askMom.js');

describe('askMom', function() {
  it('should print before asking mom', function() {
    
    return askMom.then((result) => {
    	expect(result).to.equal('Hey friend, I have a new black LG phone');    	
    });

    // askMom.then((result) => {
    // 	expect(result).to.equal('Hey friend, I have a new blue LG phone');    	
    // }).then(done,done)
    
  	// assert.equal(message,'Hey friend, I have a new blue LG phone', 'What a failure to society.');
  });
});
