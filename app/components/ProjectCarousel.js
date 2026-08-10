// src/components/ProjectCarousel.jsx
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
    <div className="relative w-full h-full bg-slate-200 dark:bg-slate-800 transition-colors duration-500">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center min-w-full h-56 md:h-64 lg:h-72"
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
                sizes="(max-width:768px)100vw,50vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
