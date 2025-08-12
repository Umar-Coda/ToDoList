class Task {
    constructor() {
        this.taskId = null;
        this.title = null;
        this.categoryId = null;
        this.statusId = null;
    }

    addTitle(title) {
        this.title = title;
    }

    addCategory(categoryId) {
        this.categoryId = categoryId;
    }

    addStatus(statusId) {
        this.statusId = statusId;
    }
}