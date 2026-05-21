import { useState } from 'react'
import styles from './PlanningTimeline.module.css'

/* ─────────────────────────────────────────────────────────
   Constants
───────────────────────────────────────────────────────── */

const MONTH_LABELS = ['Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug']

/* month 1 = Sep … 12 = Aug (school-year order) */
const YEARS = [
  {
    id: 'year1',
    label: 'Year 1',
    subtitle: 'Building the Foundation',
    colorKey: 'blue',
    phases: [
      {
        id: 'y1-learn',
        label: 'Learn',
        monthLabel: 'Sep – Dec',
        monthStart: 1, monthEnd: 4,
        icon: '🎓',
        actions: [
          'Conduct community surveys with parents, youth, and local stakeholders',
          'Host listening sessions and focus groups with families and school staff',
          'Map community assets and identify existing programs and service gaps',
          'Research licensing and compliance requirements for your state',
          'Compile findings into a formal needs assessment document',
          'Form an advisory committee or steering group',
        ],
      },
      {
        id: 'y1-fund',
        label: 'Fund',
        monthLabel: 'Jan – Aug',
        monthStart: 5, monthEnd: 12,
        icon: '💰',
        actions: [
          'Build a detailed budget with income projections and expense categories',
          'Identify federal, state, and local grant opportunities (21st CCLC, Title I, state grants)',
          'Research community foundations, corporate funders, and individual donors',
          'Draft and submit grant applications; designate a grant writer',
          'Evaluate a fee-for-service or sliding-scale tuition model',
          'Consider a fiscal sponsorship arrangement until nonprofit status is achieved',
        ],
      },
      {
        id: 'y1-design',
        label: 'Program Design',
        monthLabel: 'Feb – Mar',
        monthStart: 6, monthEnd: 7,
        icon: '🏗️',
        actions: [
          'Define your program philosophy and youth development framework',
          'Map a daily schedule with structured activities, homework time, and enrichment',
          'Establish age groupings and target staff-to-child ratios',
          'Select curriculum and enrichment activities aligned with school goals',
          'Determine your transportation plan and attendance procedures',
        ],
      },
      {
        id: 'y1-plan',
        label: 'Plan',
        monthLabel: 'Apr – Jun',
        monthStart: 8, monthEnd: 10,
        icon: '📋',
        actions: [
          'Identify, tour, and secure a licensed program location',
          'Draft your policies and procedures handbook',
          'Post job listings and begin interviewing lead staff',
          'Complete background checks for all staff and volunteers',
          'Register with state licensing and prepare for your first inspection',
          'Develop enrollment forms, emergency cards, and family handbooks',
        ],
      },
      {
        id: 'y1-engage',
        label: 'Engage',
        monthLabel: 'Jul – Aug',
        monthStart: 11, monthEnd: 12,
        icon: '📣',
        actions: [
          'Launch your community recruitment and outreach campaign',
          'Host information nights and school visits for prospective families',
          'Finalize staff hiring and conduct pre-launch orientation and training',
          'Conduct a soft launch or trial day before the official opening',
          'Collect enrollment paperwork, emergency contacts, and family consents',
        ],
      },
    ],
  },

  {
    id: 'year2',
    label: 'Year 2',
    subtitle: 'Launch & Learn',
    colorKey: 'teal',
    phases: [
      {
        id: 'y2-launch',
        label: 'Launch',
        monthLabel: 'Sep',
        monthStart: 1, monthEnd: 1,
        icon: '🚀',
        actions: [
          'Open doors for the first day of programming',
          'Implement enrollment, sign-in, and sign-out procedures',
          'Begin daily schedule and introduce staff to students and families',
          'Distribute family handbooks and communication protocols',
          'Begin collecting attendance, participation, and incident data',
        ],
      },
      {
        id: 'y2-evaluate',
        label: 'Evaluate',
        monthLabel: 'Jan – Mar',
        monthStart: 5, monthEnd: 7,
        icon: '📊',
        actions: [
          'Administer mid-year participant and family satisfaction surveys',
          'Review attendance, participation, and academic progress data',
          'Hold staff reflective practice sessions and team check-ins',
          'Identify program strengths, challenges, and adjustments needed',
          'Share early outcomes in a brief progress report to funders and partners',
        ],
      },
      {
        id: 'y2-grow',
        label: 'Grow',
        monthLabel: 'May – Aug',
        monthStart: 9, monthEnd: 12,
        icon: '🌱',
        actions: [
          'Analyze data from the first full year and update your program plan',
          'Apply for funding renewals and pursue new sources as needed',
          'Strengthen school and community partnerships with renewed MOUs',
          'Plan programming enhancements or capacity expansions for Year 3',
          'Recruit and begin training new staff and volunteers as needed',
        ],
      },
    ],
  },

  {
    id: 'year3',
    label: 'Year 3+',
    subtitle: 'Sustain & Expand',
    colorKey: 'green',
    phases: [
      {
        id: 'y3-engage',
        label: 'Engage',
        monthLabel: 'Sep',
        monthStart: 1, monthEnd: 1,
        icon: '🤝',
        actions: [
          'Re-enroll returning families and onboard new participants',
          'Refresh staff training and introduce any new curriculum elements',
          'Review and update program policies based on prior year experience',
          'Reconnect with school partners to align goals for the new year',
          'Launch the program year with a community visibility event',
        ],
      },
      {
        id: 'y3-evaluate',
        label: 'Evaluate',
        monthLabel: 'Jan – Mar',
        monthStart: 5, monthEnd: 7,
        icon: '📊',
        actions: [
          'Conduct annual outcome evaluation using consistent pre/post measures',
          'Compile multi-year data to show program growth and sustained impact',
          'Gather feedback from community members and school stakeholders',
          'Present outcomes to board, funders, and community at a data event',
          'Update the strategic plan based on findings and emerging needs',
        ],
      },
      {
        id: 'y3-grow',
        label: 'Grow',
        monthLabel: 'May – Aug',
        monthStart: 9, monthEnd: 12,
        icon: '🌱',
        actions: [
          'Pursue growth: new sites, expanded services, or new populations served',
          'Invest in leadership development and staff advancement pathways',
          'Engage in advocacy at the local, state, or national level',
          'Build resilience through diversified funding and strong partnerships',
          'Document your program model to share as a replication resource',
        ],
      },
    ],
  },
]

