import Typography from '@mui/material/Typography';

const Text = ({ children, variant = 'body1', tag = 'h1', ...props }) => {
  return (
    <Typography variant={variant} component={tag} {...props}>
      {children}
    </Typography>
  );
};

export default Text;
