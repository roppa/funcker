const curry = require('../curry');

module.exports = curry((array, value) =>
  array.reverse().reduce((accumulator, func) =>
    func(accumulator), value));
