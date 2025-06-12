import Alert from '@mui/material/Alert';

export default function AlertMessage({ message = 'Error', severity }) {
  return (
    <Alert severity={severity} sx={{ mb: 4 }}>
      {message}
    </Alert>
  );
}
