const curry = require('../curry');

module.exports = curry((str, obj) => str.split(' ')
  .reduce((accumulator, key) => ({
    ...accumulator,
    [key]: obj[key],
  }), {}));