/* ─────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────── */

function barStyle(monthStart, monthEnd) {
  const left = ((monthStart - 1) / 12) * 100
  const width = ((monthEnd - monthStart + 1) / 12) * 100
  return { left: `${left.toFixed(4)}%`, width: `${width.toFixed(4)}%` }
}

/* ─────────────────────────────────────────────────────────
   Desktop Gantt
───────────────────────────────────────────────────────── */

function GanttChart({ expanded, completed, onToggleExpand, onToggleComplete }) {
  return (
    <div className={styles.gantt} aria-label="Three-year planning timeline">
      {/* Month header */}
      <div className={styles.ganttLabelCell} aria-hidden="true" />
      <div className={styles.ganttMonthHeader} aria-hidden="true">
        {MONTH_LABELS.map(m => (
          <span key={m} className={styles.monthLabel}>{m}</span>
        ))}
      </div>

      {YEARS.map(year => (
        <GanttYear
          key={year.id}
          year={year}
          expanded={expanded}
          completed={completed}
          onToggleExpand={onToggleExpand}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  )
}

function GanttYear({ year, expanded, completed, onToggleExpand, onToggleComplete }) {
  const total = year.phases.length
  const done = year.phases.filter(p => completed.has(p.id)).length

  return (
    <>
      {/* Year banner */}
      <div className={[styles.yearBanner, styles[`yearBanner-${year.colorKey}`]].join(' ')}>
        <span className={styles.yearBannerLabel}>{year.label}</span>
        <span className={styles.yearBannerSubtitle}>{year.subtitle}</span>
        <span className={styles.yearProgress}>{done}/{total} complete</span>
      </div>

      {year.phases.map(phase => (
        <GanttPhase
          key={phase.id}
          phase={phase}
          colorKey={year.colorKey}
          isExpanded={expanded.has(phase.id)}
          isComplete={completed.has(phase.id)}
          onToggleExpand={() => onToggleExpand(phase.id)}
          onToggleComplete={() => onToggleComplete(phase.id)}
        />
      ))}
    </>
  )
}

function GanttPhase({ phase, colorKey, isExpanded, isComplete, onToggleExpand, onToggleComplete }) {
  return (
    <>
      {/* Phase row */}
      <div className={[styles.ganttPhaseLabel, isComplete ? styles.ganttPhaseLabelDone : ''].join(' ')}>
        <button
          className={[styles.completeDot, isComplete ? styles.completeDotDone : '', styles[`completeDot-${colorKey}`]].join(' ')}
          onClick={onToggleComplete}
          aria-label={isComplete ? `Mark ${phase.label} incomplete` : `Mark ${phase.label} complete`}
          title={isComplete ? 'Mark incomplete' : 'Mark complete'}
        >
          {isComplete ? '✓' : ''}
        </button>
        <button className={styles.phaseNameBtn} onClick={onToggleExpand} aria-expanded={isExpanded}>
          <span className={styles.phaseIcon}>{phase.icon}</span>
          <span className={styles.phaseName}>{phase.label}</span>
          <span className={styles.phaseChevron} aria-hidden="true">{isExpanded ? '▲' : '▼'}</span>
        </button>
      </div>

      <div className={styles.ganttTrack}>
        {/* Month gridlines */}
        {MONTH_LABELS.map((_, i) => (
          <div key={i} className={styles.trackCell} />
        ))}
        {/* Phase bar */}
        <button
          className={[
            styles.phaseBar,
            styles[`phaseBar-${colorKey}`],
            isComplete ? styles.phaseBarDone : '',
          ].join(' ')}
          style={barStyle(phase.monthStart, phase.monthEnd)}
          onClick={onToggleExpand}
          aria-expanded={isExpanded}
          title={`${phase.label} (${phase.monthLabel})`}
        >
          <span className={styles.barLabel}>{phase.label}</span>
          <span className={styles.barMonths}>{phase.monthLabel}</span>
        </button>
      </div>

      {/* Expanded detail */}
      {isExpanded && (
        <div className={styles.ganttDetail}>
          <p className={styles.detailHeading}>
            {phase.icon} {phase.label} <span className={styles.detailMonths}>({phase.monthLabel})</span>
          </p>
          <ul className={styles.actionList}>
            {phase.actions.map((action, i) => <li key={i}>{action}</li>)}
          </ul>
        </div>
      )}
    </>
  )
}

/* ─────────────────────────────────────────────────────────
   Mobile Stepper
───────────────────────────────────────────────────────── */

function Stepper({ expanded, completed, onToggleExpand, onToggleComplete }) {
  return (
    <div className={styles.stepper}>
      {YEARS.map((year, yi) => (
        <div key={year.id} className={[styles.stepYear, styles[`stepYear-${year.colorKey}`]].join(' ')}>
          <div className={[styles.stepYearDot, styles[`stepYearDot-${year.colorKey}`]].join(' ')} aria-hidden="true">
            {yi + 1}
          </div>
          <div className={styles.stepYearBody}>
            <div className={styles.stepYearHeader}>
              <span className={styles.stepYearLabel}>{year.label}</span>
              <span className={styles.stepYearSubtitle}>{year.subtitle}</span>
            </div>

            {year.phases.map(phase => {
              const isExpanded = expanded.has(phase.id)
              const isComplete = completed.has(phase.id)
              return (
                <div key={phase.id} className={styles.stepPhase}>
                  <div className={styles.stepPhaseRow}>
                    <button
                      className={[styles.stepCompleteDot, isComplete ? styles.stepCompleteDotDone : '', styles[`stepCompleteDot-${year.colorKey}`]].join(' ')}
                      onClick={() => onToggleComplete(phase.id)}
                      aria-label={isComplete ? `Mark ${phase.label} incomplete` : `Mark ${phase.label} complete`}
                    >
                      {isComplete ? '✓' : ''}
                    </button>
                    <button
                      className={[styles.stepPhaseBtn, isComplete ? styles.stepPhaseBtnDone : ''].join(' ')}
                      onClick={() => onToggleExpand(phase.id)}
                      aria-expanded={isExpanded}
                    >
                      <span>{phase.icon}</span>
                      <span className={styles.stepPhaseLabel}>{phase.label}</span>
                      <span className={[styles.stepMonthTag, styles[`stepMonthTag-${year.colorKey}`]].join(' ')}>
                        {phase.monthLabel}
                      </span>
                      <span className={styles.stepChevron}>{isExpanded ? '▲' : '▼'}</span>
                    </button>
                  </div>

                  {isExpanded && (
                    <ul className={styles.stepActions}>
                      {phase.actions.map((action, i) => <li key={i}>{action}</li>)}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Main
───────────────────────────────────────────────────────── */

export default function PlanningTimeline() {
  const [expanded, setExpanded] = useState(new Set())
  const [completed, setCompleted] = useState(new Set())

  function toggleExpand(id) {
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function toggleComplete(id) {
    setCompleted(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const totalPhases = YEARS.reduce((s, y) => s + y.phases.length, 0)
  const doneCount = completed.size

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Three-Year Planning Roadmap</h3>
          <p className={styles.subtitle}>Click any phase to expand action steps. Check the circle to mark it complete.</p>
        </div>
        {doneCount > 0 && (
          <div className={styles.overallProgress}>
            <span className={styles.progressCount}>{doneCount}/{totalPhases}</span>
            <span className={styles.progressLabel}>phases complete</span>
          </div>
        )}
      </div>

      {/* Desktop */}
      <GanttChart
        expanded={expanded}
        completed={completed}
        onToggleExpand={toggleExpand}
        onToggleComplete={toggleComplete}
      />

      {/* Mobile */}
      <Stepper
        expanded={expanded}
        completed={completed}
        onToggleExpand={toggleExpand}
        onToggleComplete={toggleComplete}
      />
    </div>
  )
}
