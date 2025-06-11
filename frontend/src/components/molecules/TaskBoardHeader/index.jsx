import Text from '../../atoms/Text';
import AddTask from '../../molecules/AddTask';

export default function TaskBoardHeader({ title }) {
  return (
    <div className="task-board-header">
      <Text variant="h5" tag="h1" fontWeight="bold" sx={{ my: 3 }}>
        {title}
      </Text>
      {/* <AddTask /> */}
    </div>
  );
}