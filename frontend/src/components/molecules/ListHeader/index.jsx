import Chip from '@mui/material/Chip';
import Text from '../../atoms/Text';

export default function ListHeader({ title, count }) {
  return (
    <div className="list-header">
      <Text variant="subtitle1" tag="h3" fontWeight="medium">
        {title}
      </Text>
      <Chip label={count} size="small" color="default" />
    </div>
  );
}