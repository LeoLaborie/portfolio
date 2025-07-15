"use client"

import React, { useState } from "react"
import { Code, Database, Brain, Palette, Globe, Server, Cpu, Users } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"
import { useLanguage } from "./LanguageProvider"

type SkillCategory = "programming" | "frameworks" | "tools" | "soft"

type Skill = {
  name: string
  level: number
  category: SkillCategory
  icon?: React.ReactNode
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 90, category: "programming", icon: <Code className="w-5 h-5" /> },
  { name: "JavaScript", level: 85, category: "programming", icon: <Code className="w-5 h-5" /> },
  { name: "TypeScript", level: 80, category: "programming", icon: <Code className="w-5 h-5" /> },
  { name: "C++", level: 75, category: "programming", icon: <Code className="w-5 h-5" /> },
  { name: "SQL", level: 70, category: "programming", icon: <Database className="w-5 h-5" /> },
  
  // Frameworks & Libraries
  { name: "React", level: 85, category: "frameworks", icon: <Globe className="w-5 h-5" /> },
  { name: "Next.js", level: 80, category: "frameworks", icon: <Globe className="w-5 h-5" /> },
  { name: "Node.js", level: 75, category: "frameworks", icon: <Server className="w-5 h-5" /> },
  { name: "TensorFlow", level: 70, category: "frameworks", icon: <Brain className="w-5 h-5" /> },
  { name: "PyTorch", level: 65, category: "frameworks", icon: <Brain className="w-5 h-5" /> },
  
  // Tools & Technologies
  { name: "Git", level: 85, category: "tools", icon: <Cpu className="w-5 h-5" /> },
  { name: "Docker", level: 70, category: "tools", icon: <Cpu className="w-5 h-5" /> },
  { name: "PostgreSQL", level: 75, category: "tools", icon: <Database className="w-5 h-5" /> },
  { name: "Unity", level: 65, category: "tools", icon: <Palette className="w-5 h-5" /> },
  { name: "Figma", level: 60, category: "tools", icon: <Palette className="w-5 h-5" /> },
  
  // Soft Skills
  { name: "Team Leadership", level: 80, category: "soft", icon: <Users className="w-5 h-5" /> },
  { name: "Problem Solving", level: 90, category: "soft", icon: <Brain className="w-5 h-5" /> },
  { name: "Communication", level: 85, category: "soft", icon: <Users className="w-5 h-5" /> },
]

export default function Skills() {
  const { t } = useLanguage()
  const [categoryActive, setCategoryActive] = useState<SkillCategory>("programming")

  const categoryMap: Record<SkillCategory, { label: string; icon: React.ReactNode }> = {
    programming: { label: t("Skills.CategoryProgramming"), icon: <Code className="w-4 h-4" /> },
    frameworks: { label: t("Skills.CategoryFrameworks"), icon: <Globe className="w-4 h-4" /> },
    tools: { label: t("Skills.CategoryTools"), icon: <Cpu className="w-4 h-4" /> },
    soft: { label: t("Skills.CategorySoft"), icon: <Users className="w-4 h-4" /> },
  }

  const filteredSkills = skills.filter((skill) => skill.category === categoryActive)

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
                      <span className="text-gray-600 dark:text-gray-300">{skill.icon}</span>
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