"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"


const stats = [
  { value: 10, label: "Complete project", suffix: "k+" },
  { value: 27, label: "Team member", suffix: "+" },
  { value: 5, label: "Winning award", suffix: "k+" },
  { value: 107, label: "Complete project", suffix: "+" },
]

export default function AnimatedStatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <section ref={ref} className="bg-[#87BD2B] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 text-white md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ number: 0 }}
                animate={hasAnimated ? { number: stat.value } : { number: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-4xl font-bold md:text-5xl"
              >
                {hasAnimated ? (
                  <>
                    {stat.value}
                    {stat.suffix}
                  </>
                ) : (
                  "0"
                )}
              </motion.div>
              <p className="mt-2 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

