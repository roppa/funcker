function curry(fn, ...args) {

  let length = fn.length;

  return (...arg) => {
    let allArgs = args.concat(arg.slice(0, 1));
    if (allArgs.length === length) {
      return fn.apply(this, allArgs);
    } else {
      return curry.apply(this, [fn].concat(allArgs));
    }
  };

};

module.exports = curry;
