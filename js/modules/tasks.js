export const addTask = (tasks, text) => {
  const newTask = {
    id: crypto.randomUUID(),
    text,
    completed: false,
  };

  return [...tasks, newTask];
};

export const toggleTask = (tasks, id) => {
  return tasks.map((task) =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );
};

export const deleteTask = (tasks, id) => {
  return tasks.filter((task) => task.id !== id);
};

export const countPendingTasks = (tasks) => {
  return tasks.filter((task) => !task.completed).length;
};