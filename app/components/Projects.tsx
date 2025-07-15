"use client"

import React from "react"
import { useState } from "react"
import { ExternalLink, Brain, Globe, Code, Zap, Play } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"
import { useLanguage } from "./LanguageProvider"
import { projets, type Categorie } from "../data/projects"

export default function Projects() {
  const { t } = useLanguage()
  const [categorieActive, setCategorieActive] = useState<Categorie>("ml")

  const categoryMap: Record<Categorie, { label: string; icon: React.ReactNode }> = {
    ml: { label: t("Projects.CategoryML"), icon: <Brain className="w-4 h-4" /> },
    web: { label: t("Projects.CategoryWeb"), icon: <Globe className="w-4 h-4" /> },
    algo: { label: t("Projects.CategoryAlgo"), icon: <Code className="w-4 h-4" /> },
    other: { label: t("Projects.CategoryOther"), icon: <Zap className="w-4 h-4" /> },
  }

  const projetsFiltres = projets.filter((p) => p.categorie === categorieActive)

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection delay={0.1} direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t("Projects.Title")}</h2>
            <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">{t("Projects.Subtitle")}</p>
          </AnimatedSection>
        </div>

        {/* Category Filter */}
        <AnimatedSection delay={0.5} direction="up">
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-2xl p-1.5 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              {(Object.keys(categoryMap) as Categorie[]).map((cat, index) => (
                <motion.button
                  key={cat}
                  onClick={() => setCategorieActive(cat)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm ${
                    cat === categorieActive 
                      ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" 
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {categoryMap[cat].icon}
                  <span className="hidden sm:inline">{categoryMap[cat].label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <StaggeredContainer className="grid gap-8 md:gap-12" staggerDelay={0.2}>
          {projetsFiltres.map((projet) => (
            <StaggeredItem key={`${projet.titre}-${categorieActive}`} direction="up">
              <motion.div className="group" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg">
                  {/* Media Container - Only render if mediaUrl exists */}
                  {projet.mediaUrl && (
                      <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-700 aspect-[16/10] transition-colors duration-300">                      {projet.mediaType === "image" ? (
                        <motion.img
                          src={projet.mediaUrl}
                          alt={projet.titre}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <video src={projet.mediaUrl} className="w-full h-full object-cover" muted loop playsInline />
                          <motion.div
                            className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ opacity: 1 }}
                          >
                            <motion.div
                              className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Play className="w-6 h-6 text-gray-800 ml-1" />
                            </motion.div>
                          </motion.div>
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <motion.div
                          className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 bg-opacity-95 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-gray-600 transition-colors duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {categoryMap[projet.categorie].icon}
                          <span className="hidden sm:inline">{categoryMap[projet.categorie].label}</span>
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8">
                    {/* Category Badge for projects without media */}
                    {!projet.mediaUrl && (
                      <div className="mb-4">
                        <motion.div
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium transition-colors duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {categoryMap[projet.categorie].icon}
                          <span>{categoryMap[projet.categorie].label}</span>
                        </motion.div>
                      </div>
                    )}

                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {projet.titre}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-light">{projet.description}</p>

                    {projet.githubUrl && (
                      <motion.a
                        href={projet.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t("Projects.DetailsButton")}
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        {/* Empty State */}
        {projetsFiltres.length === 0 && (
          <AnimatedSection delay={0.2} direction="up">
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <Code className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{t("Projects.EmptyStateTitle")}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light">{t("Projects.EmptyStateDescription")}</p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
