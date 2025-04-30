"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ClipboardEdit, MessageSquare, User } from "lucide-react"

// Enhanced animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1] // Custom cubic bezier for natural motion
    }
  })
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0, 0.71, 0.2, 1.01] // "Spring" like bounce effect
    }
  }
}

const cardHoverTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20
}

export default function Features() {
  return (
    <section className="relative w-full overflow-hidden py-[50px] md:py-[90px]">
      {/* Background Image with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ y: 0 }}
        animate={{
          y: [0, -15, 0],
          transition: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            ease: "linear"
          }
        }}
      >
        <Image
          src="/features-section-bg-image.png"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Container */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
        >
          <motion.div 
            variants={fadeIn}
            custom={0}
            className="text-[18px] sm:text-[20px] md:text-[24px] font-normal font-[family-name:var(--font-geist-sans)] text-[#808080] text-center mb-[8px] sm:mb-[12px]"
          >
            YOUR INTELLIGENT DASHBOARD
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            custom={0.5}
            className="text-[28px] sm:text-[32px] md:text-[40px] font-normal font-[family-name:var(--font-geist-sans)] text-black text-center max-w-3xl mx-auto leading-tight"
          >
            Integrated AI platform for
            <br className="hidden sm:inline" />{" "}
            complete practice management
          </motion.div>
        </motion.div>
        
        {/* Image Section with subtle floating animation */}
        <motion.div 
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 sm:mt-10 md:mt-16 relative"
        >
          <motion.div 
            className="relative w-full h-[250px] xs:h-[300px] sm:h-[380px] md:h-[420px] lg:h-[540px] rounded-lg overflow-hidden"
            animate={{
              y: [0, -8, 0],
              transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          >
            <Image
              src="/dashboard-screenshots.png"
              alt="Dashboard screenshots"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 1000px"
            />
          </motion.div>
        </motion.div>
        
        {/* Cards Section */}
        <motion.div 
          className="mt-[30px] sm:mt-[40px] md:mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-[20px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1 */}
          <motion.div 
            variants={fadeIn}
            custom={1}
            className="border border-[#E4E4E7] p-[18px_22px] rounded-[10px] bg-white/80 backdrop-blur-sm"
            whileHover={{ 
              y: -8, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: cardHoverTransition
            }}
          >
            <div className="flex items-center mb-3">
              <motion.div 
                className="text-[#C33768] mr-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ClipboardEdit size={32} strokeWidth={1.75} />
              </motion.div>
              <div className="text-[18px] sm:text-[20px] font-semibold font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                Smart Task Management
              </div>
            </div>
            <div className="text-[16px] font-normal font-[family-name:var(--font-geist-sans)] text-[#3F3F46]">
              Never miss a patient follow-up or critical action item.
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            variants={fadeIn}
            custom={1.5}
            className="border border-[#E4E4E7] p-[18px_22px] rounded-[10px] bg-white/80 backdrop-blur-sm"
            whileHover={{ 
              y: -8, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: cardHoverTransition
            }}
          >
            <div className="flex items-center mb-3">
              <motion.div 
                className="text-[#C33768] mr-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MessageSquare size={32} strokeWidth={1.75} />
              </motion.div>
              <div className="text-[18px] sm:text-[20px] font-semibold font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                Unified Communication Hub
              </div>
            </div>
            <div className="text-[16px] font-normal font-[family-name:var(--font-geist-sans)] text-[#3F3F46]">
              Handle patient communications across all channels.
            </div>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            variants={fadeIn}
            custom={2}
            className="border border-[#E4E4E7] p-[18px_22px] rounded-[10px] bg-white/80 backdrop-blur-sm sm:col-span-2 md:col-span-1"
            whileHover={{ 
              y: -8, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: cardHoverTransition
            }}
          >
            <div className="flex items-center mb-3">
              <motion.div 
                className="text-[#C33768] mr-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <User size={32} strokeWidth={1.75} />
              </motion.div>
              <div className="text-[18px] sm:text-[20px] font-semibold font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                Patient Management
              </div>
            </div>
            <div className="text-[16px] font-normal font-[family-name:var(--font-geist-sans)] text-[#3F3F46]">
              Access complete patient history and records instantly.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 