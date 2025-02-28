"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Globe,
  ClipboardList
} from "lucide-react"
import InfiniteBrand from "./Infinity-brand"

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[url(/logo-icon-bg.png)] bg-no-repeat bg-auto bg-center bg-[#87BD2B]/5">
      <InfiniteBrand
        brands={[
          "/lupin.png",
          "/logo1.1.png",
          "/akums.webp",
          "/nectar.png",
          "/logo1.2.png",
          "/logo1.3.png",
          "/logo1.4.png",
          "/logo1.5.png",
          "/logo1.6.png",
          "/lupin.png",
          "/logo1.1.png",
          "/akums.webp",
          "/nectar.png",
          "/logo1.2.png",
          "/logo1.3.png",
          "/logo1.4.png",
          "/logo1.5.png",
          "/logo1.6.png",
        ]}
      />
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column with Images */}
          <div className="relative grid lg:grid-cols-2 gap-2">
            <div className="flex flex-col h-full items-center justify-evenly gap-3">
              <Image
                src="/img3.png"
                alt="left"
                width={250}
                height={250}
                className="rounded-xl"
              />
              <Image
                src="/logo-icon.png"
                alt="right"
                width={200}
                height={200}
                className="rotate"
              />
            </div>
            <div className="flex flex-col h-full items-center justify-evenly w-full md:p-5 gap-3">
              <div className="bg-[#83CD20]  h-32 rounded-xl w-full flex items-center justify-center">
                <p className="text-5xl font-bold text-white w-1/2 text-center">
                  25
                </p>
                <span className="w-1/2 text-white  text-start font-semibold">
                  <p>Years Of</p>
                  <p>Experience</p>
                </span>
              </div>
              <Image
                src="/img4.png"
                alt="left"
                width={800}
                height={800}
                className="rounded-xl "
              />
            </div>
          </div>

          {/* Right Column with Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center lg:pl-8"
          >
            <h2 className="mb-6 text-4xl font-bold text-[#004225] lg:text-5xl">
              WHY CHOOSE US
            </h2>

            <p className="mb-8 text-gray-600 text-sm">
              Built on the pillars of expertise, innovation, and trust, Pirgun
              Air Systems aims to be a guiding force for businesses, helping
              them navigate complexities, optimize operations, and achieve
              sustainable growth.
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "transparent" }}
                className="rounded-3xl bg-none p-5  border border-[#87BD2B]/30"
              >
                <div className="flex items-center gap-2">
                  <div className="mb-4 inline-flex h-12 w-28 items-center justify-center rounded-xl bg-[#87BD2B]">
                    <ClipboardList className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#004225]">
                    Seamless & Hassle-Free Execution
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">

                    <span>
                      From concept to completion, we ensure a smooth, efficient, and stress-free process for every project.
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "transparent" }}
                className="rounded-3xl bg-none p-5  border border-[#87BD2B]/30"
              >
                <div className="flex items-center gap-2">
                  <div className="mb-4 inline-flex h-12 w-16 items-center justify-center rounded-xl bg-[#87BD2B]">
                    <ClipboardList className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#004225]">
                    End-to-End Support
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>
                      We provide comprehensive support at every stage, ensuring flawless execution and alignment with your vision.
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "transparent" }}
                className="rounded-3xl bg-none p-5  border border-[#87BD2B]/30"
              >
                <div className="flex items-center gap-2">
                  <div className="mb-4 inline-flex h-12 w-16 items-center justify-center rounded-xl bg-[#87BD2B]">
                    <ClipboardList className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#004225]">
                    Vision-Driven Approach
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>
                      We collaborate closely to bring your vision to life, delivering results that reflect your unique goals and aspirations.
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "transparent" }}
                className="rounded-3xl bg-none p-5  border border-[#87BD2B]/30"
              >
                <div className="flex items-center gap-2">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#87BD2B] p-2">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#004225]">
                    Effortless Integration
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">

                    <span>
                      Our solutions are designed for seamless compatibility, making implementation easy and disruption-free.
                    </span>
                  </div>

                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}