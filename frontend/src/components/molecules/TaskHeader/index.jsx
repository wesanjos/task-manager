import Text from '../../atoms/Text';

export default function TaskHeader({ description }) {
  return (
    <div className="task-header">
      <Text variant="h6" tag="h4" gutterBottom noWrap>
        {description}
      </Text>
    </div>
  );
}
