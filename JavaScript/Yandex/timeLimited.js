/*
Дана асинхронная функция fn и время t в миллисекундах, нужно вернуть новую версию этой функции, 
выполнение которой ограничено заданным временем. Функция fn принимает аргументы, 
переданные в эту новую функцию.

Возвращаемая функция работает по следующим правилам:

- если fn выполнится за заданное время t, то функция резолвит полученные данные
- если fn не выполнится за заданное время t, то функция реджектит строку "Time limit exceeded"
*/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

//  нужно вернуть новую версию этой функции,  эта часть условия не понятна

// здесь я додумался только возвращать функцию которая возвращает Promise и таймер создать
// подписываться на возвращемый промис не дошло
const timeLimited = function (fn, t) {
  return function (...args) {
    return new Promise((res, rej) => {
      let timerId = setTimeout(() => {
        rej("Time limit exceeded");
      }, t);

      // fn(...args)
      //   .then(res)
      //   .catch(rej)
      //   .finally(() => clearTimeout(timerId));
    });
  };
};

const asyncFn = (x) =>
  new Promise((resolve) => setTimeout(() => resolve(x * 2), 500));
const limitedFn = timeLimited(asyncFn, 1000);
limitedFn(10).then(console.log).catch(console.error); // 20
