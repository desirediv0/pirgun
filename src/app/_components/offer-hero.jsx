"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, Map } from "lucide-react"
import { motion } from "framer-motion"


export default function HeroSection() {
  return (
    <section className="relative py-16 overflow-hidden">

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Map className="w-6 h-6 text-[#004D2C]" />
              <span className="text-[#004D2C] font-semibold uppercase tracking-wide text-xs">Contact Us</span>
            </div>
            <h2 className="text-4xl  font-bold text-[#004D2C] max-w-2xl">
              Contact Us Today
            </h2>
          </div>
          {/* <button className="bg-[#7AB641] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#7AB641]/90 transition-colors">
            View More
            <ArrowRight className="w-5 h-5" />
          </button> */}
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full md:w-2/5"
          >
            <div className="relative h-full min-h-[500px] overflow-hidden">
              <Image
                src="/img1.png"
                alt="Travel essentials"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Right Content Section */}
          <div className="w-full md:w-3/5 space-y-5">
            {/* Offer Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden "
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#87BD2B]">
                <Globe className="h-8 w-8 text-white" />
              </div>

              {/* <h2 className="mt-6 text-xl  font-bold text-[#1E293B]">
                Get our best offers quickly
              </h2>

              <p className="mt-4 text-gray-600 w-1/2 text-sm">
                Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum
                has been the industry&apos;s standard dummy
              </p> */}
              <div className="pt-3 md:pt-5">
                <div className="py-3">
                  <input type="text" className="border w-full px-2 py-2 rounded-lg border-lime-200 placeholder:text-black" placeholder="Robert"></input>
                </div>
                <div className="py-3 grid md:grid-cols-2 gap-4">
                  <input type="text" className="border w-full px-2 py-2 rounded-lg border-lime-200 placeholder:text-black" placeholder="+ 91 99999XXXXX"></input>
                  <input type="text" className="border w-full px-2 py-2 rounded-lg border-lime-200 text-black placeholder:text-black focus-visible:border-lime-200" placeholder="name@pirgun.com"></input>
                </div>
              </div>

              <Link
                href="#contact"
                className="mt-6 inline-flex items-center rounded-full bg-[#87BD2B] px-6 py-3 
                font-semibold text-white transition-all hover:bg-[#78a827] hover:shadow-lg"
              >
                Contact us
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Link>
              {/* <Image src={"/faq-left-img.webp"} alt="Travel essentials" className="object-cover
                absolute -bottom-16 -right-2 " priority quality={100}
                  width={300} height={300}
                /> */}

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}