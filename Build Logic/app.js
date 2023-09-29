alert("Working");
let tasks = [];

// Function to display tasks
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${task}
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
    taskList.appendChild(listItem);
  });
}

// Function to add a new task
function addTask(task) {
  tasks.push(task);
  displayTasks();
}

// Function to edit a task
function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index]);
  if (newTask !== null) {
    tasks[index] = newTask;
    displayTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    displayTasks();
  }
}

// Handle form submission
const taskForm = document.getElementById("taskForm");
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task !== "") {
    addTask(task);
    taskInput.value = "";
  }
});

// Initial display of tasks
displayTasks();
