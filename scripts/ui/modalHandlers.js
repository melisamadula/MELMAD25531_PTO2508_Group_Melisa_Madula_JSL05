
/**
 * Sets up the event handlers for closing modals.
 */
export function setupModalCloseHandler() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        const closeButton = modal.querySelector(".close-button");
        if (closeButton) {
            closeButton.addEventListener("click", () => {
                modal.style.display = "none";
            });
        }
    });
}

/**
 * Sets up the event handler for opening the "New Task" modal when the corresponding button is clicked.
 */
export function setupNewTaskModalHandler() {
    const newTaskButton = document.getElementById("new-task-button");
    const newTaskModal = document.getElementById("new-task-modal");

    newTaskButton.addEventListener("click", () => {
        newTaskModal.style.display = "block";
    });

}