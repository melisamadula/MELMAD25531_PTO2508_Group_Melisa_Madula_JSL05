
/**
 * Utility functions for managing tasks and modal interactions in the Kanban board application.
 */
import { initialTasks } from "../../initialData.js";

// Load from localStorage or use initialData if storage is empty
let tasks = JSON.parse(localStorage.getItem('tasks')) || initialTasks;

/**
 * Creates a single task DOM element.
 * @param {Object} task - Task data object.
 * @param {string} task.title - Title of the task.
 * @param {number} task.id - Unique task ID.
 * @param {string} task.status - Status column: 'todo', 'doing', or 'done'.
 * @returns {HTMLElement} The created task div element.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}

/**
 * Finds the task container element based on task status.
 * @param {string} status - The task status ('todo', 'doing', or 'done').
 * @returns {HTMLElement|null} The container element, or null if not found.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders all tasks from initial data to the UI.
 * Groups tasks by status and appends them to their respective columns.
 * @param {Array<Object>} tasks - Array of task objects.
 */
function renderTasks(tasks) {
  tasks.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    }
  });
}

/**
 * Opens the modal dialog with pre-filled task details.
 * @param {Object} task - The task object to display in the modal.
 */
function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  modal.showModal();
}

/**
 * Sets up modal close behavior.
 */
function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
}

/**
 * Sets up the event handlers for opening and closing the secondary "Add Task" modal.
 */
function setupSecondaryModalCloseHandler() {
    const modal = document.getElementById("add-task-modal");
    const openBtn = document.getElementById("add-new-task-btn");
    const closeBtn = document.getElementById("cancel-add-btn");
    openBtn.addEventListener("click", () => {
        modal.showModal();
    });
    closeBtn.addEventListener("click", () => {
        modal.close();
    });
}

/**
 * Saves the current tasks array to local storage.
 */
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Handles the submission of the "Add New Task" form.
 */
function setupAddTaskFormHandler() {
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
    saveTasksToLocalStorage(); // Save to Local Storage

    const container = getTaskContainerByStatus(newTask.status);
    if (container) {
      container.appendChild(createTaskElement(newTask));
      addTaskForm.reset();
      addTaskModal.close();
    }
  });
}

/**
 * Initializes the task board and modal handlers.
 */
function initTaskBoard() {
  clearExistingTasks();
  renderTasks(tasks); // Use the dynamic 'tasks' variable
  setupModalCloseHandler();
  setupSecondaryModalCloseHandler();
  setupAddTaskFormHandler();
}

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", initTaskBoard);

