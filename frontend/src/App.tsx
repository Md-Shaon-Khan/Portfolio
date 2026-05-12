import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loaded) return
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [loaded])

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <Loader />}
      </AnimatePresence>
      <Cursor />
      <div className="noise-overlay" />
      <div className="scan-line" />
      <ScrollProgress />

      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}