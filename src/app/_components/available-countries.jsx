"use client"

import { ArrowRight, Check, Map } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const countries = [
  {
    name: "Canada",
    flag: "/flag/img1.webp",
    features: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
  },
  {
    name: "Bangladesh",
    flag: "/flag/img3.webp",
    features: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
  },
  {
    name: "Australia",
    flag: "/flag/img2.webp",
    features: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
  },
  {
    name: "United Kingdom",
    flag: "/flag/img4.webp",
    features: ["Mistakes To Avoid", "Your Startup", "Knew About Fonts"],
  },
]

export function AvailableCountries() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 relative ">
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

      <div className="grid md:grid-cols-4 gap-6">
          {countries.map((country, index) => (
          <motion.div 
      key={index} 
      className="border backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-shadow
        min-h-[300px] flex flex-col justify-between"
      whileHover="hover"
    >
      <div className="flex items-center gap-4 mb-8">
        <motion.div
          variants={{
            hover: {
              rotate: 360,
            }
          }}
          transition={{ 
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
          className="w-14 h-14 relative"
        >
          <Image
            src={country.flag}
            alt={`${country.name} flag`}
            fill
            className="rounded-full object-cover"
          />
        </motion.div>
        <h3 className="text-xl font-semibold text-[#004D2C]">{country.name}</h3>
      </div>
      <ul className="space-y-4">
        {country.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-gray-600">
            <Check className="w-5 h-5 text-[#7AB641]" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
    ))}
      </div>

    </section>
  )
}

