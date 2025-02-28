"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function InfiniteTextScroll({
    text,
    speed = 15,
    content,
}) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const repeatCount = Math.ceil(width / (content.length * 20)) + 1;
    const repeatedText = Array(repeatCount).fill(content).join(" ");

    const containerVariants = {
        animate: {
            x: [0, -width],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: speed,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="relative overflow-hidden whitespace-nowrap py-14 max-w-7xl mx-auto">
            {/* Gradient Overlays */}
            <div
                className="absolute left-0 top-0 w-[150px] h-full z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0) 100%)",
                }}
            />
            <div
                className="absolute right-0 top-0 w-[150px] h-full z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(270deg, #fff 0%, rgba(255,255,255,0) 100%)",
                }}
            />

            {/* Background scrolling text */}
            <div className="relative">
                <motion.div
                    variants={containerVariants}
                    animate="animate"
                    className="inline-block text-[#e9e9e9] text-[9rem] font-bold"
                >
                    {repeatedText}
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    animate="animate"
                    className="inline-block text-[#e9e9e9] text-[9rem] font-bold"
                >
                    {repeatedText}
                </motion.div>
            </div>

            {/* Foreground static text - updated positioning */}
            <div className="absolute top-5 md:top-3 left-0 w-full h-full flex items-center justify-center z-20">
                <h1 className="text-center text-[#1a1a1a] text-3xl px-4 md:text-5xl font-semibold max-w-3xl mx-auto">
                    {text}
                </h1>
            </div>
        </div>
    );
}