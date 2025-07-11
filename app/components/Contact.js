import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations('Contact')
  return (
    <section id="contact" className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="mb-4">{t("email")}</p>
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/LeoLaborie" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/l%C3%A9o-laborie/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
