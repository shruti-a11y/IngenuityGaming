var todoinput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todoList = document.querySelector(".todo-list");

// e- form SubmitEvent
var id = 0;
btn.onclick = function createTodo(e) {
  e.preventDefault();
  if (todoinput.value.length == 0) {
    alert("Hope you will enter the valid value this time😒");
  } else {

    var data = todoinput.value;
    localStorage.setItem(id, data);
    id++;
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
    console.log(parentNode);
    parentNode.remove();
  } else if (check.classList[0] == "cmpltbtn") {
    console.log("complete");
    var parentNode = check.parentElement;
    parentNode.classList.add("check");
  }
};
