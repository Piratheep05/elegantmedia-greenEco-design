
import { Button as MuiButton } from '@mui/material';

const Button = ({ 
  children, 
  variant = 'contained', 
  size = 'medium',
  sx = {},
  ...props 
}) => {
  const baseStyles = {
    backgroundColor: '#3aa457',
    borderRadius: '8px',
    textTransform: 'none',
    px: 3,
    py: size === 'small' ? 1 : 1.2,
    fontSize: size === 'small' ? '0.8rem' : '1rem',
    '&:hover': { 
      backgroundColor: '#256b29' 
    },
  };

  return (
    <MuiButton
      variant={variant}
      sx={{
        ...baseStyles,
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;