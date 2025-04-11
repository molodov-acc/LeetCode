/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function join(arr1, arr2) {
  const map = {};

  arr1.forEach((item) => (map[item.id] = item));

  arr2.forEach((item, i) => {
    if (map[item.id]) {
      map[item.id] = { ...map[item.id], ...item };
    } else {
      map[item.id] = item;
    }
  });

  return Object.values(map);
}

//arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
//arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
//Output: [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }];
