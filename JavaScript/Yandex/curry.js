function sum(a, b, c) {
  return a + b + c;
}

// здесь if сам написал, а до логики в else не додумался
function curry(fn) {
  return function helper(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    //  else {
    //   return function (...nextArgs) {
    //     return helper(...args, ...nextArgs);
    //   };
    // }
  };
}

console.log(curry(sum)(1, 2, 3)); //6
console.log(curry(sum)(1, 2)(3)); //6
console.log(curry(sum)(1)(2, 3)); //6
