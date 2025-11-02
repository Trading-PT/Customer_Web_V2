'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

type CustomDropdownButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  trigger: ReactNode;
  menu?: ReactNode;
};

export function CustomDropdownButton({ trigger, menu, ...rest }: CustomDropdownButtonProps) {
  return (
    <div>
      <button {...rest}>{trigger}</button>
      {menu}
    </div>
  );
}
