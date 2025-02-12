"use client"
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User } from "lucide-react";

import React from 'react'
import Hero from '../_components/Hero'
import Image from "next/image";

export default function page() {
  return (
    <>
      <Hero bgImage="breadcrumb.png" Heading="Contact Us" />

      <section className="bg-white text-black ">

        <h2 className="text-5xl font-bold text-[#034833] flex  justify-center text-center px-4 py-8 w-full ">
          Let Your Wanderlust Guide You
        </h2>
        <div className="container mx-auto px-8 py-10  ">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left item*/}
            <Image
              src="/contact-left-img.png"
              width={500}
              height={500}
              alt="img"
              className="mx-auto md:mx-0  w-full"
            />

            {/* Right */}
            <div className="bg-[#f1f5eb] rounded-xl shadow shadow-[#e8f2d8]  flex flex-col item-center p-10 ">
              <h2 className="text-xl font-semibold mb-4 text-[#034833] ">
                Send a Message
              </h2>
              <form className="grid md:grid-cols-2 gap-4 w-full ">
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="ser" className="text-lg font-semibold">
                    Name
                  </label>
                  <span className="flex items-center  justify-center gap-2 border-2 p-3 rounded-full px-4 bg-[#f8f8f7]">
                    <input
                      type="text"
                      placeholder="Search courses..."
                      className="outline-none border-none w-full bg-[#f8f8f7]"
                      id="ser"
                    />
                    <User className="text-[#00488D]" size={20} />
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="ser" className="text-lg font-semibold">
                    Name
                  </label>
                  <span className="flex items-center  justify-center gap-2 border-2 p-3 rounded-full px-4 bg-[#f8f8f7] ">
                    <input
                      type="text"
                      placeholder="Search courses..."
                      className="outline-none border-none w-full bg-[#f8f8f7]"
                      id="ser"
                    />
                    <User className="text-[#00488D]" size={20} />
                  </span>
                </div>

                <div className="flex flex-col gap-2 md:col-span-2 w-full ">
                  <label htmlFor="ser" className="text-lg font-semibold">
                    Name
                  </label>
                  <span className="flex items-center  justify-center gap-2 border-2 p-3 rounded-full px-4 bg-[#f8f8f7] ">
                    <input
                      type="text"
                      placeholder="Search courses..."
                      className="outline-none border-none w-full bg-[#f8f8f7]"
                      id="ser"
                    />
                    <User className="text-[#00488D]" size={20} />
                  </span>
                </div>

                <div className="flex flex-col md:col-span-2 gap-2">
                  <label htmlFor="ser" className="text-lg font-semibold">
                    Name
                  </label>
                  <span className="flex items-center  justify-center gap-2 border-2 p-3 rounded-full px-4 bg-[#f8f8f7] ">
                    <input
                      type="text"
                      placeholder="Search courses..."
                      className="outline-none border-none w-full bg-[#f8f8f7]"
                      id="ser"
                    />
                    <User className="text-[#00488D]" size={20} />
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#00488D" }}
                  whileTap={{ scale: 0.95 }}
                  className=" items-center justify-center mt-4 md:col-span-2 rounded-full border-2 border-[#87BD2B] px-6 py-3 font-semibold text-[#87BD2B] transition-all hover:text-white hover:border-[#00488D]"
                >
                  Submit
                </motion.button>
              </form>
            </div>
          </div>
        </div>
        {/*  */}
        <h2 className="   text-5xl font-bold text-[#034833] flex  justify-center text-center pt-16 w-full">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mt-4">
          We would love to hear from you!
        </p>
        <div className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Contact Info Section */}
            <div className="flex flex-col gap-8 w-full lg:w-1/2">
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Email Card */}
                <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#87BD2B]/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#87BD2B]/10 rounded-xl group-hover:bg-[#87BD2B]/20 transition-colors duration-300">
                      <Mail className="text-[#87BD2B]" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#87BD2B] mb-1">
                        Email:
                      </p>
                      <p className="text-gray-600 hover:text-[#87BD2B] transition-colors duration-300">
                        contact@example.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#87BD2B]/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#87BD2B]/10 rounded-xl group-hover:bg-[#87BD2B]/20 transition-colors duration-300">
                      <Phone className="text-[#87BD2B]" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#87BD2B] mb-1">
                        Phone:
                      </p>
                      <p className="text-gray-600 hover:text-[#87BD2B] transition-colors duration-300">
                        +91 154896327
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#87BD2B]/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#87BD2B]/10 rounded-xl group-hover:bg-[#87BD2B]/20 transition-colors duration-300">
                      <MapPin className="text-[#87BD2B]" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#87BD2B] mb-1">
                        Address:
                      </p>
                      <p className="text-gray-600 hover:text-[#87BD2B] transition-colors duration-300">
                        Dwarka, New Delhi, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 ">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-[22px] blur opacity-25"></div>
                <div className="relative">
                  <Image
                    src="/contact-tap-img.png"
                    width={600}
                    height={600}
                    alt="Contact Us"
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto md:mx-0  w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11266.520836990914!2d77.59379424259907!3d28.529137473155426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cec4d86e1b251%3A0x36b54c51bcd9ec71!2sVIET!5e0!3m2!1sen!2sin!4v1739276605785!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
