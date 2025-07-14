"use client"

import { useTranslations } from "next-intl"
import { Award, Calendar, Code, Calculator, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"

export default function Parcours() {
  const t = useTranslations("Parcours")

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedSection delay={0.1} direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("Title")}</h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
          </AnimatedSection>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Items */}
          <StaggeredContainer className="space-y-12" staggerDelay={0.3}>
            {/* Timeline Line - now animated with the container */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 md:transform md:-translate-x-px"></div>

            {/* Baccalauréat Entry */}
            <StaggeredItem direction="left">
              <div className="relative flex items-start md:justify-center">
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-gray-400 rounded-full md:transform md:-translate-x-2 z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-5/12 md:mr-auto">
                  <motion.div
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-gray-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{t("BacTitle")}</h3>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{t("BacSession")}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-gray-700 mb-3">{t("BacSpecialties")}</h4>
                      <div className="space-y-2">
                        <motion.div
                          className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Calculator className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{t("MathsSpecialty")}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Code className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{t("NSI_Specialty")}</span>
                        </motion.div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <motion.div
                        className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl font-bold text-gray-800 mb-1">18/20</div>
                        <div className="text-xs text-gray-600 font-medium">{t("MathsScoreLabel")}</div>
                      </motion.div>
                      <motion.div
                        className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl font-bold text-gray-800 mb-1">20/20</div>
                        <div className="text-xs text-gray-600 font-medium">{t("InfoScoreLabel")}</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </StaggeredItem>

            {/* UTC Engineering Entry */}
            <StaggeredItem direction="right">
              <div className="relative flex items-start md:justify-center">
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-gray-600 rounded-full md:transform md:-translate-x-2 z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>

                {/* Content Card */}
                <div className="ml-16 md:w-5/12 md:ml-auto">
                  <motion.div
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Award className="w-5 h-5 text-gray-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{t("UtcTitle")}</h3>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{t("UtcYears")}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{t("UtcDescription")}</p>

                    <div className="space-y-4 mb-6">
                      <motion.div
                        className="border border-gray-200 rounded-lg p-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-800">{t("TroncCommunTitle")}</h4>
                          <span className="text-sm font-medium text-gray-600">{t("TroncCommunDuration")}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{t("TroncCommunDesc")}</p>
                        <span className="text-xs text-gray-500">{t("TroncCommunYears")}</span>
                      </motion.div>

                      <motion.div
                        className="border border-gray-200 rounded-lg p-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-800">{t("GenieInfoTitle")}</h4>
                          <span className="text-sm font-medium text-gray-600">{t("GenieInfoDuration")}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{t("GenieInfoDesc")}</p>
                        <span className="text-xs text-gray-500">{t("GenieInfoYears")}</span>
                      </motion.div>
                    </div>

                    <motion.div
                      className="bg-gray-800 text-white p-4 rounded-lg text-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="font-medium text-sm">{t("InProgress")}</div>
                      <div className="text-xs text-gray-300 mt-1">{t("CurrentlyStudying")}</div>
                    </motion.div>
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
