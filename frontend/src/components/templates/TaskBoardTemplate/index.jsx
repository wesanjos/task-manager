import { useEffect, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TaskBoardHeader from '../../molecules/TaskBoardHeader';
import TaskBoardGrid from '../../molecules/TaskBoardGrid';
import Loading from '../../molecules/Loading';
import AlertMessage from '../../atoms/Alert';

import api from '../../../api';

export default function TaskBoardTemplate() {
  const [tasksByStatus, setTasksByStatus] = useState({
    todo: [],
    doing: [],
    done: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
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

        {loading ? (
          <Loading message="Carregando as tarefas..." />
        ) : (
          <TaskBoardGrid
            tasksByStatus={tasksByStatus}
            refreshTasks={refreshTasks}
          />
        )}
      </Container>
    </Box>
  );
}
