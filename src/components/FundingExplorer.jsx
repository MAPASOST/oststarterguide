import { useState } from 'react'
import styles from './FundingExplorer.module.css'

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */

const CATEGORIES = [
  { id: 'all',            label: 'All Types',      icon: null  },
  { id: 'grants',         label: 'Grants',         icon: '📄'  },
  { id: 'earned-revenue', label: 'Earned Revenue', icon: '💳'  },
  { id: 'fundraising',    label: 'Fundraising',    icon: '🤝'  },
]

const FUNDING_SOURCES = [
  /* ── Grants ── */
  {
    id: '21cclc',
    name: '21st Century Community Learning Centers',
    shortName: '21st CCLC',
    category: 'grants',
    level: 'Federal',
    suitability: ['established'],
    description:
      "The federal government's primary dedicated funding stream for afterschool programs. Administered through states, 21st CCLC awards go to community organizations partnering with high-need schools to offer academic enrichment, safe environments, and family engagement outside the school day.",
    pros: [
      'Multi-year awards (typically 3–5 years)',
      'Covers staffing, curriculum, enrichment, and family engagement',
      'Builds formal school-community partnerships',
    ],
    cons: [
      'Highly competitive — most states fund fewer than 20% of applicants',
      'Requires strong data infrastructure and outcome reporting',
      'Strong preference for programs with demonstrated track records',
    ],
    learnMore: {
      label: 'Learn about 21st CCLC',
      href: 'https://oese.ed.gov/offices/office-of-formula-grants/school-support-and-accountability/21st-century-community-learning-centers/',
    },
  },
  {
    id: 'title-i',
    name: 'Title I — Improving Basic Programs',
    shortName: 'Title I (ESEA)',
    category: 'grants',
    level: 'Federal',
    suitability: ['new', 'established'],
    description:
      "Formula grants distributed to schools and districts serving high concentrations of students in poverty. Title I funds can support extended learning, tutoring, and family engagement when aligned with the school's improvement goals. Access typically requires a formal partnership with a Title I school.",
    pros: [
      'Formula-based — not competitive, available to all qualifying schools',
      'Can fund extended learning, tutoring, and family engagement',
      'Tied to school goals, which strengthens your partnership',
    ],
    cons: [
      'Requires the school or district to serve as fiscal agent',
      "Use must align with the school's improvement plan",
      'Subject to federal education budget cycles',
    ],
    learnMore: {
      label: 'Title I overview — ed.gov',
      href: 'https://www.ed.gov/laws-and-policy/laws/esea/title-i-improving-basic-programs-operated-by-local-educational-agencies',
    },
  },
  {
    id: 'state-grants',
    name: 'State Afterschool Grants',
    shortName: null,
    category: 'grants',
    level: 'State',
    suitability: ['new', 'established'],
    description:
      'Most states run competitive grant programs for afterschool and expanded learning, often funded through state education budgets or federal block grants. Award size, eligibility, and timelines vary significantly. Your State Afterschool Network (SAN) is the best starting point for current opportunities.',
    pros: [
      'Closer relationship with funders than federal programs',
      'Often aligned with state education priorities',
      'Some states have programs specifically for new programs',
    ],
    cons: [
      'Availability and amounts vary widely by state and year',
      'May require matching funds or cost-sharing',
      'Research requirements for your state carefully',
    ],
    learnMore: {
      label: 'Find your State Afterschool Network',
      href: 'https://www.statenetworks.org',
    },
  },
  {
    id: 'cacfp',
    name: 'USDA Child & Adult Care Food Program',
    shortName: 'CACFP',
    category: 'grants',
    level: 'Federal',
    suitability: ['new', 'established'],
    description:
      'Reimburses eligible afterschool programs for serving nutritious meals and snacks to youth through age 18 in low-income areas. CACFP does not fund operations — but it substantially reduces per-child costs, stretching every other funding source further.',
    pros: [
      'Available as soon as your program is licensed and serving meals',
      'Reduces per-child food costs and supports nutrition standards',
      'Can be combined with any other funding source',
    ],
    cons: [
      'Must document meals per federal nutrition standards',
      'Income eligibility verification and paperwork required',
      'Reimbursement rates may not fully cover food costs in high-cost areas',
    ],
    learnMore: {
      label: 'CACFP overview — USDA',
      href: 'https://www.fns.usda.gov/cacfp/child-adults-care-food-program',
    },
  },

  /* ── Earned Revenue ── */
  {
    id: 'fee-for-service',
    name: 'Fee-for-Service / Sliding Scale Tuition',
    shortName: null,
    category: 'earned-revenue',
    level: 'Local',
    suitability: ['new', 'established'],
    description:
      'Families pay tuition or program fees directly, often on a sliding scale based on household income. This builds family investment in the program while creating a revenue stream that grows with enrollment. Flexible options — daily, weekly, sibling discounts, hardship waivers — keep care accessible.',
    pros: [
      'Revenue grows directly with enrollment',
      'Families feel ownership and investment in the program',
      'Flexible pricing can serve families across income levels',
    ],
    cons: [
      'Hard to project revenue before enrollment is known',
      'Low-income communities may need subsidies to sustain participation',
      'Requires fee collection systems and financial aid administration',
    ],
    learnMore: {
      label: 'Setting program fees — Afterschool Alliance',
      href: 'https://afterschoolalliance.org',
    },
  },
  {
    id: 'ccdf',
    name: 'Child Care & Development Fund Subsidy',
    shortName: 'CCDF / Child Care Subsidy',
    category: 'earned-revenue',
    level: 'Federal / State',
    suitability: ['new', 'established'],
    description:
      "Federal block grant administered by states that subsidizes child care for low-income working families. Eligible afterschool programs receive reimbursements from the state on behalf of enrolled children, allowing you to serve families who couldn't otherwise afford care while receiving predictable revenue.",
    pros: [
      'Enables low-income families to access and afford your program',
      'Stable, predictable reimbursement for enrolled subsidy recipients',
      'Available to licensed providers meeting state standards',
    ],
    cons: [
      'Must meet state licensing and quality requirements to participate',
      'Reimbursement rates set by state — may not cover full costs',
      'Subsidy payments may lag 30–90 days behind services rendered',
    ],
    learnMore: {
      label: 'CCDF overview — childcare.gov',
      href: 'https://www.childcare.gov/consumer-education/get-help-paying-for-child-care',
    },
  },
  {
    id: 'gov-contract',
    name: 'Government Service Contract',
    shortName: null,
    category: 'earned-revenue',
    level: 'State / Local',
    suitability: ['established'],
    description:
      'School districts, city agencies, and state departments contract with community organizations to provide afterschool services at a negotiated rate. Contracts provide stable, multi-year revenue and validate your program\'s credibility — but require a competitive RFP process and a solid track record.',
    pros: [
      'Stable, multi-year revenue — often the largest single source',
      'Builds institutional credibility and visibility',
      'Can cover a significant portion of total program costs',
    ],
    cons: [
      'Competitive RFP process; strong operational history required',
      'Reporting, compliance, and audit requirements are substantial',
      'Contracts may be subject to budget cuts or non-renewal',
    ],
    learnMore: {
      label: 'Government contracting basics — youth.gov',
      href: 'https://youth.gov/youth-topics/afterschool-programs/funding',
    },
  },

  /* ── Fundraising ── */
  {
    id: 'corp-foundation',
    name: 'Corporate & Foundation Grants',
    shortName: null,
    category: 'fundraising',
    level: 'Local / National',
    suitability: ['new', 'established'],
    description:
      'Private foundations, community foundations, and corporate giving programs award grants to nonprofits aligned with their priorities. Relationship-building is as important as the written proposal. Community foundations are typically the most accessible starting point for new programs.',
    pros: [
      'No repayment required; can fund startup costs and equipment',
      'Foundations often provide technical assistance and connections',
      'Community foundations frequently support emerging programs',
    ],
    cons: [
      'Competitive; typically 1–2 year award cycles',
      'May restrict funds to specific activities or populations',
      'Requires active relationship management and stewardship',
    ],
    learnMore: {
      label: 'Foundation Center — Candid',
      href: 'https://candid.org',
    },
  },
  {
    id: 'fiscal-sponsorship',
    name: 'Fiscal Sponsorship',
    shortName: null,
    category: 'fundraising',
    level: 'Local',
    suitability: ['new'],
    description:
      'A nonprofit with 501(c)(3) status acts as the official recipient of grant funds and tax-deductible donations on your behalf, giving you the credibility of a fiscal agent while you build toward independent nonprofit status. Especially valuable in the first 1–2 years when forming your own organization is premature or too costly.',
    pros: [
      'Access grant funding and tax-deductible donations immediately',
      'Faster launch — no waiting for IRS determination letter',
      'Reduces early administrative burden',
    ],
    cons: [
      'Sponsor typically charges 5–15% administrative fee',
      'Limited direct control over funds',
      'Must eventually transition to independent nonprofit status',
    ],
    learnMore: {
      label: 'Understanding fiscal sponsorship — Candid',
      href: 'https://learning.candid.org/resources/knowledge-base/fiscal-sponsorship/',
    },
  },
  {
    id: 'individual-giving',
    name: 'Individual Giving & Community Events',
    shortName: null,
    category: 'fundraising',
    level: 'Local',
    suitability: ['new', 'established'],
    description:
      'Community fundraising through direct appeals, annual fund campaigns, crowdfunding, and events builds a broad base of local support that sustains the program when grants are unavailable. Events also increase visibility and grow your network of community advocates and champions.',
    pros: [
      'Builds community ownership and investment in the program',
      'Diversifies revenue — less dependency on any single source',
      'Events increase visibility and grow your advocate network',
    ],
    cons: [
      'Time and staff-intensive; can strain a small team',
      'Revenue is unpredictable and usually modest in early years',
      'Requires donor management and gift-processing infrastructure',
    ],
    learnMore: {
      label: 'Fundraising for afterschool — Afterschool Alliance',
      href: 'https://afterschoolalliance.org',
    },
  },
]

