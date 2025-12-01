// setup event listener for page load
document.addEventListener("DOMContentLoaded", () => {
  // select DOM elements (add task button, task input field, and tasks list)
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // create addTask function
  function addTask() {
    // retrieve and trim the value of the task input field and store it in a variable called taskText
    const taskText = taskInput.value.trim();
    // if taskText is  empty alert the user to enter a task
    if (taskText.value === "") {
      alert("Please enter a task");
    } else {
      // if taskText is not empty, create a new <li> element and set its textContent to tasText value
      let listItem = document.createElement("li");
      listItem.textContent = taskText;
      // create a new button for removing the task assign an onclikc to it which removes the <li> element from the task list
      let removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
      removeButton.onclick = function () {
        listItem.remove();
      };
      // append the remove button to the <li> element
      listItem.appendChild(removeButton);
      // append the <li> element to the task list
      taskList.appendChild(listItem);
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
  // invoke the addTask function on DOMContentLoaded
});
