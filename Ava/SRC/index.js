// index.js

module.exports = {

  sum: function (a, b) {
    return a + b;
  },

  substract: function (a, b) {
    return a - b;
  },


  multiply: function (a, b) {
    return a * b;
  },


  divide: function (a, b) {
    return a / b;
  },

  fibonacci: function (n) {
    if (n < 2) {
      return n;
    }
    return this.fibonacci(n - 2) + this.fibonacci(n - 1);
  }
};
