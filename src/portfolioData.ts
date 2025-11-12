export type ProjectItem = {
  readonly title: string
  readonly timeline: string
  readonly focus: string
  readonly description: string
  readonly highlights: readonly string[]
  readonly tools: readonly string[]
  readonly url?: string
}

export type ProjectSection = {
  readonly id: string
  readonly title: string
  readonly period: string
  readonly summary: string
  readonly items: readonly ProjectItem[]
}

export const projectSections: readonly ProjectSection[] = [
  {
    id: 'ucar-comet',
    title: 'University Corporation for Atmospheric Research (UCAR)',
    period: '2014 – Present',
    summary: '',
    items: [
        {
            title: 'MetEd Internal Tool: Data Loop Builder',
            timeline: '2016 – 2025',
            focus: 'React · Python · Fullstack Development',
            description: 'Web application for building and managing data loops for MetEd lesson production.',
            highlights: [
                'Migrated legacy C-shell scripting to modern React + Vite frontend with Python backend.',
                'Streamlined data processing workflows for COMET lesson development teams.',
            ],
            tools: ['React', 'Vite', 'Python', 'C-shell'],
        },
      {
        title: 'Climate Risk Portal',
        timeline: '2025',
        focus: 'UI/UX Design · Web Application',
        description: 'UI/UX designer and project consultant.',
        highlights: [
          'Guided storytelling and interface decisions that translate complex climate risk insights.',
          'Generated wireframes, prototypes, and design assets to align cross-functional teams.',
          'Collaborated with multidisciplinary stakeholders to ground the portal in accessibility best practices.',
        ],
        tools: ['Figma', 'Design Strategy', 'Accessibility'],
        url: 'https://www.risk.ral.ucar.edu/',
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
        title: 'MetEd Internal Tool: Static HTML Lesson Builder',
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
        title: 'MetEd Internal Tool: Lesson Prototype Viewer',
        timeline: '2022 – 2025',
        focus: 'React · Fullstack Development',
        description: 'Prototype viewer to develop lesson content for publishing on MetEd.',
        highlights: [
          'React JS, Redux: creation, frontend development, and backend development.',
          'Supports exploratory lesson formats for COMET teams.',
        ],
        tools: ['React', 'Redux', 'Node.js'],
        url: 'https://deved.meted.ucar.edu/prototype_viewer/',
      },
      {
        title: "COMET's Education & Training Platform",
        timeline: '2021 – 2025',
        focus: 'React · Fullstack Development',
        description: 'Modern education and training experience for MetEd audiences.',
        highlights: [
          'React JS, Redux, Tailwind: creation plus frontend and backend development.',
          'Figma + JIRA: UI/UX analysis, collaboration, and project management.',
        ],
        tools: ['React', 'Redux', 'Tailwind CSS', 'Figma', 'JIRA'],
        url: 'https://www.meted.ucar.edu/education_training',
      },
    {
        title: 'SciEd Interactive Learning',
        timeline: '2020 – 2023',
        focus: 'Angular · Web Applications',
        description: 'Suite of interactive educational tools and simulations for K-12 science learning.',
        highlights: [
            'Create a Hurricane: educational interactive simulation.',
            'Create a Snowstorm: educational snowstorm modeling simulation.',
            'Very Simple Climate Model Calculator: climate modeling simulation tool.',
            'Science Mural: interactive mural exploration.',
            'Climate Sensitivity Calculator: climate analysis tool.',
        ],
        tools: ['Angular', 'AMCharts', 'TypeScript'],
        url: 'https://scied.ucar.edu/interactive',
    },
    {
        title: 'SciEd Drone Science Mission Mobile Game',
        timeline: '2020 – 2021',
        focus: 'Unity3D · Mobile Game',
        description: 'Educational mobile game for iOS and Android platforms.',
        highlights: [
            'Unity3D: project management, frontend development, C# game programming, and 3D model modification/integration.',
            'Xcode: deployment and internal distribution management for Apple TestFlight, Apple App Store, and Google Play Store.',
        ],
        tools: ['Unity3D', 'C#', 'Xcode', 'Android Studio'],
    },
    {
        title: 'NOAA National Geodetic Survey - Webinar Series Platform',
        timeline: '2022 – 2025',
        focus: 'React · Fullstack Development',
        description: 'Webinar series platform for NOAA National Geodetic Survey.',
        highlights: [
            'React JS, Redux, VideoJS: full-stack development and project management.',
            'JIRA: project tracking and collaboration.',
            'Video migration to YouTube for improved accessibility and reach.',
        ],
        tools: ['React', 'Redux', 'VideoJS', 'JIRA', 'YouTube'],
    },
    {
        title: 'Data Visualization Project',
        timeline: '2022',
        focus: 'Python · React',
        description: 'Data visualization project combining Python backend with React frontend.',
        highlights: [
            'Python and React JS integration for interactive data displays.',
        ],
        tools: ['Python', 'React'],
    },
    {
        title: 'JCSDA Logo',
        timeline: '2020',
        focus: 'Adobe Illustrator · Branding',
        description: 'Logo creation, revisioning, and distribution for JCSDA.',
        highlights: [
            'Adobe Illustrator: logo design, iteration, and final asset delivery.',
        ],
        tools: ['Adobe Illustrator'],
    },
    {
        title: 'COSMIC-2 Logo and Patch',
        timeline: '2019',
        focus: 'Adobe Illustrator · Branding',
        description: 'Logo and mission patch creation for COSMIC-2.',
        highlights: [
            'Adobe Illustrator: logo and patch design, revisioning, and distribution.',
        ],
        tools: ['Adobe Illustrator'],
    },
    {
        title: 'COMET Portfolio',
        timeline: '2018',
        focus: 'jQuery · Web Development',
        description: 'Static portfolio build with jQuery for COMET.',
        highlights: [
            'jQuery: static build, event delegation, and system integration.',
        ],
        tools: ['jQuery', 'JavaScript'],
    },
    {
        title: 'COMET 25th Anniversary Posters and Branding',
        timeline: '2015 – 2016',
        focus: 'Adobe Suite · Graphic Design',
        description: 'Anniversary branding and poster designs for COMET.',
        highlights: [
            'Adobe Illustrator and Photoshop: graphic design, illustration creation, revisioning, and distribution.',
        ],
        tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    },
    ],
  },
]

