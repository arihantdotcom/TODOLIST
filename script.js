const inputbox = document.getElementById("inputbox");
const listitem = document.getElementById("listitem");
function addTask() {
  if (inputbox.value === "") {
    alert("you must write task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listitem.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = ""; 
  savedata();
}

listitem.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("cheak");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }
}),
  false;
function savedata() {
  localStorage.setItem("data", listitem.innerHTML);
}

function showlist() {
  listitem.innerHTML = localStorage.getItem("data");
}
showlist();
