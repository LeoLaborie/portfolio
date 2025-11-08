"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import ParallaxSection from "./parallax-section"
import { useLanguage } from "./LanguageProvider"
import { CV_PATH } from "../data/contact"

/**
 * Hero section component - Main landing section with profile image and CTA
 * Features animated introduction text and CV download button
 * @returns Hero section with profile image and download CV button
 */
export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="bg-gray-100 dark:bg-gray-800 hero flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 py-8 md:py-16 px-4 md:px-8 overflow-hidden transition-colors duration-300">
      {/* Text Section */}
      <div className="flex-1 text-center order-2 md:order-1">
        <AnimatedSection delay={0.2} direction="up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">{t("Hero.Title")}</h1>
        </AnimatedSection>

        <AnimatedSection delay={0.4} direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mt-3 md:mt-6 mb-6 md:mb-16">
            {t("Hero.Subtitle")}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.6} direction="up">
          <p className="mb-6 md:mb-12 text-base sm:text-lg md:text-2xl lg:text-4xl leading-relaxed">
            {t("Hero.Description")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.8} direction="up">
          <div className="flex justify-center">
            <motion.a
              href={CV_PATH}
              download
              className="inline-block px-6 md:px-12 py-3 md:py-4 bg-black dark:bg-white text-white dark:text-black text-base md:text-2xl rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("Hero.DownloadCV")}
            </motion.a>
          </div>
        </AnimatedSection>
      </div>

      {/* Image Section - Centered on mobile, larger on desktop */}
      <div className="flex-1 flex justify-center items-center order-1 md:order-2">
        <ParallaxSection speed={0.3}>
          <AnimatedSection delay={0.3} direction="right">
            <div className="relative">
              <Image
                src="/images/moi.png"
                alt={t("Hero.ProfileImageAlt")}
                width={500}
                height={500}
                priority
                className="rounded-full object-cover w-[300px] h-auto lg:w-[500px]"
              />
            </div>
          </AnimatedSection>
        </ParallaxSection>
      </div>
    </section>
  )
}
