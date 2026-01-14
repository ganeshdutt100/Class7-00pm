// step1 - Order
function placeOrder() {
  return new Promise((resolve, reject) => {
    console.log("Processing Order...");

    setTimeout(() => {
      const orderId = 1234;
      resolve(orderId);
    }, 1000);
  });
}

// Step 2: Pizza banana
function preparePizza(orderId) {
  return new Promise((resolve, reject) => {
    console.log(`Checking order ${orderId}. Pizza ban rha hain`);
    setTimeout(() => {
      const pizza = "Peppy Paneer Pizza";
      resolve(pizza); // Success
    }, 2000);
  });
}

// step 3 :Deliver karna
function deliverPizza(pizza) {
  return new Promise((resolve, reject) => {
    console.log(`${pizza} pack ho gya hain `);

    setTimeout(() => {
      resolve("Delivery Successful");
    }, 1000);
  });
}

placeOrder()
  .then((orderId) => {
    console.log(` order le liye hain  ID :  ${orderId}`);
    return preparePizza(orderId);
  })
  .then((pizza) => {
    console.log(`Pizza ${pizza} is ready`);
    return deliverPizza(pizza);
  })
  .then((status) => {
    console.log(`status :   ${status}`);
    console.log("Amar Pizza kha rha hai  ab ");
  })
  .catch((err) => {
    console.log("kuch to gadbad hui hain ", err);
  });
