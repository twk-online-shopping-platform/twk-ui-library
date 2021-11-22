import React from 'react';
import './button.css';
import '../../assets/css/common.css'

interface ButtonProps {
  bgColor?: 'blue' | 'white' | 'black' | 'red' | 'green';
  txtColor?: 'blue' | 'white' | 'black' | 'red' | 'green';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  size = 'medium',
  bgColor,
  txtColor,
  label,
  ...props
}: ButtonProps) => {
  const background: string = ['open-proj-btn',bgColor].join('-');
  const color: string = ['open-proj-txt',txtColor].join('-');
  
  return (
    <button
      type="button"
      className={[color, background].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
