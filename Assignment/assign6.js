let sum = 0;
alert("Let's start the game :>")
while (true) {
	let num = parseInt(prompt("Enter a Value", "0"), 10);
    if(num<0) break;
    sum = sum+ num;

}

document.getElementById("demo").innerHTML = "Total sum of the numbers are : "+sum;