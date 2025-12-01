// setup event listener for page load
document.addEventListener("DOMContentLoaded", () => {
  // select DOM elements (add task button, task input field, and tasks list)
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  let taskArray = [];
  // check localStorage for existing tasks and populate them on the page if they exist
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    taskArray = JSON.parse(savedTasks);
    for (let task of taskArray) {
      populateTasks(task);
    }
  }
  //function to add tasks to taskList
  function populateTasks(task) {
    let listItem = document.createElement("li");
    listItem.textContent = task;
    // create a new button for removing the task assign an onclick to it which removes the <li> element from the task list
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = function () {
      listItem.remove();
      let taskIndex = taskArray.indexOf(task);
      if (taskIndex !== -1) {
        taskArray.splice(taskIndex, 1);
      }
      localStorage.setItem("tasks", JSON.stringify(taskArray));
    };
    // append the remove button to the <li> element
    listItem.appendChild(removeButton);
    // append the <li> element to the task list
    taskList.appendChild(listItem);
  }
  // create addTask function
  function addTask() {
    // retrieve and trim the value of the task input field and store it in a variable called taskText
    const taskText = taskInput.value.trim();
    // if taskText is  empty alert the user to enter a task
    if (taskText === "") {
      alert("Please enter a task");
    } else {
      populateTasks(taskText);
      taskArray.push(taskText);
      let savedTasks = JSON.stringify(taskArray);
      localStorage.setItem("tasks", savedTasks);
      // clear the input field
      taskInput.value = "";
    }
  }

  // attach event listeners
  // add an event listener to the add task button that calls addTask function when clicked
  addButton.addEventListener("click", addTask);
  // add an event listener to the task input field to allow tasks to be added when the 'enter' button is pressed
  taskInput.addEventListener("keypress", (e) => {
    // check if 'event.key' is 'enter' before calling addTask
    if (e.key === "Enter") {
      addTask();
    }
  });
});
