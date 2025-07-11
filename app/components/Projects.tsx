"use client"

import { useState } from "react"
import { ExternalLink, Brain, Globe, Code, Zap, Play } from "lucide-react"
import { useTranslations } from "next-intl" // Added useTranslations import

type Categorie = "Machine Learning" | "Applications Web" | "Algorithmie" | "Autres"

type Projet = {
  titre: string
  description: string
  mediaUrl: string
  mediaType: "image" | "video" 
  githubUrl: string
  categorie: Categorie
}

const projets: Projet[] = [
  {
    titre: "Drone Navigation to a target",
    description: "Un modèle de drone autonome qui navigue vers une cible en évitant les obstacles. Entrainé par reinforcement learning sur Unity avec ML-agents. Issu d'un projet universaire en collaboration avec Intellitech.",
    mediaUrl: "/images/drone.mp4",
    mediaType: "video",
    githubUrl: "https://github.com/LeoLaborie/AI-autonomous-drone-RL",
    categorie: "Machine Learning",
  },
  {
    titre: "SnakeAI",
    description: "Un modèle de jeu Snake autonome qui apprend à jouer en évitant les obstacles et en maximisant le score. Entrainé par un algorithme génétique.",
    mediaUrl: "/videos/snake.mp4",
    mediaType: "video",
    githubUrl: "https://github.com/LeoLaborie/snakeAI",
    categorie: "Machine Learning",
  },
  {
    titre: "Hackathon SWERC",
    description: "Participation au SWERC 2024, en équipe avec 3 autres étudiants de l'UTC. Le Swerc est un hackathon d'Algorithmie Européen de 5 heures.",
    mediaUrl: "/images/SWERC.png",
    mediaType: "image",
    githubUrl: "",
    categorie: "Algorithmie",
  },
  {
    titre: "Hackathon YouScribe",
    description: "1ère place au hackathon de YouScribe x UTC, en équipe avec 3 autres étudiants de l'UTC. Le but du Hackathon était de créer un algorithme de recommandation de livres pour les utilisateurs de la plateforme YouScribe.",
    mediaUrl: "/images/hackathon.png",
    mediaType: "image",
    githubUrl: "https://gitlab.utc.fr/gareajea/hackaton-groupe-c",
    categorie: "Algorithmie",
  },
  {
    titre: "Hackathon OpenAI",
    description: "Participation au hackathon OpenAI, en équipe avec 3 autres étudiants de l'UTC. Le but du Hackathon était de faire une application web utilisant l'API de OpenAI.",
    mediaUrl: "/images/openai.png",
    mediaType: "image",
    githubUrl: "",
    categorie: "Autres",
  },
  {
    titre: "MailFast",
    description: "Une application web permettant d'écrire des emails rapidement et efficacement grâce à l'API de OpenAI. Utilise Node.js, Tailwind et PostgresSQL.",
    mediaUrl: "/videos/mailfast.mp4",
    mediaType: "video",
    githubUrl: "https://github.com/LeoLaborie/mailfast",
    categorie: "Applications Web",
  },
  {
    titre: "Portfolio",
    description: "Mon portfolio personnel, réalisé avec Next.js, Tailwind et TypeScript. Il présente mes projets et mes compétences.",
    mediaUrl: "/images/portfolio.png",
    mediaType: "image",
    githubUrl: "https://github.com/LeoLaborie/portfolio",
    categorie: "Applications Web",
  },
  {
    titre: "Hackathon MC2I",
    description: "Participation au hackathon MC2I x UTC, en équipe avec 3 autres étudiants de l'UTC. Le but du Hackathon était de faire une application web accessible et responsable pour les étudiants de l'UTC. MC2I est une entreprise de conseil en transformation numérique.",
    mediaUrl: "/images/university_project.png",
    mediaType: "image",
    githubUrl: "https://gitlab.utc.fr/gareajea/hackaton-groupe-c",
    categorie: "Applications Web",
  },
]

const getCategoryIcon = (category: Categorie) => {
  switch (category) {
    case "Machine Learning":
      return <Brain className="w-5 h-5" />
    case "Applications Web":
      return <Globe className="w-5 h-5" />
    case "Algorithmie":
      return <Code className="w-5 h-5" />
    case "Autres":
      return <Zap className="w-5 h-5" />
  }
}

const getCategoryColor = (category: Categorie) => {
  switch (category) {
    case "Machine Learning":
      return "from-purple-500 to-pink-500"
    case "Applications Web":
      return "from-blue-500 to-cyan-500"
    case "Algorithmie":
      return "from-green-500 to-emerald-500"
    case "Autres":
      return "from-orange-500 to-red-500"
  }
}

export default function Projects() {
  const t = useTranslations("Projects") // Initialized useTranslations
  const [categorieActive, setCategorieActive] = useState<Categorie>("Machine Learning")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const categories: Categorie[] = [
    t("CategoryML") as Categorie, // Using t() for categories
    t("CategoryWeb") as Categorie,
    t("CategoryAlgo") as Categorie,
    t("CategoryOther") as Categorie,
  ]
  const projetsFiltres = projets.filter((p) => p.categorie === categorieActive)

  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{t("Title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("Subtitle")}</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategorieActive(cat)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    cat === categorieActive
                      ? `bg-gradient-to-r ${getCategoryColor(cat)} text-white shadow-lg transform scale-105`
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {getCategoryIcon(cat)}
                  <span className="hidden sm:inline">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects List (Vertical) */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {projetsFiltres.map((projet, index) => (
            <a
              key={index}
              href={projet.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Media Container */}
              <div className="relative overflow-hidden bg-gray-100 aspect-video">
                {projet.mediaType === "image" ? (
                  <img
                    src={projet.mediaUrl || "/placeholder.svg"}
                    alt={projet.titre}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video src={projet.mediaUrl} className="w-full h-full object-cover" muted loop playsInline />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-80" />
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${getCategoryColor(
                      projet.categorie,
                    )}`}
                  >
                    {getCategoryIcon(projet.categorie)}
                    <span className="hidden sm:inline">{projet.categorie}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {projet.titre}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{projet.description}</p>

                {/* Actions (Only "Détails" button remains) */}
                <div className="flex items-center justify-end">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    {t("DetailsButton")}
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(
                  projet.categorie,
                )} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />
            </a>
          ))}
        </div>

        {/* Empty State */}
        {projetsFiltres.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Code className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">{t("EmptyStateTitle")}</h3>
            <p className="text-gray-500">{t("EmptyStateDescription")}</p>
          </div>
        )}
      </div>
    </section>
  )
}
