import React, { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import style from './button.module.css';

const { primary, outline } = style;

type ButtonVariants = 'outline' | 'primary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariants;
  onClick?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
}

const getVariant = (variant: ButtonVariants) => {
  switch (variant) {
    case 'outline':
      return outline;
    case 'primary':
      return primary;
    default:
      return primary;
  }
};

const Button = ({
  children,
  className,
  variant = 'primary',
  onClick,
  ref,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const classes = cn('px-4 py-2 rounded', getVariant(variant), className);

  return (
    <button onClick={onClick} ref={ref} className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
