"use client"

import React, { useState, useMemo, useCallback } from "react"
import { ExternalLink, Brain, Globe, Code, Zap, Play } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"
import SectionHeader from "./SectionHeader"
import CategoryFilter from "./CategoryFilter"
import { useLanguage } from "./LanguageProvider"
import { projets } from "../data/projects"
import { type Categorie, type Projet } from "../types"
import { commonStyles } from "../styles/common"

interface ProjectCardProps {
  projet: Projet
  categoryMap: Record<Categorie, { label: string; icon: React.ReactNode }>
  t: (key: string) => string
}

interface MediaContainerProps {
  projet: Projet
  categoryMap: Record<Categorie, { label: string; icon: React.ReactNode }>
}

interface CategoryBadgeProps {
  projet: Projet
  categoryMap: Record<Categorie, { label: string; icon: React.ReactNode }>
}

interface EmptyStateProps {
  t: (key: string) => string
}

/**
 * Projects section component that displays filterable project portfolio
 * Allows users to filter projects by category (ML, Web, Algo, Other)
 * @returns Projects section with category filtering and project cards
 */
export default function Projects() {
  const { t } = useLanguage()
  const [categorieActive, setCategorieActive] = useState<Categorie>("ml")

  // Memoize categoryMap to prevent recreation on every render
  const categoryMap: Record<Categorie, { label: string; icon: React.ReactNode }> = useMemo(() => ({
    ml: { label: t("Projects.CategoryML"), icon: <Brain className="w-4 h-4" /> },
    web: { label: t("Projects.CategoryWeb"), icon: <Globe className="w-4 h-4" /> },
    algo: { label: t("Projects.CategoryAlgo"), icon: <Code className="w-4 h-4" /> },
    other: { label: t("Projects.CategoryOther"), icon: <Zap className="w-4 h-4" /> },
  }), [t])

  // Memoize filtered and sorted projects to prevent unnecessary recalculations
  const projetsFiltres = useMemo(() =>
    projets
      .filter((p) => p.categorie === categorieActive)
      .sort((a, b) => {
        // Sort by size first (Large > Small/Undefined)
        const sizeA = a.projectSize === "large" ? 1 : 0
        const sizeB = b.projectSize === "large" ? 1 : 0
        if (sizeA !== sizeB) return sizeB - sizeA

        // Then sort by year descending
        return (b.year || 0) - (a.year || 0)
      }),
    [categorieActive]
  )

  const handleCategoryChangeAction = useCallback((category: Categorie) => {
    setCategorieActive(category)
  }, [])

  return (
    <section id="projects" className={`${commonStyles.sectionWhite}`}>
      <div className={commonStyles.container}>
        <SectionHeader
          title={t("Projects.Title")}
          subtitle={t("Projects.Subtitle")}
        />

        <CategoryFilter
          categories={categoryMap}
          activeCategory={categorieActive}
          onCategoryChangeAction={handleCategoryChangeAction}
        />

        {/* Projects Grid */}
        <StaggeredContainer className={commonStyles.grid} staggerDelay={0.2}>
          {projetsFiltres.map((projet) => (
            <StaggeredItem key={projet.titre} direction="up">
              {projet.projectSize === "large" ? (
                <LargeProjectCard projet={projet} categoryMap={categoryMap} t={t} />
              ) : (
                <ProjectCard projet={projet} categoryMap={categoryMap} t={t} />
              )}
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        {/* Empty State */}
        {projetsFiltres.length === 0 && (
          <EmptyState t={t} />
        )}
      </div>
    </section>
  )
}

// Extracted LargeProjectCard component
function LargeProjectCard({ projet, categoryMap, t }: ProjectCardProps) {
  return (
    <motion.div className="group h-full" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <div className={`${commonStyles.card} overflow-hidden h-full flex flex-col md:flex-row`}>
        {/* Media Container - Bigger and Side-by-Side on Desktop */}
        <div className="md:w-3/5 relative min-h-[300px] md:min-h-full">
          {projet.mediaUrl ? (
            <MediaContainer projet={projet} categoryMap={categoryMap} isLarge={true} />
          ) : (
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Code className="w-20 h-20 text-gray-300" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`${commonStyles.cardPadding} md:w-2/5 flex flex-col justify-center`}>
          <div className="mb-4">
            <CategoryBadge projet={projet} categoryMap={categoryMap} />
          </div>

          <h3 className={`${commonStyles.textDark} text-3xl md:text-4xl ${commonStyles.textSemibold} mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors`}>
            {projet.titreKey ? t(projet.titreKey) : projet.titre}
          </h3>
          <p className={`${commonStyles.textGray} text-lg leading-relaxed mb-8 font-light`}>
            {t(projet.descriptionKey)}
          </p>

          {/* Features List */}
          {projet.features && projet.features.length > 0 && (
            <ul className="mb-8 space-y-3">
              {projet.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto pt-4">
            {projet.githubUrl && (
              <motion.a
                href={projet.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={commonStyles.buttonPrimary}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                {t("Projects.DetailsButton")}
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Extracted ProjectCard component
function ProjectCard({ projet, categoryMap, t }: ProjectCardProps) {
  return (
    <motion.div className="group" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <div className={`${commonStyles.card} overflow-hidden`}>
        {/* Media Container - Only render if mediaUrl exists */}
        {projet.mediaUrl && (
          <MediaContainer projet={projet} categoryMap={categoryMap} />
        )}

        {/* Content */}
        <div className={commonStyles.cardPadding}>
          {/* Category Badge for projects without media */}
          {!projet.mediaUrl && (
            <CategoryBadge projet={projet} categoryMap={categoryMap} />
          )}

          <h3 className={`${commonStyles.textDark} text-2xl ${commonStyles.textSemibold} mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors`}>
            {projet.titreKey ? t(projet.titreKey) : projet.titre}
          </h3>
          <p className={`${commonStyles.textGray} leading-relaxed mb-8 ${commonStyles.textLight}`}>
            {t(projet.descriptionKey)}
          </p>

          {projet.githubUrl && (
            <motion.a
              href={projet.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={commonStyles.buttonPrimary}
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
  )
}

interface ExtendedMediaContainerProps extends MediaContainerProps {
  isLarge?: boolean
}

// Extracted MediaContainer component
function MediaContainer({ projet, categoryMap, isLarge = false }: ExtendedMediaContainerProps) {
  const containerClass = isLarge
    ? "relative overflow-hidden bg-gray-50 dark:bg-gray-700 h-full w-full transition-colors duration-300"
    : "relative overflow-hidden bg-gray-50 dark:bg-gray-700 aspect-[16/10] transition-colors duration-300"

  return (
    <div className={containerClass}>
      {projet.mediaType === "image" ? (
        <motion.img
          src={projet.mediaUrl}
          alt={projet.titre}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          whileHover={{ scale: 1.05 }}
          onError={(e) => {
            const target = e.currentTarget;
            target.src = '/images/placeholder.svg';
            target.onerror = null;
          }}
        />
      ) : (
        <div className="relative w-full h-full">
          <video
            src={projet.mediaUrl}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            autoPlay
            aria-label={`Video demonstration of ${projet.titre}`}
          >
            <p>Your browser does not support the video tag.</p>
          </video>

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

      {/* Year Badge */}
      {projet.year && (
        <div className="absolute top-6 right-6">
          <motion.div
            className="px-3 py-1.5 bg-white dark:bg-gray-800 bg-opacity-95 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-gray-600 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            {projet.year}
          </motion.div>
        </div>
      )}
    </div>
  )
}

// Extracted CategoryBadge component
function CategoryBadge({ projet, categoryMap }: CategoryBadgeProps) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <motion.div
        className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium transition-colors duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        {categoryMap[projet.categorie].icon}
        <span>{categoryMap[projet.categorie].label}</span>
      </motion.div>
      {projet.year && (
        <motion.div
          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          {projet.year}
        </motion.div>
      )}
    </div>
  )
}

// Extracted EmptyState component
function EmptyState({ t }: EmptyStateProps) {
  return (
    <AnimatedSection delay={0.2} direction="up">
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
          <Code className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {t("Projects.EmptyStateTitle")}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 font-light">
          {t("Projects.EmptyStateDescription")}
        </p>
      </div>
    </AnimatedSection>
  )
}
