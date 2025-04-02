function transposeTwoStrings(array) {
  let [str1, str2] = array;
  let maxLength = Math.max(str1.length, str2.length);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    let char1 = str1[i] || " ";
    let char2 = str2[i] || " ";
    result.push(`${char1} ${char2}`);
  }

  return result.join("\n");
}
