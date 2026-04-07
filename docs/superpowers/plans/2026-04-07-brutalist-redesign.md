# Brutalist Portfolio Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio's visual identity from clean/minimalist to industrial brutaliste, while refactoring the codebase into a well-organized component architecture with a proper design token system.

**Architecture:** Replace `commonStyles.ts` with a two-layer design system (`tokens.ts` for raw values, `components.ts` for composed Tailwind classes). Reorganize flat `components/` into `ui/`, `layout/`, `sections/`, `animation/`, `providers/` subdirectories. Restyle all sections with brutaliste aesthetics: sharp corners, thick borders, offset shadows, monospace accents, and mechanical animations.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 4, Framer Motion, Geist Mono, Times New Roman

---

## File Structure

### New files to create:
- `app/design/tokens.ts` — Raw design tokens (colors, spacing, typography, borders, shadows)
- `app/design/components.ts` — Composed Tailwind class strings using tokens
- `app/components/ui/Button.tsx` — Reusable button (primary/secondary/ghost)
- `app/components/ui/Badge.tsx` — Reusable badge (category, tech, level)
- `app/components/ui/Card.tsx` — Brutaliste card (replaces `card.tsx`)
- `app/components/layout/Section.tsx` — Section wrapper with brutaliste styling
- `app/components/layout/Container.tsx` — Max-width container
- `app/components/layout/NavLinks.tsx` — Navigation link list (desktop)
- `app/components/layout/MobileMenu.tsx` — Mobile menu drawer
- `app/components/layout/LanguageSwitcher.tsx` — Language toggle button
- `app/components/layout/ThemeToggle.tsx` — Dark mode toggle (replaces `DarkModeToggle.tsx`)

### Files to move (rename path only):
- `app/components/Hero.tsx` → `app/components/sections/Hero.tsx`
- `app/components/Experience.tsx` → `app/components/sections/Experience.tsx`
- `app/components/Projects.tsx` → `app/components/sections/Projects.tsx`
- `app/components/Skills.tsx` → `app/components/sections/Skills.tsx`
- `app/components/Parcours.tsx` → `app/components/sections/Parcours.tsx`
- `app/components/Contact.tsx` → `app/components/sections/Contact.tsx`
- `app/components/SectionHeader.tsx` → `app/components/ui/SectionHeader.tsx`
- `app/components/CategoryFilter.tsx` → `app/components/ui/CategoryFilter.tsx`
- `app/components/animated-section.tsx` → `app/components/animation/animated-section.tsx`
- `app/components/staggered-container.tsx` → `app/components/animation/staggered-container.tsx`
- `app/components/staggered-item.tsx` → `app/components/animation/staggered-item.tsx`
- `app/components/parallax-section.tsx` → `app/components/animation/parallax-section.tsx`
- `app/components/DarkModeProvider.tsx` → `app/components/providers/DarkModeProvider.tsx`
- `app/components/LanguageProvider.tsx` → `app/components/providers/LanguageProvider.tsx`
- `app/components/HtmlLangWrapper.tsx` → `app/components/providers/HtmlLangWrapper.tsx`
- `app/components/ErrorBoundary.tsx` → `app/components/providers/ErrorBoundary.tsx`
- `app/components/JsonLd.tsx` → `app/components/providers/JsonLd.tsx`

### Files to delete after migration:
- `app/styles/common.ts` (replaced by `app/design/tokens.ts` + `app/design/components.ts`)
- `app/components/card.tsx` (replaced by `app/components/ui/Card.tsx`)
- `app/components/DarkModeToggle.tsx` (replaced by `app/components/layout/ThemeToggle.tsx`)
- `app/components/icon-container.tsx` (unused after refactor)

---

## Task 1: Create Design Tokens

**Files:**
- Create: `app/design/tokens.ts`

- [ ] **Step 1: Create the tokens file**

```ts
// app/design/tokens.ts
// Raw design values — source of truth for the brutalist design system

export const colors = {
  black: "#000000",
  white: "#ffffff",
  accent: "#FFD600", // Yellow vif — can be swapped to #C0392B (rouge brique)
  gray: {
    100: "#f5f5f5",
    400: "#9ca3af",
    600: "#4b5563",
  },
  terminal: {
    green: "#22c55e",
  },
} as const

export const spacing = {
  xs: "8px",   // 0.5rem
  sm: "16px",  // 1rem
  md: "24px",  // 1.5rem
  lg: "32px",  // 2rem
  xl: "48px",  // 3rem
  "2xl": "64px", // 4rem
  "3xl": "96px", // 6rem
} as const

export const typography = {
  family: {
    serif: "Times New Roman, Times, serif",
    mono: "var(--font-geist-mono), monospace",
  },
  size: {
    xs: "text-xs",      // 12px
    sm: "text-sm",      // 14px
    base: "text-base",  // 16px
    lg: "text-lg",      // 18px
    xl: "text-xl",      // 20px
    "2xl": "text-2xl",  // 24px
    "3xl": "text-3xl",  // 30px
    "4xl": "text-4xl",  // 36px
    "5xl": "text-5xl",  // 48px
    "7xl": "text-7xl",  // 72px
    "8xl": "text-8xl",  // 96px
    "9xl": "text-9xl",  // 128px
  },
} as const

export const borders = {
  thin: "border-2",
  thick: "border-4",
  color: {
    light: "border-black",
    dark: "dark:border-white",
  },
} as const

export const shadows = {
  sm: "shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff]",
  md: "shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]",
  lg: "shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#fff]",
  accent: "shadow-[4px_4px_0_#FFD600]",
  none: "shadow-none",
} as const
```

- [ ] **Step 2: Verify the file compiles**

Run: `npx tsc --noEmit app/design/tokens.ts 2>&1 | head -5`
Expected: No errors (or only unrelated errors from other files)

- [ ] **Step 3: Commit**

```bash
git add app/design/tokens.ts
git commit -m "add brutalist design tokens"
```

---

## Task 2: Create Component Styles

**Files:**
- Create: `app/design/components.ts`

- [ ] **Step 1: Create the component styles file**

```ts
// app/design/components.ts
// Composed Tailwind class strings built on design tokens
import { borders, shadows } from "./tokens"

// Sections
export const section = {
  base: "py-20 px-4 md:px-8 scroll-mt-20 transition-colors duration-100",
  light: "bg-white dark:bg-black",
  dark: "bg-black dark:bg-white text-white dark:text-black",
  alternate: "bg-[#f5f5f5] dark:bg-[#0a0a0a]",
} as const

// Containers
export const container = {
  base: "max-w-6xl mx-auto",
  small: "max-w-4xl mx-auto",
} as const

// Typography
export const text = {
  heading: "font-bold text-black dark:text-white transition-colors duration-100",
  body: "text-black/70 dark:text-white/70 transition-colors duration-100",
  mono: "font-[family-name:var(--font-geist-mono)]",
  label: "font-[family-name:var(--font-geist-mono)] uppercase tracking-widest text-sm",
} as const

// Cards
export const card = {
  base: `bg-white dark:bg-black ${borders.thin} ${borders.color.light} ${borders.color.dark} rounded-none ${shadows.md} transition-all duration-100`,
  hover: "hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] dark:hover:shadow-[6px_6px_0_#fff]",
  padding: "p-4 sm:p-6 md:p-8",
} as const

// Buttons
export const button = {
  primary: `inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black ${borders.thin} border-black dark:border-white rounded-none font-[family-name:var(--font-geist-mono)] uppercase tracking-wider text-sm ${shadows.sm} hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#FFD600] transition-all duration-100`,
  secondary: `inline-flex items-center gap-2 px-4 py-2.5 bg-transparent text-black dark:text-white ${borders.thin} border-black dark:border-white rounded-none font-[family-name:var(--font-geist-mono)] uppercase tracking-wider text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-100`,
  ghost: `inline-flex items-center gap-2 px-4 py-2.5 bg-transparent text-black dark:text-white rounded-none font-[family-name:var(--font-geist-mono)] uppercase tracking-wider text-sm hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-100`,
} as const

