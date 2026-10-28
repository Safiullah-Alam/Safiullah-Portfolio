import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Section scroll spy
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPos = window.scrollY + 120

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F8FA]/90 dark:bg-[#0B0D0F]/90 backdrop-blur-md border-b border-gray-200/80 dark:border-[#232830]/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3FF5F] rounded-lg"
            aria-label="Safiullah Alam - Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gray-900 dark:bg-[#181C21] border border-gray-200 dark:border-[#2B313A] flex items-center justify-center font-mono font-bold text-sm text-[#F5F7FA] shadow-sm group-hover:border-[#A3FF5F] transition-colors">
              <span className="text-[#A3FF5F]">S</span>A
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base tracking-tight text-[#15171A] dark:text-[#F5F7FA] group-hover:text-[#0F6B00] dark:group-hover:text-[#A3FF5F] transition-colors">
                Safiullah Alam
              </span>
              <span className="text-[11px] font-mono text-gray-500 dark:text-[#868C98] -mt-1 hidden sm:block">
                Frontend Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 dark:bg-[#14171A]/70 backdrop-blur-md border border-gray-200/70 dark:border-[#232830] px-3 py-1.5 rounded-full shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-gray-900 text-white dark:bg-[#A3FF5F] dark:text-[#0B0D0F] shadow-xs font-semibold'
                      : 'text-gray-600 dark:text-[#A3A8B0] hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1E232B]'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </nav>

          {/* Actions: Theme Toggle + GitHub + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* GitHub External Link */}
            <a
              href="https://github.com/Safiullah-Alam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Safiullah Alam's GitHub Profile"
              title="GitHub Profile"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 border border-gray-200 dark:border-[#232830] bg-white/80 dark:bg-[#14171A] hover:bg-gray-100 dark:hover:bg-[#1E232B] text-gray-700 dark:text-[#F5F7FA] hover:border-[#A3FF5F]/50 focus-visible:ring-2 focus-visible:ring-[#A3FF5F]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* Dark/Light Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 dark:border-[#232830] bg-white/80 dark:bg-[#14171A] text-gray-700 dark:text-[#F5F7FA] hover:bg-gray-100 dark:hover:bg-[#1E232B] focus-visible:ring-2 focus-visible:ring-[#A3FF5F] cursor-pointer"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-3 mb-3 bg-white dark:bg-[#14171A] rounded-2xl border border-gray-200 dark:border-[#232830] shadow-xl animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#A3FF5F] text-[#0B0D0F] font-semibold'
                        : 'text-gray-700 dark:text-[#A3A8B0] hover:bg-gray-100 dark:hover:bg-[#1E232B]'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
