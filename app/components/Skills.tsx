"use client"

import React, { useState, useMemo } from "react"
import { Code, Database, Brain, Palette, Globe, Server, Cpu, Users } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"
import { useLanguage } from "./LanguageProvider"
import { skills, type SkillCategory } from "../data/skills"

// Icon mapping for rendering
const iconMap = {
  Code: <Code className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
}

export default function Skills() {
  const { t } = useLanguage()
  const [categoryActive, setCategoryActive] = useState<SkillCategory>("programming")

  // Memoize categoryMap to prevent recreation on every render
  const categoryMap: Record<SkillCategory, { label: string; icon: React.ReactNode }> = useMemo(() => ({
    programming: { label: t("Skills.CategoryProgramming"), icon: <Code className="w-4 h-4" /> },
    ml: { label: t("Skills.CategoryML"), icon: <Brain className="w-4 h-4" /> },
    web: { label: t("Skills.CategoryWeb"), icon: <Globe className="w-4 h-4" /> },
    tools: { label: t("Skills.CategoryTools"), icon: <Cpu className="w-4 h-4" /> },
  }), [t])

  // Memoize filtered skills to prevent unnecessary recalculations
  const filteredSkills = useMemo(() => 
    skills.filter((skill) => skill.category === categoryActive), 
    [categoryActive]
  )

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection delay={0.1} direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t("Skills.Title")}</h2>
            <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
              {t("Skills.Subtitle")}
            </p>
          </AnimatedSection>
        </div>

        {/* Category Filter */}
        <AnimatedSection delay={0.5} direction="up">
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white dark:bg-gray-800 rounded-2xl p-1.5 border border-gray-200 dark:border-gray-700 shadow-sm">
              {(Object.keys(categoryMap) as SkillCategory[]).map((cat, index) => (
                <motion.button
                  key={cat}
                  onClick={() => setCategoryActive(cat)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm ${
                    cat === categoryActive 
                      ? "bg-gray-900 dark:bg-gray-600 text-white shadow-sm" 
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
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

        {/* Skills Grid */}
        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {filteredSkills.map((skill, index) => (
            <StaggeredItem key={`${skill.name}-${categoryActive}`} direction="up">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-300">{iconMap[skill.iconName as keyof typeof iconMap]}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gray-900 dark:bg-gray-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1,
                        delay: index * 0.1 + 0.5,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}