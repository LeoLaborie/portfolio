"use client"

import type React from "react"
import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  className?: string
}

const createVariants = (direction: string, duration: number): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: duration,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
})

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  })

  const variants = createVariants(direction, duration)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
