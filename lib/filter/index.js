const filter = (cb, array) => {
  const results = [];
  array.forEach((item) => {
    if (cb(item)) {
      results.push(item);
    }
  });

  return results;
};

module.exports = filter;
