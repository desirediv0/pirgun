"use client"

import Image from "next/image"
import { Map } from "lucide-react"
import { motion } from "framer-motion"
import Form from "./form"
import { NewForm } from "./new-form"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}


export default function HeroSection() {

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-white to-[#f5f9f1]">
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Map className="w-6 h-6 text-[#87BD2B]" />
              <span className="text-[#004D2C] font-semibold uppercase tracking-wide text-xs">
                Contact Us
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl font-bold text-[#004D2C] max-w-2xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact Us Today
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-[#87BD2B] mb-6"
            />
            <motion.p
              className="text-gray-600 max-w-xl mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Reach out to our expert team for professional HVAC, clean room,
              and facility solutions. We&apos;re ready to help you create
              efficient, compliant, and sustainable environments.
            </motion.p>
          </motion.div>
        </div>
        <NewForm />
        {/* form animated import */}
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#87BD2B]/10 -z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[#004D2C]/5 -z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </section>
  );
}