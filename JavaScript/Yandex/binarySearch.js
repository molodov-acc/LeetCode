const array = [1, 2, 3, 4]; // 3 --> 2

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  // тоже тупил хранил mid вне цикла и вместо left + right делил arr.lenght на 2
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
}

console.log(binarySearch(array, 3));
