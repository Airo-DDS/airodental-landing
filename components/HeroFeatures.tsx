"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ClipboardEdit, MessageSquare, User } from "lucide-react"
import { fadeIn, cardHoverTransition, iconHoverTransition } from "@/lib/animations"

export default function HeroFeatures() {
  return (
    <section id="hero-features">

          <div id="hero-dashboard-screenshot">
            {/* Background animation */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-screen h-screen md:h-3/4 absolute top-10 left-0 object-contain md:object-cover -z-10"
            >
                <source src="/ad-hero-wave.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          {/* Image Section with subtle floating animation */}
            <motion.div 
            // variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-4 sm:mt-10 md:mt-16 relative"
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
                    src="/dashboard-screenshots.svg"
                    alt="Dashboard screenshots"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 1000px px-4"
                />
                </motion.div>
            </motion.div>
          </div>

        {/* Title Container */}
        <motion.div 
            className="text-center mt-32"
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

        {/* Cards Section */}
        <motion.div 
            className="mt-[30px] sm:mt-[40px] md:mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-[20px] px-4 md:px-20"
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
                transition={iconHoverTransition}
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
                transition={iconHoverTransition}
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
                transition={iconHoverTransition}
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
    </section>
  )
} 