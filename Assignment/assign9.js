function myFunction1() {
  alert(
  "Ques 1 : Write a Program to return sum of all Arguments passed to a Function");
  let sum = 0;
  let arr = [];
alert("To stop the input enter 0")
while (true) {
	let num = parseInt(prompt("Enter a Value", "0"), 10);
    if(num<1) break;
    arr.push(num);
    sum = sum+ num;
}
document.getElementById('card').style.display = 'block';
document.getElementById('ques').innerHTML = "Ques 1 : Write a Program to return sum of all Arguments passed to a Function";
document.getElementById('userInput').innerHTML = "Entered Array is : "+arr +"<br>";
document.getElementById('answer').innerHTML = "Answer  : "+sum;
  
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
document.getElementById('card').style.display = 'block';
document.getElementById('ques').innerHTML = "Ques 2 : Write a Program to return more than one value from a Function. ";
document.getElementById('userInput').innerHTML = "Enter First Name : "+name.fname+"<br>"+"Enter Last Name : "+name.lname+"<br>";
document.getElementById('answer').innerHTML = "Hii " + name.fname + " " + name.lname + " nice To meet you ;> "

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
  document.getElementById('card').style.display = 'block';
document.getElementById('ques').innerHTML = "Ques 3 : Write a code to return entire function definition and display it. ";
document.getElementById('answer').innerHTML = add();
  
  
}

// Write a JavaScript program to create a new string adding "New!" in front of a given String. If the given string begins with "New!" already then return the original string. (Use Functional Approach)

function myFunction4() {
  alert(
    'Ques 4 : Write a JavaScript program to create a new string adding "New!" in front of a given String. If the given string begins with "New!" already then return the original string. '
  );
  let string = prompt("Enter a string ");
  let res = string.startsWith("New");
  ans = string;
  if (res != true) {
    ans = "New!!! " + string
    alert( ans);
  } else {
    alert(ans);
  }

  document.getElementById('card').style.display = 'block';
  document.getElementById('ques').innerHTML = 'Ques 4 : Write a JavaScript program to create a new string adding "New!" in front of a given String. If the given string begins with "New!" already then return the original string. ';
  document.getElementById('userInput').innerHTML = "Entered string : "+ string;
  document.getElementById('answer').innerHTML = "Answer : " + ans;
    
}

// Write a JavaScript program to create a new string from a given string taking first 3 characters and the last 3 characters of a string and add them together. The string length must be 3 or more. If not, return the original string is returned.  (Use Functional Approach)
function myFunction5() {
  var ans;
  alert(
    "Ques 5 : Write a JavaScript program to create a new string from a given string taking first 3 characters and the last 3 characters of a string and add them together. The string length must be 3 or more. If not, return the original string is returned.  "
  );
  let string = prompt("Enter any string");
  if(string.length<3){
    return string;
  }
  else{
      ans = conbineString(string);
      function conbineString(text) {
        let first_part = text.substring(0,3);
        let last_part = text.substring(text.length,text.length-3);
        return (first_part+last_part);
      }
      alert(ans);

  } 
  
  document.getElementById('card').style.display = 'block';
  document.getElementById('ques').innerHTML = 'Ques 5 : Write a JavaScript program to create a new string from a given string taking first 3 characters and the last 3 characters of a string and add them together. The string length must be 3 or more. If not, return the original string is returned. ';
  document.getElementById('userInput').innerHTML = "Entered string : "+ string;
  document.getElementById('answer').innerHTML = "Answer : " + ans;
}


function goBack(){
  document.getElementById('card').style.display = 'none';
}



