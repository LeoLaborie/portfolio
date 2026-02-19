"use client"

import { MapPin, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import StaggeredContainer from "./staggered-container"
import StaggeredItem from "./staggered-item"
import SectionHeader from "./SectionHeader"
import { useLanguage } from "./LanguageProvider"
import { experiences } from "../data/experience"
import { commonStyles } from "../styles/common"

export default function Experience() {
    const { t } = useLanguage()

    return (
        <section id="experience" className={commonStyles.sectionWhite}>
            <div className={commonStyles.container}>
                <SectionHeader
                    title={t("Experience.Title")}
                    subtitle={t("Experience.Subtitle")}
                />

                <StaggeredContainer className={commonStyles.grid} staggerDelay={0.2}>
                    {experiences.map((exp) => (
                        <StaggeredItem key={exp.companyKey} direction="up">
                            <motion.div
                                className="group"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={`${commonStyles.card} overflow-hidden h-full flex flex-col md:flex-row`}>
                                    {/* Media Container - Side-by-side on desktop */}
                                    <div className="md:w-3/5 relative min-h-[300px] md:min-h-full">
                                        <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-700 h-full w-full transition-colors duration-300">
                                            {exp.mediaType === "image" ? (
                                                <motion.img
                                                    src={exp.mediaUrl}
                                                    alt={t(exp.companyKey)}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    whileHover={{ scale: 1.05 }}
                                                    onError={(e) => {
                                                        const target = e.currentTarget;
                                                        target.src = '/images/placeholder.svg';
                                                        target.onerror = null;
                                                    }}
                                                />
                                            ) : (
                                                <div className="relative w-full h-full">
                                                    <video
                                                        src={exp.mediaUrl}
                                                        className="w-full h-full object-cover"
                                                        muted
                                                        loop
                                                        playsInline
                                                        autoPlay
                                                        aria-label={`Video demonstration of ${t(exp.companyKey)}`}
                                                    >
                                                        <p>Your browser does not support the video tag.</p>
                                                    </video>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className={`${commonStyles.cardPadding} md:w-2/5 flex flex-col justify-center`}>
                                        {/* Header */}
                                        <h3 className={`${commonStyles.textDark} text-3xl md:text-4xl ${commonStyles.textSemibold} mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors`}>
                                            {t(exp.companyKey)}
                                        </h3>
                                        <p className={`${commonStyles.textGray} text-lg ${commonStyles.textMedium} mb-4`}>
                                            {t(exp.roleKey)}
                                        </p>

                                        {/* Metadata Row */}
                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span>{t(exp.periodKey)}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                                                <MapPin className="w-4 h-4" />
                                                <span>{t(exp.locationKey)}</span>
                                            </div>
                                        </div>

                                        {/* Description Bullets */}
                                        <ul className="mb-6 space-y-3">
                                            {exp.descriptionKeys.map((descKey, idx) => (
                                                <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                                                    <span className="text-sm md:text-base">{t(descKey)}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack Badges */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </StaggeredItem>
                    ))}
                </StaggeredContainer>
            </div>
        </section>
    )
}
