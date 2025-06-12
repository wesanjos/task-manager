import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading({ message = 'Carregando...' }) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        my: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <CircularProgress />
      {message}
    </Box>
  );
}
