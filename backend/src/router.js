const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/tasksController');
const taskMiddleware = require('./middlewares/task.middleware');
router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddleware.validateTask, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id',taskMiddleware.validateUpdate, tasksController.updateTask )
    module.exports = router;