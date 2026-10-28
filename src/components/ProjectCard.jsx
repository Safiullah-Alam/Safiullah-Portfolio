/**
 * ProjectCard Component
 * Reusable card rendering single project details.
 * Supports featured flagship layout for AB Avenue Store and distinctive thematic styling.
 * Renders GitHub link ONLY when a repository URL is provided.
 */
export default function ProjectCard({ project, isFlagship = false }) {
  const isFinance = project.themeStyle === 'finance'

  // Flagship Wide Card (AB Avenue Store)
  if (isFlagship) {
    return (
      <div className="relative group rounded-3xl bg-white dark:bg-[#14171A] border-2 border-gray-200 dark:border-[#2B313A] hover:border-[#A3FF5F]/60 dark:hover:border-[#A3FF5F]/60 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
        
        {/* Flagship Highlight Ribbon */}
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#A3FF5F] text-[#0B0D0F] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B0D0F] animate-ping" />
            FLAGSHIP PROJECT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Image Showcase (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#1E232B] border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-[#232830]">
            <img
              src={project.image}
              alt={`${project.title} Screenshot`}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-6">
              <span className="text-white text-xs font-mono bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg">
                Verified Deployed Application · {project.liveUrl}
              </span>
            </div>
          </div>

          {/* Details & CTAs (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#0F6B00] dark:text-[#A3FF5F]">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#15171A] dark:text-[#F5F7FA] mt-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-gray-500 dark:text-[#868C98]">
                  {project.tagline}
                </p>
              </div>

              <p className="text-sm text-gray-600 dark:text-[#A3A8B0] leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && (
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-400">Key Features</p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-[#A3A8B0]">
                        <svg className="w-3.5 h-3.5 text-[#0F6B00] dark:text-[#A3FF5F] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-gray-100 dark:bg-[#1E232B] text-gray-700 dark:text-[#A3A8B0] border border-gray-200 dark:border-[#2B313A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100 dark:border-[#232830]">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide
                  bg-[#A3FF5F] text-[#0B0D0F] hover:bg-[#8EE64B] active:scale-[0.98] shadow-xs transition-all"
              >
                <span>Live Storefront</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide
                    bg-white dark:bg-[#181C21] text-gray-800 dark:text-[#F5F7FA] border border-gray-200 dark:border-[#2B313A]
                    hover:bg-gray-100 dark:hover:bg-[#232830] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>Repository</span>
                </a>
              )}
            </div>

          </div>

        </div>
      </div>
    )
  }

  // Standard Grid Project Card
  return (
    <div
      className={`group rounded-3xl bg-white dark:bg-[#14171A] border ${
        isFinance
          ? 'border-emerald-500/30 dark:border-emerald-500/40 hover:border-emerald-500'
          : 'border-gray-200 dark:border-[#232830] hover:border-[#A3FF5F]/50'
      } transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between`}
    >
      <div>
        {/* Card Header / Visual Preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#1A1E24] border-b border-gray-200 dark:border-[#232830]">
          <img
            src={project.image}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Distinctive category badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold uppercase tracking-wider backdrop-blur-md shadow-xs ${
                isFinance
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                  : 'bg-black/70 text-white border border-white/10'
              }`}
            >
              {project.category}
            </span>
          </div>

          {isFinance && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500 text-black font-bold">
                PSX Guide
              </span>
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-4">
          <div>
            <span className="text-[11px] font-mono text-gray-400 dark:text-[#868C98]">
              {project.tagline}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-[#15171A] dark:text-[#F5F7FA] mt-0.5 group-hover:text-[#0F6B00] dark:group-hover:text-[#A3FF5F] transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 dark:text-[#A3A8B0] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <ul className="space-y-1 pt-1">
              {project.highlights.slice(0, 2).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-[#868C98]">
                  <span className="text-[#0F6B00] dark:text-[#A3FF5F] mt-0.5 font-bold">›</span>
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-gray-100 dark:bg-[#1A1E24] text-gray-600 dark:text-[#A3A8B0] border border-gray-200 dark:border-[#262C36]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 mt-4 border-t border-gray-100 dark:border-[#1F242C] flex items-center justify-between gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F6B00] dark:text-[#A3FF5F] hover:underline"
        >
          <span>Visit Live Site</span>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>

        {/* GitHub Button shown ONLY when repository is provided */}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Source on GitHub"
            aria-label={`${project.title} GitHub Repository`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 dark:text-[#A3A8B0] hover:text-black dark:hover:text-white bg-gray-100 dark:bg-[#1A1E24] hover:bg-gray-200 dark:hover:bg-[#232830] transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub</span>
          </a>
        ) : (
          <span className="text-[11px] font-mono text-gray-400 dark:text-[#69707D]">
            Client Deployed
          </span>
        )}
      </div>

    </div>
  )
}
