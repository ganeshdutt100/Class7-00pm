const promiseChain = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then((value) => {
    console.log(value);
    return value + 1; // output - 2
  })
  .then((value) => {
    console.log(value);
    return value + 2; // output  -  4
  })
  .then((value) => {
    console.log(value);
  });
