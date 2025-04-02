var reduce = function (nums, fn, init) {
  let acc = init;
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }
  return acc;
};

// const nums = [1, 2, 3, 4];
// fn = function sum(accum, curr) {
//   return accum + curr;
// };
// const init = 0;

// console.log(reduce(nums, fn, init));
