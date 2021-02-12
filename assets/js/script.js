var buttonE1 = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");
    
var createTaskHandler = function() {
    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.textContent ="This is a new task.";
    taskToDoEl.appendChild(taskItemEl);
};


buttonE1.addEventListener("click", createTaskHandler);