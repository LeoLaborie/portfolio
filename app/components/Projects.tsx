"use client"

import { useState } from "react"
import { ExternalLink, Brain, Globe, Code, Zap, Play } from "lucide-react"
import { useTranslations } from "next-intl"

type Categorie =
  | "Machine Learning"
  | "Applications Web"
  | "Algorithmie"
  | "Autres"
  | "Web Applications"
  | "Algorithms"
  | "Other"

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
    description:
      "Un modèle de drone autonome qui navigue vers une cible en évitant les obstacles. Entrainé par reinforcement learning sur Unity avec ML-agents. Issu d'un projet universaire en collaboration avec Intellitech.",
    mediaUrl: "/images/drone.mp4",
    mediaType: "video",
    githubUrl: "https://github.com/LeoLaborie/AI-autonomous-drone-RL",
    categorie: "Machine Learning",
  },
  {
    titre: "SnakeAI",
    description:
      "Un modèle de jeu Snake autonome qui apprend à jouer en évitant les obstacles et en maximisant le score. Entrainé par un algorithme génétique.",
    mediaUrl: "/videos/snake.mp4",
    mediaType: "video",
    githubUrl: "https://github.com/LeoLaborie/snakeAI",
    categorie: "Machine Learning",
  },
  {
    titre: "Hackathon SWERC",
    description:
      "Participation au SWERC 2024, en équipe avec 3 autres étudiants de l'UTC. Le Swerc est un hackathon d'Algorithmie Européen de 5 heures.",
    mediaUrl: "/images/SWERC.png",
    mediaType: "image",
    githubUrl: "",
    categorie: "Algorithmie",
  },
  {
    titre: "Hackathon YouScribe",
    description:
      "1ère place au hackathon de YouScribe x UTC, en équipe avec 3 autres étudiants de l'UTC. Le but du Hackathon était de créer un algorithme de recommandation de livres pour les utilisateurs de la plateforme YouScribe.",
    mediaUrl: "/images/hackathon.png",
    mediaType: "image",
    githubUrl: "https://gitlab.utc.fr/gareajea/hackaton-groupe-c",
    categorie: "Algorithmie",
  },
  {
    titre: "Hackathon OpenAI",
    description:
      "Participation au hackathon OpenAI, en équipe avec 3 autres étudiants de l'UTC. Le but du Hackathon était de faire une application web utilisant l'API de OpenAI.",
    mediaUrl: "/images/openai.png",
    mediaType: "image",
    githubUrl: "",
    categorie: "Autres",
  },
  {
    titre: "MailFast",
    description:
      "Une application web permettant d'écrire des emails rapidement et efficacement grâce à l'API de OpenAI. Utilise Node.js, Tailwind et PostgresSQL.",
    mediaUrl: "/videos/mailfast.mp4",
    mediaType: "video",
    githubUrl: "https://github.com/LeoLaborie/mailfast",
    categorie: "Applications Web",
  },
  {
    titre: "Portfolio",
    description:
      "Mon portfolio personnel, réalisé avec Next.js, Tailwind et TypeScript. Il présente mes projets et mes compétences.",
    mediaUrl: "/images/portfolio.png",
    mediaType: "image",
    githubUrl: "https://github.com/LeoLaborie/portfolio",
    categorie: "Applications Web",
  },
  {
    titre: "Hackathon MC2I",
    description:
      "Participation au hackathon MC2I x UTC, en équipe avec 3 autres étudiants de l'UTC. Le but du Hackathon était de faire une application web accessible et responsable pour les étudiants de l'UTC. MC2I est une entreprise de conseil en transformation numérique.",
    mediaUrl: "/images/university_project.png",
    mediaType: "image",
    githubUrl: "https://gitlab.utc.fr/gareajea/hackaton-groupe-c",
    categorie: "Applications Web",
  },
]

const getCategoryIcon = (category: Categorie) => {
  switch (category) {
    case "Machine Learning":
      return <Brain className="w-4 h-4" />
    case "Applications Web":
      return <Globe className="w-4 h-4" />
    case "Web Applications":
      return <Globe className="w-4 h-4" />
    case "Algorithmie":
      return <Code className="w-4 h-4" />
    case "Algorithms":
      return <Code className="w-4 h-4" />
    case "Autres":
      return <Zap className="w-4 h-4" />
    case "Other":
      return <Zap className="w-4 h-4" />
  }
}

export default function Projects() {
  const t = useTranslations("Projects")
  const [categorieActive, setCategorieActive] = useState<Categorie>("Machine Learning")

  const categories: Categorie[] = [
    t("CategoryML") as Categorie,
    t("CategoryWeb") as Categorie,
    t("CategoryAlgo") as Categorie,
    t("CategoryOther") as Categorie,
  ]
  const projetsFiltres = projets.filter((p) => p.categorie === categorieActive)

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("Title")}</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">{t("Subtitle")}</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 border border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategorieActive(cat)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm ${
                  cat === categorieActive ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {getCategoryIcon(cat)}
                <span className="hidden sm:inline">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:gap-12">
          {projetsFiltres.map((projet, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                {/* Media Container */}
                <div className="relative overflow-hidden bg-gray-50 aspect-[16/10]">
                  {projet.mediaType === "image" ? (
                    <img
                      src={projet.mediaUrl || "/placeholder.svg?height=400&width=640"}
                      alt={projet.titre}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video src={projet.mediaUrl} className="w-full h-full object-cover" muted loop playsInline />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-gray-800 ml-1" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white bg-opacity-95 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium border border-gray-200">
                      {getCategoryIcon(projet.categorie)}
                      <span className="hidden sm:inline">{projet.categorie}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {projet.titre}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 font-light">{projet.description}</p>

                  {/* Action Button */}
                  {projet.githubUrl && (
                    <a
                      href={projet.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t("DetailsButton")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projetsFiltres.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{t("EmptyStateTitle")}</h3>
            <p className="text-gray-500 font-light">{t("EmptyStateDescription")}</p>
          </div>
        )}
      </div>
    </section>
  )
}
