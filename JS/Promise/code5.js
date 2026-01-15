const slowNet = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Slow Internet Data");
  }, 3000);
});
const fastNet = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fast 5G Internet");
  }, 500);
});

Promise.race([slowNet, fastNet])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
