const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', (req, res) => {
    const tasks = taskController.getAllTasks();
    res.status(200).json(tasks);
});

router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newTask = taskController.createTask(title, description);
    res.status(200).json(newTask);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const task = taskController.getTaskById(id);
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Error! Tarea no encontrada!'});
    }
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { title, description } = req.body;
    const updatedTask = taskController.updateTask(id, title, description);
    if (updatedTask) {
        res.status(200).json(updatedTask);
    } else {
        res.status(404).json({ message: 'Error! Tarea no encontrada!' });
    }
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deletedTask = taskController.deleteTask(id);
    if(deletedTask){
        res.status(200).json({ message: 'Tarea eliminada!' });
    } else {
        res.status(404).json({ message: 'Error! Tarea no encontrada!' });
    }
});


module.exports = router;