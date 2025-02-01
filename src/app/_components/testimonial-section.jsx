"use client"

import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero minima placeat reiciendis optio corrupti molestiae ducimus dolorem, quos ipsa fugit ut nihil tenetur,",
    author: "Sarah Johnson",
    role: "International Student",
    avatar: "/coaching-right-img.webp",
    rating: 5
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero minima placeat reiciendis optio corrupti molestiae ducimus dolorem, quos ipsa fugit ut nihil tenetur",
    author: "Michael Chen",
    role: "Business Professional",
    avatar: "/coaching-right-img.webp",
    rating: 5
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero minima placeat reiciendis optio corrupti molestiae ducimus dolorem, quos ipsa fugit ut nihil tenetur",
    author: "Emma Thompson",
    role: "Healthcare Professional",
    avatar: "/coaching-right-img.webp",
    rating: 5
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero minima placeat reiciendis optio corrupti molestiae ducimus dolorem, quos ipsa fugit ut nihil tenetur",
    author: "David Rodriguez",
    role: "Software Engineer",
    avatar: "/coaching-right-img.webp",
    rating: 5
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 px-8">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-2xl overflow-hidden"
        >
          <Image
            src="/img2.png"
            alt="Happy clients"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="bg-[#7AB641] text-white p-8 md:p-12 rounded-2xl relative">
          <Quote className="w-12 h-12 mb-6 opacity-20" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-2xl font-light leading-relaxed">
                {testimonials[currentIndex].quote}
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-xl">
                    {testimonials[currentIndex].author}
                  </h3>
                  <p className="text-white/80">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between pt-6">
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsAutoPlaying(false)
                  prev()
                }}
                className="p-4 bg-white rounded-full hover:bg-white/90 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5 text-[#7AB641]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsAutoPlaying(false)
                  next()
                }}
                className="p-4 bg-white rounded-full hover:bg-white/90 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5 text-[#7AB641]" />
              </motion.button>
            </div>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index ? "w-6 bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}