let chai = require('chai');
let assert = chai.assert;
let className = require('../className.js');
let addClass = className.addClass;
describe('className', function() {
  it('should add class to element', function() {

    var element = { className: '' };

    addClass(element, 'test-class');

    assert.equal(element.className, 'test-class');
  });

  it('should not add a class which already exists');
});

