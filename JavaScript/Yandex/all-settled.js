// необходимо написать полифил Promise.allSettled

// тоже не знал, как подойти к решению
// крутился вокруг map и возврата нового промиса
// но обернуть вызов промисов в Promise.all и резолвить какждый даже близко не было такой идеи
function allSettled(arr) {
  return Promise.all(
    arr.map((item) =>
      Promise.resolve(item)
        .then((value) => ({ status: "fulfilled", value }))
        .catch((reason) => ({ status: "rejected", reason }))
    )
  );
}

allSettled([
  Promise.resolve(1),
  Promise.reject(2),
  3,
  new Promise((res) => {
    setTimeout(() => res(4), 1000);
  }),
]).then((result) => {
  console.log("__RESULT__", result); //result
  // {status:'fulfiled', value:1}
  // {status:'rejected', reason:2}
  // {status:'fulfiled', value:3}
  // {status:'fulfiled', value:4}
});
