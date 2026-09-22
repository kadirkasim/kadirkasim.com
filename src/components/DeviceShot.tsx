import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export function DeviceShot({ src, alt, className = "", sizes }: Props) {
  return (
    <div
      className={`relative w-[min(100%,17rem)] overflow-hidden rounded-[2.35rem] bg-[#1d1d1f] p-[0.62rem] shadow-[0_28px_70px_-28px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-[0.55rem] z-10 h-5 w-[5.4rem] -translate-x-1/2 rounded-full bg-black/85" />
      <Image
        src={src}
        alt={alt}
        width={430}
        height={932}
        sizes={sizes ?? "(min-width: 1024px) 272px, 55vw"}
        className="h-auto w-full rounded-[1.8rem] bg-black"
      />
    </div>
  );
}

export function ShotStack({
  shots,
  alt,
}: {
  shots: string[];
  alt: string;
}) {
  const [front, ...rest] = shots;
  if (!front) return null;

  return (
    <div className="relative mx-auto flex h-[28rem] w-full max-w-[34rem] items-end justify-center md:h-[32rem]">
      {rest[1] ? (
        <div className="absolute left-[4%] top-8 hidden w-[42%] rotate-[-11deg] opacity-90 md:block">
          <DeviceShot src={rest[1]} alt="" className="w-full" />
        </div>
      ) : null}
      {rest[0] ? (
        <div className="absolute right-[3%] top-4 hidden w-[42%] rotate-[10deg] opacity-90 md:block">
          <DeviceShot src={rest[0]} alt="" className="w-full" />
        </div>
      ) : null}
      <div className="relative z-10 w-[58%] max-w-[17rem]">
        <DeviceShot src={front} alt={alt} className="w-full" />
      </div>
    </div>
  );
}
