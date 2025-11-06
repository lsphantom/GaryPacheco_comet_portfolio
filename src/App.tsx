import { useState } from 'react'

const projectSections = [
  {
    id: 'ucar-comet',
    title: 'UCAR - COMET | 10-Year Project Recap',
    period: '2014 – 2025',
    summary:
      'Mission-driven training and science communication products across weather, climate, aviation, and emergency response.',
    items: [
      {
        title: 'Climate Risk Portal',
        timeline: '2025',
        focus: 'UI/UX Design · Web Application',
        description:
          'UI/UX designer and project consultant.',
        highlights: [
          'Guided storytelling and interface decisions that translate complex climate risk insights.',
          'Generated wireframes, prototypes, and design assets to align cross-functional teams.',
          'Collaborated with multidisciplinary stakeholders to ground the portal in accessibility best practices.',
        ],
        tools: ['Figma', 'Design Strategy', 'Accessibility'],
      },
      {
        title: 'The COMET Program',
        timeline: '2020 – 2025',
        focus: 'Drupal | Pantheon · Website',
        description: 'Webmaster to the Drupal-based website www.comet.ucar.edu.',
        highlights: [
          'Drupal: managed pages, content, roles, and new dev integrations.',
          'Pantheon: applied upstream updates, multidev releases, and production deployments.',
        ],
        tools: ['Drupal', 'Pantheon', 'Site Operations'],
        url: 'https://www.comet.ucar.edu',
      },
      {
        title: 'MetEd Lesson Static HTML Builder',
        timeline: '2025',
        focus: 'Svelte · Frontend Engineering',
        description:
          'Static delivery shell powering Articulate Storyline-based training content across COMET lessons.',
        highlights: [
          'Creation, frontend development, and ongoing maintenance for COMET Storyline experiences.',
          'Ensured smooth embedding of modern lesson content inside legacy delivery environments.',
        ],
        tools: ['Svelte', 'Storyline', 'Frontend Engineering'],
      },
      {
        title: '3D-PAWS Documentation Ecosystem',
        timeline: '2024 – 2025',
        focus: 'GitBook · Community Platform',
        description:
          'Documentation and discussions for 3D-PAWS instrumentation teams across GitBook and Discourse.',
        highlights: [
          'GitBook: led creation, integration, role management, and content development for the 3D-PAWS manual.',
          'Discourse: launched discussion hub, content development, and onboarding for instrumentation communities.',
        ],
        tools: ['GitBook', 'Discourse', 'Community Management'],
        url: 'https://3dpaws.comet.ucar.edu/',
      },
      {
        title: 'MetEd Lesson Dynamic Prototype Viewer',
        timeline: '2022 – 2025',
        focus: 'React · Fullstack Development',
        description: 'Prototype viewer enabling next-generation COMET lesson experiences.',
        highlights: [
          'React JS, Redux: creation, frontend development, and backend development.',
          'Supports exploratory lesson formats for COMET teams.',
        ],
        tools: ['React', 'Redux', 'Node.js'],
        url: 'https://deved.meted.ucar.edu/prototype_viewer/',
      },
      {
        title: 'COMET\'s Education & Training Platform',
        timeline: '2021 – 2025',
        focus: 'React · Fullstack Development',
        description: 'Modern education and training experience for MetEd audiences.',
        highlights: [
          'React JS, Redux, Tailwind: creation plus frontend and backend development.',
          'Figma + JIRA: UI/UX analysis, collaboration, and project management.',
        ],
        tools: ['React', 'Redux', 'Tailwind CSS', 'Figma', 'Jira'],
        url: 'https://www.meted.ucar.edu/education_training',
      },
    ],
  },
  /*{
    id: 'lime-stripes',
    title: 'Lime Stripes Creative Studio | Business Development',
    period: 'Ongoing',
    summary:
      'Independent creative studio partnerships delivering digital products, branding, and operational support.',
    items: [
      {
        title: 'ATS Auto Detail & Sales, LLC',
        timeline: 'Ongoing',
        focus: 'React · WordPress',
        description: 'Full digital presence and business performance optimization for automotive services.',
        highlights: [
          'Frontend development with React experience layers.',
          'WordPress + MySQL backend, hosting, and devops oversight.',
        ],
        tools: ['React', 'WordPress', 'MySQL'],
      },
      {
        title: 'Car Title Services, LLC',
        timeline: 'Ongoing',
        focus: 'React · Hosting',
        description: 'Digital platform supporting title services operations and customer onboarding.',
        highlights: [
          'Frontend development with React.',
          'Hosting and devops management to keep services reliable.',
        ],
        tools: ['React', 'Hosting', 'DevOps'],
      },
      {
        title: 'Chapel Haven SDA',
        timeline: 'Ongoing',
        focus: 'WordPress · Fullstack',
        description: 'Community organization site with tailored content workflows and updates.',
        highlights: [
          'Fullstack engineering with WordPress and MySQL.',
          'Hosting and devops support across releases.',
        ],
        tools: ['WordPress', 'MySQL', 'DevOps'],
      },
      {
        title: 'Antsy Labs, LLC',
        timeline: 'Consulting',
        focus: 'Branding · Product Design',
        description: 'Web consulting, branding, illustration, and prototyping for product launches.',
        highlights: [
          'Provided creative direction across web, branding, and illustration initiatives.',
          'Supported prototyping cycles for new product experiences.',
        ],
        tools: ['Brand Strategy', 'Illustration', 'Prototyping'],
      },
      {
        title: 'DeskEnvy, LLC',
        timeline: 'Ongoing',
        focus: 'React · WordPress',
        description: 'Digital workspace experience support for ecommerce storytelling.',
        highlights: [
          'Frontend development with React.',
          'Backend development with WordPress and MySQL.',
        ],
        tools: ['React', 'WordPress', 'MySQL'],
      },
      {
        title: 'RV Glass Specialties, LLC',
        timeline: 'Brand Initiative',
        focus: 'Branding · Print Media',
        description: 'Branding and print media development for specialty services.',
        highlights: [
          'Delivered visual identity and supporting print collateral.',
          'Aligned marketing assets with business strategy.',
        ],
        tools: ['Adobe Illustrator', 'Print Design', 'Brand Systems'],
      },
    ],
  },*/
] as const

