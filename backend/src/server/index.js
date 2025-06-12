const express = require('express');
const cors = require('cors');
const apiRoutes = require('../routes');

const PORT = 8085;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
