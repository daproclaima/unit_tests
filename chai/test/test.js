var assert = require('chai').assert;    // Using Assert style
var index = require('../SRC/index');
describe('index', function() {

  describe('#sum', function() {
    it('sum of 2 and 2 is expected to return 4', function() {
      assert.equal(index.sum(2,2),4);
    })
  });

  describe('#substract', function() {
    it('substraction of 2 and 2 is expected to return 0', function() {
      assert.equal(index.substract(2,2),0);
    })
  });

  describe('#multiply', function() {
    it('multiplication of 3 and 3 is expected to return 9', function() {
      assert.equal(index.multiply(3,3),9);
    })
  });

  describe('#divide', function() {
    it('division of 10 per 5 is expected to return 2', function() {
      assert.equal(index.divide(10,5),2);
    })
  });

  describe('#fibonacci', function() {
    it('fibonacci of 1 is expected to return 1', function() {
      assert.equal(index.fibonacci(1),1);
    });
    it('fibonacci of 2 is expected to return 1', function() {
      assert.equal(index.fibonacci(2),1);
    });
    it('fibonacci of 3 is expected to return 2', function() {
      assert.equal(index.fibonacci(3),2);
    });
  });
});
