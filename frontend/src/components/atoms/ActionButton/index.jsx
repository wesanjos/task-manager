import IconButton from '@mui/material/IconButton';

const ActionButton = ({ children, color = 'default', ...props }) => {
  return (
    <IconButton color={color} {...props}>
      {children}
    </IconButton>
  );
};

export default ActionButton;
