/**
 * Skills Data
 * Safiullah Alam — Frontend Developer
 * 
 * Grouped with authentic, honest proficiency levels:
 * - Core: Primary daily focus and strong competency
 * - Working Knowledge: Practical hands-on usage in deployed projects
 * - Familiar: Conceptual understanding and academic/foundational experience
 */

export const skillCategories = [
  {
    id: 'core-frontend',
    title: 'Core Frontend',
    subtitle: 'My primary foundation for crafting accessible, performant interfaces',
    skills: [
      {
        name: 'HTML5',
        level: 'Core',
        summary: 'Semantic markup, accessibility standards, SEO structure, and modern DOM elements.',
        icon: 'html5'
      },
      {
        name: 'CSS3',
        level: 'Core',
        summary: 'Flexbox, Grid, custom properties, responsive breakpoints, transitions, and keyframe animations.',
        icon: 'css3'
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'Core',
        summary: 'Modern syntax, DOM manipulation, asynchronous fetching, event delegation, array methods, and scope.',
        icon: 'javascript'
      },
      {
        name: 'Tailwind CSS',
        level: 'Core',
        summary: 'Utility-first styling, design system tokens, responsive variants, dark mode customization, and v4 tooling.',
        icon: 'tailwind'
      }
    ]
  },
  {
    id: 'additional-frontend',
    title: 'Additional Frontend Knowledge',
    subtitle: 'Frameworks and libraries applied across web projects',
    skills: [
      {
        name: 'React',
        level: 'Working Knowledge',
        summary: 'Functional components, hooks (useState, useEffect, useMemo), props flow, JSX, and component lifecycle.',
        icon: 'react'
      },
      {
        name: 'Bootstrap',
        level: 'Working Knowledge',
        summary: 'Grid systems, pre-built UI components, responsive layout utilities, and rapid interface scaffolding.',
        icon: 'bootstrap'
      },
      {
        name: 'jQuery',
        level: 'Working Knowledge',
        summary: 'Legacy DOM manipulation, event handling, AJAX integration, and dynamic page interactions.',
        icon: 'jquery'
      },
      {
        name: 'Next.js',
        level: 'Familiar',
        summary: 'App Router architecture, file-based routing, client/server component separation, and static asset handling.',
        icon: 'nextjs'
      }
    ]
  },
  {
    id: 'development-tools',
    title: 'Development Tools & Workflow',
    subtitle: 'Essential utilities for version control and developer productivity',
    skills: [
      {
        name: 'Git',
        level: 'Working Knowledge',
        summary: 'Version control, feature branching, commit staging, merge workflows, and repository management.',
        icon: 'git'
      },
      {
        name: 'GitHub',
        level: 'Working Knowledge',
        summary: 'Remote repository hosting, issue tracking, project collaboration, and deployment integration.',
        icon: 'github'
      },
      {
        name: 'VS Code',
        level: 'Working Knowledge',
        summary: 'IDE customization, debugging tools, workspace extensions, linting integration, and keyboard shortcuts.',
        icon: 'vscode'
      },
      {
        name: 'Vite',
        level: 'Working Knowledge',
        summary: 'Modern dev server, Hot Module Replacement (HMR), lightning-fast builds, and production bundling.',
        icon: 'vite'
      }
    ]
  },
  {
    id: 'academic-programming',
    title: 'Academic Programming & Data',
    subtitle: 'Foundational coursework in computational and quantitative analysis',
    skills: [
      {
        name: 'Python',
        level: 'Familiar',
        summary: 'Core language syntax, data structures, loops, functions, and algorithmic fundamentals.',
        icon: 'python'
      },
      {
        name: 'Basic NumPy',
        level: 'Familiar',
        summary: 'N-dimensional arrays, mathematical vector operations, indexing, and matrix slicing.',
        icon: 'numpy'
      },
      {
        name: 'Basic Pandas',
        level: 'Familiar',
        summary: 'DataFrames, Series manipulation, CSV ingestion, data cleaning, and column operations.',
        icon: 'pandas'
      },
      {
        name: 'Basic Matplotlib',
        level: 'Familiar',
        summary: 'Basic data plotting, line charts, histograms, custom labels, and data visualization.',
        icon: 'matplotlib'
      }
    ]
  }
]
