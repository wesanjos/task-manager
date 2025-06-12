import Grid from '@mui/material/Grid';
import TaskList from '../../organisms/TaskList';

export default function TaskBoardGrid({ tasksByStatus, refreshTasks }) {
  return (
    <Grid
      container
      direction="row"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Grid item xs={12} sm={4}>
        <TaskList
          type="todo"
          title="To Do"
          tasks={tasksByStatus.todo}
          refreshTasks={refreshTasks}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TaskList
          type="doing"
          title="Doing"
          tasks={tasksByStatus.doing}
          refreshTasks={refreshTasks}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
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
