var pendingTaskList = document.getElementById("pendingTaskList");
var newTaskList = document.getElementById("newTaskList");
var allTaskList = document.getElementById("allTaskList");
var taskInput = document.getElementById("taskInput");

function createTaskElement(task) {
  var li = document.createElement("li");
  var taskText = document.createElement("div");
  taskText.classList.add("task-text");
  taskText.innerText = task;

  var actions = document.createElement("div");
  actions.classList.add("actions");
  var editButton = document.createElement("button");
  editButton.innerText = "Editar";
  editButton.addEventListener("click", function() {
    editTask(li, task);
  });
  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Excluir";
  deleteButton.addEventListener("click", function() {
    deleteTask(li);
  });

  actions.appendChild(editButton);
  actions.appendChild(deleteButton);

  li.appendChild(taskText);
  li.appendChild(actions);

  return li;
}

function addTask() {
  if (taskInput.value === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  var newTask = createTaskElement(taskInput.value);
  newTaskList.appendChild(newTask);
  allTaskList.appendChild(newTask.cloneNode(true));

  taskInput.value = "";
}

function deleteTask(taskElement) {
  taskElement.parentNode.removeChild(taskElement);
}

function editTask(taskElement, task) {
  var updatedTask = prompt("Digite a nova descrição da tarefa:", task);
  if (updatedTask !== null && updatedTask !== "") {
    taskElement.querySelector(".task-text").innerText = updatedTask;
  }
}
