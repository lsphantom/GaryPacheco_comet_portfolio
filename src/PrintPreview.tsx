import { XMarkIcon, PrinterIcon } from '@heroicons/react/24/outline'
import { projectSections, skillMatrix } from './portfolioData'

interface PrintPreviewProps {
  onClose: () => void
}

export default function PrintPreview({ onClose }: PrintPreviewProps) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto bg-slate-100">
      {/* Control Bar */}
      <div className="no-print sticky top-0 z-10 border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <h2 className="text-lg font-semibold text-slate-900">Print Preview</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white hover:bg-ink-800"
            >
              <PrinterIcon className="h-4 w-4" />
              Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <XMarkIcon className="h-4 w-4" />
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Print Content */}
      <div className="mx-auto max-w-4xl bg-white p-8 shadow-lg print:max-w-full print:p-0 print:shadow-none">
        <div className="space-y-6">
          {/* Header */}
          <header className="border-b-2 border-slate-900 pb-4">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Gary Pacheco</h1>
                <p className="mt-1 text-base text-slate-600">Senior Frontend Engineer</p>
                <p className="mt-2 text-sm text-slate-600">
                  Front-end Engineering · Web Development and Design · Media Production
                </p>
              </div>
              <div className="text-right text-sm text-slate-600">
                <p className="font-medium">UCAR · The COMET Program</p>
                <p className="mt-1">gpacheco@ucar.edu</p>
              </div>
            </div>
          </header>

          {/* Core Skills */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-slate-900">Core Skills & Technologies</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {Object.entries(skillMatrix).map(([category, skills]) => (
                <div key={category} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <h3 className="mb-2 text-sm font-semibold text-slate-900">{category}</h3>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {skills.map((skill, idx) => (
                      <li key={idx} className="leading-snug">
                        • <span className="font-medium">{skill.name}:</span> {skill.tools.join(', ')}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projectSections.map((section) => (
            <section key={section.id}>
              <div className="mb-3 flex items-end justify-between border-b border-slate-300 pb-2">
                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                <span className="text-sm font-medium text-slate-600">{section.period}</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {section.items.map((item) => (
                  <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-3">
                    <div className="mb-2 flex items-start justify-between text-xs text-slate-500">
                      <span className="font-medium">{item.focus}</span>
                      <span>{item.timeline}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-xs leading-snug text-slate-700">{item.description}</p>
                    <ul className="mt-2 space-y-0.5 text-xs text-slate-600">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="leading-snug">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700"
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
        </div>
      </div>
    </div>
  )
}
