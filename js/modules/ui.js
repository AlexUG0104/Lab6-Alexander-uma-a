export const showError = (errorElement, message) => {
  errorElement.textContent = message;
};

export const clearError = (errorElement) => {
  errorElement.textContent = "";
};

export const updatePendingCount = (counterElement, count) => {
  counterElement.textContent = count;
};

export const renderTasks = (tasks, listElement, onToggle, onDelete) => {
  listElement.textContent = "";

  if (tasks.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.classList.add("todo__empty");
    emptyMessage.textContent = "No hay tareas todavía.";
    listElement.append(emptyMessage);
    return;
  }

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.classList.add("todo__item");

    const taskText = document.createElement("p");
    taskText.classList.add("todo__task");
    taskText.textContent = task.text;

    if (task.completed) {
      taskText.classList.add("completed");
    }

    const actions = document.createElement("div");
    actions.classList.add("todo__actions");

    const completeButton = document.createElement("button");
    completeButton.classList.add("todo__action-btn", "todo__action-btn--complete");
    completeButton.textContent = task.completed ? "Desmarcar" : "Completar";
    completeButton.addEventListener("click", () => onToggle(task.id));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("todo__action-btn", "todo__action-btn--delete");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => onDelete(task.id));

    actions.append(completeButton, deleteButton);
    item.append(taskText, actions);
    listElement.append(item);
  });
};