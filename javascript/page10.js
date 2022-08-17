// function

// js support - overriding
// js - doesnot support overloading is fun with same name with different parameter

// function sayHi(message){
//     if(message) return message;
//     else return " No Data recieved" ; //  if return has no value to return then it give undefine
// }
// console.log(sayHi("hello"));

// let add=0;
// function sum() {
//     add = add + arguments;
//     console.log(arguments.length);
//     return(add);
// }
// console.log(sum(1,4,5));

// function expression - storing function value in variable

// var res = function(a,b){
//     return a*b;
// };
// console.log(res(5,4));

// self-invoking function

// (function(){
//     console.log("I'm a self-invoking function");
// })();

// function to create object
// using es5
// function Person(){
//     // properties
//     this.name = "Shruti";
//     this.age = 21;
//     // method
//     this.details = function(){
//         return "Name : "+ this.name + " Age"+this.age;
//     };
// }

// using es6
// class Person {
//     constructor() {
//         // properties
//         this.name = "Shruti";
//         this.age = 21;
//         // method
//         this.details = function () {
//             return "Name : " + this.name + " Age" + this.age;
//         };
//     }
// }

// var obj = new Person();
// console.log(obj.name);
// console.log(obj.details());

// function sum(a=5,b=7){
//     return a+b;
// }

// console.log(sum().toString);

// Advance function

// function declaration in literal

// var person = {
//     // key: value_pair
//     firstName : "Shruti",
//     lastName : "Sharma",
//     // using fun to create method of object
//     // this refers to the person object.
//     fullName : function () {
//         return this.firstName+" "+this.lastName;
//     },
//     address : function(city, country){
//         return "I live in "+city +" in "+country;
//     }
// }
// calling function
// console.log(person.fullName());

// call function

// let person2={
//     firstName : "Shreya",
//     lastName : "Sharma",
// }
// let person3={
//     firstName : "Manika",
//     lastName : "Sharma",
// }
// let person4={
//     firstName : "Astha",
//     lastName : "Sharma",

//  }
// // console.log(person.fullName.call(person2));
// // console.log(person.fullName.call(person3));
// // console.log(person.fullName.call(person4,"aligarh","UP"));
// console.log(person.fullName.call(person4,));
// console.log(person.address("Aligarh","Uttra Pradesh"));

// // arrow function

// // foreach
// var arr = [1,2,3,4];
//  

// //

// Function calling

// What is this?

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.




// create a Object

let person = [
  {
    fname: "Shruti",
    lname: "Sharma",
  },
  {
    fname: "Shreya",
    lname: "Sharma",
    // city :"Agra"  //-this is global obejct for function fullDetail
  },
  {
    fname: "Manika",
    lname: "Sharma",
  },
  {
    fname: "Astha",
    lname: "Sharma",
  },
];
 city ="Agra";
const details = {
    fullDetail : function(city,country){
        // when we use this.city it point to global object which is in person
        return this.fname+" "+this.lname +" I live in "+ city +" in "+country;
    }
}
console.log(details.fullDetail.call(person[1],"Aligarh"));
for (let i = 0; i < person.length; i++) {
    let city = prompt("Enter any city name where think "+person[i].fname+ "live");
    let country = prompt("Enter any country name where city is");
    console.log(details.fullDetail.call(person[i],city,country));
    
}


