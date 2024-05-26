import { ReactNode } from 'react';

interface ConeCardRootProps {
  children: ReactNode;
}

export function ConeCardRoot({ children }: ConeCardRootProps) {
  return (
    <div className="gap-4 card card-bordered card-compact h-fit">
      <div className="card-body">{children}</div>
    </div>
  );
}
