"use client"

import React from "react"
import AnimatedSection from "./animated-section"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  titleDelay?: number
  subtitleDelay?: number
}

/**
 * Section header component with title, divider, and optional subtitle
 * @param title - Main section title
 * @param subtitle - Optional descriptive subtitle
 * @param titleDelay - Animation delay for title (default: 0.1s)
 * @param subtitleDelay - Animation delay for subtitle (default: 0.3s)
 * @returns Animated section header with consistent styling
 */
export default function SectionHeader({ 
  title, 
  subtitle, 
  titleDelay = 0.1, 
  subtitleDelay = 0.3 
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <AnimatedSection delay={titleDelay} direction="up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={subtitleDelay} direction="up">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  )
}