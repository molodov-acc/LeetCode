/**
 * Необходимо написать функцию которая склеивает строки через разделитель
 */
// полностью моё решение)))
function strjoin(sep, ...args) {
  return [...args].reduce((str, char, index) => {
    if (index !== args.length - 1) {
      str += char + sep;
    } else {
      str += char;
    }

    return str;
  }, "");
}

// function strjoin1(sep, ...args) {       // это решение из видео, его засчитали
//   return args.join(sep);
// }
// function strjoin2(sep) {                 // это решение из видео, его засчитали
//   return new Array(arguments).join(sep);
// }

console.log(strjoin("-", "a", "b", "c", "d")); // a-b-c-d
console.log(strjoin1(".", "a", "b", "c", "d")); // a.b.c.d
console.log(strjoin2(".", "a", "b", "c", "d")); // a.b.c.d
