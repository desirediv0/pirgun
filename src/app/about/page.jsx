import React from "react";
import Image from "next/image";
import Hero from "../_components/Hero";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero bgImage={"breadcrumb.png"} Heading={"About Us"} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Company Introduction */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Image
                  src="/img1.png"
                  alt="Company Image 1"
                  width={400}
                  height={500}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-[#83CD20] rounded-xl p-6 text-white">
                  <div className="flex items-center">
                    <span className="text-5xl font-bold">25</span>
                    <div className="ml-4">
                      <p className="font-semibold">Years Of</p>
                      <p className="font-semibold">Experience</p>
                    </div>
                  </div>
                </div>
                <Image
                  src="/img2.png"
                  alt="Company Image 2"
                  width={400}
                  height={300}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-950">
              Our key strength lies in offering a clear vision at the right
              value
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Pirgun Air Systems, we specialize in delivering smart,
              cost-effective, and technically superior solutions for industries
              that demand precision and efficiency. From design consultancy and
              project management to turnkey execution and maintenance services,
              we provide end-to-end solutions that help businesses optimize
              their operations while maintaining compliance and quality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We bring expertise that economizes cost without compromising
              quality. Whether setting up a new facility, upgrading existing
              infrastructure, or ensuring smooth operations, we strategically
              align projects with budgets to maximize efficiency.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">
              Our Mission
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#83CD20] mr-2">•</span>
                Deliver Value-Driven Solutions
              </li>
              <li className="flex items-start">
                <span className="text-[#83CD20] mr-2">•</span>
                Support Financial Planning
              </li>
              <li className="flex items-start">
                <span className="text-[#83CD20] mr-2">•</span>
                Innovate with Expertise
              </li>
              <li className="flex items-start">
                <span className="text-[#83CD20] mr-2">•</span>
                Ensure Compliance & Efficiency
              </li>
              <li className="flex items-start">
                <span className="text-[#83CD20] mr-2">•</span>
                Build Strong Partnerships
              </li>
            </ul>
          </div>

          <div className="">
            {/* bg-white p-8 rounded-xl shadow-lg*/}
            <Image
              src="/contact-tap-img.png"
              width={500}
              height={500}
              alt="about"
              className="object-cover rounded-2xl"
            />
            {/* <h3 className="text-2xl font-bold text-blue-950 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the first and only EPC company in North India exclusively
              specializing in the pharmaceutical industry, setting new
              benchmarks in precision, compliance, and execution.
            </p> */}
          </div>
        </div>

        {/* 2nd */}
        <div className="grid md:grid-cols-2 mb-16">
          <div className="">
            <Image
              src="/contact-tap-img.png"
              width={500}
              height={500}
              alt="about"
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            {/* bg-white p-8 rounded-xl shadow-lg*/}

            <h3 className="text-2xl font-bold text-blue-950 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the first and only EPC company in North India exclusively
              specializing in the pharmaceutical industry, setting new
              benchmarks in precision, compliance, and execution.
            </p>
          </div>
        </div>

        {/* USPs */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-blue-950 mb-6">
            Our Unique Selling Points (USPs)
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              "First Pharma-Specialized EPC in North India",
              "Vision at the Right Value",
              "End-to-End Financial & Project Support",
              "Seamless Turnkey Execution",
              "Regulatory Expertise & Compliance",
              "Long-Term Reliability & Maintenance",
            ].map((usp, index) => (
              <div key={index} className="flex items-start">
                <span className="text-[#83CD20] mr-2 text-xl">✓</span>
                <p className="text-gray-700">{usp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 font-semibold">
            At Pirgun Air Systems, we don&apos;t just execute projects—we build
            smart, efficient, and financially viable solutions that empower
            businesses for long-term success.
          </p>
          <p className="text-2xl font-bold text-blue-950 mt-4">
            Let&apos;s create something exceptional together! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
