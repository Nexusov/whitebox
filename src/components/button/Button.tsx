import React from 'react';
import s from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'buy' | 'play' | 'default';
  text: string;
}

const Button: React.FC<ButtonProps> = ({ variant, text, ...props }) => {
  const buttonStyle = `${s.button} ${s[`button--${variant}`]}`;

  return (
    <button className={buttonStyle} {...props}>
      {text}
    </button>
  );
};

export default Button;
