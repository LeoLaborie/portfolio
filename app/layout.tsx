import React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { LanguageProvider } from "./components/LanguageProvider"
import { DarkModeProvider } from "./components/DarkModeProvider"
import ErrorBoundary from "./components/ErrorBoundary"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Léo Laborie - Portfolio",
  description: "Portfolio de Léo Laborie, étudiant en Génie Informatique à l'UTC, spécialisé en IA et développement web.",
  keywords: "Léo Laborie, portfolio, développeur, IA, machine learning, web development, UTC, ingénieur informatique",
  authors: [{ name: "Léo Laborie" }],
  creator: "Léo Laborie",
  openGraph: {
    title: "Léo Laborie - Portfolio",
    description: "Portfolio de Léo Laborie, étudiant en Génie Informatique à l'UTC",
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Léo Laborie - Portfolio",
    description: "Portfolio de Léo Laborie, étudiant en Génie Informatique à l'UTC",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/moi.png",
    apple: "/images/moi.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-black dark:text-white font-[Times_New_Roman] transition-colors duration-300`}
        suppressHydrationWarning={true}
      >
        <ErrorBoundary>
          <DarkModeProvider>
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </DarkModeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}