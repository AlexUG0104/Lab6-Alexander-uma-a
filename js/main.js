import { getTasks, saveTasks } from "./modules/storage.js";
import { addTask, toggleTask, deleteTask, countPendingTasks } from "./modules/tasks.js";
import { renderTasks, showError, clearError, updatePendingCount } from "./modules/ui.js";

let tasks = getTasks();

const form = document.querySelector("#todo-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const errorMessage = document.querySelector("#error-message");
const pendingCount = document.querySelector("#pending-count");

const refreshApp = () => {
  saveTasks(tasks);
  renderTasks(tasks, taskList, handleToggleTask, handleDeleteTask);
  updatePendingCount(pendingCount, countPendingTasks(tasks));
};

const handleToggleTask = (id) => {
  tasks = toggleTask(tasks, id);
  refreshApp();
};

const handleDeleteTask = (id) => {
  tasks = deleteTask(tasks, id);
  refreshApp();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    showError(errorMessage, "No puedes agregar una tarea vacía.");
    return;
  }

  clearError(errorMessage);

  tasks = addTask(tasks, taskText);
  refreshApp();

  taskInput.value = "";
  taskInput.focus();
});

renderTasks(tasks, taskList, handleToggleTask, handleDeleteTask);
updatePendingCount(pendingCount, countPendingTasks(tasks));