"use client"

import { cn } from "@/lib/utils";
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";

const InfiniteBrand = ({
  brands = [],
  pauseOnHover = true,
  className = ""
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Ensure we have enough brands by duplicating if necessary
  const displayBrands = brands.length >= 8 ? brands : [...brands, ...brands, ...brands];

  const marqueeVariants = {
    animate: {
      x: [0, -50 * displayBrands.length],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: displayBrands.length * 2,
          ease: "linear"
        }
      }
    },
    paused: {
      x: [0, -50 * displayBrands.length],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: displayBrands.length * 2,
          ease: "linear",
          paused: true
        }
      }
    }
  };

  return (
    <div className={cn("relative max-w-7xl mx-auto my-16 px-4", className)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#00498b]">Our Trusted Brands</h2>
        <div className="w-24 h-1 bg-[#89bb25] mx-auto mt-3" />
      </div>

      {/* Carousel container with gradient edges */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
          <motion.div
            className="flex items-center gap-8 py-6"
            variants={marqueeVariants}
            animate={isPaused ? "paused" : "animate"}
          >
            {displayBrands.map((brand, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 px-4"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="">
                  <div className="relative w-[200px] h-[100px]">
                    <Image
                      src={brand}
                      alt={`Brand Logo ${idx + 1}`}
                      fill
                      sizes="300px"
                      className="object-contain"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteBrand;