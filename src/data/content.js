/**
 * Content data for the OST Starter Guide.
 *
 * SCHEMA
 * ──────
 * Phase
 *   id          string   – used in URLs/state ("learn" | "plan" | "grow")
 *   label       string   – display name shown in nav
 *   tagline     string   – one-line description shown under label
 *   colorKey    string   – maps to a CSS color class ("blue" | "teal" | "green")
 *   icon        string   – emoji or short text icon
 *   sections    Section[]
 *
 * Section
 *   id          string   – anchor / nav key
 *   title       string   – shown in sidebar and as section heading
 *   intro       string   – optional paragraph shown before blocks
 *   blocks      Block[]
 *
 * Block  (union type — set `type` to pick the variant)
 *   type: "text"       → { body: string }
 *   type: "tip"        → { heading?: string, body: string }
 *   type: "callout"    → { heading?: string, body: string, variant?: "info"|"warning"|"success" }
 *   type: "list"       → { heading?: string, items: string[] }
 *   type: "checklist"  → { heading?: string, items: string[] }
 *   type: "resource"   → { heading?: string, links: { label: string, href: string, note?: string }[] }
 *   type: "steps"      → { heading?: string, steps: { label: string, detail?: string }[] }
 */

export const phases = [
  {
    id: 'learn',
    label: 'Learn',
    tagline: 'Understand the landscape before you build',
    colorKey: 'blue',
    icon: '🎓',
    sections: [
      {
        id: 'what-is-ost',
        title: 'What Is an Afterschool Program?',
        intro: '[Replace with a brief overview of what out-of-school time (OST) programs are and who they serve.]',
        blocks: [
          {
            type: 'text',
            body: '[Paragraph 1 — define "afterschool program" in plain language.]',
          },
          {
            type: 'text',
            body: '[Paragraph 2 — describe the populations served and hours typically covered.]',
          },
          {
            type: 'tip',
            heading: 'Did you know?',
            body: '[Add a compelling stat or fact about afterschool programs here.]',
          },
        ],
      },
      {
        id: 'why-it-matters',
        title: 'Why It Matters',
        intro: '[Explain the need for quality afterschool programs in your community.]',
        blocks: [
          {
            type: 'list',
            heading: 'Key benefits of afterschool programs',
            items: [
              '[Benefit 1]',
              '[Benefit 2]',
              '[Benefit 3]',
              '[Benefit 4]',
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            heading: 'Research snapshot',
            body: '[Add a summary of relevant research or a citation here.]',
          },
        ],
      },
      {
        id: 'types-of-programs',
        title: 'Types of Programs',
        intro: '[Describe the different models — school-based, community-based, virtual, hybrid, etc.]',
        blocks: [
          {
            type: 'text',
            body: '[Overview paragraph on program types.]',
          },
          {
            type: 'list',
            heading: 'Common program models',
            items: [
              '[Model 1: School-based — brief description]',
              '[Model 2: Community-based — brief description]',
              '[Model 3: Faith-based — brief description]',
              '[Model 4: Virtual/hybrid — brief description]',
            ],
          },
        ],
      },
      {
        id: 'landscape',
        title: 'The OST Landscape',
        intro: '[Give context on the field — funding streams, policy environment, key organizations.]',
        blocks: [
          {
            type: 'text',
            body: '[Paragraph on the national/state policy and funding landscape.]',
          },
          {
            type: 'resource',
            heading: 'Key national organizations',
            links: [
              { label: '[Organization 1]', href: '#', note: '[What they offer]' },
              { label: '[Organization 2]', href: '#', note: '[What they offer]' },
              { label: '[Organization 3]', href: '#', note: '[What they offer]' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'plan',
    label: 'Plan',
    tagline: 'Design your program with intention',
    colorKey: 'teal',
    icon: '📋',
    sections: [
      {
        id: 'community-assessment',
        title: 'Community Assessment',
        intro: '[Walk through how to assess need and assets in the community before launching.]',
        blocks: [
          {
            type: 'text',
            body: '[Explain why a community assessment is the essential first step.]',
          },
          {
            type: 'steps',
            heading: 'How to assess your community',
            steps: [
              { label: '[Step 1]', detail: '[Brief description]' },
              { label: '[Step 2]', detail: '[Brief description]' },
              { label: '[Step 3]', detail: '[Brief description]' },
            ],
          },
          {
            type: 'checklist',
            heading: 'Community assessment checklist',
            items: [
              '[Checklist item 1]',
              '[Checklist item 2]',
              '[Checklist item 3]',
            ],
          },
        ],
      },
      {
        id: 'program-design',
        title: 'Program Design',
        intro: '[Cover the key decisions in designing a program: age range, focus areas, schedule, staffing model.]',
        blocks: [
          {
            type: 'text',
            body: '[Overview paragraph on program design principles.]',
          },
          {
            type: 'list',
            heading: 'Core design decisions',
            items: [
              '[Decision 1 — e.g., target age group]',
              '[Decision 2 — e.g., academic vs. enrichment focus]',
              '[Decision 3 — e.g., program hours and schedule]',
              '[Decision 4 — e.g., staff-to-participant ratio]',
              '[Decision 5 — e.g., site location]',
            ],
          },
          {
            type: 'tip',
            heading: 'Design tip',
            body: '[Add a practical design tip or principle here.]',
          },
        ],
      },
      {
        id: 'funding',
        title: 'Funding Your Program',
        intro: '[Describe the main funding sources and how to approach them.]',
        blocks: [
          {
            type: 'list',
            heading: 'Common funding sources',
            items: [
              '[Source 1 — e.g., 21st Century Community Learning Centers]',
              '[Source 2 — e.g., local foundations]',
              '[Source 3 — e.g., corporate sponsors]',
              '[Source 4 — e.g., participant fees / sliding scale]',
              '[Source 5 — e.g., in-kind donations]',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            heading: 'Important',
            body: '[Add a note about grant compliance, reporting requirements, or other funding caveats.]',
          },
          {
            type: 'resource',
            heading: 'Funding resources',
            links: [
              { label: '[Resource 1]', href: '#', note: '[Description]' },
              { label: '[Resource 2]', href: '#', note: '[Description]' },
            ],
          },
        ],
      },
      {
        id: 'staffing',
        title: 'Staffing & Volunteers',
        intro: '[Cover hiring, training, and managing staff and volunteers.]',
        blocks: [
          {
            type: 'text',
            body: '[Overview of staffing structure and roles typical in afterschool programs.]',
          },
          {
            type: 'checklist',
            heading: 'Pre-hire checklist',
            items: [
              '[Background check requirements]',
              '[Required certifications or credentials]',
              '[Reference verification]',
              '[Orientation completion]',
            ],
          },
        ],
      },
      {
        id: 'partnerships',
        title: 'Building Partnerships',
        intro: '[Explain how to identify and cultivate key community partners.]',
        blocks: [
          {
            type: 'text',
            body: '[Why partnerships matter and who makes a strong partner.]',
          },
          {
            type: 'list',
            heading: 'Potential partner types',
            items: [
              '[Schools / districts]',
              '[Libraries]',
              '[Youth-serving nonprofits]',
              '[Local businesses]',
              '[Faith communities]',
              '[Higher education institutions]',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'grow',
    label: 'Grow',
    tagline: 'Sustain, improve, and expand your impact',
    colorKey: 'green',
    icon: '🌱',
    sections: [
      {
        id: 'quality-improvement',
        title: 'Quality Improvement',
        intro: '[Introduce quality improvement (QI) frameworks and how to use them.]',
        blocks: [
          {
            type: 'text',
            body: '[Overview paragraph on quality improvement in OST programs.]',
          },
          {
            type: 'list',
            heading: 'Quality improvement frameworks to explore',
            items: [
              '[Framework 1 — e.g., YPQA]',
              '[Framework 2 — e.g., SAYO]',
              '[Framework 3 — e.g., state-specific QIS]',
            ],
          },
          {
            type: 'tip',
            heading: 'Start small',
            body: '[Add a tip on how to begin QI work without being overwhelmed.]',
          },
        ],
      },
      {
        id: 'data-and-evaluation',
        title: 'Data & Evaluation',
        intro: '[Cover how to collect, use, and report program data.]',
        blocks: [
          {
            type: 'text',
            body: '[Why data collection matters and common mistakes to avoid.]',
          },
          {
            type: 'checklist',
            heading: 'Data basics checklist',
            items: [
              '[Attendance tracking system in place]',
              '[Enrollment and demographic data collected]',
              '[Outcome measures defined]',
              '[Surveys or assessments selected]',
              '[Data review schedule established]',
            ],
          },
          {
            type: 'callout',
            variant: 'success',
            heading: 'Quick win',
            body: '[Add a practical first step a new program can take on data today.]',
          },
        ],
      },
      {
        id: 'sustainability',
        title: 'Sustainability Planning',
        intro: '[Discuss what it takes to sustain a program long-term.]',
        blocks: [
          {
            type: 'text',
            body: '[Why sustainability planning should start on day one.]',
          },
          {
            type: 'steps',
            heading: 'Building a sustainability plan',
            steps: [
              { label: '[Step 1]', detail: '[Description]' },
              { label: '[Step 2]', detail: '[Description]' },
              { label: '[Step 3]', detail: '[Description]' },
              { label: '[Step 4]', detail: '[Description]' },
            ],
          },
        ],
      },
      {
        id: 'professional-development',
        title: 'Professional Development',
        intro: '[Cover how to grow your staff and your own skills as a leader.]',
        blocks: [
          {
            type: 'list',
            heading: 'PD opportunities to consider',
            items: [
              '[Opportunity 1]',
              '[Opportunity 2]',
              '[Opportunity 3]',
            ],
          },
          {
            type: 'resource',
            heading: 'Training resources',
            links: [
              { label: '[Resource 1]', href: '#', note: '[Description]' },
              { label: '[Resource 2]', href: '#', note: '[Description]' },
            ],
          },
        ],
      },
      {
        id: 'advocacy',
        title: 'Advocacy & Policy',
        intro: '[Explain how program leaders can engage in advocacy for afterschool.]',
        blocks: [
          {
            type: 'text',
            body: '[Why advocacy matters and how even a small program can make a difference.]',
          },
          {
            type: 'callout',
            variant: 'info',
            heading: 'Get connected',
            body: '[Add info on state and national advocacy networks here.]',
          },
        ],
      },
    ],
  },
]

/** Flat lookup: phase id → phase object */
export const phaseById = Object.fromEntries(phases.map((p) => [p.id, p]))

/** Flat lookup: section id → { phase, section } */
export const sectionById = Object.fromEntries(
  phases.flatMap((phase) =>
    phase.sections.map((section) => [section.id, { phase, section }])
  )
)
