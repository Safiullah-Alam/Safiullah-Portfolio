import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    })

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] dark:bg-[#0B0D0F] text-[#15171A] dark:text-[#F5F7FA] transition-colors duration-200">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        
        <div className="reveal-on-scroll">
          <About />
        </div>

        <div className="reveal-on-scroll">
          <Skills />
        </div>

        <div className="reveal-on-scroll">
          <Projects />
        </div>

        <div className="reveal-on-scroll">
          <Experience />
        </div>

        <div className="reveal-on-scroll">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
