"use client"

import React from "react"
import { Code, Brain, Globe, Cpu } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeader from "./SectionHeader"
import { useLanguage } from "./LanguageProvider"
import { skills } from "../data/skills"
import { type SkillCategory, type SkillLevel } from "../types"
import { commonStyles } from "../styles/common"

const levelOrder: Record<SkillLevel, number> = {
  advanced: 0,
  intermediate: 1,
  familiar: 2,
}

const levelStyles: Record<SkillLevel, string> = {
  advanced: "bg-gray-900 text-white dark:bg-white dark:text-gray-900",
  intermediate: "bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200",
  familiar: "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400",
}

function getYearsLabel(yearLearned: number, suffix: string): string {
  const currentYear = new Date().getFullYear()
  const years = currentYear - yearLearned
  if (years < 1) return `<1 ${suffix}`
  return `~${years} ${suffix}`
}

export default function Skills() {
  const { t } = useLanguage()

  const levelKeys: Record<SkillLevel, string> = {
    advanced: t("Skills.LevelAdvanced"),
    intermediate: t("Skills.LevelIntermediate"),
    familiar: t("Skills.LevelFamiliar"),
  }

  const yearsSuffix = t("Skills.YearsSuffix")

  const categories: { id: SkillCategory; label: string; icon: React.ReactNode; color: string }[] = [
    { id: "ml", label: t("Skills.CategoryML"), icon: <Brain className="w-5 h-5" />, color: "text-purple-500" },
    { id: "web", label: t("Skills.CategoryWeb"), icon: <Globe className="w-5 h-5" />, color: "text-cyan-500" },
    { id: "programming", label: t("Skills.CategoryProgramming"), icon: <Code className="w-5 h-5" />, color: "text-blue-500" },
    { id: "tools", label: t("Skills.CategoryTools"), icon: <Cpu className="w-5 h-5" />, color: "text-orange-500" },
  ]

  return (
    <section id="skills" className={commonStyles.sectionGray}>
      <div className={commonStyles.container}>
        <SectionHeader
          title={t("Skills.Title")}
          subtitle={t("Skills.Subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills
              .filter(skill => skill.category === category.id)
              .sort((a, b) => levelOrder[a.level] - levelOrder[b.level] || a.yearLearned - b.yearLearned)

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className={`${commonStyles.card} ${commonStyles.cardPadding} h-full`}
              >
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                  <div className={`p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.label}
                  </h3>
                </div>

                <div className="flex flex-col gap-3">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                      className="flex items-center justify-between gap-3 group"
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${levelStyles[skill.level]}`}>
                          {levelKeys[skill.level]}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500 font-mono w-14 text-right">
                          {getYearsLabel(skill.yearLearned, yearsSuffix)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
