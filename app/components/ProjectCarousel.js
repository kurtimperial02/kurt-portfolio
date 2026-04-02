"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";

export default function ProjectCarousel({ images, title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Auto re-init if images change
  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, images]);

  return (
    <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="relative h-48 min-w-full md:h-56 lg:h-64">
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-cover"
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
