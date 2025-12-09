// Print numbers from 1–100 divisible by both 3 and 5
// for (let a = 1; a <= 100; a++) {
//   if (a % 3 === 0 && a % 5 === 0) {
//     console.log(a);
//   }
// }

// without Math.max
// let arr = [12, 45, 67, 203, 89, 90];
// let max = arr[0];

// // console.log(arr[3]);

// for (let i = 1; i < arr.length; i++) {
//   //   console.log(arr[i]);

//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log("Largest Number :  ", max);

// count Vowels
// let str = "Javascript Loops Questions";
// let count = 0;
// let vowels = "aeiouAEIOU";
// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) {
//     count++;
//   }
// }
// console.log("Total Vowels :  ", count);

// let arr = [10, 23, 4, 5, 67, 87, 34, 67];
// let sum = 0;

// // for(let i )
// for (let num of arr) {
//   //   console.log(num);
//   //   sum = sum + num;
//   if (num % 2 === 0) {
//     sum += num;
//   }
// }
// console.log(" even sum :  ", sum);

// without reverse method
// let text = "JavaScript";
// let reversed = "";

// //10 -1
// for (let i = text.length - 1; i >= 0; i--) {
//   reversed = reversed + text[i];
// }
// console.log(reversed);

// Fibonacci series up to n terms
//  f(n) =  f(n-1) + f(n-2) for n > = 2

// 0 , 1 ,1,2,3,5,8,13 ...
// 1st term  = 0
// 2nd term  = 1
// 3rd term  = 0  + 1 = 1
// 4th term  = 1  + 1 = 2
// 5th term  = 1  + 2 = 3
// 6th term  = 2  + 3 = 5
// next = a+ b

// a  | b   | next
// 0    1      1

// // after shifting
//  a  | b   | next
// 1    1      2

//  a  | b   | next
// 1    2      3

let n = 9;
let a = 0;
let b = 1;
console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
  let next = a + b;
  console.log(next);
  a = b;
  b = next;
}

// let arr2 = [3, 1, 3, 5, 3, 8, 3];

// let target = 3;
// let count = 0;
// for (let num of arr2) {
//   if (num === target) {
//     count++;
//   }
// }
// console.log(count);
