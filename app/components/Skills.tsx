"use client"

import React, { useState, useMemo, useCallback } from "react"
import { Code, Database, Brain, Palette, Globe, Server, Cpu, Users } from "lucide-react"
import { motion } from "framer-motion"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"
import SectionHeader from "./SectionHeader"
import CategoryFilter from "./CategoryFilter"
import { useLanguage } from "./LanguageProvider"
import { skills } from "../data/skills"
import { type SkillCategory, type Skill } from "../types"
import { commonStyles } from "../styles/common"

interface SkillCardProps {
  skill: Skill
  index: number
}

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

// Define importance ranking by skill name (most important first)
const importanceRank: Record<string, number> = {
  // Programming - Sorted by proficiency level (highest first)
  "Python": 1,
  "C++": 2,
  "JavaScript / TypeScript": 3,
  "C": 4,
  "Java": 5,
  "PHP": 6,
  "SQL": 7,
  "Assembly": 8,
  
  // ML - Most advanced/recent first
  "ML concepts": 1,
  "Unity ML-Agents (RL)": 2,
  "Genetic Algorithms": 3,
  "XGBoost": 4,
  "TensorFlow": 5,
  "Scikit-learn": 6,
  "Computer Vision": 7,
  "Fuzzy Logic": 8,
  
  // Web - Full-stack order
  "Next.js": 1,
  "HTML/CSS": 2,
  "Tailwind CSS": 3,
  
  // Tools - Most important first
  "Git": 1,
  "Linux": 2,
  "API Integration": 3,
  "Unity": 4,
  "Web Scraping": 5,
  "PostgreSQL": 6,
  "Pygame": 7,
}

/**
 * Skills section component that displays technical skills with proficiency levels
 * Allows filtering by skill category (Programming, ML, Web, Tools)
 * @returns Skills section with category filtering and skill cards with progress bars
 */
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

  // Memoize filtered and sorted skills to prevent unnecessary recalculations
  const filteredSkills = useMemo(() => {
    return skills
      .filter((skill) => skill.category === categoryActive)
      .sort((a, b) => {
        const rankA = importanceRank[a.name] || 999
        const rankB = importanceRank[b.name] || 999
        return rankA - rankB
      })
  }, [categoryActive])

  const handleCategoryChangeAction = useCallback((category: SkillCategory) => {
    setCategoryActive(category)
  }, [])

  return (
    <section id="skills" className={commonStyles.sectionGray}>
      <div className={commonStyles.container}>
        <SectionHeader 
          title={t("Skills.Title")} 
          subtitle={t("Skills.Subtitle")} 
        />

        <CategoryFilter
          categories={categoryMap}
          activeCategory={categoryActive}
          onCategoryChangeAction={handleCategoryChangeAction}
        />

        {/* Skills Grid */}
        <StaggeredContainer className={commonStyles.gridTwo} staggerDelay={0.1}>
          {filteredSkills.map((skill, index) => (
            <StaggeredItem key={skill.name} direction="up">
              <SkillCard skill={skill} index={index} />
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  )
}

// Extracted SkillCard component
function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div 
      className={`${commonStyles.card} ${commonStyles.cardPadding} hover:shadow-lg dark:hover:shadow-xl`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg transition-colors duration-300">
            <span className={commonStyles.textGray}>
              {iconMap[skill.iconName as keyof typeof iconMap]}
            </span>
          </div>
          <h3 className={`${commonStyles.textDark} ${commonStyles.textSemibold}`}>
            {skill.name}
          </h3>
        </div>
        <span className={`text-sm ${commonStyles.textMedium} ${commonStyles.textGray}`}>
          {skill.level}%
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
          <motion.div
            className="bg-gray-900 dark:bg-gray-400 h-2 rounded-full transition-colors duration-300"
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
  )
}