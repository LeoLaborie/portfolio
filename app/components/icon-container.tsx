"use client"

import React from "react"
import { motion } from "framer-motion"

interface IconContainerProps {
  children: React.ReactNode
  className?: string
  hoverRotate?: boolean
}

export default function IconContainer({ 
  children, 
  className = "w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center",
  hoverRotate = true
}: IconContainerProps) {
  return (
    <motion.div
      className={className}
      whileHover={hoverRotate ? { rotate: 10 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}