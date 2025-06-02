"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import MobileMenu from "./MobileMenu"

// Animation variants
const headerVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main menu container */}
      <div className="flex justify-center items-center gap-[60px] mt-[50px]">
        {/* Logo container */}
        <motion.div 
          className="w-[60px] h-[60px] bg-[#f1f1f1] rounded-full flex items-center justify-center"
          variants={itemVariants}
          animate={hasScrolled ? "withShadow" : "noShadow"}
          initial="noShadow"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            boxShadow: hasScrolled 
              ? "0px 4px 20px rgba(0, 0, 0, 0.1)" 
              : "0px 0px 0px rgba(0, 0, 0, 0)"
          }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Airodental Logo" 
              width={40} 
              height={40}
              className="object-contain"
            />
          </Link>
        </motion.div>
        
        {/* Navigation container */}
        <motion.div 
          className="bg-[#f1f1f1] py-[18px] px-[33px] rounded-[50px] hidden md:block"
          variants={itemVariants}
          animate={hasScrolled ? "withShadow" : "noShadow"}
          initial="noShadow"
          style={{
            boxShadow: hasScrolled 
              ? "0px 4px 20px rgba(0, 0, 0, 0.1)" 
              : "0px 0px 0px rgba(0, 0, 0, 0)"
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex gap-[60px]">
            {menuItems.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                {item.isSpecial ? (
                  // Special styling for Laine
                  <motion.button
                    onClick={() => handleNavClick(item)}
                    className="relative text-[16px] font-medium text-white bg-gradient-to-r from-[#C33764] to-[#09474C] px-4 py-2 rounded-full overflow-hidden group cursor-pointer border-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {item.title}
                      <svg 
                        className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#09474C] to-[#C33764] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ) : (
                  // Regular nav items with enhanced hover effects
                  <motion.button
                    onClick={() => handleNavClick(item)}
                    className="relative text-[16px] text-black cursor-pointer border-0 bg-transparent p-0 group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-[#09474C]">
                      {item.title}
                    </span>
                    <motion.div 
                      className="absolute bottom-[-2px] left-0 h-[2px] bg-gradient-to-r from-[#C33764] to-[#09474C] origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ width: "100%" }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#C33764]/10 to-[#09474C]/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{ margin: "-4px" }}
                    />
                  </motion.button>
                )}
              </motion.div>
            ))}
          </nav>
        </motion.div>
        
        {/* Mobile menu button */}
        <motion.button 
          type="button" 
          className="md:hidden text-gray-700 absolute right-4"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </motion.button>

        {/* Mobile menu */}
        <MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)}
          menuItems={menuItems}
        />
      </div>
    </motion.header>
  )
} 