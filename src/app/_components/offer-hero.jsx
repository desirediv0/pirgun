"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, ArrowRight, Map } from "lucide-react"
import { motion } from "framer-motion"


const stats = [
  { number: "10k+", label: "Complete Projects" },
  { number: "20+", label: "Team Members" },
  { number: "5k+", label: "Winning Awards" },
  { number: "100+", label: "Happy Clients" },
]

export default function HeroSection() {
  return (
    <section className="relative py-16 overflow-hidden">

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Map className="w-6 h-6 text-[#004D2C]" />
              <span className="text-[#004D2C] font-semibold uppercase tracking-wide text-xs">Available Countries</span>
            </div>
            <h2 className="text-4xl  font-bold text-[#004D2C] max-w-2xl">
              Urban Escapes City
              <br />
              Hopping Adventures
            </h2>
          </div>
          <button className="bg-[#7AB641] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#7AB641]/90 transition-colors">
            View More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full md:w-2/5"
          >
            <div className="relative h-full min-h-[500px] overflow-hidden">
              <Image
                src="/faq-info-img.webp"
                alt="Travel essentials"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Right Content Section */}
          <div className="w-full md:w-3/5 space-y-5">
            {/* Offer Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden "
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#87BD2B]">
                <Globe className="h-8 w-8 text-white" />
              </div>

              <h2 className="mt-6 text-xl  font-bold text-[#1E293B]">
                Get our best offers quickly
              </h2>

              <p className="mt-4 text-gray-600 w-1/2 text-sm">
                Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
                has been the industry&apos;s standard dummy
              </p>

              <Link
                href="#contact"
                className="mt-6 inline-flex items-center rounded-full bg-[#87BD2B] px-6 py-3 
                font-semibold text-white transition-all hover:bg-[#78a827] hover:shadow-lg"
              >
                Contact us
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Link>
              <Image src={"/faq-left-img.webp"} alt="Travel essentials" className="object-cover
              absolute -bottom-16 -right-2 " priority quality={100}
                width={300} height={300}
              />

            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#87BD2B] rounded-2xl p-8 md:h-1/4"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                    <p className="text-white/90 text-sm mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}