import { type Skill } from "../types"

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 99.99, category: "programming", iconName: "Code", yearLearned: 2020 },
  { name: "C++", level: 85, category: "programming", iconName: "Code", yearLearned: 2024 },
  { name: "JavaScript / TypeScript", level: 80, category: "programming", iconName: "Code", yearLearned: 2024 },

  // Machine Learning
  { name: "XGBoost", level: 90, category: "ml", iconName: "Brain", yearLearned: 2024 },
  { name: "Scikit-learn", level: 85, category: "ml", iconName: "Brain", yearLearned: 2022 },
  { name: "TensorFlow", level: 85, category: "ml", iconName: "Brain", yearLearned: 2022 },
  { name: "Genetic Algorithms", level: 90, category: "ml", iconName: "Brain", yearLearned: 2023 },
  { name: "Unity ML-Agents (RL)", level: 90, category: "ml", iconName: "Brain", yearLearned: 2025 },
  { name: "Fuzzy Logic", level: 80, category: "ml", iconName: "Brain", yearLearned: 2024 },

  // Web Development
  { name: "Next.js", level: 90, category: "web", iconName: "Globe", yearLearned: 2024 },
  { name: "Tailwind CSS", level: 85, category: "web", iconName: "Palette", yearLearned: 2024 },
  { name: "HTML/CSS", level: 90, category: "web", iconName: "Globe", yearLearned: 2024 },
  { name: "PostgreSQL", level: 75, category: "web", iconName: "Database", yearLearned: 2024 },
  
  // Tools & Technologies
  { name: "Git", level: 95, category: "tools", iconName: "Cpu", yearLearned: 2024 },
  { name: "Linux", level: 90, category: "tools", iconName: "Cpu", yearLearned: 2024 },
  { name: "Unity", level: 85, category: "tools", iconName: "Cpu", yearLearned: 2025 },
  { name: "Web Scraping", level: 85, category: "tools", iconName: "Cpu", yearLearned: 2021 },
]