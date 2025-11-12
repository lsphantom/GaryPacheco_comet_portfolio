import { useState, useEffect } from 'react'
import {
  SunIcon,
  MoonIcon,
  /*EyeIcon,
  MagnifyingGlassIcon,
  CommandLineIcon,
  DocumentArrowDownIcon,*/
  ChevronDownIcon,
  ChevronUpIcon,
  PrinterIcon,
} from '@heroicons/react/24/outline'
import PrintPreview from './PrintPreview'
import { projectSections, skillMatrix } from './portfolioData'

const categories = Object.keys(skillMatrix) as Array<keyof typeof skillMatrix>

const focusAreas = [
  {
    label: 'UI/UX & Front-End Development',
    value: 'React, TypeScript, Tailwind CSS, Figma, and accessible web design for user-facing responsive applications.',
  },
  {
    label: 'Web & Content Management',
    value: 'Drupal, WordPress, and serverless deployment on Vercel and AWS.',
  },
  {
    label: 'Creative & Media Production',
    value: 'Adobe Creative Suite, YouTube Studio, and game development with Unity3D.',
  },
] as const

function App() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillMatrix>(
    categories[0],
  )
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set())
  const [isFocusMode, setIsFocusMode] = useState(false)
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false)
  const [showPrintPreview, setShowPrintPreview] = useState(false)

  // Toggle project expansion
  const toggleProject = (title: string) => {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(title)) {
      newExpanded.delete(title)
    } else {
      newExpanded.add(title)
    }
    setExpandedProjects(newExpanded)
  }

  // Keyboard shortcuts
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === '?' && !showKeyboardShortcuts) {
      setShowKeyboardShortcuts(true)
    } else if (e.key === 'Escape') {
      setShowKeyboardShortcuts(false)
    } else if (e.key === 'd' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setIsDarkMode(!isDarkMode)
    } else if (e.key === 'f' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setIsFocusMode(!isFocusMode)
    }
  }

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress as any)
    return () => window.removeEventListener('keydown', handleKeyPress as any)
  }, [isDarkMode, isFocusMode, showKeyboardShortcuts])

  const skills = skillMatrix[activeCategory]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-ink-50 to-white'
    } ${isFocusMode ? 'focus-mode' : ''}`}>
      {/* Print Preview Modal */}
      {showPrintPreview && (
        <PrintPreview isDarkMode={isDarkMode} onClose={() => setShowPrintPreview(false)} />
      )}

      {/* Keyboard Shortcuts Modal */}
      {showKeyboardShortcuts && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowKeyboardShortcuts(false)}
        >
          <div
            className={`m-4 max-w-md rounded-2xl border p-6 shadow-2xl ${
              isDarkMode
                ? 'border-slate-700 bg-slate-800'
                : 'border-slate-200 bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-slate-100' : 'text-ink-900'}`}>
              Keyboard Shortcuts
            </h3>
            <div className={`mt-4 space-y-3 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <div className="flex justify-between">
                <span>Toggle dark mode</span>
                <kbd className="rounded bg-slate-200 px-2 py-1 font-mono text-xs dark:bg-slate-700">⌘/Ctrl + D</kbd>
              </div>
              <div className="flex justify-between">
                <span>Toggle focus mode</span>
                <kbd className="rounded bg-slate-200 px-2 py-1 font-mono text-xs dark:bg-slate-700">⌘/Ctrl + F</kbd>
              </div>
              <div className="flex justify-between">
                <span>Show shortcuts</span>
                <kbd className="rounded bg-slate-200 px-2 py-1 font-mono text-xs dark:bg-slate-700">?</kbd>
              </div>
              <div className="flex justify-between">
                <span>Close modal</span>
                <kbd className="rounded bg-slate-200 px-2 py-1 font-mono text-xs dark:bg-slate-700">Esc</kbd>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toolbar */}
      <div className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        isDarkMode 
          ? 'border-slate-700 bg-slate-900/80' 
          : 'border-slate-200 bg-white/80'
      }`}>
        <div className="mx-auto max-w-6xl px-6 py-3 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <div className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPrintPreview(true)}
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                  isDarkMode
                    ? 'border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
                title="Print/Download as PDF"
              >
                <PrinterIcon className="h-5 w-5" />
                <span className="hidden sm:inline sr-only">PDF</span>
              </button>
              {/*<button
                onClick={() => setIsFocusMode(!isFocusMode)}
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                  isFocusMode
                    ? isDarkMode
                      ? 'border-slate-500 bg-slate-600 text-white'
                      : 'border-ink-900 bg-ink-900 text-white'
                    : isDarkMode
                      ? 'border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700'
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
                title="Focus Mode (Ctrl/⌘ + F)"
              >
                {isFocusMode ? (
                  <MagnifyingGlassIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
                <span className="hidden sm:inline">Focus</span>
              </button>
              <button
                onClick={() => setShowKeyboardShortcuts(true)}
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                  isDarkMode
                    ? 'border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
                title="Keyboard Shortcuts (?)"
              >
                <CommandLineIcon className="h-4 w-4" />
              </button>*/}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                  isDarkMode
                    ? 'border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title="Dark Mode (Ctrl/⌘ + D)"
              >
                {isDarkMode ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
                <span className="hidden sm:inline sr-only">{isDarkMode ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <aside className="lg:sticky lg:top-12">
              <div className={`rounded-3xl border p-6 shadow-soft backdrop-blur transition-colors duration-300 ${
                isDarkMode
                  ? 'border-slate-700 bg-slate-800/85'
                  : 'border-slate-200 bg-white/85'
              }`}>
                <div className='flex justify-between'>
                <img 
                  src="https://avatars.githubusercontent.com/u/13052941?v=4" 
                  alt="Gary Pacheco"
                  className={`w-24 h-24 rounded-full border-2 shadow-md transition-colors duration-300 ${
                    isDarkMode ? 'border-slate-600' : 'border-slate-200'
                  }`}
                />
                
              </div>
                <p className={`mt-6 text-xs font-semibold uppercase tracking-wide transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Senior Frontend Engineer
                </p>
                <h1 className={`mt-4 text-4xl font-semibold transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-100' : 'text-ink-900'
                }`}>Gary Pacheco</h1>
                <p className={`mt-3 text-lg transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Front-end Engineering. Web Development and Design. Media Production.
                </p>
                <div className={`mt-6 space-y-2 text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <p>UCAR · The COMET Program</p>
                  <p>
                    <a href="mailto:gpacheco@ucar.edu" className="font-medium">
                      gpacheco@ucar.edu
                    </a>
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  <h2 className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Core Focus
                  </h2>
                  <ul className={`space-y-4 text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {focusAreas.map((area) => (
                      <li key={area.label} className={`rounded-2xl border p-4 transition-colors duration-300 ${
                        isDarkMode
                          ? 'border-slate-600 bg-slate-700/50'
                          : 'border-slate-200 bg-slate-50'
                      }`}>
                        <p className={`text-xs font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-500' : 'text-slate-400'
                        }`}>
                          {area.label}
                        </p>
                        <p className={`mt-2 transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}>{area.value}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            <section className={`rounded-3xl border p-6 shadow-soft backdrop-blur transition-colors duration-300 ${
              isDarkMode
                ? 'border-slate-700 bg-slate-800/90'
                : 'border-slate-200 bg-white/90'
            }`}>
              <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wide transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Skill Matrix
                  </p>
                  <h2 className={`text-2xl font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-100' : 'text-ink-900'
                  }`}>
                    Core skills and technologies
                  </h2>
                </div>
                <p className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Select a role to view related skills and tools.
                </p>
              </header>

              <div className="mt-6 flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={isActive}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        isActive
                          ? isDarkMode
                            ? 'border-slate-500 bg-slate-600 text-white shadow-lg focus-visible:outline-slate-500'
                            : 'border-ink-900 bg-ink-900 text-white shadow-lg focus-visible:outline-ink-900'
                          : isDarkMode
                            ? 'border-slate-600 bg-slate-700 text-slate-300 hover:border-slate-500 hover:text-slate-100'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-ink-900'
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {skills.map((skill) => (
                  <article
                    key={skill.name}
                    className={`rounded-2xl border p-5 transition-colors duration-300 ${
                      isDarkMode
                        ? 'border-slate-600 bg-slate-700/80'
                        : 'border-slate-200 bg-slate-50/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-100' : 'text-ink-900'
                        }`}>{skill.name}</h3>
                        <p className={`mt-2 text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}>{skill.description}</p>
                        
                        {/* Animated Skill Level Indicator
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className={`font-medium transition-colors duration-300 ${
                              isDarkMode ? 'text-slate-400' : 'text-slate-500'
                            }`}>{skill.level}</span>
                            <span className={`transition-colors duration-300 ${
                              isDarkMode ? 'text-slate-500' : 'text-slate-400'
                            }`}>
                              {skill.level === 'Advanced' ? '95%' : '80%'}
                            </span>
                          </div>
                          <div className={`mt-1.5 h-2 w-full overflow-hidden rounded-full ${
                            isDarkMode ? 'bg-slate-600' : 'bg-slate-200'
                          }`}>
                            <div
                              className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                isDarkMode ? 'bg-slate-400' : 'bg-ink-900'
                              }`}
                              style={{
                                width: skill.level === 'Advanced' ? '95%' : '80%',
                              }}
                            />
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300 ${
                            isDarkMode
                              ? 'border-slate-600 bg-slate-800 text-slate-300'
                              : 'border-slate-200 bg-white text-slate-600'
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {projectSections.map((section) => (
            <section key={section.id} className="space-y-6">
                <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wide transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {section.period}
                    </p>
                    <h2 className={`text-2xl font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-100' : 'text-ink-900'
                    }`}>{section.title}</h2>
                  </div>
                  <p className={`text-sm transition-colors duration-300 sm:max-w-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>{section.summary}</p>
                </header>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <article
                      key={item.title}
                      className={`group relative overflow-hidden rounded-3xl border p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        isDarkMode
                          ? 'border-slate-700 bg-slate-800/90 hover:border-slate-600'
                          : 'border-slate-200 bg-white/90 hover:border-slate-300'
                      }`}
                    >
                      <div className={`flex items-center justify-between text-xs font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        <span>{item.focus}</span>
                        <span>{item.timeline}</span>
                      </div>
                      <h3 className={`mt-4 text-xl font-semibold transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-100' : 'text-ink-900'
                      }`}>
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`underline-offset-4 transition-colors ${
                              isDarkMode
                                ? 'text-slate-100 hover:text-slate-300'
                                : 'text-ink-900 hover:text-ink-700'
                            }`}
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <p className={`mt-3 text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>{item.description}</p>
                      
                      {/* Expandable Details */}
                      <button
                        onClick={() => toggleProject(item.title)}
                        className={`mt-3 flex items-center gap-1 text-xs font-medium underline transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-400 hover:text-slate-300' : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        {expandedProjects.has(item.title) ? (
                          <>
                            <ChevronUpIcon className="h-3 w-3" />
                            Show less
                          </>
                        ) : (
                          <>
                            <ChevronDownIcon className="h-3 w-3" />
                            Show more details
                          </>
                        )}
                      </button>
                      
                      {expandedProjects.has(item.title) && (
                        <ul className={`mt-4 space-y-2 text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {item.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                              <span className={`mt-2 h-2 w-2 flex-none rounded-full transition-colors duration-300 ${
                                isDarkMode ? 'bg-slate-500' : 'bg-slate-400'
                              }`} aria-hidden="true" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tools.map((tool) => (
                          <span
                            key={tool}
                            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300 ${
                              isDarkMode
                                ? 'border-slate-600 bg-slate-700 text-slate-300'
                                : 'border-slate-200 bg-slate-50 text-slate-600'
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}

          <section className={`rounded-3xl border border-dashed p-8 text-sm transition-colors duration-300 ${
            isDarkMode
              ? 'border-slate-600 bg-slate-800/70 text-slate-400'
              : 'border-slate-300 bg-white/70 text-slate-500'
          }`}>
            <p className={`font-medium transition-colors duration-300 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>What's next</p>
            <p className="mt-2">
              Looking to collaborate on accessible climate intelligence platforms, digital training ecosystems, and
              small-business transformations. Let's architect what's next together.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
