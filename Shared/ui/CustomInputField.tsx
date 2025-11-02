'use client';

import { InputHTMLAttributes } from 'react';

type CustomInputFieldProps = InputHTMLAttributes<HTMLInputElement>;

export function CustomInputField(props: CustomInputFieldProps) {
  return <input {...props} />;
}
