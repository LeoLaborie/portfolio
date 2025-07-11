"use client"

import { Mail, Github, Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Contact() {
  const t = useTranslations("Contact")

  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">{t("Title")}</h2>
        {/* Removed the description paragraph */}

        <div className="flex flex-col items-center space-y-8">
          {/* Email */}
          <div className="flex items-center gap-4 text-gray-700 text-xl md:text-2xl">
            <Mail className="w-8 h-8 text-blue-600" />
            <a href={`mailto:${t("Email")}`} className="hover:underline font-medium">
              {t("Email")}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-8">
            {/* GitHub Link */}
            <a
              href="https://github.com/your-github-profile" // Replace with your actual GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <Github className="w-10 h-10 md:w-12 md:h-12 text-gray-800 hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">{t("GithubLabel")}</span>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://linkedin.com/in/your-linkedin-profile" // Replace with your actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <Linkedin className="w-10 h-10 md:w-12 md:h-12 text-blue-700 hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">{t("LinkedinLabel")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
