import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';

export default function AddTask({ variant = 'contained', onAddTask }) {
  return (
    <Button
      variant={variant}
      size="small"
      startIcon={<AddOutlinedIcon />}
      onClick={onAddTask}
    >
      Adicionar Tarefa
    </Button>
  );
}
