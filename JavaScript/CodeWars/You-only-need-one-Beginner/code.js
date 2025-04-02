function check(a, x) {
  //return a.includes(x)
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) return true;
  }
  return false;
}
