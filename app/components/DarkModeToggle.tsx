"use client"

import React, { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"
import { useDarkMode } from "./DarkModeProvider"
import { commonStyles } from "../styles/common"

interface DarkModeToggleProps {
  isMobile?: boolean
}

export default function DarkModeToggle({ isMobile = false }: DarkModeToggleProps) {
  const { toggleDarkMode } = useDarkMode()
  const [isClient, setIsClient] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const hasDarkClass = document.documentElement.classList.contains('dark')
    setIsDarkMode(hasDarkClass)
  }, [])

  const handleToggle = () => {
    toggleDarkMode()
    setIsDarkMode(prev => !prev)
  }

  return (
    <motion.li whileHover={isMobile ? { x: 10 } : { scale: 1.1 }} transition={{ duration: 0.2 }}>
      <button
        onClick={handleToggle}
        className={isMobile 
          ? `flex items-center gap-3 w-full ${commonStyles.mobileNavLink}`
          : commonStyles.iconButton
        }
        aria-label="Toggle dark mode"
        suppressHydrationWarning={true}
      >
        {isMobile ? (
          <React.Fragment>
            {isClient && isDarkMode ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
            <span suppressHydrationWarning={true}>
              {isClient && isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </React.Fragment>
        ) : (
          isClient && isDarkMode ? (
            <Sun className="w-4 h-4 lg:w-6 lg:h-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="w-4 h-4 lg:w-6 lg:h-6 text-gray-600 dark:text-gray-300" />
          )
        )}
      </button>
    </motion.li>
  )
}