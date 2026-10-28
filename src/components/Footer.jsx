export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-[#232830] bg-white/50 dark:bg-[#0B0D0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-[#15171A] dark:text-[#F5F7FA]">
                Safiullah Alam
              </span>
              <span className="text-gray-300 dark:text-[#2B313A]">·</span>
              <span className="text-xs font-mono text-gray-500 dark:text-[#868C98]">
                Frontend Developer
              </span>
            </div>
            <p className="text-xs text-gray-400 dark:text-[#69707D] mt-1 font-mono">
              Karachi, Pakistan · © {currentYear} Safiullah Alam. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-medium text-gray-600 dark:text-[#A3A8B0]">
            <a
              href="https://github.com/Safiullah-Alam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-[#A3FF5F] transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-300 dark:text-[#232830]">/</span>
            <a
              href="https://www.linkedin.com/in/safiullah-18-alam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077B5] dark:hover:text-[#A3FF5F] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-gray-300 dark:text-[#232830]">/</span>
            <a
              href="https://wa.me/923238048183"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] dark:hover:text-[#A3FF5F] transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-[#868C98] hover:text-[#0F6B00] dark:hover:text-[#A3FF5F] transition-colors cursor-pointer group"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>

        </div>
      </div>
    </footer>
  )
}
