"use client"

import { FileText } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Visa Voyage Agency",
    description: "Lorem Ipsum is simply dummy text the printing and typeser",
  },
  {
    number: "02",
    title: "International Access Visas",
    description: "Lorem Ipsum is simply dummy text the printing and typeser",
  },
  {
    number: "03",
    title: "Gateway to Global Citizenship",
    description: "Lorem Ipsum is simply dummy text the printing and typeser",
  },
]

export function ProcessOverview() {
  return (
    <section className="relative bg-gray-50 py-14">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/process-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.2"
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Existing Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-6 h-6 text-[#004D2C]" />
            <span className="text-[#004D2C] font-semibold uppercase tracking-wide text-xs">
              Process Overview
            </span>
          </div>
          <h2 className="text-4xl  font-bold text-[#004D2C] max-w-3xl mx-auto">
            Unforgettable Getaways
            <br />
            Escaping Routine
            <span className="inline-block w-2 h-2 bg-[#7AB641] rounded-full ml-1" />
          </h2>
        </div>

        {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl border 
                border-[#004D2C]/10 transition-all duration-300 hover:shadow-xl
                ${index === 1 ? 'md:mt-12' : ''}
                ${index === 2 ? '' : ''}`}
            >
              <div className="text-6xl font-bold text-[#004D2C]/10 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-[#004D2C] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
