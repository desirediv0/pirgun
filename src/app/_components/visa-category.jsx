"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Binoculars, GraduationCap, MapPinHouse, ShieldCheck } from "lucide-react"

const visaTypes = [
  {
    title: "Pharmaceuticals & Nutraceuticals",
    description:
      "  - Ensuring compliance, precision, and high-quality solutions for drug manufacturing, supplements, and wellness products. ",
    image: "/pharmaceuticals.png",
    icon: ShieldCheck,
    link: "/services/pharmaceuticals",
  },
  {
    title: "Food & Beverages",
    description:
      "   - Providing innovative, hygienic, and regulatory-compliant solutions for safe food processing and packaging.",
    image: "/food.jpeg",
    icon: MapPinHouse,
    link: "/services/food-beverages",
  },
  {
    title: "Cosmetics & Personal Care",
    description:
      " - Enhancing product quality, aesthetics, and brand value with premium solutions for the beauty and personal care industry. ",
    icon: GraduationCap,
    image: "/cosmo.jpeg",
    link: "/services/cosmetics",
  },
  {
    title: "Medical, Labs & Surgical",
    description:
      " - Supporting laboratories, diagnostics, and medical devices with cutting-edge solutions to ensure accuracy, safety, and efficiency ",
    icon: Binoculars,
    image: "/medical.png",
    link: "/services/medical",
  },
];

const titleVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

export default function VisaCategories() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-16 overflow-hidden relative bg-[#87BD2B]/5">


      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariant}
        >
          <h2 className="text-4xl font-bold text-[#004225] capitalize">
            Industries we serve
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#87BD2B] mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {visaTypes.map((visa, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    duration: 0.6
                  }
                }
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="flex flex-col group sm:flex-row rounded-xl overflow-hidden shadow-lg transition-all duration-500 
              border border-[#384e11]/20 bg-white/90 backdrop-blur-sm"
            >
              {/* Left side - Image */}
              <div className="relative w-full sm:w-2/5 h-[250px] sm:h-auto overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredCard === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src={visa.image}
                    alt={visa.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </motion.div>

                {/* Overlay that appears on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#004225]/80 to-transparent flex items-end justify-center pb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredCard === index ? 0 : 20,
                      opacity: hoveredCard === index ? 1 : 0
                    }}
                    transition={{ delay: 0.1 }}
                  >
                    <visa.icon size={40} className="text-white mb-2" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Right side - Content */}
              <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <motion.h3
                      className="text-xl font-semibold text-[#004225]"
                      animate={{
                        x: hoveredCard === index ? 10 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {visa.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    className="text-gray-600 mb-6"
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0.7
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {visa.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}