// let a = 5;
// let b = 15;

// if (a == b) {
//   console.log("True");
// } else {
//   console.log("False");
// }

let studentsMarks = 50;

// if (studentsMarks >= 30) {
//   console.log("Pass");
// } else {
//   console.log("fail");
// }

// if (studentsMarks >= 60) {
//   console.log("First");
// } else if (studentsMarks >= 40) {
//   console.log("Second");
// } else if (studentsMarks >= 30) {
//   console.log("Third");
// } else {
//   console.log("Fail");
// }

// Traffic Light
// Red -  Stop
// Yellow  - Wait
// Green  - Go

// let light  = red

// let light = "Green";
// if (light == "Red") {
//   console.log("Ruk jao (Stop)");
// } else if (light == "Yellow") {
//   console.log("Dheere chalo( Get Ready)");
// } else if (light == "Green") {
//   console.log("jao (GO)");
// } else {
//   console.log("Signal kharab ho gya hain ");
// }

// Nested if else
// ATM
// let isCardInserted = true;
// let correctPin = 1234;
// let enteredPin = 4321;
// let accountBalance = 5000;
// let withDrawAmount = 3000;

// if (isCardInserted == true) {
//   console.log("Card Accepted. Processing...");

//   if (enteredPin == correctPin) {
//     console.log("PIN verified");
//     if (withDrawAmount <= accountBalance) {
//       console.log("Transaction Successfully!");
//     } else {
//       console.log("Error:  Balance Kam hain ");
//     }
//   } else {
//     console.log("Incorrect PIN. Access Denied.");
//   }
// } else {
//   console.log("Error : Pehle card to lgao ");
// }

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thur");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;
  default:
    console.log("Error");
}
