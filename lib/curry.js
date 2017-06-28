function curry(fn, ...args) {
  const length = fn.length;
  return (...arg) => {
    const allArgs = args.concat(arg.slice(0, 1));
    if (allArgs.length === length) {
      return fn.apply(this, allArgs);
    }
    return curry.apply(this, [fn].concat(allArgs));
  };
}

module.exports = curry;
