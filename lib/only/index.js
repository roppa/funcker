const curry = require('../curry');

module.exports = curry((str, obj) => {
  const result = {};
  str.split(' ').forEach((value) => {
    result[value] = obj[value];
  });
  return result;
});
