'use client';

import { InputHTMLAttributes } from 'react';

type CustomCheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export function CustomCheckbox({ children, ...rest }: CustomCheckboxProps) {
  return (
    <label>
      <input type="checkbox" {...rest} />
      <span>{children}</span>
    </label>
  );
}
