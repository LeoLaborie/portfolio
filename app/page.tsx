import React from "react"
import dynamic from "next/dynamic"
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'

const Skills = dynamic(() => import('./components/Skills'))
const Parcours = dynamic(() => import('./components/Parcours'))
const Contact = dynamic(() => import('./components/Contact'))

export default function Home(): React.ReactElement {
  return (
    <main id="main-content" className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-[Times_New_Roman] scroll-smooth transition-colors duration-300">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Parcours />
      <Contact />
    </main>
  )
}