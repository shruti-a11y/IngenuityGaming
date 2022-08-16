// function

// js support - overriding
// js - doesnot support overloading is fun with same name with different parameter

function sayHi(message){
    if(message) return message;
    else return " No Data recieved" ; //  if return has no value to return then it give undefine
}
console.log(sayHi("hello"));

let add=0;
function sum() {
    add = add + arguments;
    console.log(arguments.length);
    return(add);
}
console.log(sum(1,4,5));


// function expression - storing function value in variable

var res = function(a,b){
    return a*b;
};
console.log(res(5,4));

// self-invoking function

(function(){
    console.log("I'm a self-invoking function");
})();


// function to create object
// using es5
function Person(){
    // properties
    this.name = "Shruti";
    this.age = 21;
    // method
    this.details = function(){
        return "Name : "+ this.name + " Age"+this.age;
    };
}

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

var obj = new Person();
console.log(obj.name);
console.log(obj.details());


function sum(a=5,b=7){
    return a+b;
}

console.log(sum().toString);