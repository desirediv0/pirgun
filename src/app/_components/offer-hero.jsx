"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, Map } from "lucide-react"
import { motion } from "framer-motion"
import Form from "./form"


export default function HeroSection() {
  return (
    <section className="relative py-16 overflow-hidden">

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Map className="w-6 h-6 text-[#004D2C]" />
              <span className="text-[#004D2C] font-semibold uppercase tracking-wide text-xs">Contact Us</span>
            </div>
            <h2 className="text-4xl  font-bold text-[#004D2C] max-w-2xl">
              Contact Us Today
            </h2>
          </div>
          {/* <button className="bg-[#7AB641] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#7AB641]/90 transition-colors">
            View More
            <ArrowRight className="w-5 h-5" />
          </button> */}
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
          {/* Left Image Section */}
              <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative "
          >
            <div className="relative h-full min-h-[500px] overflow-hidden">
              <Image
                src="/img5.png"
                alt="Travel essentials"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
              </motion.div>

          {/* Right Content Section */}
             <Form />
        
        </div>
      </div>
    </section>
  )
}