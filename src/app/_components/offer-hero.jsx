"use client"

import Image from "next/image"
import { Map } from "lucide-react"
import { motion } from "framer-motion"
import Form from "./form"

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
              <span className="text-[#004D2C] font-semibold uppercase tracking-wide text-xs">Contact Us</span>
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
              Reach out to our expert team for professional HVAC, clean room, and facility solutions. We&apos;re ready to help you create efficient, compliant, and sustainable environments.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-[#87BD2B]/20 z-0"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-[#004D2C]/10 z-0"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />

            <motion.div
              className="relative h-full min-h-[500px] overflow-hidden rounded-2xl shadow-xl z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#004D2C]/40 to-transparent z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <Image
                src="/img5.png"
                alt="Professional HVAC services"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />

              <motion.div
                className="absolute bottom-6 left-6 z-20 max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-white font-bold text-xl mb-2">Expert Solutions</h3>
                <p className="text-white/90 text-sm">Delivering precision engineering for your facility needs</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content Section - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Form />
          </motion.div>
        </div>
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
  )
}