const skillMatrix = {
  'Product Design & UX': [
    {
      name: 'Design Systems Stewardship',
      level: 'Expert',
      description:
        'Token-driven systems that keep Figma, Storybook, and production interfaces aligned for accessibility.',
      tools: ['Figma', 'Tokens Studio', 'Storybook'],
    },
    {
      name: 'Research Facilitation',
      level: 'Advanced',
      description:
        'Discovery interviews, co-creation workshops, and usability synthesis for science and education teams.',
      tools: ['FigJam', 'Miro', 'Dovetail'],
    },
    {
      name: 'Interaction Patterns',
      level: 'Advanced',
      description:
        'Progressive disclosure and data storytelling interfaces that keep complex workflows approachable.',
      tools: ['Framer', 'Principle', 'UserTesting'],
    },
  ],
  'Frontend & Platforms': [
    {
      name: 'React Architecture',
      level: 'Advanced',
      description:
        'Component-driven architectures powering portals, prototype viewers, and education ecosystems.',
      tools: ['React', 'TypeScript', 'Vite'],
    },
    {
      name: 'Legacy Modernization',
      level: 'Advanced',
      description:
        'Bridging Drupal, PHP, and jQuery systems while introducing modern tooling with minimal disruption.',
      tools: ['Drupal', 'PHP', 'jQuery'],
    },
    {
      name: 'Ops & Delivery',
      level: 'Proficient',
      description:
        'Pantheon environments, CI workflows, and release management for mission-critical platforms.',
      tools: ['Pantheon', 'GitHub Actions', 'Jira'],
    },
  ],
  'Content & Community Systems': [
    {
      name: 'Documentation Platforms',
      level: 'Advanced',
      description:
        'Spin up GitBook, Discourse, and knowledge bases with sustainable governance models.',
      tools: ['GitBook', 'Discourse', 'Confluence'],
    },
    {
      name: 'Media Delivery',
      level: 'Proficient',
      description:
        'VideoJS portals, webinar platforms, and YouTube migrations for national programs.',
      tools: ['VideoJS', 'YouTube Studio', 'Vimeo'],
    },
    {
      name: 'Data Visualization',
      level: 'Advanced',
      description:
        'Interactive dashboards and calculators for climate, weather, and STEM learning audiences.',
      tools: ['D3.js', 'AMCharts', 'Python'],
    },
  ],
  'Creative & Brand': [
    {
      name: 'Brand Identity',
      level: 'Advanced',
      description:
        'Logos, patch design, and scalable identity systems for science programs and partners.',
      tools: ['Adobe Illustrator', 'Figma', 'Zeroheight'],
    },
    {
      name: 'Motion & Storytelling',
      level: 'Advanced',
      description:
        'Multimedia narratives and motion assets that make complex topics engaging.',
      tools: ['After Effects', 'Premiere Pro', 'Lottie'],
    },
    {
      name: 'Product Consulting',
      level: 'Expert',
      description:
        'Full-stack guidance for small businesses, from strategy through launch and optimization.',
      tools: ['WordPress', 'MySQL', 'Analytics'],
    },
  ],
} as const

