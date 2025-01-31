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
          <span className="text-[#004D2C] font-semibold uppercase text-xs">Our Team</span>
        </div>

        <h2 className="text-4xl font-bold text-[#004D2C] mb-12 max-w-2xl">
          Meet Our Expert Team
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md  border border-[#384e11]/20 transition-shadow group"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#004D2C]">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full 
                    group-hover:bg-[#87BD2B]  transition-all duration-300 border border-[#87BD2B]"
                >
                  <ArrowRight className="h-5 w-5 group-hover:text-white transition-all duration-300 -rotate-45 text-[#87BD2B] group-hover:rotate-0" />
                </Link>
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
            <div className="absolute bottom-20 md:bottom-6 left-1/2 md:left-[45%] -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 flex gap-4 shadow-xl">
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