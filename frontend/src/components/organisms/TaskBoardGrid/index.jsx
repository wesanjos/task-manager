import Grid from '@mui/material/Grid';
import TaskList from '../TaskList';

export default function TaskBoardGrid({ tasksByStatus, refreshTasks }) {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <TaskList
          type="todo"
          title="To Do"
          tasks={tasksByStatus.todo}
          refreshTasks={refreshTasks}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <TaskList
          type="doing"
          title="Doing"
          tasks={tasksByStatus.doing}
          refreshTasks={refreshTasks}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <TaskList
          type="done"
          title="Done"
          tasks={tasksByStatus.done}
          refreshTasks={refreshTasks}
        />
      </Grid>
    </Grid>
  );
}
