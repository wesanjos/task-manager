import { useEffect, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TaskBoardHeader from '../../molecules/TaskBoardHeader';
import TaskBoardGrid from '../../organisms/TaskBoardGrid';
import AlertMessage from '../../atoms/Alert';

import api from '../../../api';

export default function TaskBoardTemplate() {
  const [tasksByStatus, setTasksByStatus] = useState({
    todo: [],
    doing: [],
    done: [],
  });
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    setError(null);

    try {
      const response = await api.get('/get-tasks');
      const data = await response.data;

      const groupedTasks = {
        todo: [],
        doing: [],
        done: [],
      };

      if (!data) {
        setTasksByStatus(groupedTasks);
        return;
      }

      data.forEach(task => {
        const status = task.status || 'todo';
        if (groupedTasks[status]) {
          groupedTasks[status].push({
            ...task,
            type: status,
          });
        }
      });

      setTasksByStatus(groupedTasks);
    } catch (err) {
      console.error('Erro ao buscar tarefas:', err);
      setError('Falha ao carregar as tarefas!');
    }
  }, []);

  const refreshTasks = useCallback(() => {
    fetchTasks();
  }, [fetchTasks]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <TaskBoardHeader title="Gerenciador de Tarefas" />

        {error && <AlertMessage message={error} severity="error" />}

        <TaskBoardGrid
          tasksByStatus={tasksByStatus}
          refreshTasks={refreshTasks}
        />
      </Container>
    </Box>
  );
}
