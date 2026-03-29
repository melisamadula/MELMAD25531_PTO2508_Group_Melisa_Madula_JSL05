
/**
 * Opens the modal dialog with pre-filled task details.
 * @param {Object} task - The task object to display in the modal.
 */
export function openTaskModal(task) {
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
 * Attaches a click event listener to the close button that closes the modal when clicked.
 * @param {void}
 * @returns {void}
 */
export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
}

/**
 * Sets up the event handlers for opening and closing the secondary "Add Task" modal.
 * Handles the click events for both the "Add New Task" button and the "Cancel" button within the modal.
 * @param {void}
 * @returns {void}
 */
export function setupSecondaryModalCloseHandler() {
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