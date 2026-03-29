import { saveTasksToStorage } from "../utils/localStorage.js";
import { createTaskElement } from "../ui/taskElement.js";
import { getTaskContainerByStatus } from "../ui/render.js";

/**
 * Handles the submission of the "Add New Task" form.
 * Creates a new task object, updates the local tasks array, saves to local storage, and updates the UI.
 * @param {Array} tasks - The current tasks array to update.
 * @returns {void}
 */
export function setupAddTaskFormHandler(tasks) {
  const addTaskForm = document.getElementById("new-task-modal-window");
  const addTaskModal = document.getElementById("add-task-modal");

  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: document.getElementById("title-input").value,
      description: document.getElementById("desc-input").value,
      status: document.getElementById("select-status").value,
    };

    // Push to our local array for persistence
    tasks.push(newTask);
    saveTasksToStorage(tasks); // Save to Local Storage

    const container = getTaskContainerByStatus(newTask.status);
    if (container) {
      container.appendChild(createTaskElement(newTask));
      addTaskForm.reset();
      addTaskModal.close();
    }
  });
}