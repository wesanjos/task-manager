import { useState } from 'react';

import api from '../../../api';

import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function NewTask({ onCancelTask, type, refreshTasks }) {
  const [task, setTask] = useState({
    description: '',
    responsible: '',
    status: type,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSaveTask = async () => {
    if (!task.description.trim() || !task.responsible.trim()) {
      setError('Preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await api.post('/insert-tasks', [task]);
      await response.data;

      if (refreshTasks) {
        refreshTasks();
      }

      onCancelTask();
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      setError('Falha ao criar tarefa. Tente novamente.');
    }
  };

  const handleChangeTask = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        padding: 3,
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
      className="new-task-card"
    >
      {error && (
        <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
      )}
      <TextField
        id="outlined-multiline-flexible"
        label="Descrição"
        multiline
        fullWidth
        size="small"
        maxRows={3}
        onChange={handleChangeTask}
        name="description"
        value={task.description}
        disabled={isSubmitting}
        required
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Responsável"
        fullWidth
        size="small"
        onChange={handleChangeTask}
        name="responsible"
        value={task.responsible}
        disabled={isSubmitting}
        required
      />
      <Button
        variant="outlined"
        size="medium"
        onClick={onCancelTask}
        disabled={isSubmitting}
      >
        Cancelar
      </Button>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={handleSaveTask}
        disabled={
          isSubmitting || !task.description.trim() || !task.responsible.trim()
        }
      >
        {isSubmitting ? 'Salvando...' : 'Salvar'}
      </Button>
    </Card>
  );
}
