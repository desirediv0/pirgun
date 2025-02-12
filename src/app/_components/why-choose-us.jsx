"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {  Phone, 
    ArrowRight, 
    Check, 
    FileText, 
    Globe,
    ClipboardList } from "lucide-react"
import InfiniteBrand from "./Infinity-brand"

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[url(/logo-icon-bg.png)] bg-no-repeat bg-auto bg-center bg-[#87BD2B]/5">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column with Images */}
          <div className="relative grid lg:grid-cols-2 gap-2">
            <div className="flex flex-col h-full items-center justify-evenly gap-3">
              <Image
                src="/img1.png"
                alt="left"
                width={250}
                height={250}
                className="rounded-xl"
              />
              <Image
                src="/choose-us-circle-img.webp"
                alt="right"
                width={200}
                height={200}
                className="animate-spin"
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
                src="/img2.png"
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
              At Prigun Air Systems, we don’t just control air—we engineer
              environments that redefine safety, efficiency, and compliance for
              critical industries.
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
                    {/* <Check className="h-5 w-5 text-[#87BD2B]" /> */}
                    <span>
                      Image Idea: A professional handshake between two business
                      partners, symbolizing trust and smooth collaboration.
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2 text-gray-600">
                    <Check className="h-5 w-5 text-[#87BD2B]" />
                    <span>Worldwide Visa Assistance</span>
                  </div> */}
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
                    {/* <Check className="h-5 w-5 text-[#87BD2B]" /> */}
                    <span>
                      Image Idea: A dedicated team working together on a
                      project, showcasing expertise and hands-on support
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2 text-gray-600">
                    <Check className="h-5 w-5 text-[#87BD2B]" />
                    <span>Worldwide Visa Assistance</span>
                  </div> */}
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
                    {/* <Check className="h-5 w-5 text-[#87BD2B]" /> */}
                    <span>
                      Image Idea: A business leader or team looking at a roadmap
                      or blueprint, representing strategic alignment and
                      goal-oriented execution.
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2 text-gray-600">
                    <Check className="h-5 w-5 text-[#87BD2B]" />
                    <span>Worldwide Visa Assistance</span>
                  </div> */}
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
                    {/* <Check className="h-5 w-5 text-[#87BD2B]" /> */}
                    <span>
                      Image Idea: A sleek, futuristic interface with connected
                      digital elements, symbolizing smooth and seamless
                      integration.
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-2 text-gray-600">
                    <Check className="h-5 w-5 text-[#87BD2B]" />
                    <span>Infinity Visa Solutions</span>
                  </div> */}
                </div>
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#00488D" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center rounded-full border-2 border-[#87BD2B] px-6 py-3 font-semibold text-[#87BD2B] transition-all hover:text-white hover:border-[#00488D]"
              >
                Read More
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button> */}

              {/* <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#87BD2B]"
                >
                  <Phone className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <div className="text-sm text-gray-600">Need help?</div>
                  <div className="font-semibold text-[#87BD2B]">
                    +911247118233
                  </div>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
      <InfiniteBrand
        brands={[
          "/lupin.png",
          "/jubilant-infra.png",
          "/akums.webp",
          "/nectar.png",
        ]}
        className="mt-5"
      />
    </section>
  );
}