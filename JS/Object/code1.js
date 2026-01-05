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

// console.log(person.name);
for (let objKey in person) {
  console.log(objKey, " :  ", person[objKey]);
}

// Object 1
// let name = "Krishna Dutt";
// let age = 17;
// let isMarried = false;
// let Class = "12th";
// let subject = ["Maths", "Physics", "Chemistry", "Biology"];
