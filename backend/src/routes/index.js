const express = require('express');
const apiRoutes = express.Router();

const tasksRoutes = require('../routes/tasks/tasks.routes');

apiRoutes.use(tasksRoutes);

apiRoutes.get('/', (req, res) => {
  res.send('Route GET - Task Manager');
});

module.exports = apiRoutes;
