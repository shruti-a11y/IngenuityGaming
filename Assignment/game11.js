// create reference
var starterpage = document.querySelector(".startpage");
var gamepage = document.querySelector(".gamepage");
var mole = document.querySelectorAll(".mole");

var moles=document.getElementsByClassName(".mole");
var dirts=document.getElementsByClassName(".dirt");
var test = document.querySelectorAll(".text");
var count = 0;
function start() {
  starterpage.style.visibility = "hidden";
  gamepage.style.visibility = "visible";

  for (let i = 0; i < mole.length; i++) {
    mole[i].style.visibility = "hidden";
  }
  
  setInterval(() => {
    var x = Math.floor(Math.random() * 6);
    mole[x].style.visibility = "visible";

    setTimeout(() => {
      mole[x].style.visibility = "hidden";
    }, 5000);
  }, 1000);
setInterval(molevisibility,1000);
}

// function findRandom(){
//        var x = Math.floor(Math.random() * 6);
//        mole[x-1]=

// }
function myFunction() {
  count++;
  document.getElementById("currentPoint").innerHTML = count;
  console.log("count is" + count);
}
