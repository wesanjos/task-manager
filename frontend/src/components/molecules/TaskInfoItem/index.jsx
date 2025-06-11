import ListItem from '@mui/material/ListItem';
import Text from '../../atoms/Text';

export default function TaskInfoItem({ icon, text, className }) {
  return (
    <ListItem className={`item ${className || ''}`}>
      {icon}
      <Text variant="body2" tag="span" className="item-text">
        {text}
      </Text>
    </ListItem>
  );
}
