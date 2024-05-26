import Image from 'next/image';

interface ConeCardImageProps {
  src: string;
  alt: string;
}

export function ConeCardImage({ src, alt }: ConeCardImageProps) {
  return (
    <div className="flex justify-center">
      <Image src={src} alt={alt} width={250} height={250} />
    </div>
  );
}
