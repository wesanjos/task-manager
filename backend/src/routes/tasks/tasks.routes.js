const express = require('express');
const tasksRoutes = express.Router();

const taskController = require('../../controllers/tasks.controller');

tasksRoutes.get('/get-tasks', taskController.getTasks);
tasksRoutes.post('/insert-tasks', taskController.insertTask);

module.exports = tasksRoutes;
