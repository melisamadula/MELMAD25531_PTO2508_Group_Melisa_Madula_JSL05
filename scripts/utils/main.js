import { loadTasksFromStorage } from "./storage.js";
import { clearExistingTasks, renderTasks } from "./render.js";
import {
    setupModalCloseHandler,
    setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

// Initialize the application
/**
 * Initializes the task board application by loading tasks from localStorage, clearing existing tasks from the UI, rendering the loaded tasks, and setting up event handlers for modals.
 */
function initTaskBoard() {
    // Load tasks from localStorage
    const tasks = loadTasksFromStorage();
    clearExistingTasks();
    renderTasks(tasks);
    setupModalCloseHandler();
    setupNewTaskModalHandler();
}

// Run the initialization function when the DOM is fully loaded
/**
 * Initializes the task board application by loading tasks, rendering them, and setting up modal handlers.
 */
document.addEventListener("DOMContentLoaded", initTaskBoard);