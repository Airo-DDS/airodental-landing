"use client"

import { motion } from "framer-motion"
import Image from "next/image";
import { fadeIn, scaleIn, cardHoverTransition } from "@/lib/animations"

interface SolutionItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

const solutionItems: SolutionItem[] = [
  {
    id: "communication",
    image: "/ai-sphere.gif",
    title: "Revolutionize patient communication with AI",
    description: "AiroDental is redefining how dental offices engage with patients by leveraging AI-powered automation for phone calls, messages, and scheduling. Our AI-driven receptionist, Laine, ensures that every patient interaction is efficient, professional, and seamless."
  },
  {
    id: "training",
    image: "/ai-learning.png",
    title: "Empower Dental Teams with Smarter Training & Coaching",
    description: "Through Saige, our AI-powered coaching and training platform, we provide personalized learning paths for dental professionals. From front office staff to hygienists and associates, Saige adapts to each user's needs, delivering training that is interactive, effective, and scalable."
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative">
      <motion.div 
        className="bg-whit px-5 sm:px-10 py-16 sm:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-[60px]"
          variants={fadeIn}
          custom={0}
        >
          <motion.div 
            className="text-[18px] opacity-50 sm:text-[20px] md:text-[24px] font-medium font-[family-name:var(--font-lato)] text-black/50 uppercase tracking-wider mb-[8px] sm:mb-[12px]"
            variants={fadeIn}
            custom={0.2}
          >
            AI Driven Solutions
          </motion.div>
          <motion.div 
            className="text-[28px] sm:text-[32px] md:text-[40px] font-normal font-[family-name:var(--font-geist-sans)] text-black leading-tight"
            variants={fadeIn}
            custom={0.5}
          >
            By dentists, for dentists
          </motion.div>
        </motion.div>

        <div className="space-y-[50px] md:space-y-[80px]">
          {/* First item: Image left, text right */}
          <motion.div
            key={solutionItems[0].id}
            className="flex flex-col md:flex-row justify-center items-center"
            variants={fadeIn}
            custom={0.7}
          >
            <motion.div 
              className="w-full flex justify-center"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.03,
                transition: cardHoverTransition
              }}
            >
              <Image
                src={solutionItems[0].image}
                alt={solutionItems[0].title}
                width={500}
                height={350}
                className="w-3/4 md:w-1/2 h-auto object-cover rounded-md"
                priority
              />
            </motion.div>
            
            <div className="md:pl-5">
              <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-medium font-[family-name:var(--font-lato)] text-black mb-4">{solutionItems[0].title}</h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal font-[family-name:var(--font-geist-sans)] text-black/75 leading-relaxed">{solutionItems[0].description}</p>
            </div>
          </motion.div>

          {/* Second item: Text left, image right */}
          <motion.div
            key={solutionItems[1].id}
            className="flex flex-col-reverse md:flex-row justify-between items-center"
            variants={fadeIn}
            custom={1.0}
          >
            <div className="md:order-first md:pr-5">
              <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-medium font-[family-name:var(--font-lato)] text-black mb-4">{solutionItems[1].title}</h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal font-[family-name:var(--font-geist-sans)] text-black/75 leading-relaxed">{solutionItems[1].description}</p>
            </div>
            
            <motion.div 
              className="w-full md:order-last justify-center"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.03,
                transition: cardHoverTransition
              }}
            >
              <Image
                src={solutionItems[1].image}
                alt={solutionItems[1].title}
                width={500}
                height={350}
                className="w-full md:w-3/4 h-auto object-cover rounded-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 