"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
}

const accolades = [
  {
    imgSrc: "/images/logo-journal-record.png", // Replace with actual path
    alt: "The Journal Record Logo",
    text: "2023 Healthcare Hero",
  },
  {
    imgSrc: "/images/logo-dsi.png", // Replace with actual path
    alt: "DSI Dental Success Institute Logo",
    text: "Black Belt-level Coach",
  },
  {
    imgSrc: "/images/logo-40-under-40.png", // Replace with actual path
    alt: "40 Under 40 Logo",
    text: "Top Dentists in USA",
  },
]

export default function Founder() {
  return (
    <motion.section
      id="meet-the-founder"
      className="w-full overflow-hidden py-[50px] md:py-[90px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          variants={fadeInUp}
          custom={0}
          className="text-[16px] sm:text-[18px] md:text-[20px] font-normal font-[family-name:var(--font-geist-sans)] text-[#808080] uppercase tracking-wider mb-2 sm:mb-3 text-center lg:text-left"
        >
          Meet the Founder
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          custom={0.5}
          className="text-[28px] sm:text-[36px] md:text-[40px] font-normal font-[family-name:var(--font-geist-sans)] text-black mb-8 sm:mb-10 md:mb-12 text-center lg:text-left"
        >
          From Dentist to Dental AI Innovator
        </motion.h2>
      </div>

      {/* Founder Content Block - Full Width */}
      <motion.div
        variants={fadeInUp}
        custom={1}
        className="bg-[#17192B] w-full flex flex-col lg:flex-row shadow-xl" // Removed rounded corners and made full width
      >
        {/* Text Part */}
        <div className="lg:w-[65%] xl:w-[60%] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-1 max-w-7xl mx-auto lg:mx-0 lg:ml-auto lg:pl-8">
          <h3 className="font-[family-name:var(--font-lato)] text-[24px] sm:text-[28px] md:text-[32px] font-medium text-[#C33768] mb-4 sm:mb-5">
            Dr. Deren Flesher
          </h3>
          <p className="font-[family-name:var(--font-lato)] text-[16px] sm:text-[18px] md:text-[20px] font-normal text-white/90 leading-relaxed sm:leading-loose">
            Dr. Deren Flesher built AiroDental after experiencing the
            challenges of dental practice firsthand. After growing his own
            multi-doctor practice and creating Modento, he&apos;s applying his
            unique combination of clinical expertise and technical innovation
            to revolutionize how dental practices operate. Dr. Flesher
            designed AiroDental to solve the real problems he encountered
            throughout his career.
          </p>
        </div>

        {/* Image Part */}
        <div className="lg:w-[35%] xl:w-[40%] relative flex justify-center lg:justify-end items-end order-1 lg:order-2 min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] lg:min-h-0">
          {/* Container to help with positioning and allow image to "peek" */}
          <motion.div
            variants={fadeInUp}
            custom={1.5}
            className="w-full h-full flex justify-center items-end"
          >
            <Image
              src="/images/founder-dr-flesher.png" // Replace with actual path
              alt="Dr. Deren Flesher"
              width={450} // Adjusted for better responsiveness control
              height={600} // Adjusted for better responsiveness control
              className="object-contain object-bottom w-auto h-[380px] xs:h-[420px] sm:h-[500px] md:h-[550px] lg:h-[580px] mt-[-40px] sm:mt-[-60px] md:mt-[-80px] lg:mt-[-100px] xl:mt-[-120px] pointer-events-none"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Accolades Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-8 items-start text-center mt-12 md:mt-16 lg:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
          }}
        >
          {accolades.map((accolade, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="h-16 sm:h-20 flex items-center justify-center mb-3 sm:mb-4">
                <Image
                  src={accolade.imgSrc}
                  alt={accolade.alt}
                  width={150} // Provide a base width
                  height={80}  // Provide a base height
                  className="max-h-16 sm:max-h-20 w-auto object-contain"
                />
              </div>
              <p className="font-[family-name:var(--font-lato)] text-[14px] sm:text-[16px] text-black">
                {accolade.text}
              </p>
            </motion.div>
          ))}

          {/* Button */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center items-center sm:col-span-2 lg:col-span-1 lg:justify-self-end lg:self-center w-full pt-4 lg:pt-0"
          >
            <Link
              href="/about-dr-flesher" // Replace with actual link
              className="inline-block px-6 py-3 font-[family-name:var(--font-lato)] text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#09474C] border-2 border-[#09474C] rounded-full hover:bg-[#09474C]/10 transition-colors duration-300 whitespace-nowrap"
            >
              Read Dr. Flesher&apos;s Full Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
} 