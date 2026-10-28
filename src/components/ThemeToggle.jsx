import { useEffect, useState } from 'react'

/**
 * ThemeToggle Component
 * Handles switching between dark mode (default) and light mode.
 * Persists user preference in localStorage.
 */
export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('safiullah-theme')
      if (saved === 'light' || saved === 'dark') {
        return saved
      }
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
    localStorage.setItem('safiullah-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 border cursor-pointer
        bg-white/80 dark:bg-[#14171A] hover:bg-gray-100 dark:hover:bg-[#1E232B]
        border-gray-200 dark:border-[#232830] text-gray-700 dark:text-[#F5F7FA]
        hover:border-[#A3FF5F]/50 focus-visible:ring-2 focus-visible:ring-[#A3FF5F] ${className}`}
    >
      {theme === 'dark' ? (
        // Sun icon for switching to light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-[#A3FF5F] transition-transform duration-300 hover:rotate-45"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        // Moon icon for switching to dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-gray-800 transition-transform duration-300 hover:-rotate-12"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  )
}
