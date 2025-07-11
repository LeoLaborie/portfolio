"use client"

import { useState } from "react"
import { Github, ExternalLink, Brain, Globe, Code, Zap, Play } from "lucide-react"

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
    titre: "Détection d'émotions par Deep Learning",
    description: "Un modèle CNN entraîné sur FER2013 pour reconnaître les émotions faciales.",
    mediaUrl: "/images/emotion.png",
    mediaType: "image",
    githubUrl: "https://github.com/monprofil/emotion-detector",
    categorie: "Machine Learning",
  },
  {
    titre: "To-do App avec authentification",
    description: "Application web fullstack avec Next.js, MongoDB et authentification via JWT.",
    mediaUrl: "/videos/todo-demo.mp4",
    mediaType: "video",
    githubUrl: "https://github.com/monprofil/todo-app",
    categorie: "Applications Web",
  },
  {
    titre: "Solveur de Sudoku en backtracking",
    description: "Algorithme récursif avec interface React pour visualiser la résolution.",
    mediaUrl: "/images/sudoku.png",
    mediaType: "image",
    githubUrl: "https://github.com/monprofil/sudoku-solver",
    categorie: "Algorithmie",
  },
  {
    titre: "Simulateur de propagation virale",
    description: "Simulation graphique d'une épidémie, modèle SIR en JS.",
    mediaUrl: "/videos/sir-demo.mp4",
    mediaType: "video",
    githubUrl: "https://github.com/monprofil/sir-simulation",
    categorie: "Autres",
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
  const [categorieActive, setCategorieActive] = useState<Categorie>("Machine Learning")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const categories: Categorie[] = ["Machine Learning", "Applications Web", "Algorithmie", "Autres"]
  const projetsFiltres = projets.filter((p) => p.categorie === categorieActive)

  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Mes Projets</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations techniques à travers différents domaines
          </p>
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetsFiltres.map((projet, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
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

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <a
                    href={projet.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>

                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    Détails
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(
                  projet.categorie,
                )} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projetsFiltres.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Code className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun projet dans cette catégorie</h3>
            <p className="text-gray-500">Sélectionnez une autre catégorie pour voir mes projets.</p>
          </div>
        )}
      </div>
    </section>
  )
}
