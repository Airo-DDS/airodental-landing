"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import VapiModal from "./VapiModal"
import { fadeInUp } from "@/lib/animations"
import HeroFeatures from "./HeroFeatures"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="relative w-full pt-32 pb-32">
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-center mx-auto max-w-[1920px] pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          className="hero-main-container text-center"
        >
          <div className="flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
            {/* Hero Logo */}
            <motion.div
              variants={fadeInUp}
              custom={0}
            >
              <Image 
                src="/ad-logo.png" 
                alt="AiroDental Logo" 
                width={300} 
                height={100}
                className="w-[200px] sm:w-[300px] max-w-full h-auto mb-6 sm:mb-8 mx-auto"
              />
            </motion.div>
            {/* Hero Text */}
            <motion.div 
              variants={fadeInUp}
              custom={1}
            >
              <h3 className="text-[36px] font-medium mb-[12px] text-black md:pr-10 sm:text-[30px] xs:text-[24px]">Revolutionizing dental practices with AI</h3>
              <span>Streamline operations, enhance patient care, and automate communication across hundreds of dental practices</span>
            </motion.div>
          </div>
          {/* CTA Container */}
          <motion.div 
            variants={fadeInUp}
            custom={2}
            className="flex flex-col sm:flex-row items-center justify-center gap-[33px] flex-wrap"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-block my-10 px-6 py-3 bg-white rounded-full border border-[#09474C] cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xl font-semibold text-[#09474C] mr-6"
                  >
                    Experience Our AI Live
                  </span>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                  >
                    <circle 
                      cx="12" 
                      cy="12" 
                      r="12" 
                      fill="#09474C"
                    />
                    <path 
                      d="M10 8V16L16 12L10 8Z" 
                      fill="white"
                    />
                  </svg>
                </div>
              </button>
            </motion.div>
          </motion.div>
          <HeroFeatures/>
        </motion.div>
      </div>

      {/* VapiModal */}
      <VapiModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
} 