"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const t = useTranslations("Header")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <nav className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 lg:py-8">
          {/* Logo/Name */}
          <div className="text-2xl sm:text-3xl lg:text-6xl font-bold transition-all duration-300 hover:text-gray-700">
            Léo Laborie
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 lg:space-x-20 text-sm lg:text-6xl font-medium">
            <li>
              <a
                href="#projects"
                className="hover:underline transition-all duration-300 hover:text-gray-600 hover:scale-105"
              >
                {t("Project")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline transition-all duration-300 hover:text-gray-600 hover:scale-105"
              >
                {t("Contact")}
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-60"
            aria-label="Toggle menu"
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
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Fixed position, starts below the header */}
      <div
        className={`md:hidden fixed inset-x-0 bg-white border-t transition-all duration-300 ease-in-out z-45
          ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
        style={{ top: "64px" }}
      >
        <ul className="flex flex-col space-y-1 px-4 py-4">
          <li>
            <a
              href="#projects"
              className="block py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-lg transition-all duration-200 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Project")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-lg transition-all duration-200 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Contact")}
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-20 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}
