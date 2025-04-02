var chunk = function (arr, size) {
  const res = [];

  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, size + i));
  }

  return res;
};

// console.log(chunk([1, 2, 3, 4, 5], 1)); // Output: [[1], [2], [3], [4], [5]];
// console.log(chunk([1, 9, 6, 3, 2], 3)); //Output: [ [1, 9, 6],  [3, 2]];
// console.log(chunk([8, 5, 3, 2, 6], 6)); // Output: [[8, 5, 3, 2, 6]];
