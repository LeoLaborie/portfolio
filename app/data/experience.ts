import type { Experience } from "../types"

export const experiences: Experience[] = [
    {
        company: "Antre de Mondes",
        companyKey: "Experience.Company2",
        role: "Catalogue produits e-commerce — 10 724 fiches enrichies par scraping & LLM",
        roleKey: "Experience.Role2",
        period: "2026 · 2 mois",
        periodKey: "Experience.Period2",
        location: "À distance",
        locationKey: "Experience.Location2",
        descriptionKeys: [
            "Experience.Desc2_1",
            "Experience.Desc2_2",
            "Experience.Desc2_3"
        ],
        techStack: ["Python", "Ollama", "Keepa API", "Scraping"],
        mediaUrl: "/images/antre-de-mondes.jpg",
        mediaType: "image",
        mediaFit: "contain"
    },
    {
        company: "Phonemia",
        companyKey: "Experience.Company1",
        role: "Développeur applications mobiles",
        roleKey: "Experience.Role1",
        period: "Nov. 2025 · 1 mois",
        periodKey: "Experience.Period1",
        location: "À distance",
        locationKey: "Experience.Location1",
        descriptionKeys: [
            "Experience.Desc1_1",
            "Experience.Desc1_2",
            "Experience.Desc1_3"
        ],
        techStack: ["React Native", "Auth0"],
        mediaUrl: "/images/phonemia.png",
        mediaType: "image"
    },
    {
        company: "IDAGRAI LABS",
        companyKey: "Experience.Company3",
        role: "Développement d'une IA de navigation autonome pour drone (Reinforcement Learning)",
        roleKey: "Experience.Role3",
        period: "Fév. - Juin 2025 · 5 mois",
        periodKey: "Experience.Period3",
        location: "À distance",
        locationKey: "Experience.Location3",
        descriptionKeys: [
            "Experience.Desc3_1",
            "Experience.Desc3_2",
            "Experience.Desc3_3"
        ],
        techStack: ["Unity ML-Agents", "PPO", "Python", "Reinforcement Learning"],
        mediaUrl: "/images/drone-navigation.webm",
        mediaType: "video"
    }
]
