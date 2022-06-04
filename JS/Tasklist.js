// Input data
const form = document.getElementById("tasklistform");
var TaskNameInput = document.getElementById("TaskNameInput");
var DueDateInput = document.getElementById("DueDateInput");
var EstimatedCompleteTimeInput = document.getElementById("EstimatedCompleteTimeInput");
var priorityInput = document.getElementById("priorityInput");
var CompletionInput = document.getElementById("CompletionInput");
var tasklist = document.querySelector("#tasklist > ul");
const button = document.querySelector("#tasklistform > button")
// button settings
button.addEventListener("click", function(event) {
    event.preventDefault();
    let task = TaskNameInput.value;
    let dueDate = DueDateInput.value;
    let estimatedTime = EstimatedCompleteTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    let completionStatus = CompletionInput.value;
    if (task) {
        addTasklist(task, dueDate, estimatedTime, priorityRating,completionStatus);
    }
})

// creat tasklist array
var addTaskListArray = [];

function addTasklist(taskName, dueDate, estimatedTime, priorityRating, completionStatus) {
    let task = {
        taskName,
        dueDate,
        estimatedTime,
        priorityRating,
      completionStatus,
    };
    addTaskListArray.push(task);
    console.log(addTaskListArray);
    ScreenTask(task);
}
// task list into html
function ScreenTask(task) {
    let item = document.createElement("p");
    item.innerHTML = "<h2>" + task.taskName + "</h2>"+"<p>" +"Due Date:"+ task.dueDate +"</br>"+ "Estimated time to complete:"+task.estimatedTime+"</br>"+"Priority Rating:"+task.priorityRating+"</br>"+"Completion Status:"+task.completionStatus+"</p>";

    tasklist.appendChild(item);
// set a Delete button
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        item.remove();
    })
// reset input form
    form.reset();
}