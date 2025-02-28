"use client"

import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Smile } from "lucide-react";
import React, { useEffect, useState } from 'react';
import Hero from '../_components/Hero';
import Image from "next/image";
import Form from "../_components/form";


const contactInfo = [
  {
    icon: Mail,
    title: "Email Address",
    value: "info@pirgunairsystems.com ",
    color: "#87BD2B",
  },

  // {
  //   icon: MapPin,
  //   title: "Office Location",
  //   value: "Dwarka, New Delhi, India",
  //   color: "#87BD2B",
  // },
];


const greetings = [
  { text: "Hello!", lang: "English" },
  { text: "नमस्ते!", lang: "Hindi" },
  // { text: "¡Hola!", lang: "Spanish" },
  // { text: "Bonjour!", lang: "French" },
  // { text: "Ciao!", lang: "Italian" },
  // { text: "こんにちは!", lang: "Japanese" },
  // { text: "안녕하세요!", lang: "Korean" },
  // { text: "Hej!", lang: "Swedish" },
  // { text: "Hallo!", lang: "German" },
  // { text: "Olá!", lang: "Portuguese" },
];

export default function Contact() {

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };



  return (
    <>
      <Hero
        bgImage="industrial-park-factory-building-warehouse (1).jpg"
        Heading="Contact Us"
      />

      <section className="bg-gradient-to-b from-white to-gray-50">
        {/* Main Contact Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center px-4 py-16">
          {/* Left Column */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-4xl md:text-5xl  font-bold text-gray-800">
              Say
            </span>
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentGreeting}
                className="text-4xl md:text-5xl  font-bold text-gray-800 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {greetings[currentGreeting].text}

              </motion.h1>
            </AnimatePresence>
            <Smile className="w-8 h-8 md:w-12 md:h-12 " />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xs md:text-sm  text-gray-600">
              We&apos;re here to help and answer any question you might have.
              we look forward to hearing from you. any need help you please
              contact us or meet to office with coffee.
            </p>
          </motion.div>
        </div>
        <div className="container mx-auto px-4 py-10">



          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 ">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto`}
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <info.icon
                    className="w-6 h-6"
                    style={{ color: info.color }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-center">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-16 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center  px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="/contact.jpeg"
                width={600}
                height={600}
                alt="Contact Us"
                className="rounded-md h-[550px]  object-cover"
              />
            </motion.div>

            <Form />


          </div>
        </div>


      </section>
    </>
  );
}