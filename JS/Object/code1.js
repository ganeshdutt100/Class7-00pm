// style
//   p{
//     color:red;
//   }
// <p>Ganesh</p>

// syntax  -
// let value ={
//     key:"value"
// }

let person = {
  name: "Krishna Dutt",
  age: 17,
  class: "12th",
  isMarried: false,
};

// let a = 6
// console.log(person.name);
for (let objKey in person) {
  console.log(objKey, " :  ", person[objKey]);
}

let target = { a: 1, b: 2 };
let source = { b: 3, c: 4, b: 8 };

let result = Object.assign(target, source);
console.log(result);

let obj = {
  age: 45,
};
// let obj1 = {}
// let obj2 = {}
// const obj2 = Object.freeze(obj);
// obj.age = 67;
// console.log(obj.age);
// console.log(Object.isFrozen(obj))

// console.log(Object.is(5, 5));
// console.log(Object.is("value", "value"));
// console.log(Object.is(null, null));
// console.log(Object.is(undefined, undefined));
// console.log(Object.is(0, -0)); // different sign
// console.log(Object.is(NaN, NaN));
//console.log(Object.is({}, {})); //false (different references)
//console.log(Object.is([], [])); //false (different references)

// Object 1
// let name = "Krishna Dutt";
// let age = 17;
// let isMarried = false;
// let Class = "12th";
// let subject = ["Maths", "Physics", "Chemistry", "Biology"];
