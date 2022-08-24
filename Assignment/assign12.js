// onload

window.onload = function () {
  setInterval(() => {
    stopLoader();
  }, 3000);
};

function stopLoader() {
  document.querySelector(".container").style.display = "none";
  document.getElementById("Todocontanier").style.display = "block";
}

var todoinput = document.querySelector(".todo-input");
var btn = document.querySelector("#myBtn2");
var todoList = document.querySelector(".todo-list");
var out = window.localStorage.getItem("data");
// we define a key
var keyArray = [];
var i = 0;

// e- form SubmitEvent

btn.onclick = function createTodo(e) {
  e.preventDefault();
  if (todoinput.value.length == 0) {
    alert("Hope you will enter the valid value this time😒");
  } else {
    keyArray.push(todoinput.value);
    localStorage.setItem("data", keyArray);
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    // new li created

    var newli = document.createElement("li");
    newli.classList.add("todo_item");
    newli.innerHTML = todoinput.value;
    newDiv.appendChild(newli);

    var cmpltbtn = document.createElement("button");
    cmpltbtn.classList.add("cmpltbtn");
    cmpltbtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    newDiv.appendChild(cmpltbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add("deletebtn");
    deletebtn.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    newDiv.appendChild(deletebtn);

    // this is a new node
    todoList.appendChild(newDiv);

    //   clear input
    todoinput.value = "";
  }
};

// to delete

todoList.onclick = function checkBtn(e) {
  var check = e.target;
  console.log(check);
  // check first class
  // var checkToggle = false;
  if (check.classList[0] == "deletebtn") {
    console.log("delete");
    var parentNode = check.parentElement;
    var data = keyArray.indexOf(parentNode.innerText);
    keyArray.splice(data, 1);
    window.localStorage.setItem("data", keyArray);
    parentNode.remove();

    // local storage
    // var KeyName = window.localStorage.key(index);
  } else if (check.classList[0] == "cmpltbtn") {
    console.log("complete");
    var parentNode = check.parentElement;
    parentNode.classList.add("check");
  }
};

// local storage

if (out.length == 0) {
  //Items are stored in local storage
  console.log("no data found");
} else {
  //Local storage is empty

  keyArray = out.split(",");
  while (i < keyArray.length) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newli = document.createElement("li");
    newli.classList.add("todo_item");
    newli.innerHTML = keyArray[i];
    newDiv.appendChild(newli);

    var cmpltbtn = document.createElement("button");
    cmpltbtn.classList.add("cmpltbtn");
    cmpltbtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    newDiv.appendChild(cmpltbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add("deletebtn");
    deletebtn.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    newDiv.appendChild(deletebtn);

    // this is a new node
    todoList.appendChild(newDiv);
    i++;
  }
}

// popup window
setTimeout(() => {
            
  (function() {
    console.log("i work");
    var url = "../Assignment/FORM.html";
    var windowSize = "height=700 , width = 700";
    var newWindow = window.open(url,"_blank",windowSize);
    // url - to open the page we want
    // target : 
    // 
    newWindow.moveTo(500,100)
  })();
}, 10000);
