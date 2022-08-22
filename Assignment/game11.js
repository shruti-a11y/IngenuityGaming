// create reference
var starterpage = document.querySelector(".startpage");
var gamepage = document.querySelector(".gamepage");
var end = document.querySelector("#end");
var mole = document.querySelectorAll(".mole");
var count = 0;
function start() {
  starterpage.style.visibility = "hidden";
  gamepage.style.visibility = "visible";
  end.style.visibility = "visible";
  for (let i = 0; i < mole.length; i++) {
    mole[i].style.visibility = "hidden";
  }
   setInterval(() => {
    var x = Math.floor(Math.random() * 6);
    mole[x].style.visibility = "visible";
    setTimeout(() => {
      mole[x].style.visibility = "hidden";
    }, 2000);
  }, 3000);
 
  // timeout
  var timeLeft=20;
  var timeOut = setInterval(() => {
    document.getElementById("end").innerHTML = timeLeft;
    timeLeft--;
  }, 1000);
  setTimeout(() => {
    clearInterval(timeOut);
    document.getElementById("end").innerHTML = "Time Out";
    document.getElementById("end").style.backgroundColor="red";
  
  }, 21000);
}
function myFunction() {
  count++;
  document.getElementById("currentPoint").innerHTML = count;
  console.log("count is" + count);
}

