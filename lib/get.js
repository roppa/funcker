
function get(property) {
  return function (object) {
    return object[property];
  };
}

module.exports = get;
