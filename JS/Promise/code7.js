let promise = fetch("code2.txt");
promise
  .then((res) => {
    console.log(res.status);
    console.log(res.ok);
    return res.text();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
