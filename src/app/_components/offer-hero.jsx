"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"

export default function OfferHero() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#87BD2B]">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h2 className="mb-4 text-3xl font-bold">Get our best offers quickly</h2>
          <p className="mb-6 text-gray-600">
            Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry&apos;s standard dummy
          </p>
          <Link
            href="#contact"
            className="inline-flex w-fit items-center rounded-full bg-[#87BD2B] px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
          >
            Contact us
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="ml-2"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px]"
        >
          <Image src="/placeholder.svg" alt="Travel essentials" fill className="rounded-lg object-cover" />
        </motion.div>
      </div>
    </section>
  )
}

