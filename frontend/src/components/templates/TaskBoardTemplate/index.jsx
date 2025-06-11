import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TaskList from '../../organisms/TaskList';
import TaskBoardHeader from '../../molecules/TaskBoardHeader';

export default function TaskBoardTemplate() {
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
        <Grid
          container
          direction="row"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Grid item size={4}>
            <TaskList type="todo" title="To Do" />
          </Grid>
          <Grid item size={4}>
            <TaskList type="doing" title="Doing" />
          </Grid>
          <Grid item size={4}>
            <TaskList type="done" title="Done" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
