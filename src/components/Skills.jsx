import { useState } from 'react'
import { skillCategories } from '../data/skills'

const levelBadgeStyles = {
  Core: 'bg-[#A3FF5F]/20 text-[#0F6B00] dark:text-[#A3FF5F] border-[#A3FF5F]/40',
  'Working Knowledge': 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30',
  Familiar: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30'
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const displayedCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab)

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-gray-200/80 dark:border-[#232830]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 dark:bg-[#181C21] border border-gray-200 dark:border-[#232830] text-xs font-mono font-medium text-gray-700 dark:text-[#A3A8B0] mb-4">
            <span className="text-[#0F6B00] dark:text-[#A3FF5F]">02 //</span> SKILLS &amp; CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#15171A] dark:text-[#F5F7FA]">
            Technologies I use to build real web experiences.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-[#A3A8B0] leading-relaxed">
            I prioritize strong core foundations over superficial buzzwords. Below is an honest breakdown of the tools, frameworks, and languages I actively apply across my projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer border ${
              activeTab === 'all'
                ? 'bg-gray-900 text-white dark:bg-[#A3FF5F] dark:text-[#0B0D0F] border-transparent font-semibold shadow-xs'
                : 'bg-white dark:bg-[#14171A] text-gray-600 dark:text-[#A3A8B0] border-gray-200 dark:border-[#232830] hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                activeTab === cat.id
                  ? 'bg-gray-900 text-white dark:bg-[#A3FF5F] dark:text-[#0B0D0F] border-transparent font-semibold shadow-xs'
                  : 'bg-white dark:bg-[#14171A] text-gray-600 dark:text-[#A3A8B0] border-gray-200 dark:border-[#232830] hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Categories Display */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="border-b border-gray-200 dark:border-[#232830] pb-3 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-[#15171A] dark:text-[#F5F7FA]">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-[#868C98]">
                    {category.subtitle}
                  </p>
                </div>
                <span className="font-mono text-xs text-gray-400 dark:text-[#69707D]">
                  {category.skills.length} items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-2xl bg-white dark:bg-[#14171A] border border-gray-200 dark:border-[#232830] hover:border-[#A3FF5F]/40 transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-semibold text-sm text-[#15171A] dark:text-[#F5F7FA] group-hover:text-[#0F6B00] dark:group-hover:text-[#A3FF5F] transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border ${
                            levelBadgeStyles[skill.level] || 'bg-gray-100 text-gray-600 border-gray-200'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-[#A3A8B0] leading-relaxed">
                        {skill.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-[#1F242C] flex items-center justify-between text-[11px] font-mono text-gray-400">
                      <span>Proficiency</span>
                      <span className="text-gray-700 dark:text-[#868C98] font-medium">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Honest Transparency Note */}
        <div className="mt-12 p-4 rounded-xl bg-gray-50 dark:bg-[#14171A]/60 border border-gray-200 dark:border-[#232830] flex items-start gap-3 text-xs text-gray-600 dark:text-[#868C98]">
          <svg
            className="w-4 h-4 text-[#0F6B00] dark:text-[#A3FF5F] flex-shrink-0 mt-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <p>
            <strong className="text-gray-900 dark:text-[#F5F7FA]">Honest Disclosure:</strong> I list only technologies I have genuinely used in real websites or studied in verified coursework. I do not claim expert-level status where I am working or familiar, nor do I include unverified fullstack frameworks.
          </p>
        </div>

      </div>
    </section>
  )
}
