"use client"

import { cn } from "@/lib/utils";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const InfiniteBrand = ({
  brands = [],
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = ""
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedOptions = {
        fast: "20s",
        normal: "40s",
        slow: "80s"
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedOptions[speed] || "40s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mx-auto my-8 px-4 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-8 w-max flex-nowrap items-center",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="w-[150px] h-[100px] flex-shrink-0 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 mx-4"
          >
            <Image
              src={brand}
              width={180}
              height={100}
              alt="Brand Logo"
              className="object-contain w-full h-full hover:opacity-80 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteBrand;