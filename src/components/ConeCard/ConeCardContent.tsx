import { ReactNode } from 'react';

interface ConeCardContentProps {
  children: ReactNode;
}

export function ConeCardContent({ children }: ConeCardContentProps) {
  return (
    <>
      <h1>ConeCardContent</h1>
      {children}
    </>
  );
}
