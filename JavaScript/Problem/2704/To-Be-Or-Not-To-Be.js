/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe(x) {
      if (x === val) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe(x) {
      if (x === val) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};

console.log(expect(5).toBe(4)); // true
console.log(expect(5).notToBe(5)); // throws "Equal");
