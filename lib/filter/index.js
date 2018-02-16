const curry = require('../curry');

const filter = curry((cb, array) => {
  const results = [];
  array.forEach((item) => {
    if (cb(item)) {
      results.push(item);
    }
  });

  return results;
});

module.exports = filter;
