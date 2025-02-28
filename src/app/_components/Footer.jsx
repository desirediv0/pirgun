"use client";
import {
  Send,
  CheckCircle2,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#004D2C] text-white relative overflow-hidden">
      {/* Background Map Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/world.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "",
        }}
      />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 grid lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-2 text-left">
          <Link href="/" className="flex items-start gap-2 text-2xl font-bold">
            <Image
              src="/white-logo2.png"
              alt="Pirgun Logo"
              width={140}
              height={140}
              className="w-24 h-24 bg-cover"
            />
          </Link>
          <p className="text-white/80 text-left">
            At Pirgun Air Systems, we&apos;re not just engineers – we&apos;re innovators, problem-solvers, and visionaries.
          </p>

        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Services</h4>
          <ul className="space-y-3">
            {["Design Consultancy", "Project Management Consultancy", "End-to-End Turnkey Execution", "AMC & Maintenance Contracts"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7AB641]" />
                <Link href="/service" className="hover:text-[#7AB641] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="text-xl font-semibold mb-4">Useful Link</h4>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/service" },
              { name: "Contact", path: "/contact" }
            ].map((item) => (
              <li key={item.name} className="flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-[#7AB641]" />
                <Link href={item.path} className="hover:text-[#7AB641] transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Subscribe Our Newsletter</h4>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-4 py-2 bg-black/20 rounded-l-full focus:outline-none"
              required
            />
            <button type="submit" className="bg-[#7AB641] p-2 rounded-r-full hover:bg-[#7AB641]/90 transition-colors">
              <Send className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4">
          <p className="text-white/80">© 2025 Pirgun Air Systems | All Rights Reserved</p>
          <p className="text-white/80">
            Designed with <span className="text-red-500">❤</span> by {" "}
            <a
              href="https://desirediv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7AB641] transition-colors font-medium"
            >
              Desire Div
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}