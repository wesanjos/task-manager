const service = require('../services/firestore.services');

async function getTasks(req, res) {
  try {
    const tasks = await service.handleGetTasks();

    if (tasks.length === 0) {
      return res.status(204).send();
    }

    const formattedTasks = tasks.map((task) => {
      const { internalId, id: uuid, ...rest } = task;
      return {
        id: internalId,
        ...rest
      };
    });

    res.status(200).json(formattedTasks);
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    res.status(500).json({
      message: 'Erro interno ao buscar tarefas'
    });
  }
}

async function insertTask(req, res) {
  try {
    console.log('Insert Task');

    const task = req.body;

    const newTask = await service.handleInsertTask(task);

    res.status(201).json(newTask);
  } catch (error) {
    console.error('Erro ao inserir tarefa:', error);
    res.status(500).json({
      message: 'Erro interno ao inserir tarefa'
    });
  }
}

module.exports = {
  getTasks,
  insertTask
};
