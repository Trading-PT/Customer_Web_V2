import { HTMLAttributes } from 'react';

type CustomBoxProps = HTMLAttributes<HTMLDivElement>;

export function CustomBox({ children, ...rest }: CustomBoxProps) {
  return (
    <div {...rest}>
      {children}
    </div>
  );
}
