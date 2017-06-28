const test = require('tape').test;
const filter = require('../lib/filter');

const isOne = item => item === 1;
const isNotOne = item => item !== 1;
const isEven = item => item % 2 === 0;

test('Filter an empty array', (assert) => {
  assert.deepEquals(filter(() => {}, []), [], 'should return an empty array');
  assert.end();
});

test('Filter a single odd value', (assert) => {
  assert.deepEquals(filter(isOne, [1]), [1], 'should return [1]');
  assert.end();
});

test('Filter ever number that isn\'t 1 from list of 1, 2, 3', (assert) => {
  assert.deepEquals(filter(isNotOne, [1, 2, 3]), [2, 3], 'should return [2, 3]');
  assert.end();
});

test('Filter even numbers from [1, 2, 3, 4, 5]', (assert) => {
  assert.deepEquals(filter(isEven, [1, 2, 3, 4, 5]), [2, 4], 'should return [2, 4]');
  assert.end();
});
