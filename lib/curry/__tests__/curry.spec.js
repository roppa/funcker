const test = require('tape');
const curry = require('..');

test('Curry function', (assert) => {
  assert.equals(typeof curry, 'function', 'should exist');
  assert.end();
});

test('Calling curry with no parameters', (assert) => {
  assert.equals(typeof curry(() => {}), 'function', 'should return a function');
  assert.end();
});

test('Currying a function with one parameter', (assert) => {
  const testCurry = curry(arg => arg);
  assert.equals(testCurry('test'), 'test', 'should return test');
  assert.end();
});

test('Currying a function with two parameters', (assert) => {
  const testCurry = curry((a, b) => a + b);
  assert.equals(testCurry('a')('b'), 'ab', 'should return ab');
  assert.end();
});

test('Currying a function with three parameters', (assert) => {
  const testCurry = curry((a, b, c) => a + b + c);
  const testCurry2 = testCurry('a')('b');
  assert.equals(testCurry('a')('b')('c'), 'abc', 'should return abc');
  assert.equals(testCurry2('d'), 'abd', 'should return abd');
  assert.end();
});

test('Currying a function with multiple arguments', (assert) => {
  const testFunction = (a, b, c, d) => a + b + c + d;
  const testCurry = curry(testFunction);
  assert.equals(testCurry('t')('e')('s')('t'), 'test', 'should return test');
  assert.end();
});

test('Currying a function with multiple arguments', (assert) => {
  const testFunction = (a, b, c, d) => a + b + c + d;
  const testCurry = curry(testFunction, 't', 'e', 's');
  assert.equals(testCurry('t'), 'test', 'should return test');
  assert.end();
});