// Badges
export const badge = {
  base: `inline-flex items-center px-3 py-1 ${borders.thin} border-black dark:border-white rounded-none font-[family-name:var(--font-geist-mono)] uppercase tracking-wider text-xs`,
  filled: "bg-black dark:bg-white text-white dark:text-black",
  outline: "bg-transparent text-black dark:text-white",
  accent: "bg-[#FFD600] text-black border-black",
} as const

// Dividers
export const divider = {
  horizontal: `w-full ${borders.thin} border-black/20 dark:border-white/20`,
  thick: `w-full ${borders.thick} border-black dark:border-white`,
  accent: `w-24 ${borders.thick} border-[#FFD600]`,
} as const

// Navigation
export const nav = {
  link: "font-[family-name:var(--font-geist-mono)] uppercase tracking-wider text-sm hover:line-through transition-all duration-100",
  linkActive: "font-[family-name:var(--font-geist-mono)] uppercase tracking-wider text-sm line-through",
  mobileLink: "block py-3 px-4 text-lg font-[family-name:var(--font-geist-mono)] uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-100",
} as const

// Grid
export const grid = {
  base: "grid gap-8 md:gap-12",
  two: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
} as const

// Icon buttons
export const iconButton = `flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 ${borders.thin} border-black dark:border-white rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-100` as const
```

- [ ] **Step 2: Verify the file compiles**

Run: `npx tsc --noEmit app/design/components.ts 2>&1 | head -5`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add app/design/components.ts
git commit -m "add brutalist component styles"
```

---

## Task 3: Create Atomic UI Components

**Files:**
- Create: `app/components/ui/Button.tsx`
- Create: `app/components/ui/Badge.tsx`
- Create: `app/components/ui/Card.tsx`

- [ ] **Step 1: Create the Button component**

```tsx
// app/components/ui/Button.tsx
"use client"

import React from "react"
import { motion } from "framer-motion"
import { button } from "../../design/components"

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost"
  href?: string
  download?: boolean
  target?: string
  rel?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = "primary",
  href,
  download,
  target,
  rel,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const classes = `${button[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
```

- [ ] **Step 2: Create the Badge component**

```tsx
// app/components/ui/Badge.tsx
import React from "react"
import { badge } from "../../design/components"

interface BadgeProps {
  variant?: "filled" | "outline" | "accent"
  children: React.ReactNode
  className?: string
}

export default function Badge({
  variant = "outline",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span className={`${badge.base} ${badge[variant]} ${className}`}>
      {children}
    </span>
  )
}
```

- [ ] **Step 3: Create the Card component**

```tsx
// app/components/ui/Card.tsx
"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { card } from "../../design/components"

interface CardProps {
  href?: string
  className?: string
  children: React.ReactNode
  showArrow?: boolean
  target?: string
  rel?: string
}

export default function Card({
  href,
  className = "",
  children,
  showArrow = false,
  target,
  rel,
}: CardProps) {
  const classes = `${card.base} ${card.hover} block ${className}`

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight className="w-5 h-5 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors" />
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={`group ${classes}`}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.div className={`group ${classes}`}>
      {content}
    </motion.div>
  )
}
```

- [ ] **Step 4: Verify all files compile**

Run: `npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors from these files

- [ ] **Step 5: Commit**

```bash
git add app/components/ui/
git commit -m "add brutalist UI atoms: Button, Badge, Card"
```

---

## Task 4: Create Layout Components

**Files:**
- Create: `app/components/layout/Section.tsx`
- Create: `app/components/layout/Container.tsx`
- Create: `app/components/layout/NavLinks.tsx`
- Create: `app/components/layout/MobileMenu.tsx`
- Create: `app/components/layout/LanguageSwitcher.tsx`
- Create: `app/components/layout/ThemeToggle.tsx`

- [ ] **Step 1: Create Section wrapper**

```tsx
// app/components/layout/Section.tsx
import React from "react"
import { section, container } from "../../design/components"

interface SectionProps {
  id?: string
  variant?: "light" | "dark" | "alternate"
  size?: "base" | "small"
  children: React.ReactNode
  className?: string
}

export default function Section({
  id,
  variant = "light",
  size = "base",
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${section.base} ${section[variant]} ${className}`}>
      <div className={size === "small" ? container.small : container.base}>
        {children}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create Container wrapper**

```tsx
// app/components/layout/Container.tsx
import React from "react"
import { container } from "../../design/components"

interface ContainerProps {
  size?: "base" | "small"
  children: React.ReactNode
  className?: string
}

export default function Container({
  size = "base",
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`${container[size]} ${className}`}>
      {children}
    </div>
  )
}
```

- [ ] **Step 3: Create NavLinks**

```tsx
// app/components/layout/NavLinks.tsx
"use client"

import React from "react"
import { nav } from "../../design/components"

interface NavItem {
  href: string
  label: string
}

interface NavLinksProps {
  items: NavItem[]
}

export default function NavLinks({ items }: NavLinksProps) {
  return (
    <>
      {items.map((item) => (
        <li key={item.href}>
          <a href={item.href} className={nav.link}>
            {item.label}
          </a>
        </li>
      ))}
    </>
  )
}
```

- [ ] **Step 4: Create MobileMenu**

```tsx
// app/components/layout/MobileMenu.tsx
"use client"

import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { nav } from "../../design/components"
import { borders } from "../../design/tokens"

interface NavItem {
  href: string
  label: string
}

interface MobileMenuProps {
  isOpen: boolean
  items: NavItem[]
  onClose: () => void
  languageButton: React.ReactNode
  themeButton: React.ReactNode
}

export default function MobileMenu({
  isOpen,
  items,
  onClose,
  languageButton,
  themeButton,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          className={`md:hidden fixed inset-x-0 top-[64px] bg-white dark:bg-black ${borders.thin} border-t border-black dark:border-white z-50 overflow-y-auto max-h-[calc(100vh-64px)] transition-colors duration-100`}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
        >
          <ul className="flex flex-col px-4 py-4">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={nav.mobileLink}
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>{languageButton}</li>
            <li>{themeButton}</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

- [ ] **Step 5: Create LanguageSwitcher**

```tsx
// app/components/layout/LanguageSwitcher.tsx
"use client"

