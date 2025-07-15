export type Categorie = "ml" | "web" | "algo" | "other"

export type Projet = {
  titre: string
  description: string
  descriptionKey: string  // Translation key for the description
  mediaUrl: string
  mediaType: "image" | "video"
  githubUrl: string
  categorie: Categorie
}

export const projets: Projet[] = [
  {
    titre: "Drone Navigation to a target",
    description:
      "Un modèle de drone autonome qui navigue vers une cible en évitant les obstacles. Entrainé par reinforcement learning sur Unity avec ML-agents. Issu d'un projet universaire en collaboration avec Intellitech.",
    descriptionKey: "ProjectDescriptions.DroneNavigation",
    mediaUrl: "",
    mediaType: "video",
    githubUrl: "https://github.com/LeoLaborie/AI-autonomous-drone-RL",
    categorie: "ml",
  },
  {
    titre: "SnakeAI",
    description:
      "Un modèle de jeu Snake autonome qui apprend à jouer en évitant les obstacles et en maximisant le score. Entrainé par un algorithme génétique.",
    descriptionKey: "ProjectDescriptions.SnakeAI",
    mediaUrl: "",
    mediaType: "video",
    githubUrl: "https://github.com/LeoLaborie/snakeAI",
    categorie: "ml",
  },
  {
    titre: "Hackathon SWERC",
    description:
      "Participation au SWERC 2024, en équipe avec 3 autres étudiants de l'UTC. Le Swerc est un hackathon d'Algorithmie Européen de 5 heures.",
    descriptionKey: "ProjectDescriptions.HackathonSWERC",
    mediaUrl: "",
    mediaType: "image",
    githubUrl: "",
    categorie: "algo",
  },
  {
    titre: "Hackathon YouScribe",
    description:
      "1ère place au hackathon de YouScribe x UTC, en équipe avec 3 autres étudiants de l'UTC. Le but du Hackathon était de créer un algorithme de recommandation de livres pour les utilisateurs de la plateforme YouScribe.",
    descriptionKey: "ProjectDescriptions.HackathonYouScribe",
    mediaUrl: "",
    mediaType: "image",
    githubUrl: "",
    categorie: "algo",
  },
  {
    titre: "MailFast",
    description:
      "Une application web permettant d'écrire des emails rapidement et efficacement grâce à l'API de OpenAI. Utilise Node.js, Tailwind et PostgresSQL.",
    descriptionKey: "ProjectDescriptions.MailFast",
    mediaUrl: "",
    mediaType: "video",
    githubUrl: "https://github.com/LeoLaborie/mailfast",
    categorie: "web",
  },
  {
    titre: "Portfolio",
    description:
      "Mon portfolio personnel, réalisé avec Next.js, Tailwind et TypeScript. Il présente mes projets et mes compétences.",
    descriptionKey: "ProjectDescriptions.Portfolio",
    mediaUrl: "",
    mediaType: "image",
    githubUrl: "https://github.com/LeoLaborie/portfolio",
    categorie: "web",
  },
  {
    titre: "Hackathon MC2I",
    description:
      "Participation au hackathon MC2I x UTC, en équipe avec 3 autres étudiants de l'UTC. Le but du Hackathon était de faire une application web accessible et responsable pour les étudiants de l'UTC. MC2I est une entreprise de conseil en transformation numérique.",
    descriptionKey: "ProjectDescriptions.HackathonMC2I",
    mediaUrl: "",
    mediaType: "image",
    githubUrl: "https://gitlab.utc.fr/gareajea/hackaton-groupe-c",
    categorie: "web",
  },
  {
    titre: "XtraSup",
    description:
      "IA d'aide à la sélection de candidats post-bac souhaitant intégrer un établissement d’enseignement supérieur. Développée dans le cadre d'un projet universitaire.",
    descriptionKey: "ProjectDescriptions.XtraSup",
    mediaUrl: "",
    mediaType: "image",
    githubUrl: "https://github.com/LeoLaborie/XtraSup",
    categorie: "algo",
  },
  {
    titre: "AI solving Tic-Tac-Toe",
    description:
      "IA capable de jouer au jeu du Morpion. Utilise un algorithme Minimax avec élagage alpha-bêta pour optimiser les performances.",
    descriptionKey: "ProjectDescriptions.TicTacToeAI",
    mediaUrl: "",
    mediaType: "video",
    githubUrl: "",
    categorie: "algo",
  },
  {
    titre: "AI solving Connect 4",
    description:
      "IA capable de jouer au jeu Puissance 4. ",
    descriptionKey: "ProjectDescriptions.Connect4AI",
    mediaUrl: "",
    mediaType: "image",
    githubUrl: "",
    categorie: "algo",
  },
]