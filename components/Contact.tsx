"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    practice: "",
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section>
      <motion.div
        className="bg-[#C33764] text-white mx-auto py-20 px-5 sm:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="text-center mb-[60px]">
          <p className="text-sm uppercase tracking-wider opacity-80 font-geist">Schedule a Consultation</p>
          <h2 className="text-[32px] font-bold mt-2 font-geist">Take the First Step Toward Dental AI Integration</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-2 font-geist">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-transparent border-b border-white py-2 text-base focus:outline-none placeholder-white/70"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-2 font-geist">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-transparent border-b border-white py-2 text-base focus:outline-none placeholder-white/70"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="practice" className="text-sm mb-2 font-geist">Practice Name</label>
            <input
              type="text"
              id="practice"
              value={formData.practice}
              onChange={handleChange}
              placeholder="Your practice name"
              className="w-full bg-transparent border-b border-white py-2 text-base focus:outline-none placeholder-white/70"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm mb-2 font-geist">Phone Number</label>
            <div className="relative">
              <span className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center gap-1 text-sm">
                US 🇺🇸 ▼
              </span>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className="w-full bg-transparent border-b border-white py-2 pl-[70px] text-base focus:outline-none placeholder-white/70"
              />
            </div>
          </div>
          
          <div className="md:col-start-2 flex justify-end mt-5">
            <button 
              type="submit" 
              className="bg-white text-[#C33764] py-3 px-6 text-base font-medium flex items-center gap-2 hover:bg-opacity-90 transition-colors"
            >
              Continue →
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
} 