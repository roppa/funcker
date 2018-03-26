const curry = require('../curry');

const filter = curry((cb, array) => array.filter(cb));

module.exports = filter;
