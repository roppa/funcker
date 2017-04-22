const filter = (cb, array) => {
  results = [];
  array.forEach((item) => {
    if (cb(item)) {
      results.push(item);
    }
  });

  return results;
};

module.exports = filter;
