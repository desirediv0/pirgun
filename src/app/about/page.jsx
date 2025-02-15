"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "../_components/Hero";

const stats = [
  { number: "10k+", label: "Complete Projects" },
  { number: "20+", label: "Team Members" },
  { number: "5k+", label: "Winning Awards" },
  { number: "100+", label: "Happy Clients" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden"
      >
        <Image
          src="/hero-background.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <Hero bgImage="breadcrumb.png" Heading="About Us" />
        {/* <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold z-20 text-center"
        >
          About <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Us
          </span>
        </motion.h1>
      </motion.div> */}
      </motion.div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Company Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 mb-24"
        >
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#00498b] leading-tight">
              Pioneering Excellence in{" "}
              <span className="text-[#89bb25]">Air Systems</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              At Pirgun Air Systems, we're not just engineers – we're
              innovators, problem-solvers, and visionaries. Our mission is to
              revolutionize air systems with cutting-edge technology and
              unparalleled expertise.
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

          {/* Right Column - Images */}
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
                  <span className="text-5xl font-bold">25</span>
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-xl">
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

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 mb-24"
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
            {/* <Image
              src="/clean-room.jpeg"
              width={300}
              height={300}
              alt="Our Vision"
              className="mt-6 mx-auto"
            /> */}
          </div>
        </motion.div>

        {/* USPs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-center text-[#00498b] mb-12">
            Why Choose Pirgun Air Systems?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Pioneers",
                description: "First Pharma-Specialized EPC in North India",
              },
              {
                title: "Value-Driven Approach",
                description: "Optimal solutions at the right price point",
              },
              {
                title: "End-to-End Support",
                description: "Comprehensive project and financial assistance",
              },
              {
                title: "Seamless Execution",
                description: "Efficient turnkey project implementation",
              },
              {
                title: "Regulatory Expertise",
                description: "Ensuring compliance at every step",
              },
              {
                title: "Long-Term Reliability",
                description: "Ongoing maintenance and support services",
              },
            ].map((usp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-[#739827] mb-2">
                  {usp.title}
                </h4>
                <p className="text-gray-600">{usp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#00498b] mb-6">
            Ready to Revolutionize Your Air Systems?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join hands with Pirgun Air Systems and experience the future of air
            management. Let's create sustainable, efficient, and innovative
            solutions together.
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
