"use client"

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"

export default function Contact() {
  const t = useTranslations("Contact")

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gray-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <AnimatedSection delay={0.1} direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("Title")}</h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} direction="up">
          <div className="text-center my-8">
            <motion.div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-600 text-sm font-medium max-w-full">
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <span className="truncate">{t("AvailableStatus")}</span>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Contact Cards */}
        <StaggeredContainer className="grid gap-4 sm:gap-6 md:gap-8" staggerDelay={0.2}>
          {/* Email Card */}
          <StaggeredItem direction="up">
            <motion.a
              href={`mailto:${t("Email")}`}
              className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300 block"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <div className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm sm:text-base truncate">
                      {t("Email")}
                    </div>
                  </div>
                </div>
                <motion.div className="flex-shrink-0 ml-2" whileHover={{ x: 5, y: -5 }} transition={{ duration: 0.2 }}>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
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
                className="group bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300 block h-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  </motion.div>
                  <motion.div className="flex-shrink-0" whileHover={{ x: 5, y: -5 }} transition={{ duration: 0.2 }}>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                  </motion.div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t("GithubLabel")}</h3>
                <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">{t("GithubDescription")}</p>
              </motion.a>
            </StaggeredItem>

            {/* LinkedIn Card */}
            <StaggeredItem direction="right">
              <motion.a
                href="https://www.linkedin.com/in/l%C3%A9o-laborie/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300 block h-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  </motion.div>
                  <motion.div className="flex-shrink-0" whileHover={{ x: 5, y: -5 }} transition={{ duration: 0.2 }}>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                  </motion.div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t("LinkedinLabel")}</h3>
                <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                  {t("LinkedinDescription")}
                </p>
              </motion.a>
            </StaggeredItem>
          </div>
        </StaggeredContainer>
      </div>
    </section>
  )
}
