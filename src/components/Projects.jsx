import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const flagshipProject = projects[0] // AB Avenue Store
  const remainingProjects = projects.slice(1) // Projects 2 through 6 in exact order

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-gray-200/80 dark:border-[#232830]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 dark:bg-[#181C21] border border-gray-200 dark:border-[#232830] text-xs font-mono font-medium text-gray-700 dark:text-[#A3A8B0] mb-4">
              <span className="text-[#0F6B00] dark:text-[#A3FF5F]">03 //</span> FEATURED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#15171A] dark:text-[#F5F7FA]">
              Featured Projects &amp; Live Implementations
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-[#A3A8B0] leading-relaxed">
              Every project below is a real, accessible web build featuring responsive designs, clean component architecture, and practical business utility.
            </p>
          </div>

          <a
            href="https://github.com/Safiullah-Alam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-end px-4 py-2.5 rounded-xl text-xs font-mono font-medium
              bg-white dark:bg-[#14171A] border border-gray-200 dark:border-[#232830] hover:border-[#A3FF5F] text-gray-700 dark:text-[#F5F7FA]
              hover:text-black dark:hover:text-[#A3FF5F] transition-all shadow-xs"
          >
            <span>View All on GitHub</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* Flagship Project 1: AB Avenue Store */}
        <div className="mb-12">
          <ProjectCard project={flagshipProject} isFlagship={true} />
        </div>

        {/* Grid for Projects 2 - 6 in exact order */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFlagship={false} />
          ))}
        </div>

        {/* Bottom GitHub Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-[#14171A] dark:via-[#181C21] dark:to-[#14171A] border border-gray-200 dark:border-[#232830] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-[#15171A] dark:text-[#F5F7FA]">
              Looking for more code samples &amp; repositories?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-[#A3A8B0] mt-1">
              Explore my public repositories, commit history, and code structure on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Safiullah-Alam"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-xs font-semibold tracking-wide bg-gray-900 text-white dark:bg-[#A3FF5F] dark:text-[#0B0D0F] hover:bg-gray-800 dark:hover:bg-[#8EE64B] transition-colors whitespace-nowrap shadow-sm"
          >
            Explore Safiullah-Alam on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}
