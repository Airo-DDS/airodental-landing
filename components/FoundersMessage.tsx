"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

export default function FoundersMessage() {
  return (
    <motion.section
      id="founders-message"
      className="w-full overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          className="w-full"
        >
          <Image
            src="/deren-message.png"
            alt="Founder's Message from Dr. Deren Flesher"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority={false}
          />
        </motion.div>
      </div>
    </motion.section>
  )
} 