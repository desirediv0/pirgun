"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const visaTypes = [
  {
    title: "Business Visa",
    description: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    image: "/placeholder.svg",
    icon: "🏢",
  },
  {
    title: "Working Visa",
    description: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    image: "/placeholder.svg",
    icon: "💼",
  },
  {
    title: "Student Visa",
    description: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    image: "/placeholder.svg",
    icon: "🎓",
  },
  {
    title: "Tourist Visa",
    description: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    image: "/placeholder.svg",
    icon: "✈️",
  },
]

export default function VisaCategories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold text-[#87BD2B]">VISA CATEGORY</span>
          <h2 className="text-4xl font-bold text-[#004225]">
            Seeking Adventure Thrills
            <br />
            and Excitement Await
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visaTypes.map((visa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group rounded-lg bg-white p-6 shadow-lg transition-all"
            >
              <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                <Image src={visa.image || "/placeholder.svg"} alt={visa.title} fill className="object-cover" />
              </div>
              <h3 className="mb-2 flex items-center text-xl font-semibold">
                <span className="mr-2">{visa.icon}</span>
                {visa.title}
              </h3>
              <p className="mb-4 text-gray-600">{visa.description}</p>
              <Link
                href="#"
                className="inline-flex items-center text-[#87BD2B] transition-all group-hover:translate-x-2"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

