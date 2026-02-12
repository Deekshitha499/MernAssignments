 /*ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }

                  // Export functions*/

                  const tasks = [];

// 1. Add new task
function addTask(title, priority, dueDate) {
    const newTask = {
        id: tasks.length + 1,
        title: title,
        priority: priority,
        dueDate: dueDate,
        completed: false
    };
    tasks.push(newTask);
    return `Task "${title}" added successfully.`;
}

// 2. Get all tasks
function getAllTasks() {
    return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        return `Task ID ${taskId} marked as complete.`;
    } else {
        return `Task ID ${taskId} not found.`;
    }
}

// Export functions
module.exports = {
    addTask,
    getAllTasks,
    completeTask
};

