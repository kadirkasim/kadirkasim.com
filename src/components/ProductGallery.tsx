"use client";

import Image from "next/image";
import { useRef } from "react";

import type { UiCopy } from "@/lib/ui";

type Props = {
  title: string;
  shots: string[];
  ui: UiCopy;
};

export function ProductGallery({ title, shots, ui }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.72, 320);
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  if (!shots.length) return null;

  return (
    <section className="border-b border-line py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-[1180px] items-end justify-between gap-4 px-5 sm:px-8">
        <div>
          <p className="eyebrow">{ui.gallery}</p>
          <p className="mt-3 text-[14px] text-muted">{ui.galleryHint}</p>
        </div>
        <div className="flex gap-2 md:hidden">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-elevated text-ink transition-colors hover:border-white/20 hover:bg-[#111]"
            aria-label={ui.prevShots}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-elevated text-ink transition-colors hover:border-white/20 hover:bg-[#111]"
            aria-label={ui.nextShots}
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-8 px-5 sm:px-8">
        <div
          ref={scrollerRef}
          className="mx-auto flex w-full max-w-[1180px] snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center md:gap-6 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {shots.map((src, i) => (
            <figure
              key={src}
              className="relative w-[min(72vw,16.5rem)] shrink-0 snap-center overflow-hidden rounded-[1.5rem] border border-line bg-elevated p-3 md:w-64"
            >
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.1rem] bg-void">
                <Image
                  src={src}
                  alt={`${title} screen ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 280px, 72vw"
                  className="object-contain object-center"
                />
              </div>
              <figcaption className="mt-3 text-center text-[12px] text-faint">
                {String(i + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
