// Write a Program to use call() and apply() Method.

function myFunction1() {
  alert("Ques 1 : Write a Program to use call() and apply() Method.");
  let person = {
    fname: "Shruti",
    lname: "Sharma",
  };
  const details = {
    fullDetail: function (city, country) {
      return (
        this.fname + " " + this.lname + " live in " + city + " in " + country
      );
    },
  };
  alert("Example of call() funtion");
  let city = prompt(
    "Enter any city name where think " + person.fname + " live"
  );
  let country = prompt("Enter any country name where city is");
  alert(details.fullDetail.call(person, city, country));
  alert("Example of apply() funtion");
  let string = details.fullDetail.apply(person, [city, country]);
  alert(details.fullDetail.apply(person, [city, country]));

  document.getElementById("card").style.display = "block";
  document.getElementById("ques").innerHTML =
    "Ques 1 : Write a Program to use call() and apply() Method. ";
  document.getElementById("userInput").innerHTML = "Enter data is : " + string;
  document.getElementById("answer").innerHTML =
    "Example of call() funtion" +
    "<br>" +
    "details.fullDetail.apply(person, city, country)" +
    "<br><br>" +
    "Example of apply() funtion" +
    "<br>" +
    "details.fullDetail.apply(person, [city, country])";
}

// 2. Write a Program to create an array having cube root of every element of another array.
function myFunction2() {
  var myarr = [125, 64, 27, 8, 1];
  var newArr = myarr.map((i) => Math.cbrt(i));
  alert("Given Array : " + myarr);
  alert("Array after cube root :" + newArr);
  document.getElementById("card").style.display = "block";
  document.getElementById("ques").innerHTML =
    "Ques 2 : Write a Program to create an array having cube root of every element of another array.";
  document.getElementById("userInput").innerHTML = "Given Array : " + myarr;
  document.getElementById("answer").innerHTML =
    "Array after cube root : " + "<br>" + newArr;
}

//  Write a Program to call a function in an interval of 3 sec for 5 times.

function myFunction3() {
  // 2-setInterval
  //   create element

  document.getElementById("card").style.display = "block";
  document.getElementById("ques").innerHTML =
    "Ques 3 : Write a Program to call a function in an interval of 3 sec for 5 times.";

  document.getElementById("userInput").innerHTML =
    "Here time is show in every 3sec of interval for 5 time :) ";

  //   alert("Here time is show in every 3sec of interval for 5 time :>");
  var clear = setInterval(() => {
    var date = new Date();
    // alert(date);
    let node = document.createElement("li");
    let textNode = document.createTextNode(date);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);
  }, 3000);

  setTimeout(() => {
    alert("Time stop Thanks for waiting :)");
    clearInterval(clear);
  }, 18000);
}

//  Write a Program to iterate an Array of Objects using map function.

function myFunction4() {
  var people = [
    { name: "Ashish", age: 23 },
    { name: "Ajay", age: 21 },
    { name: "Arvind", age: 26 },
    { name: "Mahesh", age: 28 },
    { name: "Jay", age: 19 },
  ];
  const peopleArr = people.map((peopleItem) => {
    return peopleItem.name + " is " + peopleItem.age + " year old\n";
  });
  alert("Iterate an Array of Objects using map function\n" + peopleArr);
  // document.getElementById("card").style.display = "block";
  //   document.getElementById("ques").innerHTML =
  //     "Ques 4 : Write a Program to iterate an Array of Objects using map function.";
  //   document.getElementById("userInput").innerHTML = "Enter data is : " + string;
  //   document.getElementById("answer").innerHTML =
  //     "Example of call() funtion" +
  //     "<br>" +
  //     "details.fullDetail.apply(person, city, country)" +
  //     "<br>" +
  //     "Example of apply() funtion" +
  //     "<br>" +
  //     "details.fullDetail.apply(person, [city, country])";
}

// 5. Write a Program to Filter out people whose age is less than 25 in descending order.
function myFunction5() {
  var people = [
    { name: "Ashish", age: 23 },
    { name: "Ajay", age: 21 },
    { name: "Arvind", age: 26 },
    { name: "Mahesh", age: 28 },
    { name: "Jay", age: 19 },
  ];

  const res = people.filter(function (peopleAge) {
    return peopleAge.age < 25;
  });
  alert("People whose age is less than 25 : \n" + JSON.stringify(res));
}

// button

function goBack() {
  document.getElementById("myList").innerHTML = "";
  document.getElementById("ques").innerHTML = "";
  document.getElementById("userInput").innerHTML = "";
  document.getElementById("answer").innerHTML = "";
  document.getElementById("myList").innerHTML = "";
  document.getElementById("card").style.display = "none";
}
