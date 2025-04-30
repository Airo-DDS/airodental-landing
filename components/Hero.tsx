"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// Animation variants for consistent, reusable animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] // Cubic bezier for a professional easing
    }
  })
}

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with animation */}
      <motion.div 
        className="absolute inset-0 z-0 translate-y-[120px]"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: "easeOut"
          }
        }}
      >
        <div className="relative w-[100%] h-[80%] mx-auto">
          <Image
            src="/hero-bg-image.png"
            alt="Hero background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </motion.div>
      
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-center mx-auto max-w-[1920px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px] pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          className="hero-main-container"
        >
          {/* Hero Logo */}
          <motion.div
            variants={fadeInUp}
            custom={0}
          >
            <Image 
              src="/hero-section-logo.png" 
              alt="Airodental Logo" 
              width={300} 
              height={100}
              className="w-[300px] max-w-full h-auto mb-6 sm:mb-8"
            />
          </motion.div>
          
          {/* Hero Text */}
          <motion.div 
            variants={fadeInUp}
            custom={1}
            className="text-[36px] font-medium mb-[30px] text-black md:pr-10 sm:text-[30px] xs:text-[26px]"
          >
            Revolutionizing dental practices with AI
          </motion.div>
          
          {/* CTA Container */}
          <motion.div 
            variants={fadeInUp}
            custom={2}
            className="flex flex-col sm:flex-row items-center gap-[33px] flex-wrap"
          >
            <Link 
              href="#get-started" 
              className="text-[#878788] text-[24px] sm:text-[22px] xs:text-[20px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#878788] after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#6d6d6e] transition-colors duration-300"
            >
              Get started
            </Link>
            <Link 
              href="#book-demo" 
              className="text-[#09474C] text-[24px] sm:text-[22px] xs:text-[20px] border border-[#09474C] rounded-[50px] px-[21px] py-[5px] hover:bg-[#09474C] hover:text-white transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] hover:shadow-md"
            >
              Book a demo
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-[#09474C] text-[24px] sm:text-[22px] xs:text-[20px] border border-[#09474C] rounded-[50px] px-[21px] py-[5px] hover:bg-[#09474C] hover:text-white transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] hover:shadow-md"
            >
              See how it works
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 