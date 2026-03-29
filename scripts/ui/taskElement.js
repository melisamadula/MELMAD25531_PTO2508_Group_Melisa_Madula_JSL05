
/**
 * Creates a DOM element for a task.
 * @param {*} task 
 * @returns 
 */
export function createTaskElement(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    taskDiv.setAttribute("data-id", task.id);
    taskDiv.textContent = task.title;
    return taskDiv;
}