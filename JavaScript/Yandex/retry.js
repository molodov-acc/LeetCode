// необходимо реализовать функцию retry, которая принимает в себя 2 параметра
// async func
// config: {count: number, delay: (count) => number}
// если async func возвращает промис в статусе rej
// то необходимо перезапустить данную функцию config.count раз c задержкой в config.delay мс,
// пока промис не перейдёт в сатус fullfield либо кол-во возможных попыток config.count не исечёт
// Функция retry должна возвращать промис

function test() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Error");
    }, 1000);
  });
}

retry(test, { count: 3, delay: (retryCount) => retryCount * 1000 });

function retry(promiseFn, config) {
  const { count, delay } = config.count;

  return new Promise((resolve, reject) => {
    promiseFn()
      .then((res) => resolve(res))
      .catch((error) => {
        if (count) {
          setTimeout(() => {
            // здесь встял, видимо изначально не правильно начал решать
          }, delay(count - 1));
        } else {
          reject();
        }
      });
  });
}
