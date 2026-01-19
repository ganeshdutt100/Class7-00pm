let promise = fetch("https://jsonplaceholder.typicode.com/users/1");
promise
  .then((res) => {
    console.log(res.status);
    console.log(res.ok);
    return res.json();
  })
  .then((data) => {
    // for (let x in data) {
    //   console.log(data[x].username);
    // }
    console.log(data.address.street);
  })
  .catch((err) => {
    console.log(err);
  });
