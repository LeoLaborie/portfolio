"use client"

import React from "react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"

interface CategoryFilterProps<T extends string> {
  categories: Record<T, { label: string; icon: React.ReactNode }>
  activeCategory: T
  onCategoryChange: (category: T) => void
  delay?: number
}

export default function CategoryFilter<T extends string>({
  categories,
  activeCategory,
  onCategoryChange,
  delay = 0.5
}: CategoryFilterProps<T>) {
  return (
    <AnimatedSection delay={delay} direction="up">
      <div className="flex justify-center mb-16">
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-2xl p-1.5 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          {(Object.keys(categories) as T[]).map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm ${
                cat === activeCategory 
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" 
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + delay }}
            >
              {categories[cat].icon}
              <span className="hidden sm:inline">{categories[cat].label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}