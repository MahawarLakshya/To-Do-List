const input = document.getElementById('input-box')
const list = document.getElementById('list-container')

document.getElementById('add').onclick = addTask;
document.getElementById('clr').onclick = clear;



function addTask() {
    if (input.value === '') {
        alert("Enter something in list")
    } else {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" //code for cross sign
        li.appendChild(span)
    }
    input.value = "";
    input.focus(); //get back the cursor to inut field
    saveData();
}

function clear() {
    if (list.innerHTML === '') {
        alert("Add something in list")
    } else {
        list.innerHTML = ""
    }
    input.focus();
    saveData();


}
list.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }

}, false)

function saveData() {
    localStorage.setItem("data", list.innerHTML)
}

function showlist() {
    list.innerHTML = localStorage.getItem("data");
}
showlist();