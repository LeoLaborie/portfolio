"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

export default function Header() {
  const t = useTranslations("Header")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Sticky Header */}
      <motion.header
        className="sticky top-0 z-50 bg-white/95 border-b shadow-sm backdrop-blur"
        style={{ opacity: headerOpacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 lg:py-8">
          {/* Logo */}
          <div
            className="text-2xl sm:text-3xl lg:text-6xl font-bold transition-all duration-300 hover:text-gray-700 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Léo Laborie
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 lg:space-x-18 text-sm lg:text-5xl font-medium font-[Times_New_Roman]">
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <a
                href="#projects"
                className="hover:underline transition-all duration-300 hover:text-gray-600 hover:scale-105"
              >
                {t("Project")}
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <a
                href="#contact"
                className="hover:underline transition-all duration-300 hover:text-gray-600 hover:scale-105"
              >
                {t("Contact")}
              </a>
            </motion.li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-60"
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
            key="mobile-menu"
            className="md:hidden fixed inset-x-0 top-[64px] bg-white/95 border-t z-50 backdrop-blur overflow-y-auto max-h-[calc(100vh-64px)]"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-1 px-4 py-4">
              <motion.li whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <a
                  href="#projects"
                  className="block py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("Project")}
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <a
                  href="#contact"
                  className="block py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("Contact")}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
