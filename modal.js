var modal = document.getElementById("modal");
var taskModal = document.getElementById("task-modal");

const openModal = () => {
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.alignItems = "center";
}

const openTaskModal = () => {
    taskModal.style.display = "flex";
    taskModal.style.flexDirection = "column";
    taskModal.style.alignItems = "center";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }

    if (event.target === taskModal) {
        taskModal.style.display = "none";
    }
}

var btnModal = document.getElementById("btn-modal");
var modalContent = document.querySelector(".modal-content");
var modalInput = document.getElementById("task-title");

btnModal.addEventListener("mouseover", () => {
    modalContent.style.backgroundColor = "var(--tertiary-color)";
    modalContent.style.color = "var(--secondary-color)";
    
    modalInput.style.border = "2px solid var(--secondary-color)";
    modalInput.style.color = "var(--secondary-color)";

    btnModal.style.border = "2px solid var(--secondary-color)";
    btnModal.style.color = "var(--secondary-color)";
});

btnModal.addEventListener("mouseout", () => {
    modalContent.style.backgroundColor = "var(--secondary-color)";
    modalContent.style.color = "var(--tertiary-color)";
    
    modalInput.style.border = "2px solid var(--tertiary-color)";
    modalInput.style.color = "var(--tertiary-color)";

    btnModal.style.border = "2px solid var(--tertiary-color)";
    btnModal.style.color = "var(--tertiary-color)";
});

modalInput.addEventListener("focus", () => {
    modalContent.style.backgroundColor = "var(--tertiary-color)";
    modalContent.style.color = "var(--secondary-color)";

    modalInput.style.border = "2px solid var(--secondary-color)";
    modalInput.style.color = "var(--secondary-color)";
});

modalInput.addEventListener("blur", () => {
    modalContent.style.backgroundColor = "var(--secondary-color)";
    modalContent.style.color = "var(--tertiary-color)";

    modalInput.style.border = "2px solid var(--tertiary-color)";
    modalInput.style.color = "var(--tertiary-color)";
});

var categorySelect = document.getElementById("task-category");
var statusSelect = document.getElementById("task-status");

categorySelect.addEventListener("click", () => {
    categorySelect.style.backgroundColor = "var(--tertiary-color)";
    categorySelect.style.color = "var(--secondary-color)";
    categorySelect.style.border = "2px solid var(--secondary-color)";
});

statusSelect.addEventListener("click", () => {
    statusSelect.style.backgroundColor = "var(--tertiary-color)";
    statusSelect.style.color = "var(--secondary-color)";
    statusSelect.style.border = "2px solid var(--secondary-color)";
});