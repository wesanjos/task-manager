import Box from '@mui/material/Box';
import TaskCard from '../TaskCard';
import ListHeader from '../../molecules/ListHeader';
import AddTask from '../../molecules/AddTask';

export default function TaskList({ type, title }) {
  return (
    <section className={`task-list --${type}`}>
      <ListHeader title={title} count={1} />
      <Box sx={{ flexGrow: 1, overflowY: 'auto', my: 2 }}>
        <TaskCard />
      </Box>
      <AddTask variant="outlined" />
    </section>
  );
}
