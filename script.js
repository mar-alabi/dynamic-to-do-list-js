document.addEventListener("DOMContentLoaded", function () {
  // select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  //function to add tasks
  function addTask() {
    let taskText = taskInput.value;
    if (taskText === "") {
      alert("Please enter a task");
    } else {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      removeBtn.textContent = "Remove";
      removeBtn.onclick = function () {
        listItem.remove();
      };
      listItem.append(removeBtn);
      taskList.append(listItem);
      taskInput.value = "";
    }
  }

  // event listeners  for the DOM elements
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
  addTask();
});
