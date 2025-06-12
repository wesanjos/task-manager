const db = require('../config/firebase');
const os = require('os');
const { v4: uuidv4 } = require('uuid');

async function getTasksCount() {
  try {
    const snapshot = await db.collection('tasks').get();

    return snapshot.size;
  } catch (error) {
    console.error('Erro ao obter contagem de tarefas', error);
    return 0;
  }
}

async function handleGetTasks() {
  try {
    const collection = db.collection('tasks');
    const getTasks = await collection.orderBy('createdAt', 'desc').get();

    if (getTasks.empty) {
      return [];
    }

    const tasks = [];

    getTasks.forEach((doc) => {
      tasks.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return tasks;
  } catch (error) {
    console.error('Erro ao buscar tarefas', error);
    throw error;
  }
}

async function handleInsertTask(tasks) {
  if (!tasks.length) return;

  const computer = os.hostname();
  const results = [];
  const currentCount = await getTasksCount();

  for (const task of tasks) {
    try {
      const taskId = uuidv4();
      const taskNumber = currentCount + results.length + 1;
      const docRef = db.collection('tasks').doc(taskId);

      await docRef.set({
        ...task,
        computer,
        id: taskId,
        internalId: taskNumber,
        createdAt: new Date().toISOString()
      });

      results.push({
        id: taskNumber,
        ...task,
        computer
      });
    } catch (error) {
      console.error('Erro ao inserir tarefa', error);
      return null;
    }
  }

  return results;
}

module.exports = {
  handleGetTasks,
  handleInsertTask
};