import React from "react"
import { nav } from "../../design/components"

interface LanguageSwitcherProps {
  currentLanguage: string
  onSwitch: () => void
  isMobile?: boolean
}

export default function LanguageSwitcher({
  currentLanguage,
  onSwitch,
  isMobile = false,
}: LanguageSwitcherProps) {
  const label = currentLanguage === "en" ? "FR" : "EN"
  const flag = currentLanguage === "en" ? "\u{1F1EB}\u{1F1F7}" : "\u{1F1FA}\u{1F1F8}"

  return (
    <button
      onClick={onSwitch}
      className={isMobile ? nav.mobileLink : `${nav.link} flex items-center gap-2`}
      aria-label="Toggle language"
    >
      <span>{flag}</span>
      <span>{label}</span>
    </button>
  )
}
```

- [ ] **Step 6: Create ThemeToggle**

```tsx
// app/components/layout/ThemeToggle.tsx
"use client"

import React, { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { useDarkMode } from "../providers/DarkModeProvider"
import { iconButton, nav } from "../../design/components"

interface ThemeToggleProps {
  isMobile?: boolean
}

export default function ThemeToggle({ isMobile = false }: ThemeToggleProps) {
  const { toggleDarkMode } = useDarkMode()
  const [isClient, setIsClient] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setIsDarkMode(document.documentElement.classList.contains("dark"))
  }, [])

  const handleToggle = () => {
    toggleDarkMode()
    setIsDarkMode((prev) => !prev)
  }

  const icon = isClient && isDarkMode
    ? <Sun className="w-5 h-5" />
    : <Moon className="w-5 h-5" />

  if (isMobile) {
    return (
      <button onClick={handleToggle} className={nav.mobileLink} aria-label="Toggle dark mode" suppressHydrationWarning>
        <span className="flex items-center gap-3">
          {icon}
          <span suppressHydrationWarning>{isClient && isDarkMode ? "Light Mode" : "Dark Mode"}</span>
        </span>
      </button>
    )
  }

  return (
    <button onClick={handleToggle} className={iconButton} aria-label="Toggle dark mode" suppressHydrationWarning>
      {icon}
    </button>
  )
}
```

- [ ] **Step 7: Verify all files compile**

Run: `npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors from these files

- [ ] **Step 8: Commit**

```bash
git add app/components/layout/
git commit -m "add brutalist layout components"
```

---

## Task 5: Move Animation and Provider Components

**Files:**
- Move: `app/components/animated-section.tsx` → `app/components/animation/animated-section.tsx`
- Move: `app/components/staggered-container.tsx` → `app/components/animation/staggered-container.tsx`
- Move: `app/components/staggered-item.tsx` → `app/components/animation/staggered-item.tsx`
- Move: `app/components/parallax-section.tsx` → `app/components/animation/parallax-section.tsx`
- Move: `app/components/DarkModeProvider.tsx` → `app/components/providers/DarkModeProvider.tsx`
- Move: `app/components/LanguageProvider.tsx` → `app/components/providers/LanguageProvider.tsx`
- Move: `app/components/HtmlLangWrapper.tsx` → `app/components/providers/HtmlLangWrapper.tsx`
- Move: `app/components/ErrorBoundary.tsx` → `app/components/providers/ErrorBoundary.tsx`
- Move: `app/components/JsonLd.tsx` → `app/components/providers/JsonLd.tsx`

- [ ] **Step 1: Create directories and move files**

```bash
mkdir -p app/components/animation app/components/providers app/components/sections

# Animation
mv app/components/animated-section.tsx app/components/animation/
mv app/components/staggered-container.tsx app/components/animation/
mv app/components/staggered-item.tsx app/components/animation/
mv app/components/parallax-section.tsx app/components/animation/

# Providers
mv app/components/DarkModeProvider.tsx app/components/providers/
mv app/components/LanguageProvider.tsx app/components/providers/
mv app/components/HtmlLangWrapper.tsx app/components/providers/
mv app/components/ErrorBoundary.tsx app/components/providers/
mv app/components/JsonLd.tsx app/components/providers/
```

- [ ] **Step 2: Update all import paths across the codebase**

Every file that imports from the moved files needs its path updated. Key files to update:

- `app/layout.tsx`: Update imports for LanguageProvider, DarkModeProvider, HtmlLangWrapper, ErrorBoundary, JsonLd
  - `./components/LanguageProvider` → `./components/providers/LanguageProvider`
  - `./components/DarkModeProvider` → `./components/providers/DarkModeProvider`
  - `./components/HtmlLangWrapper` → `./components/providers/HtmlLangWrapper`
  - `./components/ErrorBoundary` → `./components/providers/ErrorBoundary`
  - `./components/JsonLd` → `./components/providers/JsonLd`

- All section components (`Hero.tsx`, `Experience.tsx`, `Projects.tsx`, `Skills.tsx`, `Parcours.tsx`, `Contact.tsx`): Update imports for animation wrappers and LanguageProvider
  - `./animated-section` → `../animation/animated-section` (or `./animation/animated-section` depending on final location)
  - `./staggered-container` → `../animation/staggered-container`
  - `./staggered-item` → `../animation/staggered-item`
  - `./parallax-section` → `../animation/parallax-section`
  - `./LanguageProvider` → `../providers/LanguageProvider`
  - `./SectionHeader` → `../ui/SectionHeader`
  - `./CategoryFilter` → `../ui/CategoryFilter`
  - `./DarkModeProvider` → `../providers/DarkModeProvider`

- `app/components/layout/ThemeToggle.tsx`: Already uses `../providers/DarkModeProvider` (correct)
- `app/components/ui/SectionHeader.tsx` (after move): uses `../animation/animated-section`

Note: Section components are NOT moved yet in this task — they stay in `app/components/` until Task 6. Import paths for sections that reference moved animation/provider files should use `./animation/...` and `./providers/...` (same parent directory).

