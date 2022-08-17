// var, let, const

// var name = "Orxan"
// var name = "Akbarov"

// let name;
// name = "Orxan"

// let name1 = "Cavid";
// let name2 = "Bashirov";

// const age = 50;

// console.log(age);

// console.log(name + " " + surname);

// console.log(`${name} ${surname}`);

// let age = 55;
// let surname = "Nuraliyev";
// let isMarried = true;
// let address = null;
// let count;

// let person1 = {
//   name: "Orxan",
//   surname: "Akberov",
//   age: 26,
//   phoneNumbers: [123, 321],
// };

// let person2 = {
//   name: "Narmin",
//   surname: "Mammadova",
//   age: 28,
//   phoneNumbers: [1238541, 3986547121],
// };

// let students = [
//   {
//     name: "Orxan",
//     surname: "Akberov",
//     age: 26,
//     phoneNumbers: [1985423, 8547623321],
//   },
//   {
//     name: "Narmin",
//     surname: "Mammadova",
//     age: 28,
//     phoneNumbers: [178554223, 38654121],
//   },
//   {
//     name: "Fidan",
//     surname: "Mardanli",
//     age: 17,
//     phoneNumbers: [18598523, 328545161],
//   }];

//   for (var i = 0; i < students.length; i++) {

//     if (students[i].name == "Orxan") {
//         console.log(students[i].age + " " + students[i].surname);
//         break;
//     }

//   }

// for (let i = 0; i < students.length; i++) {

//     for (let j = 0; j < students[i].phoneNumbers.length; j++) {

//         console.log(students[i].phoneNumbers[j]);
//     }
// }

// console.log(person.name + " " + person.surname);

// for (let i = 0; i < person1.phoneNumbers.length; i++) {
//     console.log(person1.phoneNumbers[i]);
// }

// let numbers = [1,2,3,4,5,6]

// numbers.forEach(item => {
//     console.log(item);
// });

// let num1 = 66;
// let num2 = 33;

// let result = num1 % num2;

// console.log(result);

// for (let i = 0; i <= 10; i++) {
//   if (i == 0) {
//     console.log("Ne tek ne de cutdur");
//   } else {
//     if (i % 2 == 1) {
//       console.log("Tek:" + i);
//     } else {
//       console.log("Cut:" + i);
//     }
//   }
// }

// let isActive = true;

// if (!isActive) {
//     console.log("Aktiv deyil");
// }else{
//     console.log("Aktivdir");
// }

// let studentSurname = null;

// let result = studentSurname ?? "Is surname forget";

// let result = isActive ? "Aktivdir" : "Aktiv deyil";

// console.log(result);

// let a = 5;
// let b = a;
// b = 8;

// console.log(a);
// console.log(b);

let obj1 = {
  name: "Orxan",
  surname: "Akberov",
  age: 26,
  phoneNumbers: [123, 321],
};

let obj2 = obj1;
obj2.age = 27;

console.log(obj1);

// let studentName;

// if (studentName == undefined) {
//     console.log("Teyin olunmayib");
// }else{
//     console.log("Teyin olunub");
// }

// let isDeleted = null;

// console.log(typeof isDeleted);