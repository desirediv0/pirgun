"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const countries = [
  {
    name: "Canada",
    image: "/placeholder.svg",
    flag: "🇨🇦",
  },
  {
    name: "Bangladesh",
    image: "/placeholder.svg",
    flag: "🇧🇩",
  },
  {
    name: "United Kingdom",
    image: "/placeholder.svg",
    flag: "🇬🇧",
  },
  {
    name: "United States",
    image: "/placeholder.svg",
    flag: "🇺🇸",
  },
  {
    name: "Sri Lanka",
    image: "/placeholder.svg",
    flag: "🇱🇰",
  },
]

export default function CountryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % countries.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % countries.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + countries.length) % countries.length)
  }

  return (
    <section className="bg-[#004225] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold text-[#87BD2B]">OUR COUNTRIES</span>
            <h2 className="text-4xl font-bold text-white">
              Making Memories Around
              <br />
              World Unforgettable
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="rounded-full border border-white p-2 text-white transition-colors hover:bg-white hover:text-[#004225]"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full border border-white p-2 text-white transition-colors hover:bg-white hover:text-[#004225]"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-6">
            <AnimatePresence mode="wait">
              {countries.map((country, index) => {
                const position = (index - currentIndex + countries.length) % countries.length
                return (
                  <motion.div
                    key={country.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: position === 0 ? 1 : 0.8,
                      opacity: position <= 2 ? 1 : 0,
                      x: `${(position - 1) * 100}%`,
                    }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative min-w-full shrink-0 md:min-w-[33.333%]"
                  >
                    <div className="relative h-[400px] overflow-hidden rounded-lg">
                      <Image
                        src={country.image || "/placeholder.svg"}
                        alt={country.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white p-2 text-2xl">{country.flag}</div>
                      {position === 0 && (
                        <div className="absolute bottom-0 left-0 right-0 bg-[#87BD2B] p-6 text-white">
                          <h3 className="text-2xl font-bold">{country.name}</h3>
                          <p className="mt-2">
                            Lorem Ipsum is simply dummy text the printing and provide best visa ever
                          </p>
                          <button className="mt-4 rounded-full border border-white px-6 py-2 transition-colors hover:bg-white hover:text-[#87BD2B]">
                            Apply Now
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

