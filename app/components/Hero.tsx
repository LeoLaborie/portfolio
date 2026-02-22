"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import ParallaxSection from "./parallax-section"
import { useLanguage } from "./LanguageProvider"
import { CV_PATHS, socialLinks } from "../data/contact"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { commonStyles } from "../styles/common"

/**
 * Hero section component - Main landing section with profile image and CTA
 * Features animated introduction text and CV download button
 * @returns Hero section with profile image and download CV button
 */
export default function Hero() {
  const { t, currentLanguage } = useLanguage()

  const calculateAge = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    // getMonth() is 0-indexed, so 6 is July.
    const isBeforeJuly3rd = today.getMonth() < 6 || (today.getMonth() === 6 && today.getDate() < 3);

    return isBeforeJuly3rd ? currentYear - 2006 : currentYear - 2005;
  };

  const age = calculateAge();

  return (
    <section className="bg-gray-100 dark:bg-gray-800 hero py-16 px-6 lg:px-12 xl:px-20 overflow-hidden transition-colors duration-300 flex justify-center">
      <div className={`${commonStyles.container} flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full`}>
        {/* Text Section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col space-y-6">
          <AnimatedSection delay={0.2} direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black lowercase tracking-tight shrink-0">
              {t("Hero.Greeting")}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4} direction="up">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mt-2">
              {t("Hero.Title", { age })}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.6} direction="up">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 pt-2">
              {t("Hero.Bio")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.8} direction="up">
            <div className="pt-6">
              <a href="#experience" className="font-bold text-lg mb-1 flex items-center hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors w-max">
                {t("Hero.ContactPrompt")}
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {t("Hero.ContactEscalation")}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  href={CV_PATHS[currentLanguage]}
                  download
                  className="flex items-center gap-2 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-md border border-transparent hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("Hero.Resume")}
                  <Download size={18} />
                </motion.a>

                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={24} />
                </motion.a>

                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={24} />
                </motion.a>

                <motion.a
                  href={`mailto:${socialLinks.email}`}
                  className="p-3 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Image Section - Centered on mobile, larger on desktop */}
        <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 -mt-4 lg:mt-0">
          <ParallaxSection speed={0.3}>
            <AnimatedSection delay={0.3} direction="right">
              <div className="relative">
                <Image
                  src="/images/moi.png"
                  alt="Léo Laborie"
                  width={350}
                  height={350}
                  priority
                  className="rounded-full object-cover w-[180px] sm:w-[220px] lg:w-[350px] h-auto"
                />
              </div>
            </AnimatedSection>
          </ParallaxSection>
        </div>
      </div>
    </section>
  )
}
