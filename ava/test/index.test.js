import test from 'ava';
var index = require("../src");
// test('foo', t => {
//   t.pass();
// });
//
// test('bar', async t => {
//   const bar = Promise.resolve('bar');
//   t.is(await bar, 'bar');
// });
test.todo('Check sum function');
test('check of sum with 2 + 2 equal to 4', t =>{
  t.is(index.sum(2,2), 4);
});

test.todo('Check substract function');
test('substraction of 2 - 2 equal to 0', t =>{
  t.is(index.substract(2,2), 0);
});

test.todo('Check multiply function');
test('multiply of 3 * 3 equal to 9', t =>{
  t.is(index.multiply(3,3), 9);
});

test.todo('Check divide function');
test('divide of 3 / 3 equal to 1', t =>{
  t.is(index.divide(3,3), 1);
});

test.todo('Check fibonacci function');
test('fibonacci of 1 equal to 1', t =>{
  t.is(index.fibonacci(1), 1);
});

test.todo('Check recursiveFactorial function');
test('recursiveFactorial of 3 equal to 6', t =>{
  t.is(index.recursiveFactorial(3), 6);
});



