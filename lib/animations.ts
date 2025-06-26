import { Variants } from "framer-motion"

// Custom easing for professional animations
export const customEase = "cubic-bezier(0.215, 0.61, 0.355, 1)"

// Modal animation
export const modalSpring = {
  type: "spring" as const,
  damping: 25,
  stiffness: 500,
}

// Card hover transition
export const cardHoverTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20
}

// Icon hover transition
export const iconHoverTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 10
}

// Header animation variants
export const headerVariants: Variants = {
  hidden: { 
    y: -80, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: customEase,
      when: "beforeChildren" as const,
      staggerChildren: 0.1
    }
  }
}

// Header item variants
export const itemVariants: Variants = {
  hidden: { 
    y: -20, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

// Mobile menu animation variants
export const backdropVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
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

export const menuVariants: Variants = {
  hidden: { 
    x: "100%" 
  },
  visible: { 
    x: 0,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 300,
      when: "beforeChildren" as const,
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

export const menuItemVariants: Variants = {
  hidden: { 
    x: 20, 
    opacity: 0 
  },
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