import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const phone = '+92 323 8048183'
  const whatsappUrl = 'https://wa.me/923238048183?text=Hi%20Safiullah%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!'
  const linkedinUrl = 'https://www.linkedin.com/in/safiullah-18-alam/'
  const githubUrl = 'https://github.com/Safiullah-Alam'

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-gray-200/80 dark:border-[#232830]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 dark:bg-[#181C21] border border-gray-200 dark:border-[#232830] text-xs font-mono font-medium text-gray-700 dark:text-[#A3A8B0] mb-4">
            <span className="text-[#0F6B00] dark:text-[#A3FF5F]">05 //</span> GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#15171A] dark:text-[#F5F7FA] leading-tight">
            Have a project in mind? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6B00] to-emerald-600 dark:from-[#A3FF5F] dark:to-emerald-400">
              Let&apos;s build something useful.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-[#A3A8B0] leading-relaxed">
            I am currently open to junior frontend developer opportunities, internships, freelance website builds, and technical collaborations. Reach out directly through your preferred channel below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: WhatsApp (Primary quick contact) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#14171A] border-2 border-[#25D366]/30 hover:border-[#25D366] transition-all duration-300 shadow-sm flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#15171A] dark:text-[#F5F7FA]">
                WhatsApp Direct
              </h3>
              <p className="text-xs font-mono text-gray-500 dark:text-[#868C98] mt-1">
                Fastest response for inquiries
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mt-3 font-mono">
                {phone}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 dark:border-[#232830] flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold
                  bg-[#25D366] text-white hover:bg-[#20BA59] transition-colors shadow-xs"
              >
                <span>Chat on WhatsApp</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-mono text-gray-600 dark:text-[#A3A8B0] hover:bg-gray-100 dark:hover:bg-[#1E232B] transition-colors cursor-pointer"
              >
                <span>{copied ? '✓ Number Copied to Clipboard!' : 'Copy Phone Number'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: LinkedIn (Professional network) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#14171A] border border-gray-200 dark:border-[#232830] hover:border-[#0077B5]/60 transition-all duration-300 shadow-sm flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0077B5]/10 text-[#0077B5] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#15171A] dark:text-[#F5F7FA]">
                LinkedIn Profile
              </h3>
              <p className="text-xs font-mono text-gray-500 dark:text-[#868C98] mt-1">
                Professional network &amp; endorsements
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mt-3 font-mono truncate">
                in/safiullah-18-alam
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 dark:border-[#232830]">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold
                  bg-[#0077B5] text-white hover:bg-[#006097] transition-colors shadow-xs"
              >
                <span>Connect on LinkedIn</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3: GitHub (Code & Repositories) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#14171A] border border-gray-200 dark:border-[#232830] hover:border-[#A3FF5F]/60 transition-all duration-300 shadow-sm flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gray-900/10 dark:bg-white/10 text-gray-900 dark:text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#15171A] dark:text-[#F5F7FA]">
                GitHub Repositories
              </h3>
              <p className="text-xs font-mono text-gray-500 dark:text-[#868C98] mt-1">
                Public code, stars, &amp; commit history
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mt-3 font-mono truncate">
                github.com/Safiullah-Alam
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 dark:border-[#232830]">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold
                  bg-gray-900 text-white dark:bg-[#A3FF5F] dark:text-[#0B0D0F] hover:bg-gray-800 dark:hover:bg-[#8EE64B] transition-colors shadow-xs"
              >
                <span>Browse Repositories</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Location & Availability Status Banner */}
        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-[#14171A] border border-gray-200 dark:border-[#232830] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#A3FF5F] animate-pulse" />
            <div>
              <p className="text-xs font-semibold text-gray-900 dark:text-[#F5F7FA]">
                Based in Karachi, Pakistan (PKT · UTC+5)
              </p>
              <p className="text-xs text-gray-500 dark:text-[#868C98]">
                Available for local onsite positions in Karachi and worldwide remote roles.
              </p>
            </div>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-lg bg-white dark:bg-[#1A1E24] border border-gray-200 dark:border-[#2B313A] text-gray-700 dark:text-[#A3A8B0]">
            ⚡ Response within 24 hours
          </span>
        </div>

      </div>
    </section>
  )
}
