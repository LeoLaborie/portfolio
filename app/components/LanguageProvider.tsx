"use client"

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from "react"

// Import translation data directly
import enMessages from "../../messages/en.json"
import frMessages from "../../messages/fr.json"

type Language = "en" | "fr"
type Messages = typeof enMessages

interface LanguageContextType {
  currentLanguage: Language
  switchLanguage: (newLanguage: Language) => void
  t: (key: string) => string
  messages: Messages
}

interface LanguageProviderProps {
  children: ReactNode
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")
  const [messages, setMessages] = useState<Messages>(enMessages)

  useEffect(() => {
    // Check localStorage for saved preference
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language | null
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setCurrentLanguage(savedLanguage)
      setMessages(savedLanguage === "en" ? enMessages : frMessages)
    }
  }, [])

  const switchLanguage = useCallback((newLanguage: Language) => {
    if (newLanguage === "en" || newLanguage === "fr") {
      setCurrentLanguage(newLanguage)
      setMessages(newLanguage === "en" ? enMessages : frMessages)
      localStorage.setItem("preferredLanguage", newLanguage)
    }
  }, [])

  const t = useCallback((key: string): string => {
    const keys = key.split(".")
    let value: unknown = messages
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }, [messages])

  const value: LanguageContextType = useMemo(() => ({
    currentLanguage,
    switchLanguage,
    t,
    messages
  }), [currentLanguage, switchLanguage, t, messages])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}