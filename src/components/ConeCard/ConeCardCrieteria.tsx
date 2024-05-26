import { ReactNode } from 'react';

interface ConeCardCrieteriaProps {
  title: ReactNode;
  children: ReactNode;
}

export function ConeCardCrieteria({ title, children }: ConeCardCrieteriaProps) {
  return (
    <div className="text-center py-8">
      <strong className="">{title}</strong>
      {children}
    </div>
  );
}
