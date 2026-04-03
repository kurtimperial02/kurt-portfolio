"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";

export default function ProjectCarousel({ images = [], title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, images]);

  return (
    <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/30">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center min-w-full h-56 md:h-64 lg:h-72"
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-contain p-2"
                sizes="(max-width:768px)100vw,50vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
