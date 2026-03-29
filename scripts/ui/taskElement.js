
import { openTaskModal } from "./modalHandlers.js";

/**
 * Creates a DOM element for a task.
 * @param {*} task 
 * @returns 
 */
export function createTaskElement(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    taskDiv.setAttribute("data-task-id", task.id);
    taskDiv.textContent = task.title;

    taskDiv.addEventListener("click", () => {
        openTaskModal(task);
    });

    return taskDiv;
}