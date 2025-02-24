"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown, Router } from "lucide-react"
import { useRouter } from "next/navigation"


const slides = [
  {
    title: "Joy of Pleasant Flow – Engineering Excellence for Every Industry",
    description: "Enhancing environments with cutting-edge HVAC, clean room, and facility solutions for seamless efficiency.",
    cta: "Explore",
  },
  {
    title: "Prigun Air Systems – Where Innovation Meets the Joy of Pleasant Flow",
    description: "Delivering precision-engineered solutions to create safe, compliant, and energy-efficient spaces.",
    cta: "Explore",
  },
]

const stats = [
  { number: "100+", label: "Complete Projects" },
  { number: "50+", label: "Team Members" },
  { number: "200+", label: " Cities Serving Capabilities  " },
  { number: "99%", label: "Happy Customers" },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact")
    //  router.push("/contact");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="relative h-screen w-full">
        <div className="relative h-screen w-full">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
          >
            <source src="/bannner-vd2.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00488D]/60 to-[#87BD2B]/60 will-change-transform" />

          {/* Content */}
          <div className="relative h-full w-full">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="container mx-auto flex h-full flex-col items-start justify-center px-4 text-white"
            >
              <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                {slides[currentSlide].title}
              </h1>
              <p className="mb-8 max-w-2xl text-lg md:text-xl">
                {slides[currentSlide].description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-[#87BD2B] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#87BD2B]/90"
              >
                {slides[currentSlide].cta}
              </motion.button>
            </motion.div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentSlide === index ? "w-4 bg-[#87BD2B]" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <ChevronDown className="h-8 w-8 text-white" />
            </motion.div>

            {/* Contact Button */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              className="absolute right-8 top-8 rounded-full bg-[#00488D] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#00488D]/90"
            >
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:w-[80%] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#87BD2B] rounded-2xl p-8"
          >
            <div className="grid grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {stat.number}
                  </h3>
                  <p className="text-white/90 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

