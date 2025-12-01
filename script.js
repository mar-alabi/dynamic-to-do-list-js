// setup event listener for page load
document.addEventListener("DOMContentLoaded", () => {
  // select DOM elements (add task button, task input field, and tasks list)
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // create addTask function

  // retrieve and trim the value of the task input field and store it in a variable called taskText
  // if taskText is  empty
  // alert the user to enter a task
  // if taskText is not empty
  // create a new <li> element
  // set its textContent to tasText value
  // create a new button for removing the task
  // assign an onclikc to it which removes the <li> element from the task list
  // append the remove button to the <li> element
  // append the <li> element to the task list
  // clear the input field
  // attach event listeners
  // add an event listener to the add task button that calls addTask function when clicked
  // add an event listener to the task input field to allow tasks to be added when the 'enter' button is pressed
  // check if 'event.key' is 'enter' before calling addTask
  // invoke the addTask function on DOMContentLoaded
});
