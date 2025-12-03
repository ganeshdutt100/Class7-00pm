// loop
// 1 t0  100
// console.log("1");
// console.log("2");
// console.log("3");
// let  i  = 0 (Initialization)
// i >= 10 (Condition)
// i++ (Ek kadam age )

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// do while(Ziddi loop)

// let i = 11;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log("Main to ek baar Chalunga " + i);
//   i++;
// } while (i <= 10);

// (11  <=10)-  false

// Control Statement (Break and Continue)
// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }
// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }

// let heroes = ["Ironman", "Hulk", "Thor"];

// for (let i in heroes) {
//   console.log(i + " :  " + heroes[i]);
// }

// let student = {
//   name: "xyz",
//   age: 23,
//   course: "fs",
// };
// console.log(person.name);
// for (let key in student) {
//   console.log(key, " : ", student[key]);
// }

let isConnected = false;
let attempt = 4;

while (true) {
  console.log("Connecting to Server " + attempt);

  if (attempt == 3) {
    isConnected = true;
  }
  if (isConnected) {
    console.log("Successfully Connected");
    break;
  }
  if (attempt >= 5) {
    console.log("Connection Failed");
    break;
  }

  attempt++;
}
