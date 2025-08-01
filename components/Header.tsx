"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import MobileMenu from "./MobileMenu"
import { headerVariants, itemVariants } from "@/lib/animations"

const menuItems = [
  {
    title: "Founder",
    href: "#meet-the-founder",
    isExternal: false,
    targetSection: "meet-the-founder"
  },
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
    href: "https://laine.AiroDental.com",
    isExternal: true,
    isSpecial: true
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
      <div className="flex justify-start ml-4 md:ml-0 md:justify-center items-center gap-[60px] mt-[50px]">
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
              alt="AiroDental Logo" 
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
                <motion.button
                  onClick={() => handleNavClick(item)}
                  className="relative text-[16px] text-black cursor-pointer border-0 bg-transparent p-0 hover:text-[#C33764] hover:font-bold transition-all duration-300"
                >
                  <span className="flex items-center gap-1">
                    {item.title}
                    {item.isExternal && (
                      <svg 
                        className="w-3 h-3" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </span>
                </motion.button>
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