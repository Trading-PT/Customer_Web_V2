'use client';

import { ButtonHTMLAttributes } from 'react';

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function CustomButton({ children, ...rest }: CustomButtonProps) {
  return <button {...rest}>{children}</button>;
}
