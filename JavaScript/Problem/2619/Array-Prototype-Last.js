/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

//console.log([null, {}, 3].last());
//console.log([].last());
