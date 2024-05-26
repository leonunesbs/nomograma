interface ConeCardTitleProps {
  title: string;
}

export function ConeCardTitle({ title }: ConeCardTitleProps) {
  return <h2 className="text-2xl font-bold">{title}</h2>;
}
