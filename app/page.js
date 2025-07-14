
import Header from './components/Header'
import Hero from './components/Hero'
import Parcours from './components/Parcours'
import Projects from './components/Projects'
import Contact from './components/Contact'


export default function Home() {
  return (
    <>
      <main className="bg-white text-black">
        <Header />
        <Hero />
        <Contact />
        <Projects />
        <Parcours />
        <Contact />
      </main>
    </>
  )
}
