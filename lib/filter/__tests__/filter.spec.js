const filter = require('..');

const isOne = item => item === 1;
const isNotOne = item => item !== 1;
const isEven = item => item % 2 === 0;

describe('Filter', () => {
  test('an empty array', () => {
    expect(filter(() => {})([])).toEqual([], 'should return an empty array');
  });

  test('a single odd value', () => {
    expect(filter(isOne)([1])).toEqual([1], 'should return [1]');
  });

  test('ever number that isn\'t 1 from list of 1, 2, 3', () => {
    expect(filter(isNotOne)([1, 2, 3])).toEqual([2, 3], 'should return [2, 3]');
  });

  test('even numbers from [1, 2, 3, 4, 5]', () => {
    expect(filter(isEven)([1, 2, 3, 4, 5])).toEqual([2, 4], 'should return [2, 4]');
  });
});