const categories = Object.keys(skillMatrix) as Array<keyof typeof skillMatrix>

const focusAreas = [
  {
    label: 'Design × Engineering Bridge',
    value: 'Connecting accessible UI/UX with resilient front-end systems for science and education teams.',
  },
  {
    label: 'Mission-Driven Products',
    value: 'Building climate, aviation, and emergency response tools that balance clarity and performance.',
  },
  {
    label: 'Collaborative Delivery',
    value: 'Partnering with research, operations, and business stakeholders to ship sustainable platforms.',
  },
] as const

function App() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillMatrix>(
    categories[0],
  )

  const skills = skillMatrix[activeCategory]

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
          <aside className="lg:sticky lg:top-12">
            <div className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-soft backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Senior Frontend Engineer
              </p>
              <h1 className="mt-4 text-4xl font-semibold text-ink-900">Gary Pacheco</h1>
              <p className="mt-3 text-lg text-slate-600">
                I build accessible, thoughtful interfaces that merge visual design with robust engineering for
                mission-focused teams.
              </p>
              <div className="mt-6 space-y-2 text-sm text-slate-500">
                <p>UCAR · The COMET Program</p>
                <p>Denver, Colorado · Remote friendly</p>
                <p>
                  <a href="mailto:gpacheco@ucar.edu" className="font-medium">
                    gpacheco@ucar.edu
                  </a>
                </p>
              </div>

              <div className="mt-10 space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Core Focus
                </h2>
                <ul className="space-y-4 text-sm text-slate-600">
                  {focusAreas.map((area) => (
                    <li key={area.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {area.label}
                      </p>
                      <p className="mt-2 text-slate-600">{area.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <main className="space-y-16">

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft backdrop-blur">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Skill Matrix
                  </p>
                  <h2 className="text-2xl font-semibold text-ink-900">
                    Adaptive craft across disciplines
                  </h2>
                </div>
                <p className="text-sm text-slate-500">
                  Toggle a focus area to explore the toolkits and outcomes.
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
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900 ${
                        isActive
                          ? 'border-ink-900 bg-ink-900 text-white shadow-lg'
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
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-ink-900">{skill.name}</h3>
                        <p className="mt-2 text-sm text-slate-600">{skill.description}</p>
                      </div>
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {skill.level}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>



            {projectSections.map((section) => (
              <section key={section.id} className="space-y-6">
                <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {section.period}
                    </p>
                    <h2 className="text-2xl font-semibold text-ink-900">{section.title}</h2>
                  </div>
                  <p className="text-sm text-slate-500 sm:max-w-sm">{section.summary}</p>
                </header>

                <div className="grid gap-6 md:grid-cols-2">
                  {section.items.map((item) => (
                    <article
                      key={item.title}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                        <span>{item.focus}</span>
                        <span>{item.timeline}</span>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-ink-900">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-ink-900 underline-offset-4 transition-colors hover:text-ink-700"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                      <ul className="mt-4 space-y-2 text-sm text-slate-600">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-400" aria-hidden="true" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
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

            

            <section className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-sm text-slate-500">
              <p className="font-medium text-slate-600">What’s next</p>
              <p className="mt-2">
                Looking to collaborate on accessible climate intelligence platforms, digital training ecosystems, and
                small-business transformations. Let’s architect what’s next together.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
