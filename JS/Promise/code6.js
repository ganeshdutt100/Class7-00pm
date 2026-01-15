const p1 = new Promise((reject) => {
  setTimeout(() => {
    reject("Pizza");
  }, 2000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Coke");
  }, 1000);
});
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Garlic bread");
  }, 3000);
});

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
