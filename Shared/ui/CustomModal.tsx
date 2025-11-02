'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type CustomModalProps = {
  isOpen: boolean;
  children: ReactNode;
  container?: Element;
};

export function CustomModal({ isOpen, children, container }: CustomModalProps) {
  if (!isOpen) {
    return null;
  }

  const target = container ?? document.body;
  return createPortal(children, target);
}
