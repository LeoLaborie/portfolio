"use client"

import { Mail, GithubIcon, LinkedinIcon, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"
import { useLanguage } from "./LanguageProvider"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <AnimatedSection delay={0.1} direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t("Contact.Title")}</h2>
            <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto"></div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} direction="up">
          <div className="text-center my-8">
            <motion.div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium max-w-full transition-colors duration-300">
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <span className="truncate">{t("Contact.AvailableStatus")}</span>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Contact Cards */}
        <StaggeredContainer className="grid gap-4 sm:gap-6 md:gap-8" staggerDelay={0.2}>
          {/* Email Card */}
          <StaggeredItem direction="up">
            <motion.a
              href={`mailto:${t("Contact.Email")}`}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 block"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <div className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium text-sm sm:text-base truncate">
                      {t("Contact.Email")}
                    </div>
                  </div>
                </div>
                <motion.div className="flex-shrink-0 ml-2" whileHover={{ x: 5, y: -5 }} transition={{ duration: 0.2 }}>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500" />
                </motion.div>
              </div>
            </motion.a>
          </StaggeredItem>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* GitHub Card */}
            <StaggeredItem direction="left">
              <motion.a
                href="https://github.com/LeoLaborie"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 block h-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-200 flex-shrink-0"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
                  </motion.div>
                  <motion.div className="flex-shrink-0" whileHover={{ x: 5, y: -5 }} transition={{ duration: 0.2 }}>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-200" />
                  </motion.div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">{t("Contact.GithubLabel")}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-light leading-relaxed">{t("Contact.GithubDescription")}</p>
              </motion.a>
            </StaggeredItem>

            {/* LinkedIn Card */}
            <StaggeredItem direction="right">
              <motion.a
                href="https://www.linkedin.com/in/l%C3%A9o-laborie/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 block h-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-200 flex-shrink-0"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
                  </motion.div>
                  <motion.div className="flex-shrink-0" whileHover={{ x: 5, y: -5 }} transition={{ duration: 0.2 }}>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-200" />
                  </motion.div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">{t("Contact.LinkedinLabel")}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                  {t("Contact.LinkedinDescription")}
                </p>
              </motion.a>
            </StaggeredItem>
          </div>
        </StaggeredContainer>
      </div>
    </section>
  )
}
