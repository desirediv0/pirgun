"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Story", href: "/story" },
  { name: "Visa", href: "/visa" },
  { name: "Blog", href: "/blog" },
  { name: "Page", href: "/page" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-[#E6EEF5] border-r"
      >
        <div className="h-24 flex items-center justify-center border-b bg-white">
          <motion.div 
            onClick={() => router.push("/")}
            whileHover={{ scale: 1.05 }} 
            className="w-40 h-16 relative cursor-pointer"
          >
            <Image src="/logo.png" layout="fill" objectFit="contain" alt="Logo" />
          </motion.div>
        </div>

        <div className="flex flex-col flex-1 px-6 py-8">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ x: 10, color: "#87BD2B" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-lg font-medium text-[#00488D]"
              >
                <Link href={item.href}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div className="p-6 border-t bg-white" whileHover={{ scale: 1.02 }}>
          <motion.button
            className="w-full bg-[#00488D] text-white py-3 px-4 rounded-lg text-lg font-medium shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: "#87BD2B" }}
            whileTap={{ scale: 0.95 }}
          >
            Appointment
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="md:hidden sticky top-0 left-0 right-0 h-24 bg-white shadow-lg z-50"
      >
        <div className="flex items-center justify-between h-full px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="text-[#00488D] p-2"
          >
            <Menu size={28} />
          </motion.button>

          <div onClick={() => router.push("/")} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
            <Image src="/logo.png" width={120} height={40} alt="Logo" />
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 left-0 bottom-0 w-[90%] bg-[#E6EEF5] z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="h-24 flex items-center justify-between px-6 border-b bg-white">
                  <Image 
                    src="/logo.png" 
                    width={120} 
                    height={40} 
                    alt="Logo" 
                    onClick={() => router.push("/")} 
                    className="cursor-pointer"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="text-[#00488D] p-2"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <div className="flex-1 px-6 py-8">
                  <ul className="space-y-6">
                    {menuItems.map((item) => (
                      <motion.li
                        key={item.name}
                        whileHover={{ x: 10, color: "#87BD2B" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-lg font-medium text-[#00488D]"
                      >
                        <Link href={item.href} onClick={() => setIsOpen(false)}>
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 border-t bg-white">
                  <motion.button
                    className="w-full bg-[#00488D] text-white py-3 px-4 rounded-lg text-lg font-medium shadow-lg"
                    whileHover={{ scale: 1.05, backgroundColor: "#87BD2B" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                  >
                    Appointment
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}