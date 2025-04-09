const inputArray = [110, 100020100, 2001001, 100000010000, 1002001];

// здесь тоже про map сразу подумал, но не дошло решение вот так с ключом сделать
function digit(arr) {
  const map = arr.reduce((acc, cur) => {
    const key = cur
      .toString()
      .split("")
      .filter((char) => char !== "0")
      .sort()
      .join("");

    acc[key] = acc[key] ? [...acc[key], cur] : [cur];

    return acc;
  }, {});

  return Object.values(map);
}

console.log(digit(inputArray));
