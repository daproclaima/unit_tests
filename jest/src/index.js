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
  },

  recursiveFactorial: function(n){
    let result = 1;
    for (let i = n; i > 1; i--) {
      // i = 3
      // i = 2
      result *= i;
      // 1 * 3
      // 3 * 2


    }
    // i = 1
    return result;
    // result = 6

  }
};
