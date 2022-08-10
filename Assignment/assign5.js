// style
document.body.style.height = "100vh";
document.body.style.width = "100%";

document.body.style.background = "linear-gradient(to right, #eecda3, #ef629f)";

// container
document.getElementById('container').style.border = "5px solid whitesmoke";
document.getElementById('container').style.borderRadius = "5px";
document.getElementById('container').style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.75)'
document.getElementById('container').style.width = "400px";
document.getElementById('container').style.height = "500px";
document.getElementById('container').style.margin = "auto";
document.getElementById('container').style.textAlign = "center";

//header

document.getElementById('header').style.color = "";
// question1


let curr_date = new Date();
let date1 = "Today Date : " + curr_date.getDate() + "-" + (curr_date.getMonth()+1) +"-"+curr_date.getFullYear();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let date2 = "Today Day : " + weekday[curr_date.getDay()];
document.getElementById('para').innerHTML =  "<br>"+date1+ "<br>" + date2 + "<br>";


// question2



document.body.style.fontSize="25px";
document.body.style.color="green";

let name = window.prompt("Enter your name: ");
document.getElementById('para2').innerHTML = "<br>"+"Your name is "+ name.fontcolor("blue") +"<br>";



// Ques = 3
alert("Lets check my intelligence ;>");
let num1 = parseInt(window.prompt("Enter first number"));
let num2 = parseInt(window.prompt("Enter second number"));
let Addition = num1 + num2;
let Subtraction = num1 - num2;
let Multiplication = num1 * num2;
let Division = num1 / num2;

document.getElementById('para3').innerHTML = "<br><i> Addition is = </i>" + Addition +
                                            "<br><i>  Subtraction is = </i>" + Subtraction+
                                            "<br><i> Multiplication is = </i>" + Multiplication+
                                            "<br><i> Division is = </i>" + Division + "<br>";


