// Common CSS classes used across components
export const commonStyles = {
  // Sections
  section: "py-20 px-4 md:px-8 scroll-mt-20",
  sectionWhite: "py-20 px-4 md:px-8 bg-white dark:bg-gray-900 scroll-mt-20 transition-colors duration-300",
  sectionGray: "py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800 scroll-mt-20 transition-colors duration-300",
  
  // Containers
  container: "max-w-6xl mx-auto",
  containerSmall: "max-w-4xl mx-auto",
  
  // Headers
  sectionTitle: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300",
  sectionSubtitle: "text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light transition-colors duration-300",
  divider: "w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto transition-colors duration-300",
  
  // Cards
  card: "bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300",
  cardPadding: "p-4 sm:p-6 md:p-8",
  
  // Buttons
  buttonPrimary: "inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 text-sm font-medium",
  buttonSecondary: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm",
  
  // Text
  textGray: "text-gray-600 dark:text-gray-300 transition-colors duration-300",
  textDark: "text-gray-900 dark:text-white transition-colors duration-300",
  textLight: "font-light",
  textMedium: "font-medium",
  textSemibold: "font-semibold",
  
  // Grid
  grid: "grid gap-8 md:gap-12",
  gridTwo: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
  
  // Navigation
  navLink: "hover:underline transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-300 hover:scale-105",
  mobileNavLink: "block py-3 px-4 text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200",
  
  // Icon Buttons
  iconButton: "flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200",
  
  // Spacing
  mb4: "mb-4",
  mb6: "mb-6", 
  mb8: "mb-8",
  mb16: "mb-16",
  
  // Responsive text
  textResponsive: "text-base sm:text-lg md:text-xl",
  textResponsiveLarge: "text-xl sm:text-2xl md:text-3xl"
}

export const animations = {
  hover: "hover:scale-105 transition-transform duration-200",
  hoverSoft: "hover:scale-[1.02] transition-transform duration-300",
  fadeIn: "transition-all duration-300"
}