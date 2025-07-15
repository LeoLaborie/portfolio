export type SkillCategory = "programming" | "ml" | "web" | "tools"

export type Skill = {
  name: string
  level: number
  category: SkillCategory
  iconName: string  // Store icon name instead of JSX element
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 99.99, category: "programming", iconName: "Code" },
  { name: "JavaScript", level: 85, category: "programming", iconName: "Code" },
  { name: "C", level: 80, category: "programming", iconName: "Code" },
  { name: "C#", level: 80, category: "programming", iconName: "Code" },
  { name: "C++", level: 75, category: "programming", iconName: "Code" },
  { name: "SQL", level: 70, category: "programming", iconName: "Database" },
  
  // Machine Learning
  { name: "ML concepts", level: 90, category: "ml", iconName: "Brain" },
  { name: "Unity ML-Agents (RL)", level: 90, category: "ml", iconName: "Brain" },
  { name: "Scikit-learn", level: 85, category: "ml", iconName: "Brain" },
  { name: "TensorFlow", level: 85, category: "ml", iconName: "Brain" },
  { name: "XGBoost", level: 90, category: "ml", iconName: "Brain" },
  
  // Web Development
  { name: "Next.js", level: 90, category: "web", iconName: "Globe" },
  { name: "Tailwind CSS", level: 85, category: "web", iconName: "Palette" },
  
  // Tools & Technologies
  { name: "Git", level: 95, category: "tools", iconName: "Cpu" },
  { name: "Linux", level: 90, category: "tools", iconName: "Cpu" },
  { name: "PostgreSQL", level: 75, category: "tools", iconName: "Database" },
]