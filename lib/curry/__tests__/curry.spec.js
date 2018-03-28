const curry = require('..');

describe('Curry', () => {
  test('Calling curry with no parameters', () => {
    expect(typeof curry(() => {})).toEqual('function', 'should return a function');
  });

  test('Currying a function with one parameter', () => {
    const testCurry = curry(arg => arg);
    expect(testCurry('test')).toEqual('test', 'should return test');
  });

  test('Currying a function with two parameters', () => {
    const testCurry = curry((a, b) => a + b);
    expect(testCurry('a')('b')).toEqual('ab', 'should return ab');
  });

  test('Currying a function with three parameters', () => {
    const testCurry = curry((a, b, c) => a + b + c);
    const testCurry2 = testCurry('a')('b');
    expect(testCurry('a')('b')('c')).toEqual('abc', 'should return abc');
    expect(testCurry2('d')).toEqual('abd', 'should return abd');
  });

  test('Currying a function with multiple arguments', () => {
    const testFunction = (a, b, c, d) => a + b + c + d;
    const testCurry = curry(testFunction);
    expect(testCurry('t')('e')('s')('t')).toEqual('test', 'should return test');
  });

  test('Currying a function with multiple arguments', () => {
    const testFunction = (a, b, c, d) => a + b + c + d;
    const testCurry = curry(testFunction, 't', 'e', 's');
    expect(testCurry('t')).toEqual('test', 'should return test');
  });
});
