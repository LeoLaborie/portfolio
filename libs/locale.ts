import { getUserLocale } from "get-user-locale";

export async function getUserLocale_function(): Promise<string> {
  // This function determines the user's locale based on browser settings or defaults.
  // For simplicity, we'll use 'navigator.language' and fallback to 'fr'.

  try {
    const locale = getUserLocale();
    const supportedLocales = ["en", "fr"]; // Define supported locales.
    if (supportedLocales.includes(locale.split('-')[0])) {
      return locale.split('-')[0]; // Return the language code (e.g., 'en' from 'en-US').
    }
    return 'fr'; // Fallback to frglish if the locale is not supported.
  } catch (error) {
    console.error("Error determining user locale:", error);
    return 'fr'; // Fallback to frglish.
  }
}
