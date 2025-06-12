import Text from '../../atoms/Text';
import ActionButton from '../../atoms/ActionButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function TaskHeader({ description }) {
  return (
    <div className="task-header">
      <Text variant="h6" tag="h4" gutterBottom noWrap>
        {description}
      </Text>
      {/* <div className="task-actions">
        <ActionButton aria-label="edit" onClick={onEdit}>
          <ModeEditOutlineOutlinedIcon color="primary" />
        </ActionButton>
        <ActionButton aria-label="delete" onClick={onDelete}>
          <DeleteOutlinedIcon color="error" />
        </ActionButton>
      </div> */}
    </div>
  );
}
