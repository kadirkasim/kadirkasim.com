import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ScreenStill({ src, alt, className = "", sizes, priority }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={430}
      height={932}
      priority={priority}
      sizes={sizes ?? "(min-width: 768px) 240px, 72vw"}
      className={`h-auto w-full rounded-[1.1rem] border border-line/80 bg-paper shadow-[0_24px_60px_-40px_rgba(18,17,16,0.45)] ${className}`}
    />
  );
}
