"use client"

import { useEffect } from "react"
import { useLanguage } from "./LanguageProvider"

/**
 * Client component that dynamically updates the HTML lang attribute
 * based on the user's language preference (en/fr)
 * Important for SEO and screen reader accessibility
 */
export function HtmlLangWrapper({ children }: { children: React.ReactNode }) {
  const { currentLanguage } = useLanguage()
  
  useEffect(() => {
    // Update the html lang attribute when language changes
    document.documentElement.lang = currentLanguage
  }, [currentLanguage])
  
  return <>{children}</>
}
