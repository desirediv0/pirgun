"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

function Case({ brands }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000);
  }, [api, current]);

  return (
    <div className="w-full py-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-10">
          <Carousel setApi={setApi} className="w-full">

            <CarouselContent>
              {brands.map((data, index) => (
                <CarouselItem className="basis-1/5" key={index}>
                  <Image src={data} width={100} height={100} alt="logos" className="object-cover" />
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
