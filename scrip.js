const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

let j = 0 ;
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    const randomColor = getRandomColor();
    li =document.getElementsByTagName('li')[j];
    li.style.colo = randomColor;
    j = j+1;
}


function addTask(){
    if(inputBox.value===""){
        alert('You must write something!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value ;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    savedata()
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
},false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask()
