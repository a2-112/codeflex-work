
let addBtn = document.getElementById("task");
let toDo = document.getElementById("to-do");
let todoMajorContainer = document.getElementById("to-do-major-box");


addBtn.addEventListener("click", function(){

    let toDoValue = toDo.value;
    //Creating the paragraph tag
    let toDoText = document.createElement("p");
    toDoText.innerText = toDoValue
    
    //Creating complete button
    let completeBtn = document.createElement("button");
    completeBtn.style.backgroundColor = "goldenrod"
    completeBtn.style.color = " white"
    // completeBtn.style.fontWeight = " bold"
    completeBtn.innerText = "Complete";

    //Creating undo button
    let undoBtn = document.createElement("button");
    undoBtn.innerText = "Undo";
    undoBtn.style.display = "none";
    undoBtn.style.backgroundColor = " greenyellow";

    //adding onclick event listener to the undo button
    undoBtn.addEventListener("click", () => {
        completeBtn.style.display = "block";
        undoBtn.style.display = "none";
        toDoText.style.textDecoration = "none";
        toDoContainer.style.backgroundColor = "transparent"
    })

    //adding onclick event listener to the complete button
    completeBtn.addEventListener("click", function(){
        toDoText.style.textDecoration = "line-through";
        toDoText.style.textDecorationThickness = "5px";
        toDoContainer.style.backgroundColor = "goldenrod";

        undoBtn.style.display = "block";
        completeBtn.style.display = "none";
    })

    //adding onclick event listener to the delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.style.backgroundColor = "red"
    deleteBtn.style.color = "white"
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function(){
        todoMajorContainer.removeChild(toDoContainer);
    
        completeBtn.style.display = "none";

    })

    //Creating and adding class to the sub container
    let toDoContainer = document.createElement("div");
    toDoContainer.classList.add("to-do-container");

    //Injecting all created elements to their respective containers
    toDoContainer.appendChild(toDoText);
    toDoContainer.appendChild(completeBtn);
    toDoContainer.appendChild(undoBtn);
    toDoContainer.appendChild(deleteBtn);


    //injecting sub container into the main container
    todoMajorContainer.appendChild(toDoContainer);

    //Clearing the input feild when the add task button is clicked
    toDo.value = ""

})