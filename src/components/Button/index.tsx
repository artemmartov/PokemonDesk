import React from 'react';
import s from './Button.module.scss';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  green?: boolean;
  large?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, green, large }) => {
  const classes: Array<string> = [s.root, green ? s.green : '', large ? s.large : ''];
  return (
    <button type="button" className={classes.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
