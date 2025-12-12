import type React from "react"

// Project related types
export interface Projet {
  titre: string
  titreKey?: string
  description: string
  descriptionKey: string
  mediaUrl?: string
  mediaType?: "image" | "video"
  githubUrl?: string
  categorie: Categorie
  year?: number
  projectSize?: "small" | "large"
  features?: string[]
  featuresKey?: string
}

export type Categorie = "ml" | "web" | "algo" | "other"

// Skill related types
export interface Skill {
  name: string
  level: number
  category: SkillCategory
  iconName: string
  yearLearned?: number
}

export type SkillCategory = "programming" | "ml" | "web" | "tools"

// Component prop types
export interface CategoryFilterProps<T extends string> {
  categories: Record<T, { label: string; icon: React.ReactNode }>
  activeCategory: T
  onCategoryChangeAction: (category: T) => void
  delay?: number
}

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  titleDelay?: number
  subtitleDelay?: number
}

export interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  className?: string
}

export interface StaggeredContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export interface StaggeredItemProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

// Language provider types
export interface LanguageContextType {
  currentLanguage: string
  switchLanguage: (lang: string) => void
  t: (key: string) => string
}

// Dark mode provider types
export interface DarkModeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}