import styles from './HeroPage.module.css'

const PHASES = [
  {
    colorKey: 'blue',
    icon: '🎓',
    label: 'Learn',
    tagline: 'Know your community',
    desc: 'Conduct a needs assessment, map community assets, build partnerships, explore funding streams, and draft your mission.',
  },
  {
    colorKey: 'teal',
    icon: '📋',
    label: 'Plan',
    tagline: 'Build your program',
    desc: 'Design curriculum, hire and train staff, secure a facility, write policies, and recruit students and families.',
  },
  {
    colorKey: 'green',
    icon: '🌱',
    label: 'Grow',
    tagline: 'Sustain and improve',
    desc: 'Launch with families, evaluate your impact, engage the broader community, deepen your funding base, and expand.',
  },
]

const FEATURES = [
  {
    icon: '🔍',
    label: 'Needs Assessment Builder',
    desc: 'Step-by-step wizard to identify your audience, map areas of need, and export a ready-to-use assessment outline.',
  },
  {
    icon: '📅',
    label: 'Planning Timeline',
    desc: 'Three-year Gantt chart and mobile stepper with expandable action items you can mark complete as you go.',
  },
  {
    icon: '💰',
    label: 'Funding Explorer',
    desc: 'Interactive cards for 10 funding types — filterable by category and whether your program is new or established.',
  },
  {
    icon: '📚',
    label: 'Resource Library',
    desc: '26 curated templates, toolkits, training guides, and funding resources from leading afterschool organizations.',
  },
  {
    icon: '✅',
    label: 'Phase Checklists',
    desc: 'Milestone checklists at the end of each phase so nothing slips through the cracks before you move forward.',
  },
  {
    icon: '🌾',
    label: 'Rural Community Tips',
    desc: 'Toggle on context-specific guidance tailored to programs starting in rural or under-resourced communities.',
  },
]

export default function HeroPage({ onStart }) {
  return (
    <div className={styles.hero}>

      {/* ── Banner ── */}
      <section className={styles.banner} aria-labelledby="hero-heading">
        <div className={styles.bannerInner}>
          <p className={styles.eyebrow}>Out-of-School Time Starter Guide</p>
          <h1 id="hero-heading" className={styles.headline}>
            Your afterschool program<br className={styles.br} /> starts here.
          </h1>
          <p className={styles.subhead}>
            A practical, step-by-step guide for community leaders, school staff, nonprofit organizers,
            and advocates — from your first community conversation to a fully operating program.
          </p>
          <button
            className={styles.ctaPrimary}
            onClick={onStart}
            aria-label="Start the guide — begin with the Learn phase"
          >
            Start Here <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className={styles.section} aria-labelledby="who-heading">
        <h2 id="who-heading" className={styles.sectionTitle}>Who this guide is for</h2>
        <ul className={styles.audienceList} role="list">
          {[
            ['🏘️', 'Community organizers',   'building programs from the ground up'],
            ['🏫', 'School administrators',  'extending learning time for their students'],
            ['🤝', 'Nonprofit leaders',      'expanding into afterschool services'],
            ['👪', 'Parents & advocates',    'turning community need into a real program'],
            ['🌱', 'First-time program staff','navigating regulations, grants, and logistics'],
          ].map(([icon, title, desc]) => (
            <li key={title} className={styles.audienceItem}>
              <span className={styles.audienceIcon} aria-hidden="true">{icon}</span>
              <span>
                <span className={styles.audienceTitle}>{title}</span>
                <span className={styles.audienceDesc}> — {desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Three-phase roadmap ── */}
      <section className={styles.section} aria-labelledby="phases-heading">
        <h2 id="phases-heading" className={styles.sectionTitle}>A three-phase roadmap</h2>
        <div className={styles.phaseCards} role="list">
          {PHASES.map((p, i) => (
            <article
              key={p.label}
              role="listitem"
              className={`${styles.phaseCard} ${styles[`phaseCard-${p.colorKey}`]}`}
            >
              <div className={styles.phaseCardHeader}>
                <span className={styles.phaseNum} aria-hidden="true">Phase {i + 1}</span>
                <span className={styles.phaseCardIcon} aria-hidden="true">{p.icon}</span>
              </div>
              <h3 className={styles.phaseCardLabel}>{p.label}</h3>
              <p className={styles.phaseCardTagline}>{p.tagline}</p>
              <p className={styles.phaseCardDesc}>{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Interactive features ── */}
      <section className={styles.section} aria-labelledby="features-heading">
        <h2 id="features-heading" className={styles.sectionTitle}>Built-in tools &amp; resources</h2>
        <ul className={styles.featureGrid} role="list">
          {FEATURES.map(f => (
            <li key={f.label} className={styles.featureItem}>
              <span className={styles.featureIcon} aria-hidden="true">{f.icon}</span>
              <div>
                <span className={styles.featureTitle}>{f.label}</span>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── CTA footer ── */}
      <section className={styles.ctaFooter} aria-label="Get started with the guide">
        <p className={styles.ctaFooterText}>
          Ready to build something meaningful for your community?
        </p>
        <button
          className={styles.ctaSecondary}
          onClick={onStart}
          aria-label="Start the guide — begin with the Learn phase"
        >
          Begin with the Learn Phase <span aria-hidden="true">→</span>
        </button>
        <p className={styles.ctaHint}>Free to use · No account required · No data collected</p>
      </section>

    </div>
  )
}
