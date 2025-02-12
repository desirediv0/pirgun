"use client"
import React from 'react'
import Hero from "../_components/Hero";
import { Home, User } from 'lucide-react';

const services = [
  {
    title: " Design Consultancy",
    desc: "Precision-driven designs tailored for efficiency, compliance, and aesthetics. A well-designed facility is the foundation of operational excellence. Our expert-led design consultancy ensures that your space is optimized for maximum productivity, regulatory compliance, and long-term sustainability. We focus on creating intelligent layouts that enhance workflow, improve efficiency, and meet the highest industry standards while maintaining an aesthetic appeal. ✔ Customized solutions for pharma, food, nutraceutical, cosmetic, and medical facilities ✔ Regulatory-compliant designs that adhere to industry standards and guidelines ✔ Optimized space utilization to improve productivity and reduce operational bottlenecks✔ Aesthetic yet highly functional layouts designed for future scalability",
    icon: Home, 
  },
  {
    title: "test",
    desc: "sefvsdv",
    icon: User,
  },
  {
    title: "test",
    desc: "sefvsdv",
    icon: Home,
  },
  {
    title: "test",
    desc: "sefvsdv",
    icon: Home,
  },
];

const Service = () => {
  return (
    <>
      <Hero bgImage="breadcrumb.png" Heading="Our Services " />

      <section>
        <div className="py-16">
          <div className="grid grid-cols-4 gap-4 px-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="relative p-4 shadow rounded-lg  flex flex-col items-center justify-center"
              >
                <h1 className="items-center border mt-5 ">{service.title}</h1>
                <p> {service.desc}</p>
                <span className="absolute p-5 shadow-2xl  -top-10   bg-white  rounded-lg left-1/2 -translate-x-1/2">
                  {<service.icon className="text-[#87BD2B]" />}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  ); 

  
}

export default Service
