"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Binoculars, GraduationCap, MapPinHouse, ShieldCheck } from "lucide-react"

const visaTypes = [
  {
    title: "HVAC Solutions",
    description: "We provide high-efficiency Heating, Ventilation, and Air Conditioning (HVAC) solutions tailored for pharmaceutical units, healthcare facilities, and industrial plants. Our HVAC systems enhance air quality, optimize energy efficiency, and maintain compliance with global standards",
    image: "/hvac.jpeg",
    icon: ShieldCheck,
  },
  {
    title: "Clean Room Solutions",
    description: "From concept to execution, we design clean room environments for pharmaceutical labs, biotech firms, and healthcare facilities.",
    image: "/clean-room.jpeg",
    icon: MapPinHouse,
  },
  {
    title: "Project Consultancy",
    description: "With deep industry expertise, we provide comprehensive consultancy services to streamline your operations. From electrical system design to setting up softgel and cosmetic manufacturing plants, our tailored solutions ensure efficiency, compliance, and scalability.u",
    image: "/project-consultancy.jpeg",
    icon: GraduationCap,
  },
  {
    title: "Project Execution & Validation",
    description: "Prigun Air Systems ensures seamless installation, execution, and validation of HVAC and clean room systems. We provide comprehensive documentation, compliance checks, and system performance validation to meet stringent industry standards.",
    image: "/project-execution.jpeg",
    icon: Binoculars,
  },
]


export default function VisaCategories() {
  return (
    <section className="py-16 overflow-x-hidden bg-[#87BD2B]/5">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold text-[#87BD2B] uppercase">
          Our Services
          </span>
          <h2 className="text-4xl font-bold text-[#004225]">
          Innovative Solutions for a Safer, 
            <br />
            Smarter Future
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visaTypes.map((visa, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col group sm:flex-row  rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 
            border border-[#384e11]/20"
            >
              {/* Left side - Image */}
              <div className="relative w-full sm:w-2/5 h-[250px] sm:h-auto overflow-hidden">
              <Image 
                src={visa.image} 
                alt={visa.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

              {/* Right side - Content */}
              <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
            
                    <h3 className="text-xl font-semibold text-[#004225]">
                      {visa.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{visa.description}</p>
                </div>
                <div className="flex items-center justify-between w-full">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg 
                    group-hover:bg-[#87BD2B]  transition-all duration-300 border border-[#87BD2B]"
                >
                  <ArrowRight className="h-5 w-5 group-hover:text-white transition-all duration-300 -rotate-45 text-[#87BD2B] group-hover:rotate-0" />
                </Link>
                <span >
                  <visa.icon size={30} className="text-[#004225]" />
                </span>
              
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

