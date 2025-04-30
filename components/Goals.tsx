"use client"

import { motion } from "framer-motion"
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

interface GoalItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const goalItems: GoalItem[] = [
  {
    id: "efficiency",
    icon: "/goals-enhance-efficiency.png",
    title: "Enhance Efficiency & Reduce Operational Bottlenecks",
    description: "Airo Dental is designed to help practices run more smoothly by automating redundant tasks, improving team communication, and streamlining patient interactions. Our AI modules integrate with existing workflows to reduce manual effort and improve accuracy."
  },
  {
    id: "compliance",
    icon: "/goals-ensure-compliance.png",
    title: "Ensure Compliance & Security in AI-Powered Operations",
    description: "We prioritize HIPAA compliance and data security, ensuring that all AI interactions—whether patient-facing or internal—are protected and meet industry standards."
  },
  {
    id: "innovate",
    icon: "/goals-contionusly-innovate.png",
    title: "Continuously Innovate & Adapt AI for the Future of Dentistry",
    description: "As AI technology evolves, so does Airo Dental. We remain committed to upgrading our platform with the latest advancements in AI, including voice recognition, machine learning, and predictive analytics, to provide best-in-class solutions for dental professionals."
  },
  {
    id: "modular",
    icon: "/goals-fully-modular.png",
    title: "Create a Fully Modular, Scalable AI Ecosystem",
    description: "Airo Dental isn't just a single product—it's a growing suite of AI-driven tools designed to support dental practices. From patient communication to marketing analytics, clinical note dictation, and beyond, our goal is to create a comprehensive AI platform that adapts to the ever-changing needs of dentistry."
  },
  {
    id: "scale",
    icon: "/goals-support-scale.png",
    title: "Support & Scale Practices of All Sizes",
    description: "Whether you're a solo practitioner or a multi-location DSO, Airo Dental is built to scale with your practice. Our flexible AI modules can be tailored to different practice models, ensuring every office gets the right tools for its unique needs."
  },
  {
    id: "community",
    icon: "/goals-community.png",
    title: "Foster an AI-Powered Community for Dental Innovation",
    description: "Airo Dental is not just a software company; it's a movement to modernize dentistry. By collaborating with leading dental professionals, AI researchers, and practice owners, we aim to shape the future of AI in the industry."
  }
];

export default function Goals() {
  return (
    <section className="py-24 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
        >
          <p className="text-[24px] tracking-wide text-gray-500 mb-2 font-[family-name:var(--font-geist-sans)]">OUR GOALS</p>
          <h2 className="text-[40px] text-black font-[family-name:var(--font-geist-sans)]">Complete AI Dental Ecosystem</h2>
        </motion.div>

        <ul className="space-y-[100px]">
          {goalItems.map((item, index) => (
            <motion.li
              key={item.id}
              className="flex flex-col md:flex-row items-start"
              variants={fadeIn}
              custom={index}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-32 h-32 mx-auto md:mx-0 md:mr-[90px] mb-6 md:mb-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl text-[#C33768] mb-2 font-normal font-lato">{item.title}</h3>
                <p className="text-xl text-[#777879] font-normal font-geist">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
} 