"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const AutoCarousel = ({
    images = [],
    interval = 2000,
    className = ""
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Set up auto-rotation timer
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        // Clean up timer on unmount
        return () => clearInterval(timer);
    }, [images.length, interval]);

    if (!images.length) return null;

    return (
        <div className={cn("relative overflow-hidden w-full", className)}>
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${images.length * 100}%`
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative w-full h-full flex-shrink-0"
                    >
                        <Image
                            src={image.src || image}
                            alt={image.alt || `Slide ${index + 1}`}
                            width={image.width || 1200}
                            height={image.height || 600}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={cn(
                            "h-2 w-2 rounded-full",
                            index === currentIndex ? "bg-white" : "bg-white/50"
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

export default AutoCarousel;
