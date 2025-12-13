"use client"

import React from "react"
import { Code, Database, Brain, Palette, Globe, Server, Cpu, Users } from "lucide-react"
import { motion } from "framer-motion"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"
import SectionHeader from "./SectionHeader"
import { useLanguage } from "./LanguageProvider"
import { skills } from "../data/skills"
import { type SkillCategory, type Skill } from "../types"
import { commonStyles } from "../styles/common"

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

  const categories: { id: SkillCategory; label: string; icon: React.ReactNode; color: string }[] = [
    { id: "programming", label: t("Skills.CategoryProgramming"), icon: <Code className="w-5 h-5" />, color: "text-blue-500" },
    { id: "ml", label: t("Skills.CategoryML"), icon: <Brain className="w-5 h-5" />, color: "text-purple-500" },
    { id: "web", label: t("Skills.CategoryWeb"), icon: <Globe className="w-5 h-5" />, color: "text-cyan-500" },
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
            const categorySkills = skills.filter(skill => skill.category === category.id)
              // Sort by level descending
              .sort((a, b) => b.level - a.level);

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

                <div className="grid grid-cols-1 gap-4">
                  {categorySkills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
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

function SkillItem({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gray-900 dark:bg-gray-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
        />
      </div>
    </div>
  )
}