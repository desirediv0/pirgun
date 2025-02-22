"use client"
 
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Hero from "../_components/Hero";
import {
  Award,
  TrendingUp,
  LifeBuoy,
  Workflow,
  ShieldCheck,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import WhyChooseUs from "../_components/why-choose-us";

const stats = [
  { number: "10k+", label: "Complete Projects" },
  { number: "20+", label: "Team Members" },
  { number: "5k+", label: "Winning Awards" },
  { number: "100+", label: "Happy Clients" },
];

const usps = [
  {
    title: "Industry Pioneers",
    description: "First Pharma-Specialized EPC in North India",
    icon: Award,
  },
  {
    title: "Value-Driven Approach",
    description: "Optimal solutions at the right price point",
    icon: TrendingUp,
  },
  {
    title: "End-to-End Support",
    description: "Comprehensive project and financial assistance",
    icon: LifeBuoy,
  },
  {
    title: "Seamless Execution",
    description: "Efficient turnkey project implementation",
    icon: Workflow,
  },
  {
    title: "Regulatory Expertise",
    description: "Ensuring compliance at every step",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Reliability",
    description: "Ongoing maintenance and support services",
    icon: Wrench,
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero bgImage="aboutus.jpg" Heading="About Us" />

      <div className="container mx-auto py-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 mb-24 px-4"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#00498b] leading-tight">
              From Idea to Execution –{" "}
              <span className="text-[#89bb25]">Let&apos;s Make It Happen</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              At Pirgun Air Systems, we&apos;re not just engineers – we&apos;re
              innovators, problem-solvers, and visionaries. Our mission is to
              revolutionize project execution & project technologies with
              cutting-edge technology and unparalleled expertise.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              From concept to execution, we deliver smart, efficient, and
              sustainable solutions that propel industries forward. Our
              commitment to quality and innovation ensures that every project we
              undertake sets new benchmarks in the field.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#89bb25] to-[#00498b] text-white hover:from-[#89bb25] hover:to-[#00498b] transition-all duration-300"
            >
              Discover Our Approach <ArrowRight className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/img2.png"
                alt="Engineering Excellence"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-[#89bb25] to-[#afd365] rounded-2xl p-6 text-white shadow-lg"
              >
                <div className="flex items-center">
                  <span className="text-5xl font-bold">25 +</span>
                  <div className="ml-4">
                    <p className="font-semibold">Years Of</p>
                    <p className="font-semibold">Innovation</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/img1.png"
                  alt="Innovative Solutions"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* <WhyChooseUs /> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24 px-4"
        >
          <h3 className="text-3xl font-bold text-center text-[#00498b] mb-12">
            Why Choose Pirgun Air Systems?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#739827]/10 group-hover:bg-[#739827]/20 transition-colors">
                    <usp.icon className="w-6 h-6 text-[#739827]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#739827]">
                    {usp.title}
                  </h4>
                </div>
                <p className="text-gray-600 pl-14">{usp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-[#89bb25]">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 mb-24 px-4"
        >
          <div className="bg-gradient-to-br from-[#89bb25] to-[#00498b] p-8 rounded-3xl shadow-xl text-white">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <ul className="space-y-4">
              {[
                "Deliver Value-Driven Solutions",
                "Support Financial Planning",
                "Innovate with Expertise",
                "Ensure Compliance & Efficiency",
                "Build Strong Partnerships",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold text-[#00498b] mb-6">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the catalyst for transformation in the air systems industry,
              setting new standards in innovation, sustainability, and client
              satisfaction. We envision a future where our solutions not only
              meet the needs of today but anticipate the challenges of tomorrow,
              creating environments that inspire productivity and well-being.
            </p>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl font-bold text-[#00498b] mb-6">
            Ready to Revolutionize Your Project Management?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join hands with Pirgun Air Systems and experience the future of
            project management. Let&apos;s create sustainable, efficient, and
            innovative solutions together.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#89bb25] to-[#00498b] text-white hover:from-[#89bb25] hover:to-[#00498b] transition-all duration-300"
          >
            Start Your Journey <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
