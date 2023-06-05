let inputDisplay = document.querySelector('#display')
let sortButton = document.querySelector('#sort-btn')
let addButton = document.querySelector('#add-btn')
let listOutput = document.querySelector('.listOutput')

let taskList = JSON.parse('taskList', localStorage.getItem(''))

function addTask(){
    if( inputDisplay.value === ''){
        alert("You must enter something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputDisplay.value;
        listOutput.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputDisplay.value = " ";

}

listOutput.addEventListener('click', function(e){
    if( e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    }
    // else ( e.target.tagName === "SPAN"){
    //      e.target.parentElement.remove();
    // }
}, false);

// let myArray = [
//     {
//         id: 1,
//         name: "exercise",
//         createdDate: ,
//         completed: false,
//     },
//     {
//         id: 2,
//         name: "take a shower",
//         createdDate: ,
//         completed: false,
//     },
//     {
//         id: 3,
//         name: "dress up",
//         createdDate: ,
//         completed: false,
//     },
// ]

// function taskOne(){

// }