"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
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
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";



const stats = [
  { number: "100+", value: 100, label: "Complete Projects" },
  { number: "50+", value: 50, label: "Team Members" },
  { number: "200+", value: 200, label: "Cities Serving Capabilities" },
  { number: "99%", value: 99, label: "Happy Customers" },
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

const mission = [
  "Deliver Value-Driven Solutions",
  "Support Financial Planning",
  "Innovate with Expertise",
  "Ensure Compliance & Efficiency",
  "Build Strong Partnerships",
];

const AboutPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("mission");
  const router = useRouter();

  // Add state for stats counter
  const [countUp, setCountUp] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const statsCountRef = useRef(null);

  // Animations for scroll-triggered elements
  const introControls = useAnimation();
  const chooseUsControls = useAnimation();
  const statsControls = useAnimation();
  const missionVisionControls = useAnimation();
  const ctaControls = useAnimation();

  const [introRef, introInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [chooseUsRef, chooseUsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [missionVisionRef, missionVisionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (introInView) introControls.start("visible");
    if (chooseUsInView) chooseUsControls.start("visible");
    if (statsInView) statsControls.start("visible");
    if (missionVisionInView) missionVisionControls.start("visible");
    if (ctaInView) ctaControls.start("visible");
  }, [introInView, chooseUsInView, statsInView, missionVisionInView, ctaInView,
    introControls, chooseUsControls, statsControls, missionVisionControls, ctaControls]);

  // Set up intersection observer for the stats counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsCountRef.current) {
      observer.observe(statsCountRef.current);
    }

    return () => {
      if (statsCountRef.current) {
        observer.unobserve(statsCountRef.current);
      }
    };
  }, []);

  // Start counting animation when stats section becomes visible
  useEffect(() => {
    if (isVisible) {
      const counters = stats.map(stat => {
        return {
          value: parseInt(stat.value),
          duration: 2000, // 2 seconds to count up
        };
      });

      const intervals = counters.map((counter, index) => {
        const stepTime = counter.duration / counter.value;
        let currentCount = 0;
        const increment = Math.max(1, Math.floor(counter.value / 100)); // Faster increment for larger numbers

        return setInterval(() => {
          currentCount += increment;

          setCountUp(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(currentCount, counter.value);
            return newCounts;
          });

          if (currentCount >= counter.value) {
            clearInterval(intervals[index]);
          }
        }, stepTime);
      });

      return () => {
        intervals.forEach(interval => clearInterval(interval));
      };
    }
  }, [isVisible]);

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Hero bgImage="aboutus.jpg" Heading="About Us" />

      {/* Introduction Section */}
      <div className="container mx-auto py-16 max-w-7xl">
        <motion.div
          ref={introRef}
          variants={containerVariant}
          initial="hidden"
          animate={introControls}
          className="grid lg:grid-cols-2 gap-12 mb-24 px-4"
        >
          <motion.div variants={itemVariant} className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-12 bg-[#89bb25]"></div>
              <span className="text-[#89bb25] font-semibold uppercase tracking-wider text-sm">Our Story</span>
            </div>
            <h2 className="text-4xl font-bold text-[#00498b] leading-tight">
              From Idea to Execution –{" "}
              <span className="text-[#89bb25]">Let&apos;s Make It Happen</span>
            </h2>
            <motion.p variants={itemVariant} className="text-gray-700 leading-relaxed text-lg">
              At Pirgun Air Systems, we&apos;re not just engineers – we&apos;re
              innovators, problem-solvers, and visionaries. Our mission is to
              revolutionize project execution & project technologies with
              cutting-edge technology and unparalleled expertise.
            </motion.p>
            <motion.p variants={itemVariant} className="text-gray-700 leading-relaxed text-lg">
              From concept to execution, we deliver smart, efficient, and
              sustainable solutions that propel industries forward. Our
              commitment to quality and innovation ensures that every project we
              undertake sets new benchmarks in the field.
            </motion.p>
            <motion.div variants={itemVariant}>
              <Button
                size="lg"
                onClick={() => router.push("/contact")}
                className="bg-gradient-to-r from-[#89bb25] to-[#00498b] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Discover Our Approach <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariant} className="grid grid-cols-2 gap-4">
            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-lg relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#00498b]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/img2.png"
                alt="Engineering Excellence"
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium text-sm">Engineering Excellence</p>
              </div>
            </motion.div>
            <div className="space-y-4">
              <motion.div
                variants={itemVariant}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-[#89bb25] to-[#afd365] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="flex items-center relative z-10">
                  <span className="text-5xl font-bold">25 +</span>
                  <div className="ml-4">
                    <p className="font-semibold">Years Of</p>
                    <p className="font-semibold">Innovation</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariant}
                whileHover={{ scale: 1.03, rotate: -1 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-lg relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#00498b]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/img1.png"
                  alt="Innovative Solutions"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium text-sm">Innovative Solutions</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          ref={chooseUsRef}
          variants={containerVariant}
          initial="hidden"
          animate={chooseUsControls}
          className="mb-24 px-4"
        >
          <motion.div variants={itemVariant} className="text-center mb-12">
            <span className="text-[#89bb25] font-semibold uppercase tracking-wider text-sm">Our Strengths</span>
            <h3 className="text-3xl font-bold text-[#00498b] mt-2">
              Why Choose Pirgun Air Systems?
            </h3>
            <div className="w-24 h-1 bg-[#89bb25] mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <motion.div
                  className="p-4 rounded-2xl bg-[#89bb25]/10 group-hover:bg-[#89bb25]/20 mb-6 transition-all duration-300 w-16 h-16 flex items-center justify-center"
                  animate={{
                    rotate: hoveredCard === index ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <usp.icon className="w-7 h-7 text-[#89bb25]" />
                </motion.div>
                <h4 className="text-xl font-semibold text-[#00498b] mb-3 group-hover:text-[#89bb25] transition-colors duration-300">
                  {usp.title}
                </h4>
                <p className="text-gray-600">{usp.description}</p>


              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          variants={containerVariant}
          initial="hidden"
          animate={statsControls}
          className="mb-24"
        >
          <div
            ref={statsCountRef}
            className="bg-gradient-to-r from-[#f9fcf4] to-[#f0f7ea] rounded-3xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-[#00498b]">
                    {isVisible
                      ? (stat.number.includes('k+')
                        ? `${countUp[index] / 1000}k+`
                        : `${countUp[index]}${stat.number.includes('+') ? '+' : stat.number.includes('%') ? '%' : ''}`)
                      : "0"}
                  </h3>
                  <p className="text-[#00498b]/80 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          ref={missionVisionRef}
          variants={containerVariant}
          initial="hidden"
          animate={missionVisionControls}
          className="mb-24 px-4"
        >
          <div className="mb-12 text-center">
            <span className="text-[#89bb25] font-semibold uppercase tracking-wider text-sm">Our Purpose</span>
            <h3 className="text-3xl font-bold text-[#00498b] mt-2">
              Mission & Vision
            </h3>
            <div className="w-24 h-1 bg-[#89bb25] mx-auto mt-4" />
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <motion.button
                className={`px-6 py-2 rounded-full ${activeTab === 'mission' ? 'bg-[#00498b] text-white' : 'text-gray-600'}`}
                onClick={() => setActiveTab('mission')}
                whileHover={{ scale: activeTab !== 'mission' ? 1.05 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                Mission
              </motion.button>
              <motion.button
                className={`px-6 py-2 rounded-full ${activeTab === 'vision' ? 'bg-[#00498b] text-white' : 'text-gray-600'}`}
                onClick={() => setActiveTab('vision')}
                whileHover={{ scale: activeTab !== 'vision' ? 1.05 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                Vision
              </motion.button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'mission' ? (
              <motion.div
                key="mission"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#89bb25] to-[#00498b] p-8 rounded-3xl shadow-xl text-white relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <h3 className="text-3xl font-bold mb-6 relative z-10">Our Mission</h3>
                <ul className="space-y-4 relative z-10">
                  {mission.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-white/70" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-[#89bb25]/5 rounded-full -mr-32 -mt-32"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-40 h-40 bg-[#00498b]/5 rounded-full -ml-20 -mb-20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <h3 className="text-3xl font-bold text-[#00498b] mb-6 relative z-10">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed relative z-10">
                  To be the catalyst for transformation in the air systems industry,
                  setting new standards in innovation, sustainability, and client
                  satisfaction. We envision a future where our solutions not only
                  meet the needs of today but anticipate the challenges of tomorrow,
                  creating environments that inspire productivity and well-being.
                </p>

              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          variants={containerVariant}
          initial="hidden"
          animate={ctaControls}
          className="text-center mb-16 px-4 relative"
        >
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#89bb25]/5 rounded-full -z-10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.h2
            variants={itemVariant}
            className="text-4xl font-bold text-[#00498b] mb-6"
          >
            Ready to Revolutionize Your Project Management?
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Join hands with Pirgun Air Systems and experience the future of
            project management. Let&apos;s create sustainable, efficient, and
            innovative solutions together.
          </motion.p>

        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;