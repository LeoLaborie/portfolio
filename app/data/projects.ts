import { type Projet } from "../types"

export const projets: Projet[] = [
  // 2018 Projects
  {
    titre: "Mods Minecraft (Java)",
    titreKey: "ProjectTitles.MinecraftMods",
    description:
      "Mes premiers pas en programmation avec Java pour créer des mods Minecraft.",
    descriptionKey: "ProjectDescriptions.MinecraftMods",
    categorie: "other",
    year: 2018,
  },
  // 2021 Projects
  {
    titre: "Bot Trading Binance",
    titreKey: "ProjectTitles.TradingBot",
    description:
      "Bot de trading automatisé pour la plateforme Binance, développé en Python.",
    descriptionKey: "ProjectDescriptions.TradingBot",
    categorie: "other",
    year: 2022,
  },
  {
    titre: "Bot Gaming Automatisé",
    titreKey: "ProjectTitles.GamingBot",
    description:
      "Bot automatisé pour jouer à ma place à un jeu vidéo avec auto-clic, permettant un gain d'efficacité même en mon absence.",
    descriptionKey: "ProjectDescriptions.GamingBot",
    categorie: "other",
    year: 2021,
  },
  {
    titre: "Amélioration Qualité Image",
    titreKey: "ProjectTitles.ImageEnhancement",
    description:
      "Programme d'amélioration de la qualité d'image pour des photos en Python.",
    descriptionKey: "ProjectDescriptions.ImageEnhancement",
    categorie: "ml",
    year: 2023,
  },
  {
    titre: "Instagram Scraper",
    titreKey: "ProjectTitles.InstagramScraper",
    description:
      "Bot de scraping pour cartographier les réseaux d'amitié sur Instagram.",
    descriptionKey: "ProjectDescriptions.InstagramScraper",
    categorie: "other",
    year: 2022,
  },
  {
    titre: "Screen Resizer Tool",
    titreKey: "ProjectTitles.ScreenResizer",
    description:
      "Programme de redimensionnement d'écran, utilisé par un joueur de haut niveau de Valorant.",
    descriptionKey: "ProjectDescriptions.ScreenResizer",
    categorie: "other",
    year: 2022,
  },
  {
    titre: "Mini-jeux Pygame",
    titreKey: "ProjectTitles.PygameGames",
    description:
      "Série de mini-jeux développés en Python avec la bibliothèque Pygame.",
    descriptionKey: "ProjectDescriptions.PygameGames",
    categorie: "other",
    year: 2022,
  },
  // 2022 Projects
  {
    titre: "IA Reconnaissance Chiffres MNIST",
    titreKey: "ProjectTitles.DigitRecognition",
    description:
      "Intelligence artificielle de reconnaissance de chiffres manuscrits utilisant TensorFlow.",
    descriptionKey: "ProjectDescriptions.DigitRecognition",
    categorie: "ml",
    year: 2022,
  },
  {
    titre: "IA Prédiction Titanic",
    titreKey: "ProjectTitles.TitanicPrediction",
    description:
      "IA pour prédire la survie des passagers du Titanic en utilisant Scikit-Learn.",
    descriptionKey: "ProjectDescriptions.TitanicPrediction",
    categorie: "ml",
    year: 2023,
  },
  {
    titre: "IA Prix Immobilier",
    titreKey: "ProjectTitles.RealEstatePricing",
    description:
      "Intelligence artificielle pour estimer les prix de l'immobilier.",
    descriptionKey: "ProjectDescriptions.RealEstatePricing",
    categorie: "ml",
    year: 2023,
  },
  // 2023 Projects
  {
    titre: "AI solving Connect 4",
    titreKey: "ProjectTitles.Connect4AI",
    description:
      "IA capable de jouer au jeu Puissance 4.",
    descriptionKey: "ProjectDescriptions.Connect4AI",
    categorie: "algo",
    year: 2023,
  },
  {
    titre: "SnakeAI",
    titreKey: "ProjectTitles.SnakeAI",
    description:
      "Un modèle de jeu Snake autonome qui apprend à jouer en évitant les obstacles et en maximisant le score. Entrainé par un algorithme génétique avec pré-entrainement innovant.",
    descriptionKey: "ProjectDescriptions.SnakeAI",
    mediaType: "video",
    mediaUrl: "/images/snake.webm",
    githubUrl: "https://github.com/LeoLaborie/snakeAI",
    categorie: "ml",
    year: 2024,
    projectSize: "large",
    features: [
      "Deep Learning",
      "genetic algorithm",
      "TensorFlow",
    ]
  },
  {
    titre: "AI solving Tic-Tac-Toe",
    titreKey: "ProjectTitles.TicTacToeAI",
    description:
      "IA capable de jouer au jeu du Morpion. Utilise un algorithme Minimax avec élagage alpha-bêta pour optimiser les performances.",
    descriptionKey: "ProjectDescriptions.TicTacToeAI",
    mediaType: "video",
    categorie: "algo",
    year: 2023,
  },
  // 2024 Projects
  {
    titre: "SWERC",
    titreKey: "ProjectTitles.HackathonSWERC",
    description:
      "Participation au SWERC 2025, en équipe avec 3 autres étudiants de l'UTC. Le Swerc est un hackathon d'Algorithmie Européen de 5 heures.",
    descriptionKey: "ProjectDescriptions.HackathonSWERC",
    categorie: "algo",
    year: 2025,
    projectSize: "large",
    mediaType: "image",
    mediaUrl: "/images/swerc.png",
    features: [
      "competitive programming",
      "top 15 France",
      "Team work",
    ]
  },
  {
    titre: "Hackathon YouScribe",
    titreKey: "ProjectTitles.HackathonYouScribe",
    description:
      "1ère place au hackathon de YouScribe x UTC, en équipe avec 3 autres étudiants de l'UTC. Le but du Hackathon était de créer un algorithme de recommandation de livres pour les utilisateurs de la plateforme YouScribe.",
    descriptionKey: "ProjectDescriptions.HackathonYouScribe",
    categorie: "algo",
    year: 2024,
  },
  {
    titre: "MailFast",
    titreKey: "ProjectTitles.MailFast",
    description:
      "Une application web permettant d'écrire des emails rapidement et efficacement grâce à l'API de OpenAI. Utilise Node.js, Tailwind et PostgresSQL.",
    descriptionKey: "ProjectDescriptions.MailFast",
    mediaType: "image",
    mediaUrl: "/images/mailfast.png",
    githubUrl: "https://github.com/LeoLaborie/mailfast",
    categorie: "web",
    year: 2024,
    projectSize: "large",
    features: [
      "OpenAI API Integration",
      "Next.js & Tailwind CSS",
      "PostgreSQL Database",
    ]
  },
  {
    titre: "Portfolio",
    titreKey: "ProjectTitles.Portfolio",
    description:
      "Mon portfolio personnel, réalisé avec Next.js, Tailwind et TypeScript. Il présente mes projets et mes compétences.",
    descriptionKey: "ProjectDescriptions.Portfolio",
    githubUrl: "https://github.com/LeoLaborie/portfolio",
    categorie: "web",
    year: 2025,
    projectSize: "large",
    mediaType: "image",
    mediaUrl: "/images/portfolio.png",
    features: [
      "Next.js & Tailwind CSS",
      "Multi-language Support (i18n)",
      "Dark/Light Mode",
      "Responsive Design",
    ]
  },
  {
    titre: "Hackathon MC2I",
    titreKey: "ProjectTitles.HackathonMC2I",
    description:
      "Participation au hackathon MC2I x UTC, en équipe avec 3 autres étudiants de l'UTC. Le but du Hackathon était de faire une application web accessible et responsable pour les étudiants de l'UTC. MC2I est une entreprise de conseil en transformation numérique.",
    descriptionKey: "ProjectDescriptions.HackathonMC2I",
    githubUrl: "https://gitlab.utc.fr/gareajea/hackaton-groupe-c",
    categorie: "web",
    year: 2025,
  },
  {
    titre: "XtraSup",
    titreKey: "ProjectTitles.XtraSup",
    description:
      "IA d'aide à la sélection de candidats post-bac souhaitant intégrer un établissement d'enseignement supérieur. Développée dans le cadre d'un projet universitaire.",
    descriptionKey: "ProjectDescriptions.XtraSup",
    githubUrl: "https://github.com/LeoLaborie/XtraSup",
    categorie: "algo",
    year: 2024,
  },
  {
    titre: "Système Gestion Auto-École",
    titreKey: "ProjectTitles.AutoEcole",
    description:
      "Système de gestion complet pour auto-école développé en PHP, permettant la gestion des élèves, séances de conduite, thèmes d'apprentissage et planification. Développé dans le cadre du cours NF92 à l'UTC.",
    descriptionKey: "ProjectDescriptions.AutoEcole",
    githubUrl: "https://github.com/LeoLaborie/NF92_auto_ecole",
    categorie: "web",
    year: 2024,
  },
  // 2025 Projects
  {
    titre: "Drone Navigation to a target",
    // No titreKey - this title stays in English
    description:
      "Un modèle de drone autonome qui navigue vers une cible en évitant les obstacles. Entrainé par reinforcement learning sur Unity avec ML-agents. Issu d'un projet universaire en collaboration avec Intellitech.",
    descriptionKey: "ProjectDescriptions.DroneNavigation",
    mediaType: "video",
    githubUrl: "https://github.com/LeoLaborie/AI-autonomous-drone-RL",
    categorie: "ml",
    year: 2025,
    projectSize: "large",
    features: [
      "Unity ML-Agents",
      "PPO Algorithm",
      "autonomous drone navigation",
    ]
  },
]
