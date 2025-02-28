"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

function Case({ brands }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!api || !autoplay) {
      return;
    }

    const scrollSnapList = api.scrollSnapList();
    const intervalId = setInterval(() => {
      if (scrollSnapList.length === 0) return;

      const nextIndex = (current + 1) % scrollSnapList.length;
      api.scrollTo(nextIndex);
      setCurrent(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api, current, autoplay]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: true,
              align: "center",
              skipSnaps: true,
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {brands.map((data, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/3 lg:basis-1/5 p-5"
                >
                  <div className={cn(
                    "h-32 rounded-xl overflow-hidden shadow-md transition-all duration-300",
                    "hover:shadow-xl hover:-translate-y-1 bg-white border border-gray-100"
                  )}>
                    <div className="h-full w-full p-4 flex items-center justify-center">
                      <Image
                        src={data}
                        width={120}
                        height={80}
                        alt={`Brand partner ${index + 1}`}
                        className="object-contain w-auto h-auto max-h-20"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export { Case };
