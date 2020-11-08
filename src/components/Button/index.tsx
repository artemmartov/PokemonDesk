import React from 'react';
import s from './Button.module.scss';

export enum Color {
  yellow = '#f2cb07',
  green = '#73d677',
}

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  size?: number;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
