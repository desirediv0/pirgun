import {
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle2,
  ChevronRight,
  Camera,
  Globe
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

      {/* Top Support Section */}
      {/* <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="bg-[#7AB641] rounded-full p-4">
            <Camera className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-semibold">
            Need Any Support For?
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#7AB641] rounded-full p-4">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-semibold">
            Are You Ready For Get?
          </h3>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <Image
              src="/white-logo.png"
              alt="Pirgun Logo"
              width={140}
              height={140}
              className="w-50 h-50 bg-cover rounded-full"
            />
          </Link>
          <p className="text-white/80">
            At Pirgun Air Systems, we&apos;re not just engineers – we&apos;re innovators, problem-solvers, and visionaries.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#7AB641] transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-[#7AB641] transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-[#7AB641] transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-[#7AB641] transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
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
          <p className="mb-4 text-white/80">
            Corporate business typically refers to large-scale mansola it.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-4 py-2 bg-black/20 rounded-l-full focus:outline-none"
            />
            <button className="bg-[#7AB641] p-2 rounded-r-full hover:bg-[#7AB641]/90 transition-colors">
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4">
          <p className="text-white/80">© 2024 Pirgun Air Systems | All Rights Reserved</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/80 hover:text-[#7AB641] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-white/80 hover:text-[#7AB641] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-[#7AB641] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}