/* ─────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────── */

const CATEGORY_LABEL = {
  grants:          'Grant',
  'earned-revenue': 'Earned Revenue',
  fundraising:     'Fundraising',
}

/* ─────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────── */

export default function FundingExplorer() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [stage, setStage] = useState('new')

  const filtered = FUNDING_SOURCES.filter(src => {
    const catMatch = activeCategory === 'all' || src.category === activeCategory
    const stageMatch = src.suitability.includes(stage)
    return catMatch && stageMatch
  })

  return (
    <div className={styles.explorer}>
      {/* ── Explorer header ── */}
      <div className={styles.explorerHead}>
        <h3 className={styles.explorerTitle}>Funding Explorer</h3>
        <p className={styles.explorerSubtitle}>
          Filter by type and your program stage to surface the most relevant options.
        </p>
      </div>

      {/* ── Filters ── */}
      <div className={styles.filterBar}>
        {/* Category pills */}
        <div className={styles.categoryPills} role="group" aria-label="Filter by funding type">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={[
                styles.catBtn,
                activeCategory === cat.id ? styles.catBtnActive : '',
                cat.id !== 'all' ? styles[`cat-${cat.id}`] : '',
              ].join(' ')}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.icon && <span className={styles.catBtnIcon} aria-hidden="true">{cat.icon}</span>}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stage toggle */}
        <div className={styles.stageToggle} role="group" aria-label="Program stage">
          <button
            className={[styles.stageBtn, stage === 'new' ? styles.stageBtnActive : ''].join(' ')}
            onClick={() => setStage('new')}
            aria-pressed={stage === 'new'}
          >
            New Program
          </button>
          <button
            className={[styles.stageBtn, stage === 'established' ? styles.stageBtnActive : ''].join(' ')}
            onClick={() => setStage('established')}
            aria-pressed={stage === 'established'}
          >
            Established
          </button>
        </div>
      </div>

      {/* ── Result count ── */}
      <p className={styles.resultCount} aria-live="polite" aria-atomic="true">
        {filtered.length === 0
          ? 'No options match these filters'
          : `${filtered.length} funding option${filtered.length !== 1 ? 's' : ''}`}
      </p>

      {/* ── Card grid ── */}
      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map(src => (
            <FundingCard key={src.id} source={src} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyText}>
            No funding sources match these filters. Try selecting "All Types" or switching program stage.
          </p>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   FundingCard
───────────────────────────────────────────────────────── */

function FundingCard({ source }) {
  return (
    <article className={[styles.card, styles[`cat-${source.category}`]].join(' ')}>
      {/* ── Meta row ── */}
      <div className={styles.cardMeta}>
        <span className={[styles.catBadge, styles[`catBadge-${source.category}`]].join(' ')}>
          {CATEGORY_LABEL[source.category]}
        </span>
        <span className={styles.levelBadge}>{source.level}</span>
        <div className={styles.stagePills}>
          {source.suitability.includes('new') && (
            <span className={styles.stagePill}>New Program</span>
          )}
          {source.suitability.includes('established') && (
            <span className={styles.stagePill}>Established</span>
          )}
        </div>
      </div>

      {/* ── Title ── */}
      <h4 className={styles.cardTitle}>{source.name}</h4>
      {source.shortName && source.shortName !== source.name && (
        <p className={styles.cardAlias}>{source.shortName}</p>
      )}

      {/* ── Description ── */}
      <p className={styles.cardDesc}>{source.description}</p>

      {/* ── Pros / Cons ── */}
      <div className={styles.prosConsRow}>
        <div className={styles.prosCol}>
          <p className={styles.prosConsLabel}>
            <span className={styles.prosIcon} aria-hidden="true">✓</span> Pros
          </p>
          <ul className={styles.prosList}>
            {source.pros.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        <div className={styles.consCol}>
          <p className={styles.prosConsLabel}>
            <span className={styles.consIcon} aria-hidden="true">✗</span> Cons
          </p>
          <ul className={styles.consList}>
            {source.cons.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className={styles.cardFooter}>
        <a
          href={source.learnMore.href}
          className={styles.learnMore}
          target="_blank"
          rel="noopener noreferrer"
        >
          {source.learnMore.label}
          <span aria-hidden="true"> →</span>
        </a>
      </div>
    </article>
  )
}
