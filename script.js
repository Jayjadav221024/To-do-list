let inputbox = document.getElementById('input-box');
let listcontaner = document.getElementById('list-container');

function addtask() {
    if(inputbox.value === ""){
        alert("you must write somthing!")
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontaner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      
    }
    inputbox.value = "";
    savedata();
}
listcontaner.addEventListener("click",function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")

        savedata();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata() {
    localStorage.setItem("data",listcontaner.innerHTML);
}
function showtask() {
    listcontaner.innerHTML = localStorage.getItem("data");
}
showtask();