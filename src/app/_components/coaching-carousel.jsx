"use client"

import { ArrowLeft, ArrowRight, GraduationCap } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const coachingData = [
  {
    title: "Lupin Pharmaceuticals",
    description: "There are many variati of passages of engineer",
    image: "/client/lupin.jpeg",
  },
  {
    title: "Hamdard",
    description: "There are many variati of passages of engineer",
    image: "/client/hamdard.jpeg",
  },
  {
    title: "Jubilant Infrastructure",
    description: "There are many variati of passages of engineer",
    image: "/client/jubilant.jpeg",
  },
  {
    title: "Akums",
    description: "There are many variati of passages of engineer",
    image: "/client/akums.jpeg",
  },
]

export function CoachingCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coachingData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coachingData.length) % coachingData.length)
  }


  return (
    <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex w-full items-center justify-between flex-col md:flex-row px-3 mb-8 md:mb-12">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-[#004D2C]" />
            <span className="text-[#004D2C] font-semibold uppercase tracking-wide text-xs">
              Supporting Coaching
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#004D2C] max-w-2xl">
            A Tapestry of Experiences Cultural Encounters
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="p-3 md:p-4 rounded-full border border-[#004D2C]/20 hover:bg-[#004D2C] hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 md:p-4 rounded-full border border-[#004D2C]/20 hover:bg-[#004D2C] hover:text-white transition-all duration-300"
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {coachingData.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {coachingData.map((coaching, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={coaching.image}
                        alt={coaching.title}
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-[#004D2C] mb-2">
                            {coaching.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            {coaching.description}
                          </p>
                        </div>
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center w-12 h-12 rounded-lg 
                                group-hover:bg-[#87BD2B]  transition-all duration-300 border border-[#87BD2B]"
                            >
                            <ArrowRight className="h-5 w-5 group-hover:text-white transition-all duration-300 -rotate-45 text-[#87BD2B] group-hover:rotate-0" />
                    </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
