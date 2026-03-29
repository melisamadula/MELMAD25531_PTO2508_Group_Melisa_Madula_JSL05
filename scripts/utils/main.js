/**
 * Utility functions for managing tasks and modal interactions in the Kanban board application.
 */
import { loadTasksFromStorage } from "./localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { setupModalCloseHandler, setupSecondaryModalCloseHandler } from "../ui/modalHandlers.js";
import { setupAddTaskFormHandler } from "../tasks/formUtils.js";

// Load tasks from localStorage or use initialData if storage is empty
let tasks = loadTasksFromStorage();

/**
 * Initializes the task board and modal handlers.
 * Clears existing tasks, renders tasks from the dynamic 'tasks' variable, and sets up modal event handlers.
 * @param {Array<Object>} tasks - Array of task objects to render on initialization.
 * @returns {void}
 */
function initTaskBoard() {
  clearExistingTasks();
  renderTasks(tasks); // Use the dynamic 'tasks' variable
  setupModalCloseHandler();
  setupSecondaryModalCloseHandler();
  setupAddTaskFormHandler(tasks);
}

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", initTaskBoard);

