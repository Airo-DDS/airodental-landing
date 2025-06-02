"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const menuItems = [
  {
    title: "Overview",
    href: "#overview",
    isExternal: false,
    targetSection: "overview"
  },
  {
    title: "AI Modules",
    href: "#solutions",
    isExternal: false,
    targetSection: "solutions"
  },
  {
    title: "Laine",
    href: "https://laine.airodental.com",
    isExternal: true,
    isSpecial: true
  },
  {
    title: "Features",
    href: "#features",
    isExternal: false,
    targetSection: "features"
  },
  {
    title: "Founder",
    href: "#meet-the-founder",
    isExternal: false,
    targetSection: "meet-the-founder"
  },
]

export default function Footer() {
  const handleNavClick = (item: typeof menuItems[0]) => {
    if (item.isExternal) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
      return
    }

    // Smooth scroll to section
    if (item.targetSection) {
      const section = document.getElementById(item.targetSection)
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  return (
    <footer className="bg-[#0F121E] text-white py-[60px] px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <div className="mb-8 md:mb-0">
            <Image 
              src="/footer-logo.png" 
              alt="AiroDental Logo" 
              width={160} 
              height={40} 
              className="max-w-[160px] h-auto"
            />
          </div>
          
          <div className="mr-auto md:mr-0 mb-8 md:mb-0">
            <div className="text-sm uppercase tracking-wider text-white/70 mb-4 font-[family-name:var(--font-geist-sans)]">MENU</div>
            <ul className="list-none p-0 m-0 space-y-3">
              {menuItems.map((item) => (
                <li key={item.title}>
                  {item.isSpecial ? (
                    // Special styling for Laine
                    <motion.button
                      onClick={() => handleNavClick(item)}
                      className="group flex items-center gap-2 text-white bg-gradient-to-r from-[#C33768] to-[#09474C] px-3 py-1.5 rounded-md text-base font-medium border-0 cursor-pointer transition-all duration-300"
                      whileHover={{ scale: 1.05, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-[family-name:var(--font-lato)]">{item.title}</span>
                      <svg 
                        className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.button>
                  ) : (
                    // Regular nav items with enhanced hover effects
                    <motion.button
                      onClick={() => handleNavClick(item)}
                      className="group relative text-white text-base border-0 bg-transparent p-0 cursor-pointer font-[family-name:var(--font-lato)] transition-all duration-300"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="relative z-10 group-hover:text-[#C33768] transition-colors duration-300">
                        {item.title}
                      </span>
                      <motion.div 
                        className="absolute bottom-[-2px] left-0 h-[1px] bg-gradient-to-r from-[#C33768] to-[#09474C] origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ width: "100%" }}
                      />
                    </motion.button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6">
          <div className="text-white/60 text-sm mb-4 md:mb-0 font-[family-name:var(--font-geist-sans)]">
            Copyright 2025 @ Airodental
          </div>
          <div className="flex gap-6">
            <motion.a 
              href="#" 
              className="text-white/60 no-underline text-sm hover:text-white/80 transition-colors font-[family-name:var(--font-geist-sans)]"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-white/60 no-underline text-sm hover:text-white/80 transition-colors font-[family-name:var(--font-geist-sans)]"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
} 