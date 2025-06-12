import { useState } from 'react';

import Box from '@mui/material/Box';
import TaskCard from '../TaskCard';
import ListHeader from '../../molecules/ListHeader';
import AddTask from '../../molecules/AddTask';
import NewTask from '../NewTask';

export default function TaskList({ type, title, tasks = [], refreshTasks }) {
  const [createTask, setCreateTask] = useState(false);

  const handleCreateTask = () => {
    setCreateTask(true);
  };

  const handleCancelTask = () => {
    setCreateTask(false);
  };

  return (
    <section className={`task-list --${type}`}>
      <ListHeader title={title} count={tasks.length} />
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          my: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            description={task.description}
            responsible={task.responsible}
            computer={task.computer}
            createdAt={task.createdAt}
          />
        ))}
        {createTask && (
          <NewTask
            onCancelTask={handleCancelTask}
            type={type}
            refreshTasks={refreshTasks}
          />
        )}
      </Box>
      <AddTask variant="outlined" onAddTask={handleCreateTask} />
    </section>
  );
}