- [ ] **Step 3: Verify the build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "reorganize animation and provider components into subdirectories"
```

---

## Task 6: Move Section Components and Update SectionHeader/CategoryFilter

**Files:**
- Move: `app/components/Hero.tsx` → `app/components/sections/Hero.tsx`
- Move: `app/components/Experience.tsx` → `app/components/sections/Experience.tsx`
- Move: `app/components/Projects.tsx` → `app/components/sections/Projects.tsx`
- Move: `app/components/Skills.tsx` → `app/components/sections/Skills.tsx`
- Move: `app/components/Parcours.tsx` → `app/components/sections/Parcours.tsx`
- Move: `app/components/Contact.tsx` → `app/components/sections/Contact.tsx`
- Move: `app/components/SectionHeader.tsx` → `app/components/ui/SectionHeader.tsx`
- Move: `app/components/CategoryFilter.tsx` → `app/components/ui/CategoryFilter.tsx`

- [ ] **Step 1: Move section files**

```bash
mv app/components/Hero.tsx app/components/sections/
mv app/components/Experience.tsx app/components/sections/
mv app/components/Projects.tsx app/components/sections/
mv app/components/Skills.tsx app/components/sections/
mv app/components/Parcours.tsx app/components/sections/
mv app/components/Contact.tsx app/components/sections/
mv app/components/SectionHeader.tsx app/components/ui/
mv app/components/CategoryFilter.tsx app/components/ui/
```

- [ ] **Step 2: Update import paths in moved files**

All section files now live in `app/components/sections/`. Their imports change:
- `./animated-section` → `../animation/animated-section`
- `./staggered-container` → `../animation/staggered-container`
- `./staggered-item` → `../animation/staggered-item`
- `./parallax-section` → `../animation/parallax-section`
- `./LanguageProvider` → `../providers/LanguageProvider`
- `./DarkModeProvider` → `../providers/DarkModeProvider`
- `./SectionHeader` → `../ui/SectionHeader`
- `./CategoryFilter` → `../ui/CategoryFilter`
- `../styles/common` → `../../design/components` (will be done in Task 7)
- `../data/*` stays the same (already `../data/`)

For `SectionHeader.tsx` (now in `app/components/ui/`):
- `./animated-section` → `../animation/animated-section`

For `CategoryFilter.tsx` (now in `app/components/ui/`):
- `./animated-section` → `../animation/animated-section`

- [ ] **Step 3: Update app/page.tsx imports**

```tsx
import Header from './components/layout/Header' // will be created in Task 8
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'

const Skills = dynamic(() => import('./components/sections/Skills'))
const Parcours = dynamic(() => import('./components/sections/Parcours'))
const Contact = dynamic(() => import('./components/sections/Contact'))
```

Note: Header is still in `app/components/Header.tsx` at this point — keep the old import until Task 8 creates the new Header.

- [ ] **Step 4: Delete old files that are now unused**

```bash
rm app/components/card.tsx
rm app/components/icon-container.tsx
rm app/components/DarkModeToggle.tsx
```

- [ ] **Step 5: Verify the build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "move sections and UI components into subdirectories"
```

---

## Task 7: Restyle Globals and Page Shell

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Delete: `app/styles/common.ts`

- [ ] **Step 1: Update globals.css for brutalist base**

Replace the full contents of `app/globals.css` with:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --background: #ffffff;
  --foreground: #000000;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #000000;
    --foreground: #ffffff;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: "Times New Roman", Times, serif;
}

:focus-visible {
  outline: 2px solid #FFD600;
  outline-offset: 2px;
}

/* Brutalist selection */
::selection {
  background: #FFD600;
  color: #000000;
}
```

- [ ] **Step 2: Update layout.tsx body classes**

In `app/layout.tsx`, change the body className to:

```tsx
<body
  className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white font-[Times_New_Roman] transition-colors duration-100`}
  suppressHydrationWarning={true}
>
```

Also update the skip-to-content link styling:

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:border-2 focus:border-white focus:text-sm focus:font-[family-name:var(--font-geist-mono)] focus:uppercase focus:tracking-wider dark:focus:bg-white dark:focus:text-black"
>
  Skip to content
</a>
```

- [ ] **Step 3: Update page.tsx main classes**

```tsx
<main id="main-content" className="bg-white dark:bg-black text-black dark:text-white font-[Times_New_Roman] scroll-smooth transition-colors duration-100">
```

- [ ] **Step 4: Delete old common.ts**

```bash
rm app/styles/common.ts
rmdir app/styles 2>/dev/null || true
```

- [ ] **Step 5: Update all remaining references to commonStyles**

Search for any remaining `from "../styles/common"` or `from "../../styles/common"` imports and replace them with imports from `../../design/components` (or `../design/components` depending on file location). Replace each `commonStyles.X` usage with the equivalent from the new component styles.

Key mappings:
- `commonStyles.section` / `sectionWhite` / `sectionGray` → use `Section` layout component instead
- `commonStyles.container` → use `Container` layout component instead
- `commonStyles.card` → `card.base`
- `commonStyles.cardPadding` → `card.padding`
- `commonStyles.buttonPrimary` → `button.primary`
- `commonStyles.buttonSecondary` → `button.secondary`
- `commonStyles.textGray` → `text.body`
- `commonStyles.textDark` → `text.heading`
- `commonStyles.navLink` → `nav.link`
- `commonStyles.mobileNavLink` → `nav.mobileLink`
- `commonStyles.iconButton` → `iconButton`
- `commonStyles.grid` → `grid.base`
- `commonStyles.gridTwo` → `grid.two`

- [ ] **Step 6: Verify the build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "apply brutalist globals and remove legacy commonStyles"
```

---

## Task 8: Restyle Header (Brutalist)

**Files:**
- Create: `app/components/layout/Header.tsx` (new brutalist version)
- Delete: `app/components/Header.tsx` (old)

- [ ] **Step 1: Create the new brutalist Header**

```tsx
// app/components/layout/Header.tsx
"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../providers/LanguageProvider"
import { borders } from "../../design/tokens"
import { nav } from "../../design/components"
import NavLinks from "./NavLinks"
import MobileMenu from "./MobileMenu"
import LanguageSwitcher from "./LanguageSwitcher"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const { t, currentLanguage, switchLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const navigationItems = [
    { href: "#projects", label: t("Header.Project") },
    { href: "#contact", label: t("Header.Contact") },
  ]

  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen])
  const toggleLanguage = useCallback(
    () => switchLanguage(currentLanguage === "en" ? "fr" : "en"),
    [currentLanguage, switchLanguage]
  )

  useEffect(() => {
    const MENU_CLOSE_THRESHOLD = 200
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMenuOpen) return
      const target = event.target as Node
      const isClickInsideMenu = mobileMenuRef.current?.contains(target)
      if (!isClickInsideMenu && event.clientY > MENU_CLOSE_THRESHOLD) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 bg-white dark:bg-black ${borders.thin} border-b border-black dark:border-white transition-colors duration-100`}
        style={{ opacity: headerOpacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "linear" }}
      >
        <nav className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 lg:py-6">
          {/* Logo */}
          <div
            className="text-2xl sm:text-3xl lg:text-6xl font-bold cursor-pointer hover:line-through transition-all duration-100"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Leo Laborie
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-12">
            <NavLinks items={navigationItems} />
            <li>
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onSwitch={toggleLanguage}
              />
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 ${borders.thin} border-black dark:border-white rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-100 relative z-60`}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"}`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-200 ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      <div ref={mobileMenuRef}>
        <MobileMenu
          isOpen={isMenuOpen}
          items={navigationItems}
          onClose={() => setIsMenuOpen(false)}
          languageButton={
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onSwitch={toggleLanguage}
              isMobile
            />
          }
          themeButton={<ThemeToggle isMobile />}
        />
      </div>
    </>
  )
}
```

- [ ] **Step 2: Update app/page.tsx to import from new path**

```tsx
import Header from './components/layout/Header'
```

- [ ] **Step 3: Delete old Header**

```bash
rm app/components/Header.tsx
```

- [ ] **Step 4: Verify the build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "restyle Header with brutalist design"
```

---

## Task 9: Restyle Hero Section

**Files:**
- Modify: `app/components/sections/Hero.tsx`

- [ ] **Step 1: Rewrite Hero with brutalist styling**

