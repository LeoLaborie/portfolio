"use client"

import { Award, Calendar, Code, Calculator, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"
import { useLanguage } from "./LanguageProvider"

/**
 * Education/Career path component displaying academic background
 * Shows UTC engineering program and Baccalaureate with timeline visualization
 * @returns Education timeline section with animated cards
 */
export default function Parcours() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedSection delay={0.1} direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t("Parcours.Title")}</h2>
            <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto"></div>
          </AnimatedSection>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Items */}
          <StaggeredContainer className="space-y-12" staggerDelay={0.3}>
            {/* Timeline Line - now animated with the container */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600 md:transform md:-translate-x-px"></div>

            {/* UTC Engineering Entry */}
            <StaggeredItem direction="left">
              <div className="relative flex items-start md:justify-center">
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-gray-600 dark:border-gray-400 rounded-full md:transform md:-translate-x-2 z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-5/12 md:mr-auto">
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md dark:hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <Award className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t("Parcours.UtcTitle")}</h3>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{t("Parcours.UtcYears")}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">{t("Parcours.UtcDescription")}</p>

                    <div className="space-y-4 mb-6">
                      <motion.div
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-800 dark:text-gray-200">{t("Parcours.TroncCommunTitle")}</h4>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t("Parcours.TroncCommunDuration")}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t("Parcours.TroncCommunDesc")}</p>
                        <span className="text-xs text-gray-500 dark:text-gray-500">{t("Parcours.TroncCommunYears")}</span>
                      </motion.div>

                      <motion.div
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-800 dark:text-gray-200">{t("Parcours.GenieInfoTitle")}</h4>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t("Parcours.GenieInfoDuration")}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{t("Parcours.GenieInfoDesc")}</p>
                        <span className="text-xs text-gray-500 dark:text-gray-500">{t("Parcours.GenieInfoYears")}</span>
                      </motion.div>
                    </div>

                    <motion.div
                      className="bg-gray-800 dark:bg-gray-700 text-white p-4 rounded-lg text-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="font-medium text-sm">{t("Parcours.InProgress")}</div>
                      <div className="text-xs text-gray-300 dark:text-gray-400 mt-1">{t("Parcours.CurrentlyStudying")}</div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </StaggeredItem>

            {/* Baccalauréat Entry */}
            <StaggeredItem direction="right">
              <div className="relative flex items-start md:justify-center">
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-gray-400 dark:border-gray-500 rounded-full md:transform md:-translate-x-2 z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>

                {/* Content Card */}
                <div className="ml-16 md:w-5/12 md:ml-auto">
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md dark:hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t("Parcours.BacTitle")}</h3>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{t("Parcours.BacSession")}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">{t("Parcours.BacSpecialties")}</h4>
                      <div className="space-y-2">
                        <motion.div
                          className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Calculator className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{t("Parcours.MathsSpecialty")}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Code className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{t("Parcours.NSI_Specialty")}</span>
                        </motion.div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <motion.div
                        className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">18/20</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{t("Parcours.MathsScoreLabel")}</div>
                      </motion.div>
                      <motion.div
                        className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">20/20</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{t("Parcours.InfoScoreLabel")}</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </div>
    </section>
  )
}
