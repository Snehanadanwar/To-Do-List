function addTask() {
    const taskinput = document.getElementById("task").value;
    // const listcontainer = document.getElementById("list-container");
    const listcontainer = document.querySelector(".list-container");
    if(taskinput === '') {
        alert("You must write something!");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = taskinput;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    document.getElementById("task").value = '';
}
const listcontainer = document.querySelector(".list-container");
listcontainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {  
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showData() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showData();