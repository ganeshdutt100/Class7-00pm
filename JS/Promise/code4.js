const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Pizza");
  }, 1000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Coke");
  }, 2000);
});
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Garlic bread");
  }, 1500);
});

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
