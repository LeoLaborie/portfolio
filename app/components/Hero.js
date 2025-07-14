"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import ParallaxSection from "./parallax-section"

export default function Hero() {
  const t = useTranslations("Hero")

  return (
    <section className="bg-gray-100 hero flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 py-8 md:py-16 px-4 md:px-8 overflow-hidden">
      {/* Text Section */}
      <div className="flex-1 text-center order-2 md:order-1">
        <AnimatedSection delay={0.2} direction="up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">{t("Title")}</h1>
        </AnimatedSection>

        <AnimatedSection delay={0.4} direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mt-3 md:mt-6 mb-6 md:mb-16">
            {t("Subtitle")}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.6} direction="up">
          <p className="mb-6 md:mb-12 text-base sm:text-lg md:text-2xl lg:text-4xl leading-relaxed">
            {t("Description")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.8} direction="up">
          <div className="flex justify-center">
            <motion.a
              href="/cv.pdf"
              download
              className="inline-block px-6 md:px-12 py-3 md:py-4 bg-black text-white text-base md:text-2xl rounded hover:bg-gray-800 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("DownloadCV")}
            </motion.a>
          </div>
        </AnimatedSection>
      </div>

      {/* Image Section - Centered on mobile, larger on desktop */}
      <div className="flex-1 flex justify-center items-center order-1 md:order-2">
        <ParallaxSection speed={0.3}>
          <AnimatedSection delay={0.3} direction="right">
            <div className="relative">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/images/moi.png"
                  alt="Photo de moi"
                  width={500}
                  height={500}
                  className="rounded-full object-cover w-[300px] h-auto lg:w-[500px]"
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </ParallaxSection>
      </div>
    </section>
  )
}
