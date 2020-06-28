const index = require('../src/index');
describe('index', function () {

  describe('sum', function () {
    test('adds 1 + 2 to equal 3', () => {
      expect(index.sum(1, 2)).toBe(3);
    });
  });

  describe('substract', function () {
    test('substract 3 - 1 to equal 2', () => {
      expect(index.substract(3, 1)).toBe(2);
    });
  });

  describe('multiply', function () {
    test('multiply 3 * 2 to equal 6', () => {
      expect(index.multiply(3, 2)).toBe(6);
    });
  });

  describe('divide', function () {
    test('divide 6 / 3 to equal 2', () => {
      expect(index.divide(6, 3)).toBe(2);
    });
  });

  describe('fibonacci', function () {
    test('fibonacci with 1 to equal 1', () => {
      expect(index.fibonacci(1)).toBe(1);
    });
    test('fibonacci with 2 to equal 1', () => {
      expect(index.fibonacci(2)).toBe(1);
    });
    test('fibonacci with 3 to equal 2', () => {
      expect(index.fibonacci(3)).toBe(2);
    });
  });
  describe('recursiveFactorial', function () {
    test('recursiveFactorial with 3 to equal 6', () => {
      expect(index.recursiveFactorial(3)).toBe(6);
    });
  });

});
