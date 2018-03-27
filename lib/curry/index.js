function curry(fn, ...args) {
  const { length } = fn;
  return (...arg) => {
    const allArgs = args.concat(arg.slice(0, 1));
    if (allArgs.length === length) {
      return fn(...allArgs);
    }

    return curry(fn, ...allArgs);
  };
}

module.exports = curry;
