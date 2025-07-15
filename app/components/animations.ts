import { Variants, Transition } from "framer-motion"

// Common animation variants and utilities
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
}

export const slideOnHover = {
  whileHover: { y: -5 },
  transition: { duration: 0.3 }
}

export const rotateOnHover = {
  whileHover: { rotate: 10 },
  transition: { duration: 0.2 }
}

// Common transition timings
export const transitions: Record<string, Transition> = {
  fast: { duration: 0.2 },
  medium: { duration: 0.3 },
  slow: { duration: 0.6 },
  spring: { type: "spring", stiffness: 300, damping: 30 }
}

// Stagger animations
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}