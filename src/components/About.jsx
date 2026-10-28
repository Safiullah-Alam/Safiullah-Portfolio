const approachSteps = [
  {
    step: '01',
    title: "Understanding the Website's Purpose",
    description:
      'Before writing code, I analyze what the business or client needs to achieve — whether converting visitors into customers, presenting product lines, or guiding users through a structured onboarding flow.'
  },
  {
    step: '02',
    title: 'Organizing Content Clearly',
    description:
      'I map out the visual hierarchy and information flow so visitors can find critical information quickly without cognitive overload or confusion.'
  },
  {
    step: '03',
    title: 'Building Reusable React Components',
    description:
      'I structure applications with modular, functional React components and explicit props, keeping code clean, maintainable, and easy to extend.'
  },
  {
    step: '04',
    title: 'Creating Responsive Layouts',
    description:
      'Every interface is engineered from the ground up for screens ranging from 320px mobile devices to wide desktop monitors, ensuring seamless touch targets and typography.'
  },
  {
    step: '05',
    title: 'Testing Functionality and Usability',
    description:
      'I test interactive flows, form inputs, dynamic state toggles, and cross-browser responsiveness to verify that links, buttons, and layouts perform reliably.'
  },
  {
    step: '06',
    title: 'Improving Projects Through Feedback',
    description:
      'I treat feedback from users, clients, and peers as an essential engineering input, continuously refining visual polish, contrast, and navigation usability.'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-gray-200/80 dark:border-[#232830]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 dark:bg-[#181C21] border border-gray-200 dark:border-[#232830] text-xs font-mono font-medium text-gray-700 dark:text-[#A3A8B0] mb-4">
            <span className="text-[#0F6B00] dark:text-[#A3FF5F]">01 //</span> ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#15171A] dark:text-[#F5F7FA]">
            Crafting practical web solutions with passion, clarity, and precision.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-[#A3A8B0] leading-relaxed">
            I am a Frontend Developer based in Karachi, Pakistan. My focus is on turning real business requirements into clean, responsive, and performant web interfaces. With an academic background in Economics and Finance from NED University and intensive frontend training from Aptech, I combine analytical thinking with user-centric UI design.
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          <div className="lg:col-span-7 bg-white dark:bg-[#14171A] p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-[#232830] shadow-xs flex flex-col justify-between">
            <div className="space-y-4 text-gray-600 dark:text-[#A3A8B0] leading-relaxed text-sm sm:text-base">
              <h3 className="text-xl font-bold text-[#15171A] dark:text-[#F5F7FA]">
                Why I Focus on Frontend Development
              </h3>
              <p>
                The web is the primary front door for modern businesses. Whether it&apos;s a children&apos;s fashion store like <strong className="text-gray-900 dark:text-white">AB Avenue</strong>, an educational market portal like <strong className="text-gray-900 dark:text-white">StockMaster PSX</strong>, or a local service provider like <strong className="text-gray-900 dark:text-white">Umar Refrigeration</strong>, the user&apos;s first interaction determines trust and engagement.
              </p>
              <p>
                I enjoy bridging the gap between clean design and functional code. I prioritize readable, semantic HTML, modern CSS with Tailwind, and modular React components. I believe in honest engineering: writing code that is clean, explainable, and built to solve tangible user challenges.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 dark:border-[#232830] flex flex-wrap items-center gap-6 text-xs text-gray-500 dark:text-[#868C98]">
              <div>
                <span className="block font-mono text-gray-400">Current Focus</span>
                <span className="font-semibold text-gray-900 dark:text-[#F5F7FA]">React · Tailwind · Component UI</span>
              </div>
              <div className="h-6 w-px bg-gray-200 dark:bg-[#232830] hidden sm:block" />
              <div>
                <span className="block font-mono text-gray-400">Location</span>
                <span className="font-semibold text-gray-900 dark:text-[#F5F7FA]">Karachi, Pakistan (Remote &amp; Onsite)</span>
              </div>
            </div>
          </div>

          {/* Quick Snapshot Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#14171A] p-5 rounded-2xl border border-gray-200 dark:border-[#232830] shadow-xs flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0F6B00] dark:text-[#A3FF5F] font-mono">
                6+
              </span>
              <div>
                <h4 className="font-semibold text-sm text-[#15171A] dark:text-[#F5F7FA]">Live Web Projects</h4>
                <p className="text-xs text-gray-500 dark:text-[#868C98] mt-1">Deployed storefronts, forms, &amp; service sites</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#14171A] p-5 rounded-2xl border border-gray-200 dark:border-[#232830] shadow-xs flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0F6B00] dark:text-[#A3FF5F] font-mono">
                100%
              </span>
              <div>
                <h4 className="font-semibold text-sm text-[#15171A] dark:text-[#F5F7FA]">Responsive</h4>
                <p className="text-xs text-gray-500 dark:text-[#868C98] mt-1">Engineered for mobile, tablet, and desktop</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#14171A] p-5 rounded-2xl border border-gray-200 dark:border-[#232830] shadow-xs flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                NED
              </span>
              <div>
                <h4 className="font-semibold text-sm text-[#15171A] dark:text-[#F5F7FA]">Analytical Mindset</h4>
                <p className="text-xs text-gray-500 dark:text-[#868C98] mt-1">BS Economics &amp; Finance Foundation</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#14171A] p-5 rounded-2xl border border-gray-200 dark:border-[#232830] shadow-xs flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">
                APTECH
              </span>
              <div>
                <h4 className="font-semibold text-sm text-[#15171A] dark:text-[#F5F7FA]">Certified Training</h4>
                <p className="text-xs text-gray-500 dark:text-[#868C98] mt-1">Professional Frontend Curriculum</p>
              </div>
            </div>
          </div>

        </div>

        {/* Subsection: My Approach */}
        <div className="mt-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-[#15171A] dark:text-[#F5F7FA]">
              My Engineering Approach
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-[#A3A8B0] mt-1">
              A structured methodology ensuring every web project is reliable, user-friendly, and maintainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {approachSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white dark:bg-[#14171A] p-6 rounded-2xl border border-gray-200 dark:border-[#232830] hover:border-[#A3FF5F]/50 transition-all duration-200 group flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#0F6B00] dark:text-[#A3FF5F] bg-gray-100 dark:bg-[#1E232B] px-2.5 py-1 rounded-lg">
                      {item.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-[#2B313A] group-hover:bg-[#A3FF5F] transition-colors" />
                  </div>
                  <h4 className="text-base font-semibold text-[#15171A] dark:text-[#F5F7FA] mb-2 group-hover:text-[#0F6B00] dark:group-hover:text-[#A3FF5F] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-[#A3A8B0] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
