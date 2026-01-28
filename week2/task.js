
import {
  validateTitle,
  validatePriority,
  validateDueDate
} from "./validator.js";

const tasks = [];
let idCounter = 1;
function addTask(title, priority, dueDate) {
  const titleCheck = validateTitle(title);
  if (titleCheck !== true) return titleCheck;

  const priorityCheck = validatePriority(priority);
  if (priorityCheck !== true) return priorityCheck;

  const dateCheck = validateDueDate(dueDate);
  if (dateCheck !== true) return dateCheck;

  const task = {
    id: idCounter++,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(task);
  return "✅ Task added successfully";
}

function getAllTasks() {
  return tasks;
}

function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return "❌ Task not found";

  task.completed = true;
  return "✅ Task marked as completed";
}
export { addTask, getAllTasks, completeTask };
