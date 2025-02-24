"use client"
import React from 'react'
import Hero from "../_components/Hero"
import { motion } from "framer-motion"
import {
  Pencil,
  ClipboardCheck,
  Building2,
  Wrench,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: "Design Consultancy",
    description: "Precision-driven designs tailored for efficiency, compliance, and aesthetics. Our expert-led design consultancy ensures your space is optimized for maximum productivity.",
    icon: Pencil,
    features: [
      "Customized solutions for pharma, food, nutraceutical facilities",
      "Regulatory-compliant designs adhering to standards",
      "Optimized space utilization for productivity",
      "Aesthetic yet functional layouts for scalability"
    ]
  },
  {
    title: "Project Management Consultancy",
    description: "Structured planning and execution to ensure timely, cost-effective project completion. We help businesses stay on track and within budget.",
    icon: ClipboardCheck,
    features: [
      "Comprehensive project oversight from planning to execution",
      "Timely delivery through optimized resource allocation",
      "Budget control and financial planning",
      "Risk mitigation and proactive problem-solving"
    ]
  },
  {
    title: "End-to-End Turnkey Execution",
    description: "Seamless project execution from concept to commissioning. We manage every aspect of your project with no multiple vendors.",
    icon: Building2,
    features: [
      "Complete project execution from planning to handover",
      "Seamless integration for various environments",
      "Regulatory compliance and quality assurance",
      "Cost-effective solutions without compromising quality"
    ]
  },
  {
    title: "AMC & Maintenance Contracts",
    description: "Reliable maintenance solutions to ensure uninterrupted operations and long-term efficiency through scheduled maintenance.",
    icon: Wrench,
    features: [
      "Comprehensive maintenance contracts",
      "Proactive servicing and scheduled inspections",
      "On-demand troubleshooting support",
      "Regulatory-compliant maintenance"
    ]
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Service() {
  return (
    <>
      <Hero bgImage="medical-laboratory.jpg" Heading="Our Services" />

      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Delivering Excellence at Every Step
          </h2>
          <p className="text-gray-600 text-lg">
            At Pirgun Air Systems, we offer a complete suite of services designed to streamline project execution,
            ensure compliance, and optimize costs. From concept to commissioning, we take care of everything—so you
            can focus on what matters most.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#87BD2B]/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-[#87BD2B]" />
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-800">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[#87BD2B] mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Let&apos;s build your success story together
          </h3>
          <Link href={"/contact"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#87BD2B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#87BD2B]/90 transition-colors"
          >
            Get in Touch Today
          </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </>
  )
}