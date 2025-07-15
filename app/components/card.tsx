"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface CardProps {
  href?: string
  className?: string
  children: React.ReactNode
  showArrow?: boolean
  target?: string
  rel?: string
}

export default function Card({ 
  href, 
  className = "", 
  children, 
  showArrow = false,
  target,
  rel
}: CardProps) {
  const baseClasses = "group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 block"
  const combinedClasses = `${baseClasses} ${className}`

  const content = (
    <>
      {children}
      {showArrow && (
        <motion.div 
          className="flex-shrink-0" 
          whileHover={{ x: 5, y: -5 }} 
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
        </motion.div>
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.div
      className={combinedClasses}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {content}
    </motion.div>
  )
}