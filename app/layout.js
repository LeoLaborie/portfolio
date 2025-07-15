import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { LanguageProvider } from "./components/LanguageProvider";
import { DarkModeProvider } from "./components/DarkModeProvider";
import ErrorBoundary from "./components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Léo Laborie - Portfolio",
  description: "Portfolio de Léo Laborie, étudiant en Génie Informatique à l'UTC.",
  icons: {
    icon: "/images/moi.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // On page load or when changing themes, best to add inline in head to avoid FOUC
              document.documentElement.classList.toggle(
                'dark',
                localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
              );
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-black dark:text-white font-[Times_New_Roman] transition-colors duration-300`}
        suppressHydrationWarning={true}
      >
        <ErrorBoundary>
          <DarkModeProvider>
            <LanguageProvider>
              <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </LanguageProvider>
          </DarkModeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
