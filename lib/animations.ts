import { Variants } from "framer-motion"

// Custom easing for professional animations
export const customEase = "cubic-bezier(0.215, 0.61, 0.355, 1)"

// Modal animation
export const modalSpring = {
  type: "spring",
  damping: 25,
  stiffness: 500,
}

// Fade in up animation variant
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: customEase
    }
  })
}

// Fade in animation variant
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: customEase
    }
  })
}

// Slide in from left animation variant
export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: customEase
    }
  })
}

// Slide in from right animation variant
export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: customEase
    }
  })
}

// Scale in animation variant
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: customEase
    }
  })
} 