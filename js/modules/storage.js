const STORAGE_KEY = "todo-tasks";

export const getTasks = () => {
  const storedTasks = localStorage.getItem(STORAGE_KEY);

  if (!storedTasks) {
    return [];
  }

  return JSON.parse(storedTasks);
};

export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};