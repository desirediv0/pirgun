import React from 'react'
import {  motion } from "framer-motion";
import { Building, Mail, MessageSquare, User } from 'lucide-react';
function Form() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Reach Out to Us Today!
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
              <User
                className="absolute right-3 top-3 text-gray-400"
                size={20}
              />
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
              <Mail
                className="absolute right-3 top-3 text-gray-400"
                size={20}
              />
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
            <Building
              className="absolute right-3 top-3 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Message</label>
          <div className="relative">
            <textarea
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#87BD2B] focus:ring-2 focus:ring-[#87BD2B]/20 outline-none transition-all min-h-[120px]"
              placeholder="Your message"
            />
            <MessageSquare
              className="absolute right-3 top-3 text-gray-400"
              size={20}
            />
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
  );
}

export default Form;