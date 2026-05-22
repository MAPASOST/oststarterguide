import { useState, useMemo } from 'react'
import styles from './ResourceLibrary.module.css'

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */

const CATEGORIES = [
  { id: 'all',      label: 'All Types' },
  { id: 'template', label: 'Template',  icon: '📄' },
  { id: 'training', label: 'Training',  icon: '🎓' },
  { id: 'tool',     label: 'Tool',      icon: '🔧' },
  { id: 'toolkit',  label: 'Toolkit',   icon: '🧰' },
  { id: 'funding',  label: 'Funding',   icon: '💰' },
]

const PHASES = [
  { id: 'all',   label: 'All Phases' },
  { id: 'learn', label: 'Learn', colorKey: 'blue'  },
  { id: 'plan',  label: 'Plan',  colorKey: 'teal'  },
  { id: 'grow',  label: 'Grow',  colorKey: 'green' },
]

const RESOURCES = [
  {
    id: 'needs-assessment',
    title: 'Needs Assessment Template',
    description: 'A structured template for mapping your target audience, areas of need, and potential data sources. Mirrors the Audience | Need | Data Source format recommended by CTNCY and Beyond the Bell.',
    category: 'tool',
    phase: 'learn',
    source: 'CTNCY',
    url: 'https://www.ctncy.org',
  },
  {
    id: 'mou-template',
    title: 'MOU Template',
    description: 'A sample Memorandum of Understanding for formalizing partnerships with schools, churches, community centers, and other organizations. Covers roles, responsibilities, data sharing, and exit terms.',
    category: 'template',
    phase: 'learn',
    source: 'CTNCY',
    url: 'https://www.ctncy.org',
  },
  {
    id: 'parent-handbook',
    title: 'Sample Parent & Family Handbook',
    description: 'A starter handbook template covering program policies, daily schedule, behavior expectations, emergency procedures, pick-up protocols, and family communication channels.',
    category: 'template',
    phase: 'plan',
    source: 'Afterschool Alliance',
    url: 'https://afterschoolalliance.org',
  },
  {
    id: 'policy-procedure',
    title: 'Policy & Procedure Template',
    description: 'A comprehensive policy manual template addressing safety, staff conduct, incident reporting, medication administration, attendance, mandatory reporting, and behavior management.',
    category: 'template',
    phase: 'plan',
    source: 'CTNCY',
    url: 'https://www.ctncy.org',
  },
  {
    id: 'grant-webinar',
    title: 'Grant Writing Webinar Series',
    description: 'A multi-part webinar series from the federal You for Youth platform covering grant research, proposal writing, logic models, budget narratives, and funder reporting for afterschool programs.',
    category: 'training',
    phase: 'learn',
    source: 'You for Youth (Y4Y)',
    url: 'https://y4y.ed.gov',
  },
  {
    id: 'fiscal-management',
    title: 'Fiscal Management Planning Checklist',
    description: 'Step-by-step checklist for planning, tracking, and reporting program finances. Covers budget creation, internal controls, cost allocation, in-kind contributions, and audit preparation.',
    category: 'tool',
    phase: 'learn',
    source: 'You for Youth (Y4Y)',
    url: 'https://y4y.ed.gov',
  },
  {
    id: 'youth-voice',
    title: 'Youth Voice Toolkit',
    description: 'Practical frameworks and facilitation guides for incorporating youth input into program design, daily operations, governance, and evaluation. Includes youth survey templates and advisory structure guides.',
    category: 'toolkit',
    phase: 'grow',
    source: 'youth.gov',
    url: 'https://youth.gov/youth-topics/afterschool-programs',
  },
  {
    id: 'summer-recruitment',
    title: 'Summer Learning Recruitment Guide',
    description: 'Research-backed outreach and recruitment strategies for attracting and retaining families in summer and expanded learning programs, with messaging frameworks and marketing materials.',
    category: 'tool',
    phase: 'plan',
    source: 'Afterschool Alliance',
    url: 'https://afterschoolalliance.org',
  },
  {
    id: 'family-engagement',
    title: 'Family Engagement Toolkit',
    description: 'A comprehensive framework and set of practical tools for building authentic family-school-program partnerships, including workshop curricula, communication templates, and engagement ladders.',
    category: 'toolkit',
    phase: 'grow',
    source: 'NAFSCE / National PIRC',
    url: 'https://nafsce.org',
  },
  {
    id: 'swot-template',
    title: 'SWOT Analysis Template',
    description: 'A facilitated template for conducting a program-wide SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) as part of an annual or multi-year strategic planning process.',
    category: 'template',
    phase: 'grow',
    source: 'Beyond the Bell',
    url: 'https://www.beyondthebell.org',
  },
  {
    id: '21cclc-guide',
    title: '21st CCLC Application Overview',
    description: 'A comprehensive guide to the 21st Century Community Learning Centers grant program — the largest federal funding stream for afterschool programs — covering eligibility, timeline, and application strategy.',
    category: 'funding',
    phase: 'learn',
    source: 'Afterschool Alliance',
    url: 'https://www.afterschoolalliance.org/21stCLC.cfm',
  },
  {
    id: 'beyond-the-bell',
    title: 'Beyond the Bell Toolkit (4th ed.)',
    description: 'The American Institutes for Research\'s flagship afterschool toolkit: 55+ tools covering needs assessment, program design, staffing, family engagement, evaluation, and continuous improvement.',
    category: 'toolkit',
    phase: 'learn',
    source: 'AIR / Beyond the Bell',
    url: 'https://www.beyondthebell.org',
  },
  {
    id: 'cacfp-guide',
    title: 'CACFP Afterschool Meals Program Guide',
    description: 'USDA\'s guide to participating in the Child & Adult Care Food Program, which reimburses eligible afterschool programs for serving nutritious meals and snacks to youth through age 18.',
    category: 'funding',
    phase: 'plan',
    source: 'USDA Food and Nutrition Service',
    url: 'https://www.fns.usda.gov/cacfp/child-adults-care-food-program',
  },
  {
    id: 'background-checks',
    title: 'Background Check Requirements by State',
    description: 'A navigable database of state-specific background check requirements for staff, volunteers, and vendors working with youth, including check types, disqualifying offenses, and renewal timelines.',
    category: 'tool',
    phase: 'plan',
    source: 'CTNCY',
    url: 'https://www.ctncy.org',
  },
  {
    id: 'staff-orientation',
    title: 'Staff Orientation Curriculum Template',
    description: 'An editable orientation curriculum covering program philosophy, youth development frameworks, behavior management, mandated reporter training, policies, and emergency procedures for new staff.',
    category: 'template',
    phase: 'plan',
    source: 'You for Youth (Y4Y)',
    url: 'https://y4y.ed.gov',
  },
  {
    id: 'ctqsat',
    title: 'Program Quality Self-Assessment (CTQSAT)',
    description: 'CTNCY\'s validated program quality self-assessment tool covering safe environment, supportive relationships, engagement, skill building, and family and community partnerships.',
    category: 'tool',
    phase: 'grow',
    source: 'CTNCY',
    url: 'https://www.ctncy.org',
  },
  {
    id: 'logic-model',
    title: 'Logic Model Builder',
    description: 'A guided worksheet for constructing a program logic model linking inputs, activities, outputs, and short/long-term outcomes. Essential for grant applications and evaluation planning.',
    category: 'tool',
    phase: 'learn',
    source: 'Child Trends',
    url: 'https://www.childtrends.org',
  },
  {
    id: 'asset-mapping',
    title: 'Community Asset Mapping Guide',
    description: 'A facilitated step-by-step process for identifying and documenting community strengths, existing programs, physical spaces, relationships, and resources before launching a new program.',
    category: 'tool',
    phase: 'learn',
    source: 'Rural School and Community Trust',
    url: 'https://www.ruraledu.org',
  },
  {
    id: 'state-networks',
    title: 'State Afterschool Network Directory',
    description: 'A directory of all 50 State Afterschool Networks (SANs) with direct links, contact information, and state-specific funding opportunities, technical assistance, and policy resources.',
    category: 'tool',
    phase: 'learn',
    source: 'Afterschool Alliance',
    url: 'https://www.statenetworks.org',
  },
  {
    id: 'budget-template',
    title: 'Afterschool Program Budget Template',
    description: 'A multi-year budget planning worksheet with pre-built expense categories (staffing, space, supplies, food, transportation, evaluation) and revenue sources for projecting program costs.',
    category: 'template',
    phase: 'learn',
    source: 'You for Youth (Y4Y)',
    url: 'https://y4y.ed.gov',
  },
  {
    id: 'grant-finder',
    title: 'Candid Grant Finder (Formerly Foundation Center)',
    description: 'A searchable database of philanthropic funding opportunities from private foundations, corporate giving programs, and public charities, searchable by geography, population, and program area.',
    category: 'funding',
    phase: 'learn',
    source: 'Candid',
    url: 'https://candid.org',
  },
  {
    id: 'pd-planning',
    title: 'Professional Development Planning Guide',
    description: 'A framework and set of planning tools for building a year-round staff PD calendar, including orientation, booster sessions, topical trainings, and external conference opportunities.',
    category: 'training',
    phase: 'grow',
    source: 'You for Youth (Y4Y)',
    url: 'https://y4y.ed.gov',
  },
  {
    id: 'evaluation-workbook',
    title: 'Evaluation Planning Workbook',
    description: 'A step-by-step guide to designing a meaningful program evaluation: selecting outcomes, identifying data sources, choosing instruments, planning data collection, and writing a reporting schedule.',
    category: 'tool',
    phase: 'grow',
    source: 'Child Trends',
    url: 'https://www.childtrends.org',
  },
  {
    id: 'licensing-database',
    title: 'Child Care Licensing Requirements by State',
    description: 'A state-by-state database of child care and afterschool licensing requirements, exemptions, staff ratios, facility standards, and renewal processes maintained by the National Association for Regulatory Administration.',
    category: 'tool',
    phase: 'plan',
    source: 'NARA / childcare.gov',
    url: 'https://www.childcare.gov/consumer-education/find-child-care',
  },
  {
    id: 'shared-space',
    title: 'Shared Space Usage Agreement Template',
    description: 'A legal-ready template for formalizing shared space arrangements with schools, churches, and community organizations — covering usage schedules, off-limits areas, damage protocols, and compensation.',
    category: 'template',
    phase: 'plan',
    source: 'CTNCY',
    url: 'https://www.ctncy.org',
  },
  {
    id: 'usda-rural',
    title: 'USDA Rural Development Grant Guide',
    description: 'A guide to federal grant and loan programs specifically for rural communities, including Community Facilities grants, Rural Business grants, and Distance Learning & Telemedicine funds.',
    category: 'funding',
    phase: 'learn',
    source: 'USDA Rural Development',
    url: 'https://www.rd.usda.gov/programs-services/community-facilities/community-facilities-direct-loan-grant-program',
  },
]

