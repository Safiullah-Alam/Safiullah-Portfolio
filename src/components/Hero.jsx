/**
 * Hero Section Component
 * Two-column desktop layout, stacked mobile layout.
 * Features Safiullah's authentic portrait, clear positioning, and primary CTAs.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[540px] sm:h-[540px] bg-[#A3FF5F]/5 dark:bg-[#A3FF5F]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-500/5 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8 animate-fade-in">

            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#14171A] border border-gray-200 dark:border-[#232830] shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3FF5F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A3FF5F]"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-gray-700 dark:text-[#A3A8B0]">
                FRONTEND DEVELOPER · KARACHI, PAKISTAN
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#15171A] dark:text-[#F5F7FA] leading-[1.12]">
              I build modern <br className="hidden sm:inline" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-[#F5F7FA] dark:to-[#A3A8B0]">
                digital experiences.
              </span>
            </h1>

            {/* Concise Introduction */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-[#A3A8B0] max-w-xl font-normal leading-relaxed">
              I build responsive websites and user-friendly interfaces for businesses and real-world use cases. Specializing in modern web standards, React, and clean utility styling.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide
                  bg-[#A3FF5F] text-[#0B0D0F] hover:bg-[#8EE64B] active:scale-[0.98]
                  shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Explore My Projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide
                  bg-white dark:bg-[#14171A] text-gray-800 dark:text-[#F5F7FA]
                  border border-gray-200 dark:border-[#232830] hover:bg-gray-100 dark:hover:bg-[#1E232B]
                  hover:border-gray-300 dark:hover:border-[#323945] transition-all duration-200"
              >
                <span>Let&apos;s Connect</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#A3FF5F]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>

            {/* Quick Links & Verification Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-500 dark:text-[#868C98]">
              <span className="font-mono uppercase tracking-wider text-[11px]">Connect With Me:</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Safiullah-Alam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-gray-700 dark:text-[#F5F7FA] hover:text-[#0F6B00] dark:hover:text-[#A3FF5F] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <span className="text-gray-300 dark:text-[#2B313A]">·</span>
                <a
                  href="https://www.linkedin.com/in/safiullah-18-alam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-gray-700 dark:text-[#F5F7FA] hover:text-[#0F6B00] dark:hover:text-[#A3FF5F] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#0077B5]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <span className="text-gray-300 dark:text-[#2B313A]">·</span>
                <a
                  href="https://wa.me/923238048183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-gray-700 dark:text-[#F5F7FA] hover:text-[#0F6B00] dark:hover:text-[#A3FF5F] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Safiullah's Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-sm sm:max-w-md">

              {/* Outer decorative border & glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#A3FF5F]/20 via-transparent to-emerald-500/10 blur-sm pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#14171A] border-2 border-gray-200/90 dark:border-[#2B313A] shadow-2xl p-2 sm:p-2.5">

                {/* Real portrait photo */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#1A1E24]">
                  <img
                    src="/images/profile-portrait.jpg"
                    alt="Safiullah Alam — Frontend Developer"
                    width="600"
                    height="750"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-[1.03]"
                    loading="eager"
                  />

                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Identification pill at bottom-left of photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#A3FF5F]"></span>
                      <span className="font-medium text-white/95">Safiullah Alam</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10 font-mono text-[11px] text-[#A3FF5F]">
                      Karachi, PK
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: Available for opportunities */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white dark:bg-[#181C21] border border-gray-200 dark:border-[#2B313A] shadow-lg rounded-2xl px-4 py-2.5 flex items-center gap-3 animate-float-gentle">
                <div className="w-8 h-8 rounded-xl bg-[#A3FF5F]/15 text-[#0F6B00] dark:text-[#A3FF5F] flex items-center justify-center font-bold">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-mono text-gray-500 dark:text-[#868C98] uppercase">Status</p>
                  <p className="text-xs font-semibold text-gray-900 dark:text-[#F5F7FA]">Available for Roles</p>
                </div>
              </div>

              {/* Floating Badge 2: Tech Stack */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white dark:bg-[#181C21] border border-gray-200 dark:border-[#2B313A] shadow-lg rounded-2xl px-4 py-2.5 items-center gap-2.5">
                <span className="text-[#A3FF5F] font-mono font-bold text-xs">&lt;/&gt;</span>
                <span className="text-xs font-semibold text-gray-900 dark:text-[#F5F7FA]">React · Tailwind</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
