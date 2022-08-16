function myFunction1() {
  alert(
  "Ques 1 : Write a Program to return sum of all Arguments passed to a Function");
  let string = prompt("Enter number with spaces ");
  let number = string.split(" ");
  let res = sum(number)
  function sum(){
    var sum =0; 
    for(var i=0;i<arguments.length;i++){
       sum += arguments[i];
    }
     return sum;
  }
  alert(sum(1,2)); 

  
}
function myFunction2() {
  alert(
    "Ques 2 : Write a Program to return more than one value from a Function. "
  );
  function getName (){
    let fname = prompt("Enter First Name : ")
    let lname = prompt("Enter last Name : ")
    return {fname, lname};
};
let name = getName();
alert("Hii " + name.fname + " " + name.lname + " nice To meet you ;> ");
}

// Write a code to return entire function definition and display it.

function myFunction3() {
  alert(
    "Ques 3 : Write a code to return entire function definition and display it. "
  );
  function add(a,b){
    let sum = a+b;
    return add;
  }
  alert(add());
  
  
}

// Write a JavaScript program to create a new string adding "New!" in front of a given String. If the given string begins with "New!" already then return the original string. (Use Functional Approach)

function myFunction4() {
  alert(
    'Ques 3 : Write a JavaScript program to create a new string adding "New!" in front of a given String. If the given string begins with "New!" already then return the original string. '
  );
  let string = prompt("Enter a string ");
  let res = string.startsWith("New");
  if (res != true) {
    alert("New!!! " + string);
  } else {
    alert(string);
  }
}

// Write a JavaScript program to create a new string from a given string taking first 3 characters and the last 3 characters of a string and add them together. The string length must be 3 or more. If not, return the original string is returned.  (Use Functional Approach)
function myFunction5() {
  alert(
    "Ques 5 : Write a JavaScript program to create a new string from a given string taking first 3 characters and the last 3 characters of a string and add them together. The string length must be 3 or more. If not, return the original string is returned.  "
  );
  let string = prompt("Enter any string");
  if(string.length<3){
    return string;
  }
  else{
      let ans = conbineString(string);
      function conbineString(text) {
        let first_part = text.substring(0,3);
        let last_part = text.substring(text.length,text.length-3);
        return (first_part+last_part);
      }
      alert(ans);

  }


  
}



