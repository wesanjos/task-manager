import Text from '../../atoms/Text';

export default function TaskBoardHeader({ title = 'Tarefas' }) {
  return (
    <div className="task-board-header">
      <Text variant="h5" tag="h1" fontWeight="bold" sx={{ my: 3 }}>
        {title}
      </Text>
    </div>
  );
}
