let tasks = [
    {
        id: 1,
        title: "Tarea1",
        description: "Descripcion de la Tarea 1"
    },
    {
        id: 2,
        title: "Tarea2",
        description: "Descripcion de la Tarea 2"
    },
    {
        id: 3,
        title: "Tarea3",
        description: "Descripcion de la Tarea 3"
    }
];

function getAllTasks(){
    return tasks;
}

function createTask(title, description){
    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };
    tasks.push(newTask);
    return newTask;
}

function getTaskById(id){
    return tasks.find(task => task.id === id);
}

function updateTask(id, title, description) {
    const taskId = tasks.findIndex(task => task.id === id);
    if (taskId !== -1) {
        if (title !== undefined) tasks[taskId].title = title;
        if (description !== undefined) tasks[taskId].description = description;
        return tasks[taskId];
    }
    return null;
}

function deleteTask(id){
    const taskId = tasks.findIndex(task => task.id === id);
    if (taskId !== -1) {
        const deletedTask = tasks.splice(taskId, 1);
        return deletedTask[0];
    }
    return null;
}

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}