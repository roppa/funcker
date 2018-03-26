const curry = require('../curry');

module.exports = curry((str, obj) =>
  str.trim().split(' ').reduce((accumulator, value) =>
    Object.defineProperty(accumulator, value, {
      value: obj[value],
      writable: true,
      enumerable: true,
      configurable: true,
    }), {}));
