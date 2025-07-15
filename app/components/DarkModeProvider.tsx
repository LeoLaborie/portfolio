"use client"

import React, { createContext, useContext, ReactNode, useCallback } from "react"

interface DarkModeContextType {
  toggleDarkMode: () => void
}

interface DarkModeProviderProps {
  children: ReactNode
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const toggleDarkMode = useCallback(() => {
    // Check current state and toggle
    if (document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
  }, [])

  const value: DarkModeContextType = { toggleDarkMode }

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode(): DarkModeContextType {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider")
  }
  return context
}