"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useLanguage } from "./LanguageProvider"
import { commonStyles } from "../styles/common"
import DarkModeToggle from "./DarkModeToggle"

export default function Header() {
  const { t, currentLanguage, switchLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const navigationItems = [
    { href: "#projects", label: t("Header.Project") },
    { href: "#contact", label: t("Header.Contact") }
  ]

  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen])
  const toggleLanguage = useCallback(() => switchLanguage(currentLanguage === 'en' ? 'fr' : 'en'), [currentLanguage, switchLanguage])

  // Close mobile menu when clicking under the menu area
  useEffect(() => {
    const MENU_CLOSE_THRESHOLD = 200; // Height below which clicks should close menu
    
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMenuOpen) return
      
      const target = event.target as Node
      const isClickInsideMenu = mobileMenuRef.current?.contains(target)
      
      // Only close if click is below the menu area (not inside menu or header)
      if (!isClickInsideMenu && (event.clientY > MENU_CLOSE_THRESHOLD)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Sticky Header */}
      <motion.header
        className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-700 shadow-sm backdrop-blur transition-colors duration-300"
        style={{ opacity: headerOpacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 lg:py-8">
          {/* Logo */}
          <div
            className="text-2xl sm:text-3xl lg:text-6xl font-bold transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Léo Laborie
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-12 text-sm lg:text-5xl font-medium font-[Times_New_Roman] items-center">
            {navigationItems.map((item) => (
              <motion.li key={item.href} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                <a href={item.href} className={commonStyles.navLink}>
                  {item.label}
                </a>
              </motion.li>
            ))}
            
            {/* Language Toggle */}
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 ${commonStyles.navLink} text-sm lg:text-5xl font-medium font-[Times_New_Roman]`}
                aria-label="Toggle language"
              >
                <span className="text-sm lg:text-5xl">{currentLanguage === 'en' ? '🇫🇷' : '🇺🇸'}</span>
                <span>{currentLanguage === 'en' ? 'FR' : 'EN'}</span>
              </button>
            </motion.li>

            {/* Dark Mode Toggle */}
            <DarkModeToggle />
          </ul>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 relative z-60"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                }`}
              />
            </div>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            key="mobile-menu"
            className="md:hidden fixed inset-x-0 top-[64px] bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-700 z-50 backdrop-blur overflow-y-auto max-h-[calc(100vh-64px)] transition-colors duration-300"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-1 px-4 py-4">
              {navigationItems.map((item) => (
                <motion.li key={item.href} whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                  <a
                    href={item.href}
                    className={commonStyles.mobileNavLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              
              {/* Mobile Language Toggle */}
              <motion.li whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center gap-3 w-full ${commonStyles.mobileNavLink}`}
                >
                  <span className="text-lg">{currentLanguage === 'en' ? '🇫🇷' : '🇺🇸'}</span>
                  <span>Switch to {currentLanguage === 'en' ? 'Français' : 'English'}</span>
                </button>
              </motion.li>

              {/* Mobile Dark Mode Toggle */}
              <DarkModeToggle isMobile={true} />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