export type SkillItem = {
  readonly name: string
  readonly level: string
  readonly description: string
  readonly tools: readonly string[]
}

export type SkillMatrix = {
  readonly 'Front-End Engineering': readonly SkillItem[]
  readonly 'Web Development & Design': readonly SkillItem[]
  readonly 'Media Production': readonly SkillItem[]
}

export const skillMatrix: SkillMatrix = {
  'Front-End Engineering': [
    {
      name: 'Modern JavaScript Frameworks',
      level: 'Advanced',
      description:
        'Building interactive web applications with React, Angular, and Svelte.',
      tools: ['React', 'Redux', 'Angular', 'Svelte', 'TypeScript', 'JavaScript'],
    },
    {
      name: 'Styling & UI Libraries',
      level: 'Advanced',
      description:
        'Creating responsive, accessible interfaces using modern CSS frameworks and design systems.',
      tools: ['Tailwind CSS', 'Bootstrap', 'CSS3', 'SCSS', 'Styled Components'],
    },
    {
      name: 'Build Tools & Development',
      level: 'Advanced',
      description:
        'Setting up and maintaining development environments and build processes.',
      tools: ['Vite', 'Webpack', 'npm', 'Git', 'GitHub', 'VS Code'],
    },
    {
      name: 'Serverless & Cloud Platforms',
      level: 'Proficient',
      description:
        'Deploying and managing web applications on serverless and cloud infrastructure.',
      tools: ['Vercel', 'AWS', 'Netlify', 'Firebase'],
    },
    {
      name: 'Documentation & Community Platforms',
      level: 'Advanced',
      description:
        'Building and managing documentation systems and community forums for technical projects.',
      tools: ['GitBook', 'Discourse', 'Notion'],
    },
  ],
  'Web Development & Design': [
    {
      name: 'Content Management Systems',
      level: 'Advanced',
      description:
        'Building and managing websites with Drupal and WordPress, including custom themes and plugins.',
      tools: ['Drupal', 'WordPress', 'PHP', 'MySQL', 'Pantheon'],
    },
    {
      name: 'UI/UX Design',
      level: 'Advanced',
      description:
        'Designing user interfaces, creating wireframes, prototypes, and maintaining design systems.',
      tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Storybook'],
    },
    {
      name: 'Interactive Data Visualization',
      level: 'Proficient',
      description:
        'Creating charts, graphs, and interactive data displays for web applications.',
      tools: ['D3.js', 'AMCharts', 'Chart.js', 'Unity3D WebGL'],
    },
    {
      name: 'Learning Management Systems',
      level: 'Proficient',
      description:
        'Integrating educational content and managing online learning platforms.',
      tools: ['Blackboard', 'Desire2Learn (D2L) Brightspace', 'Absorb LMS', 'Moodle'],
    },
  ],
  'Media Production': [
    {
      name: 'Graphic Design & Illustration',
      level: 'Advanced',
      description:
        'Creating logos, branding materials, illustrations, and print/digital graphics.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    },
    {
      name: 'Video & Motion Graphics',
      level: 'Advanced',
      description:
        'Video editing, motion graphics, 2D animation, and multimedia content production.',
      tools: ['Adobe After Effects', 'Adobe Premiere Pro', 'Final Cut Pro'],
    },
    {
      name: 'Audio & Narration',
      level: 'Proficient',
      description:
        'Voice recording and editing for English and Spanish narration, plus AI-assisted audio generation.',
      tools: ['Adobe Audition', 'ElevenLabs AI', 'Audacity'],
    },
    {
      name: 'Video & Media Management',
      level: 'Advanced',
      description:
        'Managing video content, YouTube channels, and media libraries for organizations.',
      tools: ['YouTube Studio', 'Vimeo'],
    },
    {
      name: 'Game Development',
      level: 'Advanced',
      description:
        'Developing 2D and 3D mobile games and applications for Android and iOS using Unity3D and C# programming.',
      tools: ['Unity3D', 'C#', 'Xcode', 'Android Studio'],
    },
  ],
}
