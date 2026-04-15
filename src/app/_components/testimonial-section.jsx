"use client"

import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"


const testimonials = [
  {
    quote:
      "Pirgun has been our one-stop solution for every project challenge. Their expertise and innovation helped us achieve a specialized technology at a minimal cost. With a structured approach and commitment, they ensure seamless execution. Simply pay on time, and they deliver excellence. Highly recommended for Turnkey Clean Room solutions.",
    author: "Mr. Kapil Mittal, CSO, Power Gummies",
    icon: "",
    avatar: "/testimonial1.png",
    isLogo: false,
    rating: 5,
  },
  {
    quote:
      "Pirgun has been a reliable partner for our Project requirements. Their team demonstrates strong technical expertise, timely execution, and a highly professional approach. The project was delivered smoothly with proper coordination and attention to detail. We appreciate their commitment to quality and would confidently recommend them for turnkey air system solutions.",
    author: "Team HealthKart",
    icon: "",
    avatar: "/logos/hk.png",
    isLogo: true,
    rating: 5,
  },
  {
    quote:
      "As a non-technical person, managing this project seemed overwhelming, but Pirgun made it seamless. They streamlined everything on a turnkey basis, ensuring cost savings and top-quality execution. During the drug audit, officials praised our plant as the best in North India. Truly a game-changer—highly recommended!",
    author: "Dharamveer, Director, HHA Healthcare (Kosi)",
    icon: "",
    avatar: "/reviews (1).png",
    isLogo: false,
    rating: 5,
  },
  {
    quote:
      "Working with Pirgun has been a really smooth experience for us. The team is professional, responsive, and genuinely committed to delivering quality work. What we appreciate most is their practical approach and how well they stick to timelines without compromising on execution. It's been a dependable partnership, and we look forward to working together on more projects.",
    author: "Manu Chaudhary, Director, Laurs & Bridz",
    icon: "",
    avatar: "/logos/laurs.png",
    isLogo: true,
    rating: 5,
  },
  {
    quote:
      "Being a CA, I had no technical knowledge about setting up a tofu manufacturing unit. Without Pirgun, the project could have gone wrong. They guided us at every step, aligned everything as per expert standards, and ensured seamless execution. Now, we proudly have North India's first-of-its-kind tofu factory!",
    author: "Mr. Mohit Khanna, Director, Jiwanmitra Foods",
    icon: "",
    avatar: "/testimonial4.png",
    isLogo: false,
    rating: 5,
  },
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 2000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className=" px-8">
      {/* <h1 className="md:text-5xl text-4xl  "> </h1> */}

      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-2xl overflow-hidden"
        >
          <Image
            src="/testimonial.png"
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
                {testimonials[currentIndex].isLogo ? (
                  <div className="bg-white rounded-xl p-2 flex items-center justify-center" style={{ width: 100, height: 60 }}>
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      width={90}
                      height={50}
                      className="object-contain"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                )}
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
                  className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "w-6 bg-white" : "bg-white/50"
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