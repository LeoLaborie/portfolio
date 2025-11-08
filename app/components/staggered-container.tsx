"use client"

import type React from "react"

import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface StaggeredContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

/**
 * Staggered animation container for child elements
 * Animates children sequentially with a delay between each
 * @param children - Child elements to animate
 * @param className - Additional CSS classes
 * @param staggerDelay - Delay between child animations (default: 0.1s)
 * @returns Container with staggered child animations
 */
export default function StaggeredContainer({ children, className = "", staggerDelay = 0.1 }: StaggeredContainerProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
