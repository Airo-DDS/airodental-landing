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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', type: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ message: result.message || 'Form submitted successfully!', type: 'success' });
        setFormData({ name: "", email: "", practice: "", phone: "" }); // Clear form
      } else {
        setSubmitStatus({ message: result.error || 'Failed to submit form. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({ message: 'An unexpected error occurred. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <motion.div
        className="bg-[#C33764] text-white mx-auto py-20 px-5 sm:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="text-center mb-[60px]">
          <p className="text-sm uppercase tracking-wider opacity-80 font-[family-name:var(--font-geist-sans)]">Schedule a Consultation</p>
          <h2 className="text-[32px] font-bold mt-2 font-[family-name:var(--font-geist-sans)]">Take the First Step Toward Dental AI Integration</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl mx-auto">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-2 font-[family-name:var(--font-geist-sans)]">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full bg-transparent border-b border-white py-2 text-base focus:outline-none placeholder-white/70 font-[family-name:var(--font-lato)]"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-2 font-[family-name:var(--font-geist-sans)]">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full bg-transparent border-b border-white py-2 text-base focus:outline-none placeholder-white/70 font-[family-name:var(--font-lato)]"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="practice" className="text-sm mb-2 font-[family-name:var(--font-geist-sans)]">Practice Name</label>
            <input
              type="text"
              id="practice"
              value={formData.practice}
              onChange={handleChange}
              placeholder="Your practice name"
              required
              className="w-full bg-transparent border-b border-white py-2 text-base focus:outline-none placeholder-white/70 font-[family-name:var(--font-lato)]"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm mb-2 font-[family-name:var(--font-geist-sans)]">Phone Number (Optional)</label>
            <div className="relative">
              <span className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center gap-1 text-sm font-[family-name:var(--font-lato)]"> 
                US 🇺🇸
              </span>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className="w-full bg-transparent border-b border-white py-2 pl-[60px] text-base focus:outline-none placeholder-white/70 font-[family-name:var(--font-lato)]"
              />
            </div>
          </div>
          
          <div className="md:col-span-2 flex flex-col items-end mt-5">
            {submitStatus.message && (
              <div 
                className={`mb-4 text-sm p-3 rounded-md w-full text-center font-[family-name:var(--font-lato)]
                            ${submitStatus.type === 'success' ? 'bg-white/20 text-white' : 'bg-red-900/50 text-red-200 border border-red-300'}`}
              >
                {submitStatus.message}
              </div>
            )}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-white text-[#C33764] py-3 px-6 text-base font-medium flex items-center gap-2 hover:bg-opacity-90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed font-[family-name:var(--font-geist-sans)]"
            >
              {isSubmitting ? 'Submitting...' : 'Continue →'}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
} 