"use client"

import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  menuItems: Array<{
    title: string
    href: string
    isExternal?: boolean
    isSpecial?: boolean
    targetSection?: string
  }>
}

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

const menuVariants = {
  hidden: { x: "100%" },
  visible: { 
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "cubic-bezier(0.6, 0.05, 0.01, 0.99)"
    }
  }
}

const menuItemVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
}

export default function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleNavClick = (item: typeof menuItems[0]) => {
    if (item.isExternal) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
      onClose()
      return
    }

    // Smooth scroll to section
    if (item.targetSection) {
      const section = document.getElementById(item.targetSection)
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    onClose()
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          {/* Menu panel */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <motion.div 
                className="flex justify-end p-4"
                variants={menuItemVariants}
              >
                <motion.button 
                  type="button"
                  onClick={onClose} 
                  className="p-2 text-gray-500 hover:text-gray-700"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </motion.button>
              </motion.div>
              
              <nav className="flex-1 px-4 pb-4">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <motion.li 
                      key={item.title}
                      variants={menuItemVariants}
                    >
                      <motion.button
                        onClick={() => handleNavClick(item)}
                        className="w-full text-left block py-2 text-lg font-medium text-gray-800 hover:text-[#C33764] hover:font-bold transition-all duration-300 flex items-center gap-2"
                      >
                        <span>{item.title}</span>
                        {item.isExternal && (
                          <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 