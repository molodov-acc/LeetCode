// здесь решил сам, но без проверки на символы, это уже подсмотрел
// на собесе считай не решил
function isPalindrom(str) {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    const first = str[left];
    const end = str[right];

    if (!(first.toLowerCase() !== first.toUpperCase())) {
      left += 1;
      continue;
    }
    if (!(end.toLowerCase() !== end.toUpperCase())) {
      right -= 1;
      continue;
    }
    if (!(first.toLowerCase() === end.toLowerCase())) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
}

console.log(isPalindrom("Казак"));
console.log(isPalindrom("А роза упала на лапу Азора"));
console.log(isPalindrom("Do geese see God"));
console.log(isPalindrom("Madam I`m Adam"));
