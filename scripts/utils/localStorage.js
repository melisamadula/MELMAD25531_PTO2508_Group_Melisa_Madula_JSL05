import { initialTasks } from "../../initialData.js";

/**
 * Loads tasks from localStorage. If no tasks are found, it initializes the storage with default tasks.
 * @returns {Array} An array of task objects.
 */
export function loadTasksFromStorage() {
    const stored = localStorage.getItem("tasks");
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (error) {
            console.error("Error parsing tasks from localStorage:", error);
        }
    }
    localStorage.setItem("tasks", JSON.stringify(initialTasks));
    return initialTasks;
}

/**
 * Saves tasks to localStorage.
 * @param {Array} tasks - An array of task objects to save.
 */
export function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}