/* ─────────────────────────────────────────────────────────
   Category / phase metadata
───────────────────────────────────────────────────────── */

const CAT_META = {
  template: { label: 'Template', icon: '📄' },
  training:  { label: 'Training',  icon: '🎓' },
  tool:      { label: 'Tool',      icon: '🔧' },
  toolkit:   { label: 'Toolkit',   icon: '🧰' },
  funding:   { label: 'Funding',   icon: '💰' },
}

const PHASE_META = {
  learn: { label: 'Learn', colorKey: 'blue'  },
  plan:  { label: 'Plan',  colorKey: 'teal'  },
  grow:  { label: 'Grow',  colorKey: 'green' },
}

/* ─────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────── */

export default function ResourceLibrary() {
  const [query, setQuery]   = useState('')
  const [cat, setCat]       = useState('all')
  const [phase, setPhase]   = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return RESOURCES.filter(r => {
      if (cat !== 'all' && r.category !== cat) return false
      if (phase !== 'all' && r.phase !== phase) return false
      if (q && !r.title.toLowerCase().includes(q) && !r.description.toLowerCase().includes(q) && !r.source.toLowerCase().includes(q)) return false
      return true
    })
  }, [query, cat, phase])

  function clearAll() {
    setQuery('')
    setCat('all')
    setPhase('all')
  }

  const hasFilters = query || cat !== 'all' || phase !== 'all'

  return (
    <div className={styles.library}>
      {/* ── Page header ── */}
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Resource Library</h1>
          <p className={styles.pageSubtitle}>
            Templates, tools, toolkits, training, and funding guides — drawn from leading afterschool organizations.
          </p>
        </div>
        <span className={styles.totalBadge}>{RESOURCES.length} resources</span>
      </header>

      {/* ── Filters ── */}
      <div className={styles.filterPanel} data-print-hide>
        {/* Search */}
        <div className={styles.searchRow}>
          <span className={styles.searchIcon} aria-hidden="true">🔍</span>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search by title, description, or source…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search resources"
          />
          {query && (
            <button className={styles.clearBtn} onClick={() => setQuery('')} aria-label="Clear search">✕</button>
          )}
        </div>

        {/* Category chips */}
        <div className={styles.filterRow}>
          <span className={styles.filterRowLabel}>Type</span>
          <div className={styles.chipGroup} role="group" aria-label="Filter by category">
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                className={[styles.chip, cat === c.id ? styles.chipActive : '', c.id !== 'all' ? styles[`chip-${c.id}`] : ''].join(' ')}
                onClick={() => setCat(c.id)}
                aria-pressed={cat === c.id}
              >
                {c.icon && <span aria-hidden="true">{c.icon}</span>}
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Phase chips */}
        <div className={styles.filterRow}>
          <span className={styles.filterRowLabel}>Phase</span>
          <div className={styles.chipGroup} role="group" aria-label="Filter by phase">
            {PHASES.map(p => (
              <button
                key={p.id}
                className={[styles.chip, phase === p.id ? styles.chipActive : '', p.id !== 'all' ? styles[`chip-phase-${p.colorKey}`] : ''].join(' ')}
                onClick={() => setPhase(p.id)}
                aria-pressed={phase === p.id}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Result count + clear ── */}
      <div className={styles.resultRow} data-print-hide>
        <p className={styles.resultCount} aria-live="polite" aria-atomic="true">
          {filtered.length === RESOURCES.length
            ? `${RESOURCES.length} resources`
            : `${filtered.length} of ${RESOURCES.length} resources`}
        </p>
        {hasFilters && (
          <button className={styles.clearAllBtn} onClick={clearAll}>Clear filters</button>
        )}
      </div>

      {/* ── Grid ── */}
      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map(r => <ResourceCard key={r.id} resource={r} />)}
        </div>
      ) : (
        <div className={styles.empty}>
          <span className={styles.emptyIcon} aria-hidden="true">📭</span>
          <p className={styles.emptyTitle}>No resources match these filters</p>
          <p className={styles.emptyHint}>Try broadening your search or clearing some filters.</p>
          <button className={styles.clearAllBtn} onClick={clearAll}>Clear all filters</button>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Resource card
───────────────────────────────────────────────────────── */

function ResourceCard({ resource }) {
  const cat   = CAT_META[resource.category]
  const phase = PHASE_META[resource.phase]

  return (
    <article className={[styles.card, styles[`card-${resource.category}`]].join(' ')}>
      {/* Badges */}
      <div className={styles.cardBadges}>
        <span className={[styles.catBadge, styles[`catBadge-${resource.category}`]].join(' ')}>
          <span aria-hidden="true">{cat.icon}</span> {cat.label}
        </span>
        <span className={[styles.phaseBadge, styles[`phaseBadge-${phase.colorKey}`]].join(' ')}>
          {phase.label}
        </span>
      </div>

      {/* Content */}
      <h2 className={styles.cardTitle}>{resource.title}</h2>
      <p className={styles.cardDesc}>{resource.description}</p>

      {/* Footer */}
      <div className={styles.cardFooter}>
        <span className={styles.cardSource}>{resource.source}</span>
        <a
          href={resource.url}
          className={[styles.cardLink, styles[`cardLink-${resource.category}`]].join(' ')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open resource <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}
