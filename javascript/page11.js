// Scheduling
// function
// 1-setTimeout

// setTimeout(greeting, 2000);
// function greeting() {
//   console.log("Good Morning!");
// }

// setTimeout(()=>{
//     console.log("hiii");
// },4000);

// // 2-setInterval

// var clear = setInterval(() => {
//     var date = new Date();
//     console.log(date);
// },3000);

// setTimeout(()=>{
//     console.log("Time stop");
//     clearInterval(clear)
// },18000)
// to stop the setInterval

var people = [
  { name: "Ashish", age: 23 },
  { name: "Ajay", age: 21 },
  { name: "Arvind", age: 26 },
  { name: "Mahesh", age: 28 },
  { name: "Jay", age: 19 },
];

let res = people.filter(function(peopleAge){
  return peopleAge.age>25;
});
console.log(res.reverse());

