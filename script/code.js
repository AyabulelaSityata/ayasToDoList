let inputDisplay = document.querySelector('#display')
let sortButton = document.querySelector('#sort-btn')
let addButton = document.querySelector('#add-btn')
let listOutput = document.querySelector('.listOutput')

let taskList = JSON.parse(localStorage.getItem('taskList')) || [] // Grab and array (['Task 1', 'Task 2']) from the localstorage and saving it in the 'taskList' variable.

function addTask(){
    if( inputDisplay.value == ''){ //Testing if input is empty
        alert("You must enter something!"); // If input is empty, alert to enter something
    } else { // If input is NOT empty, we do the following:
        taskList.push(inputDisplay.value) // Taking the input value, and adding it to the array (['Task 1', 'Task 2', 'input value'])
        localStorage.setItem('taskList', JSON.stringify(taskList)) // Overwriting the localstorage with the NEW taskList (['Task 1', 'Task 2', 'input value'])
        displayTasks() // Calling function to display tasks
        inputDisplay.value = ""; //Clearing the input
    }
}

function displayTasks() {
    // appendChild = add a child element
    listOutput.innerHTML = '' // Clearing the 'Ul' on the HTML before evertime we display the tasks
    taskList.forEach(task => { // Using 'foreach' to create an Li FOR EACH task in the array
        let li = document.createElement("li"); // Creating an li tag in JS
        li.innerHTML = task; // Putting the Task text inside the li
        listOutput.appendChild(li); // Putting the li inside of the 'ul' on the HTML
        let span = document.createElement("span"); // Creating a span tag in JS
        span.innerHTML = "\u274C"; // Putting an "X" symbol in the span tag
        li.appendChild(span); // Putting the span tag in the 'li' on the html  
    });
}
displayTasks() // Calling the displayTasks function when the page loads

// Event Listeners do something like This: <ul onclick="thecallbackfunction(event)"></ul>
listOutput.addEventListener('click', function (e){ // If the user CLICKS on the UL ELEMENT, we run the function
    if( e.target.tagName == "LI"){ // Checking if the SPECIFIC target is an LI
        // classList.toggle = switching a class 'on' or 'off'
        e.target.classList.toggle("done"); // Adds and removes a class of "done", to the li tag
    } else if ( e.target.tagName == "SPAN"){ // Checking if the target is a SPAN
        let pElement = e.target.parentElement
        pElement.remove(); // Removes the PARENT (the li) of the TARGET (span) from HTML
        // ['bye', 'hello', 'My', 'Guy', 'Dont', 'Lie']
        taskList.splice( // Deletes the item at the given index
            taskList.indexOf( // Finding the position of a string in the array 'taskList'
                pElement.textContent.slice(0, -1) // Starting at the first character, we are 'slicing' up until just before the last character, to remove the 'x' in the span tag
            ),
            // How many items to delete. (We are always deleting 1 item)
        )
        localStorage.setItem('taskList', JSON.stringify(taskList)) // Updating info on localstorage
    }
});
