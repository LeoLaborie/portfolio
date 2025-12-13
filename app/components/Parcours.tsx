"use client"

import React from "react"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"
import SectionHeader from "./SectionHeader"
import { useLanguage } from "./LanguageProvider"
import { commonStyles } from "../styles/common"

export default function Parcours() {
  const { t } = useLanguage()

  return (
    <section id="education" className={commonStyles.sectionWhite}>
      <div className={commonStyles.container}>
        <SectionHeader
          title={t("Parcours.Title")}
          subtitle=""
        />

        <StaggeredContainer className="grid gap-8 mt-12 max-w-4xl mx-auto" staggerDelay={0.2}>

          {/* UTC Engineering Entry */}
          <StaggeredItem direction="up">
            <motion.div
              className={`${commonStyles.card} ${commonStyles.cardPadding} relative overflow-hidden group`}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                <Image
                  src="/images/utc.png"
                  alt="UTC Background Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl border border-yellow-100 dark:border-yellow-700 shrink-0">
                      <Image
                        src="/images/utc.png"
                        alt="UTC Logo"
                        width={64}
                        height={64}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {t("Parcours.UtcTitle")}
                      </h3>
                      <p className="text-lg text-yellow-600 dark:text-yellow-400 font-medium">
                        Université de Technologie de Compiègne (UTC)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    <span>{t("Parcours.UtcYears")}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-500" />
                      {t("Parcours.GenieInfoTitle")}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t("Parcours.GenieInfoDesc")}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-500" />
                      {t("Parcours.TroncCommunTitle")}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t("Parcours.TroncCommunDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  {t("Parcours.CurrentlyStudying")}...
                </div>
              </div>
            </motion.div>
          </StaggeredItem>

          {/* Baccalauréat Entry */}
          <StaggeredItem direction="up">
            <motion.div
              className={`${commonStyles.card} ${commonStyles.cardPadding} relative overflow-hidden group`}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                <Image
                  src="/images/joliot_curie.png"
                  alt="Joliot-Curie Background Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-xl border border-green-100 dark:border-green-700 shrink-0">
                      <Image
                        src="/images/joliot_curie.png"
                        alt="Lycée Joliot-Curie Logo"
                        width={64}
                        height={64}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {t("Parcours.BacTitle")}
                      </h3>
                      <p className="text-lg text-green-600 dark:text-green-400 font-medium">
                        Lycée Joliot-Curie, Rennes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    <span>{t("Parcours.BacSession")}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    {t("Parcours.BacSpecialties")}:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium border border-green-100 dark:border-green-800/50">
                      {t("Parcours.MathsSpecialty")} • 18/20
                    </span>
                    <span className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium border border-green-100 dark:border-green-800/50">
                      {t("Parcours.NSI_Specialty")} • 20/20
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </StaggeredItem>

        </StaggeredContainer>
      </div>
    </section>
  )
}
