import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';

export default function AddTask({ variant = 'contained' }) {
  return <Button variant={variant} size="small" startIcon={<AddOutlinedIcon />}>Adicionar Tarefa</Button>;
}
