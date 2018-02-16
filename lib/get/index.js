const curry = require('../curry');

module.exports = curry((property, object) => object[property]);
