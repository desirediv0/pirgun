"use client"
import React, { useState } from 'react'
import Hero from "../_components/Hero"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Pencil,
  ClipboardCheck,
  Building2,
  Wrench,
  ArrowRight,
  CheckCircle,
  Activity,
  Award
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: "Design Consultancy",
    description: "Precision-driven designs tailored for efficiency, compliance, and aesthetics. Our expert-led design consultancy ensures your space is optimized for maximum productivity.",
    icon: Pencil,
    color: "#89bb25",
    bgColor: "#e8f3d6",
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
    color: "#00498b",
    bgColor: "#e0f0ff",
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
    color: "#89bb25",
    bgColor: "#e8f3d6",
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
    color: "#00498b",
    bgColor: "#e0f0ff",
    features: [
      "Comprehensive maintenance contracts",
      "Proactive servicing and scheduled inspections",
      "On-demand troubleshooting support",
      "Regulatory-compliant maintenance"
    ]
  }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Service() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  return (
    <>
      <Hero bgImage="medical-laboratory.jpg" Heading="Our Services" />

      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#00498b] mb-3"
          >
            Delivering Excellence at Every Step
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-[#89bb25] mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            At Pirgun Air Systems, we offer a complete suite of services designed to streamline project execution,
            ensure compliance, and optimize costs. From concept to commissioning, we take care of everything—so you
            can focus on what matters most.
          </motion.p>
        </div>

        {/* Why Choose Our Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 bg-gray-50 rounded-2xl p-8 shadow-sm"
        >
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-[#00498b]">Why Choose Our Services</h3>
            <div className="w-16 h-1 bg-[#89bb25] mx-auto mt-2" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 rounded-full bg-[#89bb25]/10 mx-auto flex items-center justify-center mb-4"
              >
                <CheckCircle className="h-8 w-8 text-[#89bb25]" />
              </motion.div>
              <h4 className="text-lg font-semibold mb-2">Regulatory Compliance</h4>
              <p className="text-gray-600">All services adhere to industry regulations and standards ensuring safe and compliant facilities.</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 rounded-full bg-[#00498b]/10 mx-auto flex items-center justify-center mb-4"
              >
                <Activity className="h-8 w-8 text-[#00498b]" />
              </motion.div>
              <h4 className="text-lg font-semibold mb-2">Industry Expertise</h4>
              <p className="text-gray-600">25+ years of specialized experience in pharmaceutical, food, and cosmetic facility design and execution.</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 rounded-full bg-[#89bb25]/10 mx-auto flex items-center justify-center mb-4"
              >
                <Award className="h-8 w-8 text-[#89bb25]" />
              </motion.div>
              <h4 className="text-lg font-semibold mb-2">Client Satisfaction</h4>
              <p className="text-gray-600">99% client satisfaction rate with repeat business from most of our valued clients.</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`p-3 rounded-lg`}
                    style={{ backgroundColor: service.bgColor }}
                    animate={{
                      rotate: hoveredCard === idx ? 360 : 0,
                      backgroundColor: hoveredCard === idx ? service.bgColor : service.bgColor + "90"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className={`h-6 w-6`} style={{ color: service.color }} />
                  </motion.div>
                  <h3 className="text-xl font-bold ml-4 text-[#00498b]">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <motion.div
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {service.features.map((feature, fidx) => (
                    <motion.div
                      key={fidx}
                      className="flex items-start"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.3,
                            delay: fidx * 0.1
                          }
                        }
                      }}
                    >
                      <ArrowRight className={`h-5 w-5 mt-0.5 mr-3 flex-shrink-0`} style={{ color: service.color }} />
                      <p className="text-gray-600">{feature}</p>
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 mb-16"
        >
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#00498b]">Our Service Process</h3>
            <div className="w-16 h-1 bg-[#89bb25] mx-auto mt-2" />
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#89bb25]/20 transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {['Consultation', 'Design & Planning', 'Implementation', 'Testing & Validation', 'Handover & Support'].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 p-6 flex justify-center">
                    <motion.div
                      className="relative"
                      whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-64 h-64 rounded-full bg-[#89bb25]/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#89bb25] text-white font-bold relative z-10">
                        {idx + 1}
                      </div>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h4 className="text-xl font-bold text-[#00498b] mb-3">{step}</h4>
                    <p className="text-gray-600">
                      {idx === 0 && "We begin with a thorough consultation to understand your specific needs and requirements."}
                      {idx === 1 && "Our experts design customized solutions tailored to your facility specifications and compliance needs."}
                      {idx === 2 && "Skilled professionals implement the designs with precision and attention to detail."}
                      {idx === 3 && "Rigorous testing ensures all systems meet performance standards and regulatory requirements."}
                      {idx === 4 && "We provide comprehensive training and ongoing support for seamless operations."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-[#89bb25]/10 to-[#00498b]/10 p-10 rounded-2xl"
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#00498b] mb-4"
          >
            Let&apos;s build your success story together
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Ready to transform your facility with our expert services? Contact our team today and take the first step towards excellence.
          </motion.p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#89bb25] to-[#00498b] text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              Get in Touch Today
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </>
  )
}