const express = require('express');
const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = apiRoutes;
