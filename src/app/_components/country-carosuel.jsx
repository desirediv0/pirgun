"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const countries = [
  {
    name: "Canada",
    image: "/choose-us-left-img.webp",
    flag: "🇨🇦",
    description: "Experience the beauty of Canada's diverse landscapes and culture"
  },
  {
    name: "Bangladesh",
    image: "/choose-us-left-img.webp",
    flag: "🇧🇩",
    description: "Discover the rich heritage and warmth of Bangladesh"
  },
  {
    name: "United Kingdom",
    image: "/choose-us-left-img.webp",
    flag: "🇬🇧",
    description: "Explore the historic charm of the United Kingdom"
  },
  {
    name: "United States",
    image: "/choose-us-left-img.webp",
    flag: "🇺🇸",
    description: "Adventure through America's vast and varied territories"
  },
  {
    name: "Sri Lanka",
    image: "/choose-us-left-img.webp",
    flag: "🇱🇰",
    description: "Immerse in Sri Lanka's tropical paradise and ancient wisdom"
  },
]

const CountryCard = ({ country, isExpanded, onMouseEnter }) => {
  return (
    <motion.div
      initial={false}
      animate={{ 
        width: isExpanded ? '450px' : '150px',
        backgroundColor: isExpanded && 'transparent',
      }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={onMouseEnter}
      className={`relative h-[400px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out`}
    >
      <Image
        src={country.image}
        alt={country.name}
        fill
        className={`object-cover transition-opacity duration-500 ${
          isExpanded  && 'opacity-100'
        }`}
      />
      <div className="absolute left-4 top-4 rounded-full bg-white/90 p-2 text-xl md:text-2xl">
        {country.flag}
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#87BD2B] to-[#87BD2B]/80 p-6 text-white w-[90%] rounded-2xl mx-auto mb-2 overflow-hidden"
          >
            <h3 className="text-lg md:text-2xl font-bold text-white">{country.name}</h3>
            <p className="mt-2 text-white text-sm md:text-base">{country.description}</p>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#004225' }}
              className="mt-4 rounded-full border border-white px-6 py-2 transition-all text-white"
            >
              Apply Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function CountryImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % countries.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section className="bg-[#004225] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between md:px-16">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold text-[#87BD2B]">
              OUR COUNTRIES
            </span>
            <h2 className="text-4xl font-bold text-white">
              Making Memories Around
              <br />
              World Unforgettable
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex((prev) => (prev - 1 + countries.length) % countries.length)
              }}
              className="rounded-full border border-white p-2 text-white hover:bg-white hover:text-[#004225] transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex((prev) => (prev + 1) % countries.length)
              }}
              className="rounded-full border border-white p-2 text-white hover:bg-white hover:text-[#004225] transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex justify-center gap-4">
            {countries.map((country, index) => (
              <CountryCard
                key={country.name}
                country={country}
                isExpanded={currentIndex === index}
                onMouseEnter={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}