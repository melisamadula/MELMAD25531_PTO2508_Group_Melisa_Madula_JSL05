import { createTaskElement } from "./taskElement.js";

/**
 * Finds the task container element based on the task status.
 * @param {string} status - The status of the task (e.g., "To Do", "In Progress", "Done").
 * @returns {HTMLElement} The corresponding task container element.
 */
export function getTaskContainerByStatus(status) {
    const column = document.querySelector(`.column-div[data-status="${status}"]`);
    return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from the task containers.
 */
export function clearExistingTasks() {
    document.querySelectorAll(".tasks-container").forEach((container) => {
        container.innerHTML = "";
    });
}

/**
 * Renders tasks to their appropriate columns.
 * @param {Array} tasks - An array of task objects to be rendered.
 */
export function renderTasks(tasks) {
    tasks.forEach((task) => {
        const container = getTaskContainerByStatus(task.status);
        if (container) {
            const taskElement = createTaskElement(task);
            container.appendChild(taskElement);
        }
    });
}