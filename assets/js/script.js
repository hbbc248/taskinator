var formE1 = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");
    
var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // Check if input values are empty string
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formE1.reset();
    
    // package up date as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
  
    // send it as an argement to createTaskEl
    createTaskEl(taskDataObj);

};

var createTaskEl = function(taskDataObj) {

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className="task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list

    taskToDoEl.appendChild(listItemEl);

};

formE1.addEventListener("submit", taskFormHandler);