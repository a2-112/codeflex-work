
// let addBtn = document.getElementById("task");
// let toDo = document.getElementById("to-do");
// let todoMajorContainer = document.getElementById("to-do-major-box");


// addBtn.addEventListener("click", function(){

//     let toDoValue = toDo.value;
//     //Creating the paragraph tag
//     let toDoText = document.createElement("p");
//     toDoText.innerText = toDoValue
    
//     //Creating complete button
//     let completeBtn = document.createElement("button");
//     completeBtn.style.backgroundColor = "goldenrod"
//     completeBtn.style.color = " white"
//     // completeBtn.style.fontWeight = " bold"
//     completeBtn.innerText = "Complete";

//     //Creating undo button
//     let undoBtn = document.createElement("button");
//     undoBtn.innerText = "Undo";
//     undoBtn.style.display = "none";
//     undoBtn.style.backgroundColor = " greenyellow";

//     //adding onclick event listener to the undo button
//     undoBtn.addEventListener("click", () => {
//         completeBtn.style.display = "block";
//         undoBtn.style.display = "none";
//         toDoText.style.textDecoration = "none";
//         toDoContainer.style.backgroundColor = "transparent"
//     })
//     // function addBtn(toDoText){
//     // let toDoText =JSON.parse(localStorage.getItem('toDoValue')) || [];
//     // toDoText.push(toDoValue);
//     // localStorage.setItem('toDoValue' JSON.stringify(tasks));
//     // }
//     //adding onclick event listener to the complete button
//     completeBtn.addEventListener("click", function(){
//         toDoText.style.textDecoration = "line-through";
//         toDoText.style.textDecorationThickness = "5px";
//         toDoContainer.style.backgroundColor = "goldenrod";

//         undoBtn.style.display = "block";
//         completeBtn.style.display = "none";
//     })

//     //adding onclick event listener to the delete button
//     let deleteBtn = document.createElement("button");
//     deleteBtn.style.backgroundColor = "red"
//     deleteBtn.style.color = "white"
//     deleteBtn.innerText = "Delete";
//     deleteBtn.addEventListener("click", function(){
//         todoMajorContainer.removeChild(toDoContainer);
    
//         completeBtn.style.display = "none";

//     })

//     //Creating and adding class to the sub container
//     let toDoContainer = document.createElement("div");
//     toDoContainer.classList.add("to-do-container");

//     //Injecting all created elements to their respective containers
//     toDoContainer.appendChild(toDoText);
//     toDoContainer.appendChild(completeBtn);
//     toDoContainer.appendChild(undoBtn);
//     toDoContainer.appendChild(deleteBtn);


//     //injecting sub container into the main container
//     todoMajorContainer.appendChild(toDoContainer);

//     //Clearing the input feild when the add task button is clicked
//     toDo.value = ""

// })
let addBtn = document.getElementById("task");
let toDo = document.getElementById("to-do");
let todoMajorContainer = document.getElementById("to-do-major-box");

// Load existing tasks from localStorage
window.addEventListener("load", function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        renderTask(task.text, task.completed);
    });
});

addBtn.addEventListener("click", function () {
    let toDoValue = toDo.value.trim();
    if (toDoValue === "") return;

    // Save the task in localStorage
    saveTask(toDoValue, false);

    // Render the task in the UI
    renderTask(toDoValue, false);

    // Clear the input field
    toDo.value = "";
});

function renderTask(taskText, completed) {
    // Creating the paragraph tag
    let toDoText = document.createElement("p");
    toDoText.innerText = taskText;

    // Set initial style for completed tasks
    if (completed) {
        toDoText.style.textDecoration = "line-through";
        toDoText.style.textDecorationThickness = "5px";
    }

    // Creating complete button
    let completeBtn = document.createElement("button");
    completeBtn.style.backgroundColor = "goldenrod";
    completeBtn.style.color = "white";
    completeBtn.innerText = "Complete";

    // Creating undo button
    let undoBtn = document.createElement("button");
    undoBtn.innerText = "Undo";
    undoBtn.style.display = completed ? "block" : "none";
    undoBtn.style.backgroundColor = "greenyellow";

    // Adding onclick event listener to the undo button
    undoBtn.addEventListener("click", () => {
        completeBtn.style.display = "block";
        undoBtn.style.display = "none";
        toDoText.style.textDecoration = "none";
        toDoContainer.style.backgroundColor = "transparent";
        updateTask(taskText, false);
    });

    // Adding onclick event listener to the complete button
    completeBtn.addEventListener("click", function () {
        toDoText.style.textDecoration = "line-through";
        toDoText.style.textDecorationThickness = "5px";
        toDoContainer.style.backgroundColor = "goldenrod";

        undoBtn.style.display = "block";
        completeBtn.style.display = "none";
        updateTask(taskText, true);
    });

    // Adding onclick event listener to the delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function () {
        todoMajorContainer.removeChild(toDoContainer);
        deleteTask(taskText);
    });

    // Creating and adding class to the sub-container
    let toDoContainer = document.createElement("div");
    toDoContainer.classList.add("to-do-container");

    // Injecting all created elements to their respective containers
    toDoContainer.appendChild(toDoText);
    toDoContainer.appendChild(completeBtn);
    toDoContainer.appendChild(undoBtn);
    toDoContainer.appendChild(deleteBtn);

    // Injecting sub-container into the main container
    todoMajorContainer.appendChild(toDoContainer);
}

// Save a task to localStorage
function saveTask(text, completed) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text, completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update a task's completed status in localStorage
function updateTask(text, completed) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task =>
        task.text === text ? { ...task, completed } : task
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Delete a task from localStorage
function deleteTask(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