Replace the full content of `app/components/sections/Hero.tsx` with:

```tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSection from "../animation/animated-section"
import { useLanguage } from "../providers/LanguageProvider"
import { CV_PATHS, socialLinks } from "../../data/contact"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { text, container, borders as borderStyles } from "../../design/components"
import { borders, shadows } from "../../design/tokens"
import Button from "../ui/Button"

export default function Hero() {
  const { t, currentLanguage } = useLanguage()

  const calculateAge = () => {
    const today = new Date()
    const currentYear = today.getFullYear()
    const isBeforeJuly3rd = today.getMonth() < 6 || (today.getMonth() === 6 && today.getDate() < 3)
    return isBeforeJuly3rd ? currentYear - 2006 : currentYear - 2005
  }

  const age = calculateAge()

  return (
    <section className="bg-white dark:bg-black py-16 px-6 lg:px-12 xl:px-20 overflow-hidden transition-colors duration-100 flex justify-center">
      <div className={`${container.base} flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full`}>
        {/* Text Section */}
        <div className="w-full lg:w-3/5 order-2 lg:order-1 flex flex-col space-y-6">
          <AnimatedSection delay={0.1} direction="up">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-none">
              {t("Hero.Greeting")}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up">
            <p className={`${text.label} text-black/50 dark:text-white/50 mt-4`}>
              {t("Hero.Title", { age })}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="up">
            <p className="text-lg md:text-xl leading-relaxed text-black/70 dark:text-white/70 pt-2 max-w-xl">
              {t("Hero.Bio")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4} direction="up">
            <div className="pt-6">
              <a
                href="#experience"
                className={`${text.mono} font-bold text-lg mb-1 flex items-center hover:line-through cursor-pointer transition-all w-max`}
              >
                {t("Hero.ContactPrompt")}
              </a>
              <p className={`${text.label} text-black/40 dark:text-white/40 mb-6 normal-case tracking-normal`}>
                {t("Hero.ContactEscalation")}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button href={CV_PATHS[currentLanguage]} download variant="primary">
                  {t("Hero.Resume")}
                  <Download size={18} />
                </Button>

                {[
                  { href: socialLinks.linkedin, icon: <Linkedin size={20} />, label: "LinkedIn" },
                  { href: socialLinks.github, icon: <Github size={20} />, label: "GitHub" },
                  { href: `mailto:${socialLinks.email}`, icon: <Mail size={20} />, label: "Email" },
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className={`flex items-center justify-center w-10 h-10 ${borders.thin} border-black dark:border-white rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-100`}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-2/5 flex justify-center items-center order-1 lg:order-2">
          <AnimatedSection delay={0.2} direction="right">
            <div className={`relative ${borders.thin} border-black dark:border-white ${shadows.md} p-1`}>
              <Image
                src="/images/moi.png"
                alt="Leo Laborie"
                width={350}
                height={350}
                priority
                className="object-cover w-[180px] sm:w-[220px] lg:w-[350px] h-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify the build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "restyle Hero section with brutalist design"
```

---

## Task 10: Restyle SectionHeader (Brutalist)

**Files:**
- Modify: `app/components/ui/SectionHeader.tsx`

- [ ] **Step 1: Rewrite SectionHeader**

Replace the full content:

```tsx
"use client"

import React from "react"
import AnimatedSection from "../animation/animated-section"
import { text, divider } from "../../design/components"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  titleDelay?: number
  subtitleDelay?: number
}

export default function SectionHeader({
  title,
  subtitle,
  titleDelay = 0.1,
  subtitleDelay = 0.3,
}: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <AnimatedSection delay={titleDelay} direction="up">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black dark:text-white mb-4">
          {title}
        </h2>
        <div className={divider.accent}></div>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={subtitleDelay} direction="up">
          <p className={`${text.label} text-black/50 dark:text-white/50 mt-4 normal-case tracking-normal`}>
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "restyle SectionHeader with brutalist design"
```

---

## Task 11: Restyle Experience Section

**Files:**
- Modify: `app/components/sections/Experience.tsx`

- [ ] **Step 1: Rewrite Experience with brutalist styling**

Replace the full content of `app/components/sections/Experience.tsx`:

```tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import StaggeredContainer from "../animation/staggered-container"
import StaggeredItem from "../animation/staggered-item"
import SectionHeader from "../ui/SectionHeader"
import { useLanguage } from "../providers/LanguageProvider"
import { experiences } from "../../data/experience"
import { card, text, badge as badgeStyle, grid } from "../../design/components"
import { borders, shadows } from "../../design/tokens"
import Badge from "../ui/Badge"

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-white dark:bg-black scroll-mt-20 transition-colors duration-100">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={t("Experience.Title")}
          subtitle={t("Experience.Subtitle")}
        />

        <StaggeredContainer className={grid.base} staggerDelay={0.2}>
          {experiences.map((exp) => (
            <StaggeredItem key={exp.companyKey} direction="up">
              <div className={`${card.base} ${card.hover} overflow-hidden h-full flex flex-col md:flex-row`}>
                {/* Media */}
                <div className="md:w-3/5 relative min-h-[300px] md:min-h-full">
                  <ExperienceMedia exp={exp} t={t} />
                </div>

                {/* Content */}
                <div className={`${card.padding} md:w-2/5 flex flex-col justify-center`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                    {t(exp.companyKey)}
                  </h3>
                  <p className={`${text.label} text-black/60 dark:text-white/60 mb-4 normal-case tracking-normal`}>
                    {t(exp.roleKey)}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className={`flex items-center gap-2 ${text.label} text-black/40 dark:text-white/40 normal-case tracking-normal`}>
                      <Calendar className="w-4 h-4" />
                      <span>{t(exp.periodKey)}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${text.label} text-black/40 dark:text-white/40 normal-case tracking-normal`}>
                      <MapPin className="w-4 h-4" />
                      <span>{t(exp.locationKey)}</span>
                    </div>
                  </div>

                  <ul className="mb-6 space-y-3">
                    {exp.descriptionKeys.map((descKey, idx) => (
                      <li key={idx} className="flex items-start text-black/70 dark:text-white/70">
                        <span className="mt-2 w-2 h-0.5 bg-[#FFD600] mr-3 flex-shrink-0" />
                        <span className="text-sm md:text-base">{t(descKey)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}

function ExperienceMedia({ exp, t }: { exp: typeof experiences[number]; t: (key: string) => string }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="relative overflow-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a] h-full w-full transition-colors duration-100">
      {exp.mediaType === "image" ? (
        <div className="relative w-full h-full">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 animate-pulse" />
          )}
          <Image
            src={exp.mediaUrl}
            alt={t(exp.companyKey)}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      ) : (
        <div className="relative w-full h-full">
          <video
            src={exp.mediaUrl}
            className="w-full h-full object-cover"
            muted loop playsInline autoPlay
            aria-label={`Video demonstration of ${t(exp.companyKey)}`}
          >
            <p>Your browser does not support the video tag.</p>
          </video>
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Verify the build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "restyle Experience section with brutalist design"
```

---

## Task 12: Restyle Projects Section

**Files:**
- Modify: `app/components/sections/Projects.tsx`
- Modify: `app/components/ui/CategoryFilter.tsx`

- [ ] **Step 1: Restyle CategoryFilter with brutalist design**

Replace the full content of `app/components/ui/CategoryFilter.tsx`:

```tsx
"use client"

import React from "react"
import { motion } from "framer-motion"
import AnimatedSection from "../animation/animated-section"
import { borders } from "../../design/tokens"

interface CategoryFilterProps<T extends string> {
  categories: Record<T, { label: string }>
  activeCategory: T
  onCategoryChangeAction: (category: T) => void
  delay?: number
}

export default function CategoryFilter<T extends string>({
  categories,
  activeCategory,
  onCategoryChangeAction,
  delay = 0.5,
}: CategoryFilterProps<T>) {
  return (
    <AnimatedSection delay={delay} direction="up">
      <div className="flex flex-wrap gap-2 mb-16">
        {(Object.keys(categories) as T[]).map((cat, index) => (
          <motion.button
            key={cat}
            onClick={() => onCategoryChangeAction(cat)}
            className={`px-4 py-2 ${borders.thin} rounded-none font-[family-name:var(--font-geist-mono)] uppercase tracking-wider text-xs transition-all duration-100 ${
              cat === activeCategory
                ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                : "bg-transparent text-black dark:text-white border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            }`}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 + delay }}
          >
            {categories[cat].label}
          </motion.button>
        ))}
      </div>
    </AnimatedSection>
  )
}
```

- [ ] **Step 2: Restyle Projects section**

Replace the full content of `app/components/sections/Projects.tsx`:

```tsx
"use client"

import React, { useState, useMemo, useCallback } from "react"
import Image from "next/image"
import { ExternalLink, Code } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "../animation/animated-section"
import StaggeredContainer from "../animation/staggered-container"
import StaggeredItem from "../animation/staggered-item"
import SectionHeader from "../ui/SectionHeader"
import CategoryFilter from "../ui/CategoryFilter"
import { useLanguage } from "../providers/LanguageProvider"
import { projets } from "../../data/projects"
import { type Categorie, type Projet } from "../../types"
import { card, text, grid } from "../../design/components"
import { borders, shadows } from "../../design/tokens"
import Badge from "../ui/Badge"
import Button from "../ui/Button"

interface ProjectCardProps {
  projet: Projet
  categoryMap: Record<Categorie, { label: string }>
  t: (key: string) => string
}

export default function Projects() {
  const { t } = useLanguage()
  const [categorieActive, setCategorieActive] = useState<Categorie>("all")

  const categoryMap: Record<Categorie, { label: string }> = useMemo(() => ({
    all: { label: t("Projects.CategoryAll") },
    ml: { label: t("Projects.CategoryML") },
    web: { label: t("Projects.CategoryWeb") },
    algo: { label: t("Projects.CategoryAlgo") },
    other: { label: t("Projects.CategoryOther") },
  }), [t])

  const projetsFiltres = useMemo(() =>
    projets
      .filter((p) => categorieActive === "all" || p.categorie === categorieActive)
      .sort((a, b) => {
        const sizeA = a.projectSize === "large" ? 1 : 0
        const sizeB = b.projectSize === "large" ? 1 : 0
        if (sizeA !== sizeB) return sizeB - sizeA
        return (b.year || 0) - (a.year || 0)
      }),
    [categorieActive]
  )

  const handleCategoryChangeAction = useCallback((category: Categorie) => {
    setCategorieActive(category)
  }, [])

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-[#f5f5f5] dark:bg-[#0a0a0a] scroll-mt-20 transition-colors duration-100">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={t("Projects.Title")}
          subtitle={t("Projects.Subtitle")}
        />

        <CategoryFilter
          categories={categoryMap}
          activeCategory={categorieActive}
          onCategoryChangeAction={handleCategoryChangeAction}
        />

        <StaggeredContainer className={grid.base} staggerDelay={0.2}>
          {projetsFiltres.map((projet) => (
            <StaggeredItem key={projet.titre} direction="up">
              {projet.projectSize === "large" ? (
                <LargeProjectCard projet={projet} categoryMap={categoryMap} t={t} />
              ) : (
                <ProjectCard projet={projet} categoryMap={categoryMap} t={t} />
              )}
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        {projetsFiltres.length === 0 && <EmptyState t={t} />}
      </div>
    </section>
  )
}

function LargeProjectCard({ projet, categoryMap, t }: ProjectCardProps) {
  const content = (
    <div className={`${card.base} overflow-hidden h-full flex flex-col md:flex-row ${projet.liveUrl ? "cursor-pointer" : ""}`}>
      <div className="md:w-3/5 relative min-h-[300px] md:min-h-full">
        {projet.mediaUrl ? (
          <MediaContainer projet={projet} isLarge />
        ) : (
          <div className="w-full h-full bg-[#f5f5f5] dark:bg-[#0a0a0a] flex items-center justify-center">
            <Code className="w-20 h-20 text-black/20 dark:text-white/20" />
          </div>
        )}
      </div>

      <div className={`${card.padding} md:w-2/5 flex flex-col justify-center`}>
        <div className="mb-4 flex items-center justify-between">
          <Badge variant="outline">{categoryMap[projet.categorie].label}</Badge>
          {projet.year && <Badge variant="outline">{projet.year}</Badge>}
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          {projet.titreKey ? t(projet.titreKey) : projet.titre}
        </h3>
        <p className="text-black/70 dark:text-white/70 text-lg leading-relaxed mb-6">
          {t(projet.descriptionKey)}
        </p>

        {projet.features && projet.features.length > 0 && (
          <ul className="mb-6 space-y-3">
            {projet.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-black/70 dark:text-white/70">
                <span className="mt-2 w-2 h-0.5 bg-[#FFD600] mr-3 flex-shrink-0" />
                <span className="text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4">
          {projet.githubUrl && (
            <Button
              href={projet.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              <ExternalLink className="w-4 h-4" />
              {t("Projects.DetailsButton")}
            </Button>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="group h-full">
      {projet.liveUrl ? (
        <a href={projet.liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  )
}

function ProjectCard({ projet, categoryMap, t }: ProjectCardProps) {
  return (
    <div className="group">
      <div className={`${card.base} ${card.hover} overflow-hidden`}>
        {projet.mediaUrl && <MediaContainer projet={projet} />}

        <div className={card.padding}>
          {!projet.mediaUrl && (
            <div className="mb-4 flex items-center justify-between">
              <Badge variant="outline">{categoryMap[projet.categorie].label}</Badge>
              {projet.year && <Badge variant="outline">{projet.year}</Badge>}
            </div>
          )}

          <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
            {projet.titreKey ? t(projet.titreKey) : projet.titre}
          </h3>
          <p className="text-black/70 dark:text-white/70 leading-relaxed mb-6">
            {t(projet.descriptionKey)}
          </p>

          {projet.githubUrl && (
            <Button
              href={projet.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              <ExternalLink className="w-4 h-4" />
              {t("Projects.DetailsButton")}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

function MediaContainer({ projet, isLarge = false }: { projet: Projet; isLarge?: boolean }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const containerClass = isLarge
    ? "relative overflow-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a] h-full w-full"
    : "relative overflow-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a] aspect-[16/10]"

  return (
    <div className={containerClass}>
      {projet.mediaType === "image" ? (
        <div className="relative w-full h-full">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 animate-pulse" />
          )}
          <Image
            src={projet.mediaUrl!}
            alt={projet.titre}
            fill
            sizes={isLarge ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      ) : (
        <div className="relative w-full h-full">
          <video
            src={projet.mediaUrl}
            className="w-full h-full object-cover"
            muted loop playsInline autoPlay
            aria-label={`Video demonstration of ${projet.titre}`}
          >
            <p>Your browser does not support the video tag.</p>
          </video>
        </div>
      )}
    </div>
  )
}

function EmptyState({ t }: { t: (key: string) => string }) {
  return (
    <AnimatedSection delay={0.2} direction="up">
      <div className="text-center py-20">
        <div className={`w-16 h-16 ${borders.thin} border-black dark:border-white rounded-none flex items-center justify-center mx-auto mb-6`}>
          <Code className="w-8 h-8 text-black/40 dark:text-white/40" />
        </div>
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">
          {t("Projects.EmptyStateTitle")}
        </h3>
        <p className="text-black/50 dark:text-white/50">
          {t("Projects.EmptyStateDescription")}
        </p>
      </div>
    </AnimatedSection>
  )
}
```

- [ ] **Step 3: Verify the build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "restyle Projects section and CategoryFilter with brutalist design"
```

---

## Task 13: Restyle Skills Section

**Files:**
- Modify: `app/components/sections/Skills.tsx`

- [ ] **Step 1: Rewrite Skills with brutalist terminal-style**

Replace the full content:

```tsx
"use client"

import React from "react"
import { Code, Brain, Globe, Cpu } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeader from "../ui/SectionHeader"
import { useLanguage } from "../providers/LanguageProvider"
import { skills } from "../../data/skills"
import { type SkillCategory, type SkillLevel } from "../../types"
import { card, text } from "../../design/components"
import { borders } from "../../design/tokens"

const levelOrder: Record<SkillLevel, number> = {
  advanced: 0,
  intermediate: 1,
  familiar: 2,
}

function getProgressBar(level: SkillLevel): string {
  switch (level) {
    case "advanced": return "[██████████]"
    case "intermediate": return "[██████░░░░]"
    case "familiar": return "[███░░░░░░░]"
  }
}

function getYearsLabel(yearLearned: number, suffix: string): string {
  const currentYear = new Date().getFullYear()
  const years = currentYear - yearLearned
  if (years < 1) return `<1 ${suffix}`
  return `~${years} ${suffix}`
}

export default function Skills() {
  const { t } = useLanguage()

  const levelKeys: Record<SkillLevel, string> = {
    advanced: t("Skills.LevelAdvanced"),
    intermediate: t("Skills.LevelIntermediate"),
    familiar: t("Skills.LevelFamiliar"),
  }

  const yearsSuffix = t("Skills.YearsSuffix")

  const categories: { id: SkillCategory; label: string; icon: React.ReactNode }[] = [
    { id: "ml", label: t("Skills.CategoryML"), icon: <Brain className="w-5 h-5" /> },
    { id: "web", label: t("Skills.CategoryWeb"), icon: <Globe className="w-5 h-5" /> },
    { id: "programming", label: t("Skills.CategoryProgramming"), icon: <Code className="w-5 h-5" /> },
    { id: "tools", label: t("Skills.CategoryTools"), icon: <Cpu className="w-5 h-5" /> },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-[#f5f5f5] dark:bg-[#0a0a0a] scroll-mt-20 transition-colors duration-100">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title={t("Skills.Title")}
          subtitle={t("Skills.Subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills
              .filter((skill) => skill.category === category.id)
              .sort((a, b) => levelOrder[a.level] - levelOrder[b.level] || a.yearLearned - b.yearLearned)

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.3, ease: "linear" }}
                className={`${card.base} ${card.padding} h-full`}
              >
                <div className={`flex items-center gap-3 mb-6 ${borders.thin} border-b border-black/20 dark:border-white/20 pb-4`}>
                  <div className="text-black dark:text-white">
                    {category.icon}
                  </div>
                  <h3 className={`${text.label} text-lg normal-case tracking-normal font-bold text-black dark:text-white`}>
                    {category.label}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.1 + index * 0.03, ease: "linear" }}
                      className="flex items-center justify-between gap-3 group py-1"
                    >
                      <span className="font-medium text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className={`${text.mono} text-xs text-black/40 dark:text-white/40 hidden sm:inline`}>
                          {getProgressBar(skill.level)}
                        </span>
                        <span className={`${text.mono} text-xs text-black/40 dark:text-white/40 w-14 text-right`}>
                          {getYearsLabel(skill.yearLearned, yearsSuffix)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify the build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "restyle Skills section with brutalist terminal-style bars"
```

---

## Task 14: Restyle Parcours Section

**Files:**
- Modify: `app/components/sections/Parcours.tsx`

- [ ] **Step 1: Rewrite Parcours with brutalist timeline**

Replace the full content:

```tsx
"use client"

import React from "react"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import StaggeredContainer from "../animation/staggered-container"
import StaggeredItem from "../animation/staggered-item"
import SectionHeader from "../ui/SectionHeader"
import { useLanguage } from "../providers/LanguageProvider"
import { card, text } from "../../design/components"
import { borders } from "../../design/tokens"
import Badge from "../ui/Badge"

export default function Parcours() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-20 px-4 md:px-8 bg-white dark:bg-black scroll-mt-20 transition-colors duration-100">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t("Parcours.Title")} />

        <StaggeredContainer className="grid gap-8 mt-12 max-w-4xl mx-auto" staggerDelay={0.2}>
          {/* UTC */}
          <StaggeredItem direction="up">
            <div className={`${card.base} ${card.padding} relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                <Image src="/images/utc.png" alt="" width={200} height={200} className="object-contain" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 ${borders.thin} border-black dark:border-white shrink-0`}>
                      <Image src="/images/utc.png" alt="UTC Logo" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
                        {t("Parcours.UtcTitle")}
                      </h3>
                      <p className={`${text.label} text-[#FFD600] normal-case tracking-normal text-lg`}>
                        Universite de Technologie de Compiegne (UTC)
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">
                    <Calendar className="w-3 h-3 mr-1" />
                    {t("Parcours.UtcYears")}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className={`p-4 ${borders.thin} border-black/20 dark:border-white/20`}>
                    <h4 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-0.5 bg-[#FFD600]" />
                      {t("Parcours.GenieInfoTitle")}
                    </h4>
                    <p className="text-sm text-black/70 dark:text-white/70">{t("Parcours.GenieInfoDesc")}</p>
                  </div>
                  <div className={`p-4 ${borders.thin} border-black/20 dark:border-white/20`}>
                    <h4 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-0.5 bg-[#FFD600]" />
                      {t("Parcours.TroncCommunTitle")}
                    </h4>
                    <p className="text-sm text-black/70 dark:text-white/70">{t("Parcours.TroncCommunDesc")}</p>
                  </div>
                </div>

                <div className={`flex items-center gap-2 ${text.mono} text-sm text-[#22c55e] pt-4 ${borders.thin} border-t border-black/20 dark:border-white/20`}>
                  [ACTIVE] {t("Parcours.CurrentlyStudying")}
                </div>
              </div>
            </div>
          </StaggeredItem>

          {/* Bac */}
          <StaggeredItem direction="up">
            <div className={`${card.base} ${card.padding} relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                <Image src="/images/joliot_curie.png" alt="" width={200} height={200} className="object-contain" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 ${borders.thin} border-black dark:border-white shrink-0`}>
                      <Image src="/images/joliot_curie.png" alt="Lycee Joliot-Curie Logo" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
                        {t("Parcours.BacTitle")}
                      </h3>
                      <p className={`${text.label} text-[#FFD600] normal-case tracking-normal text-lg`}>
                        Lycee Joliot-Curie, Rennes
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">
                    <Calendar className="w-3 h-3 mr-1" />
                    {t("Parcours.BacSession")}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <h4 className={`${text.label} text-black/60 dark:text-white/60 normal-case tracking-normal font-medium`}>
                    {t("Parcours.BacSpecialties")}:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="accent">{t("Parcours.MathsSpecialty")} // 18/20</Badge>
                    <Badge variant="accent">{t("Parcours.NSI_Specialty")} // 20/20</Badge>
                  </div>
                </div>
              </div>
            </div>
          </StaggeredItem>
        </StaggeredContainer>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify the build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "restyle Parcours section with brutalist design"
```

---

## Task 15: Restyle Contact Section

**Files:**
- Modify: `app/components/sections/Contact.tsx`

- [ ] **Step 1: Rewrite Contact with brutalist design**

Replace the full content:

```tsx
"use client"

import { Mail, GithubIcon, LinkedinIcon, ArrowUpRight } from "lucide-react"
import AnimatedSection from "../animation/animated-section"
import StaggeredContainer from "../animation/staggered-container"
import StaggeredItem from "../animation/staggered-item"
import { useLanguage } from "../providers/LanguageProvider"
import { socialLinks } from "../../data/contact"
import { card, text } from "../../design/components"
import { borders } from "../../design/tokens"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-[#f5f5f5] dark:bg-[#0a0a0a] scroll-mt-20 transition-colors duration-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <AnimatedSection delay={0.1} direction="up">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black dark:text-white mb-4">
              {t("Contact.Title")}
            </h2>
            <div className="w-24 border-4 border-[#FFD600]"></div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} direction="up">
          <div className="my-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 ${borders.thin} border-[#22c55e] ${text.mono} text-sm text-[#22c55e]`}>
              <span className="w-2 h-2 bg-[#22c55e]" />
              [AVAILABLE] {t("Contact.AvailableStatus")}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Cards */}
        <StaggeredContainer className="grid gap-4 sm:gap-6" staggerDelay={0.2}>
          {/* Email */}
          <StaggeredItem direction="up">
            <a
              href={`mailto:${socialLinks.email}`}
              className={`${card.base} ${card.hover} ${card.padding} block group`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className={`w-12 h-12 ${borders.thin} border-black dark:border-white flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-100`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-black dark:text-white mb-1">Email</h3>
                    <div className={`${text.mono} text-sm text-black/60 dark:text-white/60 truncate`}>
                      {socialLinks.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors flex-shrink-0" />
              </div>
            </a>
          </StaggeredItem>

          {/* Social Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* GitHub */}
            <StaggeredItem direction="left">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${card.base} ${card.hover} ${card.padding} block group h-full`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${borders.thin} border-black dark:border-white flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-100`}>
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">{t("Contact.GithubLabel")}</h3>
                <p className="text-black/60 dark:text-white/60 text-sm">{t("Contact.GithubDescription")}</p>
              </a>
            </StaggeredItem>

            {/* LinkedIn */}
            <StaggeredItem direction="right">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${card.base} ${card.hover} ${card.padding} block group h-full`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${borders.thin} border-black dark:border-white flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-100`}>
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">{t("Contact.LinkedinLabel")}</h3>
                <p className="text-black/60 dark:text-white/60 text-sm">{t("Contact.LinkedinDescription")}</p>
              </a>
            </StaggeredItem>
          </div>
        </StaggeredContainer>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify the build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "restyle Contact section with brutalist design"
```

---

## Task 16: Update Animation Components for Brutalist Feel

**Files:**
- Modify: `app/components/animation/animated-section.tsx`
- Modify: `app/components/animation/staggered-container.tsx`
- Modify: `app/components/animation/staggered-item.tsx`

- [ ] **Step 1: Update animated-section.tsx easing to linear**

In `app/components/animation/animated-section.tsx`, change the easing in `createVariants`:

Replace:
```ts
ease: [0.25, 0.46, 0.45, 0.94] as const,
```
With:
```ts
ease: "linear",
```

And remove the `scale: 0.95` from `hidden` and `scale: 1` from `visible` (brutaliste = no scale, just position + opacity).

- [ ] **Step 2: Update staggered-item.tsx easing to linear**

In `app/components/animation/staggered-item.tsx`, change:

Replace:
```ts
ease: [0.25, 0.46, 0.45, 0.94] as const,
```
With:
```ts
ease: "linear",
```

And remove `scale: 0.9` from `hidden` and `scale: 1` from `visible`.

- [ ] **Step 3: Verify the build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "update animation easing to linear for brutalist feel"
```

---

## Task 17: Final Cleanup and Verification

**Files:**
- Various cleanup across all modified files

- [ ] **Step 1: Verify no remaining references to old paths**

Run: `grep -r "from.*styles/common" app/ 2>/dev/null`
Expected: No results

Run: `grep -r "from.*\./animated-section" app/components/sections/ 2>/dev/null`
Expected: No results (all should use `../animation/`)

Run: `grep -r "from.*\./LanguageProvider" app/components/sections/ 2>/dev/null`
Expected: No results (all should use `../providers/`)

- [ ] **Step 2: Verify no remaining old component references**

Run: `grep -r "rounded-2xl\|rounded-xl\|rounded-full\|rounded-lg" app/components/ 2>/dev/null`
Expected: No results (all rounded corners should be removed)

Note: some `rounded-none` references are expected and correct.

- [ ] **Step 3: Run full build**

Run: `npm run build 2>&1 | tail -30`
Expected: Build succeeds with no errors

- [ ] **Step 4: Run linter**

Run: `npm run lint 2>&1 | tail -20`
Expected: No errors (warnings acceptable)

- [ ] **Step 5: Visual check — start dev server**

Run: `npm run dev`
Open http://localhost:3000 and verify:
- Black/white palette with accent color
- Thick borders, sharp corners everywhere
- Monospace text for labels and metadata
- Times New Roman for headings and body
- Geometric offset shadows on cards
- Linear/mechanical animations
- Dark mode works correctly (full inversion)
- Mobile menu works
- All sections render correctly

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "brutalist redesign: cleanup and final verification"
```
