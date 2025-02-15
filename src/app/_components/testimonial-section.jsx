"use client"

import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"


const testimonials = [
  {
    quote:
      "Pirgun provided us with a seamless end-to-end turnkey solution for our new pharmaceutical facility. Their deep technical knowledge and attention to compliance made the entire process smooth and hassle-free. From design to execution, everything was managed with precision. We couldn’t have asked for a better partner!",
    author: "Amit Khanna ",
    icon: "",
    avatar: "/coaching-right-img.webp",
    rating: 5,
  },
  {
    quote:
      "We engaged Pirgun for project management consultancy, and they exceeded our expectations. Their structured approach, industry expertise, and problem-solving skills ensured our nutraceutical plant was completed on time and within budget. Their team was always available, proactive, and a pleasure to work with.",
    author: " RAGHAV MITTAL",
    icon: "",
    avatar: "/coaching-right-img.webp",
    rating: 5,
  },
  {
    quote:
      "Setting up a food processing unit requires strict hygiene and regulatory adherence, and Pirgun delivered flawlessly. Their design consultancy helped us create an efficient layout, and their end-to-end execution ensured smooth implementation. Their technical expertise truly sets them apart!",
    author: "Rahul Mehta",
    icon: "",
    avatar: "/coaching-right-img.webp",
    rating: 5,
  },
  {
    quote:
      "Pirgun’s team demonstrated outstanding technical competence in setting up our advanced testing laboratory. They took care of everything—from equipment selection to seamless integration—ensuring compliance with all industry standards. The level of detail and professionalism they bring is exceptional!",
    author: "Dr. Pooja Verma",
    icon: "",
    avatar: "/coaching-right-img.webp",
    rating: 5,
  },
  {
    quote:
      "We signed an AMC & maintenance contract with Pirgun for our medical device manufacturing unit, and it has been a game-changer. Their proactive maintenance approach ensures zero downtime, and their team is always just a call away. Working with Pirgun gives us confidence that our operations will run smoothly year after year.",
    author: "Vikas Rathi ",
    icon: "",
    avatar: "/coaching-right-img.webp",
    rating: 5,
  },
];

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
              <p className="text-xl font-light leading-relaxed">
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
                  {testimonials[currentIndex].rating ? (
                    <div className="flex">
                      {Array.from({
                        length: testimonials[currentIndex].rating,
                      }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500"
                          fill="#eab308"
                        />
                      ))}
                    </div>
                  ) : null}
                
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
                  setIsAutoPlaying(false);
                  prev();
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
                  setIsAutoPlaying(false);
                  next();
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
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
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
  );
}