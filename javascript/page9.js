// operator

// arithmetic operator

// + - * / %

// relation operator

// a=20,b=10

// let res= 'hello' || 'hell';
// let res1= (a==b) || 'hell';
// let res2= 'hello' || 'hell';
// // let res2= 'hello' || 'hell';
// console.log(res);
// console.log(res1);
// console.log(!res1); //hello treated as true and !hello = false

// CONDITIONAL OPERATION

// 1.if
// 2.if-else
// 3.if -elseif-else
// 4.nested if-else

// let num = prompt("enter a number");
// num=10;
// if(num>0){
//     console.log("Number is positive");
// }
// else if(num==0){
//     console.log("Number is zero");
// }
// else{
//     console.log("Number is negitive");
// }

// console.log("this is IF statement");

// // SWITCH STATEMENT

// switch(num%2) {
      // case "0": //check also datatype so this one is false and move to other case
//     case 0:
//       // code block
//       console.log("hii");
//       break;
//     case 1:
//       // code block
//       console.log("hello");
//       break;
//     default:
//       // code block
//       console.log("byeee");
//   }

var k = 1;
var i = 0;
for (; ;) {
  if (i > 2) break;
  if (k > 10) break;
  console.log("odd : " + k);
  console.log("i= " + i);
  k += 2;
  i++;
}

// object

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());
