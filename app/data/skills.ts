import { type Skill } from "../types"

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: "advanced", category: "programming", iconName: "Code", yearLearned: 2020 },
  { name: "C++", level: "advanced", category: "programming", iconName: "Code", yearLearned: 2025 },
  { name: "JavaScript / TypeScript", level: "intermediate", category: "programming", iconName: "Code", yearLearned: 2024 },

  // Machine Learning
  { name: "XGBoost", level: "intermediate", category: "ml", iconName: "Brain", yearLearned: 2023 },
  { name: "Scikit-learn", level: "intermediate", category: "ml", iconName: "Brain", yearLearned: 2023 },
  { name: "TensorFlow", level: "intermediate", category: "ml", iconName: "Brain", yearLearned: 2022 },
  { name: "Genetic Algorithms", level: "advanced", category: "ml", iconName: "Brain", yearLearned: 2023 },
  { name: "Unity ML-Agents (RL)", level: "advanced", category: "ml", iconName: "Brain", yearLearned: 2025 },
  { name: "Fuzzy Logic", level: "intermediate", category: "ml", iconName: "Brain", yearLearned: 2024 },

  // Web Development
  { name: "Next.js", level: "advanced", category: "web", iconName: "Globe", yearLearned: 2024 },
  { name: "Tailwind CSS", level: "advanced", category: "web", iconName: "Palette", yearLearned: 2024 },
  { name: "HTML/CSS", level: "advanced", category: "web", iconName: "Globe", yearLearned: 2024 },
  { name: "PostgreSQL", level: "familiar", category: "web", iconName: "Database", yearLearned: 2024 },

  // Tools & Technologies
  { name: "Git", level: "advanced", category: "tools", iconName: "Cpu", yearLearned: 2023 },
  { name: "Linux", level: "advanced", category: "tools", iconName: "Cpu", yearLearned: 2024 },
  { name: "Web Scraping", level: "advanced", category: "tools", iconName: "Cpu", yearLearned: 2021 },
]
