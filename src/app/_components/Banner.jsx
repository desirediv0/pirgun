"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"


const slides = [
  {
    title: "Grow Faster. Reach Reliably. Scale Efficiently.",
    description: "Data Center solutions crafted to unlock your digital potential",
    cta: "Explore Data Centers",
  },
  {
    title: "Get a peek into our sustainability vision",
    description: "Discover how we're building a greener future",
    cta: "Explore",
  },
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute inset-0 h-full w-full object-cover">
        <source src="/pirgun.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00488D]/60 to-[#87BD2B]/60" />

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
          <h1 className="mb-4 max-w-3xl text-5xl font-bold leading-tight md:text-6xl">{slides[currentSlide].title}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">{slides[currentSlide].description}</p>
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
          className="absolute right-8 top-8 rounded-full bg-[#00488D] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#00488D]/90"
        >
          Contact Us
        </motion.button>
      </div>
    </div>
  )
}

