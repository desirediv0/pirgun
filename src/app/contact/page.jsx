"use client"
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User, MessageSquare, Building } from "lucide-react";
import React from 'react';
import Hero from '../_components/Hero';
import Image from "next/image";


const contactInfo = [
  {
    icon: Mail,
    title: "Email Address",
    value: "info@pirgunair.com",
    color: "#87BD2B"
  },

  {
    icon: MapPin,
    title: "Office Location",
    value: "Dwarka, New Delhi, India",
    color: "#87BD2B"
  }
];

export default function Contact() {
  return (
    <>
      <Hero bgImage="breadcrumb.png" Heading="Contact Us" />

      <section className="bg-gradient-to-b from-white to-gray-50">
        {/* Main Contact Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Your Vision, Our Expertise
            </h1>
            <p className="text-gray-600 text-lg">
              Have questions or need assistance? We&apos;re here to help you create the perfect solution for your needs.

            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto`}
                  style={{ backgroundColor: `${info.color}15` }}>
                  <info.icon className="w-6 h-6" style={{ color: info.color }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-center">{info.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="/contact-left-img.png"
                width={600}
                height={600}
                alt="Contact Us"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                From Idea to Execution – Let&apos;s Make It Happen
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#87BD2B] focus:ring-2 focus:ring-[#87BD2B]/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                      <User className="absolute right-3 top-3 text-gray-400" size={20} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#87BD2B] focus:ring-2 focus:ring-[#87BD2B]/20 outline-none transition-all"
                        placeholder="Your email"
                      />
                      <Mail className="absolute right-3 top-3 text-gray-400" size={20} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Company</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#87BD2B] focus:ring-2 focus:ring-[#87BD2B]/20 outline-none transition-all"
                      placeholder="Your company name"
                    />
                    <Building className="absolute right-3 top-3 text-gray-400" size={20} />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <div className="relative">
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#87BD2B] focus:ring-2 focus:ring-[#87BD2B]/20 outline-none transition-all min-h-[120px]"
                      placeholder="Your message"
                    />
                    <MessageSquare className="absolute right-3 top-3 text-gray-400" size={20} />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#87BD2B] to-[#57830d] text-white font-semibold hover:opacity-90 transition-all duration-300"
                >
                  Let&apos;s Start Your Project
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full h-[450px] mt-16 rounded-t-md overflow-hidden"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.234350710512!2d77.04311527528746!3d28.592745575686497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bd8f405bcf1%3A0x9e601372145832d0!2sDesire%20Div%20-%20Website%20Designing%20Company%20in%20Dwarka!5e0!3m2!1sen!2sin!4v1739439923688!5m2!1sen!2sin" width="
         100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
      </section>
    </>
  );
}