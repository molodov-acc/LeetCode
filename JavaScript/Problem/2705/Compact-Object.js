/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj
      .map((item) => compactObject(item))
      .filter((item) => Boolean(item));
  }
  if (typeof obj === "object" && obj != null) {
    return Object.keys(obj).reduce((acc, cur) => {
      if (obj[cur]) {
        acc[cur] = compactObject(obj[cur]);
      }
      return acc;
    }, {});
  }

  return obj;
};
