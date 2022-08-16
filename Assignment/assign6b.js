let y = Math.floor(Math.random() * 10 + 1);
let count = 3;
let congo = false;

alert("Let's start the game :>");
while (count-- > 0) {
  let x = parseInt(prompt("Guess the number", "0"), 10);

  if (x == y) {
    alert("CONGRATULATIONS!!!");
    document.getElementById("demo").innerHTML = "CONGRATULATION!!!";
    congo = true;
    break;
  }
   else if (x > y && count != 0) {
    alert("OOPS SORRY!! TRY A SMALLER NUMBER " + count + " left");
  }
   else if (x < y && count != 0) {
    alert("OOPS SORRY!! TRY A GREATER NUMBER " + count + " left");
  }
   else {
    alert("Try next time!!!");
    document.getElementById("demo").innerHTML = "BETTER LUCK NEXT TIME!!!";
    break;
  }
}
if(congo==true){
  document.getElementById("star").style.display = "block";
}

