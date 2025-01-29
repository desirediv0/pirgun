"use client"

import { ArrowRight, GraduationCap, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const team = [
  {
    name: "Courtney Henry",
    role: "Medical Assistant",
  },
  {
    name: "Ronald Richards",
    role: "Marketing Coordinator",
  },
  {
    name: "Albert Flores",
    role: "Web Designer",
  },
]

const socials = [
  { icon: Facebook, href: "#facebook", label: "Facebook" },
  { icon: Instagram, href: "#instagram", label: "Instagram" },
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
]

export function TeamSection() {
  return (
    <section className="relative bg-gray-50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/coaching-bg-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.1"
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-6 h-6 text-[#004D2C]" />
          <span className="text-[#004D2C] font-semibold uppercase">Our Coaching</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#004D2C] mb-12 max-w-2xl">
          Exploring the Unknown Voyages of Wonder
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#004D2C]">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
                <button
                  className="p-2 rounded-full hover:bg-[#004D2C]/5 transition-colors"
                  aria-label={`Learn more about ${member.name}`}
                >
                  <ArrowRight className="w-5 h-5 text-[#004D2C]" />
                </button>
              </div>
            ))}
          </div>
            <div className="relative w-full">
            <div className="relative h-[600px] md:h-[500px]">
                <Image 
                src="/coaching-right-img.webp" 
                alt="Team member" 
                className="object-cover  rounded-2xl overflow-hidden shadow-lg"
                width={500}
                height={500}
                />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 flex gap-4 shadow-xl">
                {socials.map(({ icon: Icon, href, label }) => (
                <Link 
                    key={label} 
                    href={href} 
                    className="text-[#004D2C] hover:text-[#7AB641] hover:scale-110 transition-all duration-300"
                    aria-label={label}
                >
                    <Icon className="w-5 h-5" />
                </Link>
                ))}
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}