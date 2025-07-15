import { getUserLocale } from "get-user-locale";

export async function getUserLocale_function(): Promise<string> {
  // Check for URL parameter first (for immediate switching)
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && ['en', 'fr'].includes(urlLang)) {
      // Save the preference and return it
      localStorage.setItem('preferredLocale', urlLang);
      return urlLang;
    }
    
    // Check localStorage
    const savedLocale = localStorage.getItem('preferredLocale');
    if (savedLocale && ['en', 'fr'].includes(savedLocale)) {
      return savedLocale;
    }
  }

  // Fallback to browser language detection
  try {
    const browserLocale = getUserLocale();
    const supportedLocales = ["en", "fr"];
    
    if (supportedLocales.includes(browserLocale.split('-')[0])) {
      return browserLocale.split('-')[0];
    }
    
    return 'en'; // Default to English
  } catch (error) {
    console.error("Error determining user locale:", error);
    return 'en'; // Default to English
  }
}
