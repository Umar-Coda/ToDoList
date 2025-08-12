class Tasks {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    filterByCategory(category) {
        return this.tasks.filter(
            task => task.categoryId === category.categoryId
        );
    }

    filterByStatus(status) {
        return this.tasks.filter(
            task => task.statusId === status.statusId
        );
    }

    filterByTitle(title) {
        return this.tasks.filter(
            task => task.title === title
        );
    }
}