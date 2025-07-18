import React from "react"
import Header from './components/Header'
import Hero from './components/Hero'
import Parcours from './components/Parcours'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home(): React.ReactElement {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-[Times_New_Roman] scroll-smooth transition-colors duration-300">
      <Header />
      <Hero />
      <Contact />
      <Projects />
      <Skills />
      <Parcours />
      <Contact />
    </main>
  )
}