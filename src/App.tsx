import { useState, useEffect, useCallback } from 'react'
import {
  SunIcon,
  MoonIcon,
  /*EyeIcon,
  MagnifyingGlassIcon,
  CommandLineIcon,
  DocumentArrowDownIcon,*/
  ChevronDownIcon,
  PrinterIcon,
  ComputerDesktopIcon,
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

type ThemeMode = 'light' | 'dark' | 'system'

function App() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillMatrix>(
    categories[0],
  )
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const [isFocusMode, setIsFocusMode] = useState(false)
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false)
  const [showPrintPreview, setShowPrintPreview] = useState(false)

  // Apply theme based on mode
  const applyTheme = useCallback((mode: ThemeMode) => {
    console.log('Applying theme:', mode)
    if (mode === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      console.log('System preference is dark:', isDark)
      document.documentElement.classList.toggle('dark', isDark)
    } else if (mode === 'dark') {
      console.log('Adding dark class')
      document.documentElement.classList.add('dark')
    } else {
      console.log('Removing dark class')
      document.documentElement.classList.remove('dark')
    }
    console.log('HTML classes:', document.documentElement.className)
  }, [])

  // Change theme mode
  const changeThemeMode = useCallback((mode: ThemeMode) => {
    console.log('=== changeThemeMode called ===')
    console.log('Changing theme to:', mode)
    console.log('Current theme mode:', themeMode)
    setThemeMode(mode)
    setShowThemeMenu(false)
    applyTheme(mode)
    localStorage.setItem('themeMode', mode)
    console.log('Theme mode updated in state and localStorage')
  }, [applyTheme, themeMode])

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as ThemeMode | null
    const initialMode = savedMode || 'light'
    setThemeMode(initialMode)
    applyTheme(initialMode)
  }, [applyTheme])

  // Listen for system theme changes when in system mode
  useEffect(() => {
    if (themeMode !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => applyTheme('system')
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [themeMode, applyTheme])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '?' && !showKeyboardShortcuts) {
        setShowKeyboardShortcuts(true)
      } else if (e.key === 'Escape') {
        setShowKeyboardShortcuts(false)
        setShowThemeMenu(false)
      } else if (e.key === 'd' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        // Cycle through theme modes
        const modes: ThemeMode[] = ['light', 'dark', 'system']
        const currentIndex = modes.indexOf(themeMode)
        const nextMode = modes[(currentIndex + 1) % modes.length]
        changeThemeMode(nextMode)
      } else if (e.key === 'f' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsFocusMode(!isFocusMode)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [themeMode, isFocusMode, showKeyboardShortcuts, showThemeMenu])

  const skills = skillMatrix[activeCategory]

  return (
    <div className={`min-h-screen bg-gradient-to-b from-ink-50 to-white transition-colors duration-300 dark:from-slate-900 dark:to-slate-800 ${isFocusMode ? 'focus-mode' : ''}`}>
      {/* Print Preview Modal */}
      {showPrintPreview && (
        <PrintPreview onClose={() => setShowPrintPreview(false)} />
      )}

      {/* Keyboard Shortcuts Modal */}
      {showKeyboardShortcuts && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowKeyboardShortcuts(false)}
        >
          <div
            className="m-4 max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-ink-900 dark:text-slate-100">
              Keyboard Shortcuts
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex justify-between">
                <span>Cycle theme mode</span>
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
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/80">
        <div className="mx-auto max-w-6xl px-6 py-3 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
              
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPrintPreview(true)}
                className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
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
              
              {/* Theme Selector Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                  className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  aria-label="Change theme"
                  title="Theme (Ctrl/⌘ + D)"
                >
                  {themeMode === 'light' && <SunIcon className="h-5 w-5" />}
                  {themeMode === 'dark' && <MoonIcon className="h-5 w-5" />}
                  {themeMode === 'system' && <ComputerDesktopIcon className="h-5 w-5" />}
                  <span className="hidden sm:inline capitalize">{themeMode}</span>
                  <ChevronDownIcon className="h-3 w-3" />
                </button>

                {/* Dropdown Menu */}
                {showThemeMenu && (
                  <>
                    {/* Backdrop */}
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowThemeMenu(false)}
                    />
                    
                    {/* Menu */}
                    <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          console.log('Light button clicked')
                          changeThemeMode('light')
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                          themeMode === 'light'
                            ? 'bg-slate-100 font-medium text-ink-900 dark:bg-slate-700 dark:text-slate-100'
                            : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700'
                        }`}
                      >
                        <SunIcon className="h-4 w-4" />
                        <span>Light</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          console.log('Dark button clicked')
                          changeThemeMode('dark')
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                          themeMode === 'dark'
                            ? 'bg-slate-100 font-medium text-ink-900 dark:bg-slate-700 dark:text-slate-100'
                            : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700'
                        }`}
                      >
                        <MoonIcon className="h-4 w-4" />
                        <span>Dark</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          console.log('System button clicked')
                          changeThemeMode('system')
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                          themeMode === 'system'
                            ? 'bg-slate-100 font-medium text-ink-900 dark:bg-slate-700 dark:text-slate-100'
                            : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700'
                        }`}
                      >
                        <ComputerDesktopIcon className="h-4 w-4" />
                        <span>System</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <aside className="lg:sticky lg:top-12">
              <div className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-soft backdrop-blur transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800/85">
                <div className='flex justify-between'>
                <img 
                  src="https://avatars.githubusercontent.com/u/13052941?v=4" 
                  alt="Gary Pacheco"
                  className="w-24 h-24 rounded-full border-2 border-slate-200 shadow-md transition-colors duration-300 dark:border-slate-600"
                />
                
              </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500 transition-colors duration-300 dark:text-slate-400">
                  Senior Frontend Engineer
                </p>
                <h1 className="mt-4 text-4xl font-semibold text-ink-900 transition-colors duration-300 dark:text-slate-100">Gary Pacheco</h1>
                <p className="mt-3 text-lg text-slate-600 transition-colors duration-300 dark:text-slate-300">
                  Front-end Engineering. Web Development and Design. Media Production.
                </p>
                <div className="mt-6 space-y-2 text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
                  <p>UCAR · The COMET Program</p>
                  <p>
                    <a href="mailto:gpacheco@ucar.edu" className="font-medium dark:text-slate-200">
                      gpacheco@ucar.edu
                    </a>
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 transition-colors duration-300 dark:text-slate-400">
                    Core Focus
                  </h2>
                  <ul className="space-y-4 text-sm text-slate-600 transition-colors duration-300 dark:text-slate-300">
                    {focusAreas.map((area) => (
                      <li key={area.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-300 dark:border-slate-600 dark:bg-slate-700/50">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 transition-colors duration-300 dark:text-slate-500">
                          {area.label}
                        </p>
                        <p className="mt-2 text-slate-600 transition-colors duration-300 dark:text-slate-300">{area.value}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft backdrop-blur transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800/90">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 transition-colors duration-300 dark:text-slate-400">
                    Skill Matrix
                  </p>
                  <h2 className="text-2xl font-semibold text-ink-900 transition-colors duration-300 dark:text-slate-100">
                    Core skills and technologies
                  </h2>
                </div>
                <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
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
                          ? 'border-ink-900 bg-ink-900 text-white shadow-lg focus-visible:outline-ink-900 dark:border-slate-500 dark:bg-slate-600 dark:focus-visible:outline-slate-500'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-ink-900 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100'
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
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition-colors duration-300 dark:border-slate-600 dark:bg-slate-700/80"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-ink-900 transition-colors duration-300 dark:text-slate-100">{skill.name}</h3>
                        <p className="mt-2 text-sm text-slate-600 transition-colors duration-300 dark:text-slate-300">{skill.description}</p>
                        
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
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition-colors duration-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 transition-colors duration-300 dark:text-slate-400">
                      {section.period}
                    </p>
                    <h2 className="text-2xl font-semibold text-ink-900 transition-colors duration-300 dark:text-slate-100">{section.title}</h2>
                  </div>
                  <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400 sm:max-w-sm">{section.summary}</p>
                </header>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <article
                      key={item.title}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/90 dark:hover:border-slate-600"
                    >
                      <div className="flex items-center justify-between text-xs font-medium text-slate-500 transition-colors duration-300 dark:text-slate-400">
                        <span>{item.focus}</span>
                        <span>{item.timeline}</span>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-ink-900 transition-colors duration-300 dark:text-slate-100">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="underline-offset-4 text-ink-900 transition-colors hover:text-ink-700 dark:text-slate-100 dark:hover:text-slate-300"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 transition-colors duration-300 dark:text-slate-300">{item.description}</p>
                      
                      {/* Highlights - Always Visible */}
                      <ul className="mt-4 space-y-2 text-sm text-slate-600 transition-colors duration-300 dark:text-slate-300">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-400 transition-colors duration-300 dark:bg-slate-500" aria-hidden="true" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-colors duration-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300"
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

          <section className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-sm text-slate-500 transition-colors duration-300 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-400">
            <p className="font-medium text-slate-600 transition-colors duration-300 dark:text-slate-300">What's next</p>
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
