'use client';

import { TextareaHTMLAttributes } from 'react';

type CustomTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function CustomTextArea(props: CustomTextAreaProps) {
  return <textarea {...props} />;
}
