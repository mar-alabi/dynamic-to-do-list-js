/** */
document.addEventListener("DOMContentLoaded", function () {
  // select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  let taskArray = [];

  // function to load saved tasks
  function loadSavedTasks() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      taskArray = JSON.parse(savedTasks);
    }
    for (let task of taskArray) {
      const listItem = document.createElement("li");
      listItem.textContent = task;
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      removeBtn.textContent = "Remove";
      removeBtn.onclick = function () {
        listItem.remove();
        const index = taskArray.indexOf(task);
        taskArray.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(taskArray));
      };
      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);
    }
  }
  loadSavedTasks();
  //function to add tasks
  function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task");
    } else {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      taskArray.push(taskText);
      let savedTasks = JSON.stringify(taskArray);
      localStorage.setItem("tasks", savedTasks);
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      removeBtn.textContent = "Remove";
      removeBtn.onclick = function () {
        listItem.remove();
        const index = taskArray.indexOf(taskText);
        taskArray.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(taskArray));
      };
      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  }

  // event listeners  for the DOM elements
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
