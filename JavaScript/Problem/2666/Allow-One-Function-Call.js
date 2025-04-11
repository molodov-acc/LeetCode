/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let counter = 0;
  return function (...args) {
    if (!counter) {
      counter += 1;
      return fn(...args);
    }

    return undefined;
  };
};
