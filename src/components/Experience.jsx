import { timelineData } from '../data/experience'

const badgeColors = {
  'Practical Experience': 'bg-[#A3FF5F]/15 text-[#0F6B00] dark:text-[#A3FF5F] border-[#A3FF5F]/30',
  'Technical Training': 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30',
  'Higher Education': 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
  Certification: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30'
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-gray-200/80 dark:border-[#232830]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 dark:bg-[#181C21] border border-gray-200 dark:border-[#232830] text-xs font-mono font-medium text-gray-700 dark:text-[#A3A8B0] mb-4">
            <span className="text-[#0F6B00] dark:text-[#A3FF5F]">04 //</span> JOURNEY &amp; BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#15171A] dark:text-[#F5F7FA]">
            Education, Training &amp; Practical Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-[#A3A8B0] leading-relaxed">
            A verified timeline tracing my technical progression, formal training in frontend engineering, and academic studies in economics and finance.
          </p>
        </div>

        {/* Structured Timeline */}
        <div className="relative border-l-2 border-gray-200 dark:border-[#232830] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {timelineData.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0B0D0F] border-2 border-gray-400 dark:border-[#3E4552] group-hover:border-[#A3FF5F] group-hover:bg-[#A3FF5F] transition-all duration-200 shadow-xs" />

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#14171A] border border-gray-200 dark:border-[#232830] hover:border-[#A3FF5F]/40 shadow-xs hover:shadow-sm transition-all duration-200">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg border ${
                      badgeColors[item.badge] || 'bg-gray-100 text-gray-700 border-gray-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-500 dark:text-[#868C98]">
                    {item.location} · {item.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#15171A] dark:text-[#F5F7FA] group-hover:text-[#0F6B00] dark:group-hover:text-[#A3FF5F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-gray-700 dark:text-[#C5CAD3] mt-0.5">
                  {item.organization}
                </p>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-[#A3A8B0] leading-relaxed mt-3">
                  {item.description}
                </p>

                {/* Key Bullet Points */}
                {item.keyPoints && (
                  <ul className="mt-4 space-y-2 pt-3 border-t border-gray-100 dark:border-[#1E232B]">
                    {item.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-[#A3A8B0]">
                        <svg
                          className="w-4 h-4 text-[#0F6B00] dark:text-[#A3FF5F] flex-shrink-0 mt-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
