import { useState, useMemo } from 'react'
import styles from './NeedsAssessmentBuilder.module.css'

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */

const AUDIENCES = [
  { id: 'youth',     label: 'Youth',                icon: '🧒', desc: 'Elementary & middle school children (ages 5–13)' },
  { id: 'teens',     label: 'Teens',                icon: '🧑‍🎓', desc: 'Middle & high school youth (ages 11–18)' },
  { id: 'families',  label: 'Families & Caregivers', icon: '👨‍👩‍👧', desc: 'Parents and guardians of enrolled youth' },
  { id: 'community', label: 'Community Members',     icon: '🏘️', desc: 'Broader neighborhood and local stakeholders' },
]

const NEED_AREAS = {
  youth: [
    { id: 'youth-academic',   label: 'Academic Support',          icon: '📚', desc: 'Homework help, tutoring, literacy, math' },
    { id: 'youth-sel',        label: 'Social-Emotional Learning',  icon: '💙', desc: 'Self-regulation, peer relationships, mental wellness' },
    { id: 'youth-physical',   label: 'Physical Health & Nutrition',icon: '🥗', desc: 'Physical activity, healthy eating, health screenings' },
    { id: 'youth-enrichment', label: 'Creative & STEM Enrichment', icon: '🎨', desc: 'Arts, music, science, technology, hands-on learning' },
    { id: 'youth-safety',     label: 'Safe Supervision',           icon: '🛡️', desc: 'Safe, structured activities during out-of-school hours' },
  ],
  teens: [
    { id: 'teen-academic',    label: 'Academic Support',              icon: '📖', desc: 'Tutoring, homework help, study and test-taking skills' },
    { id: 'teen-sel',         label: 'Social-Emotional & Mental Health', icon: '💚', desc: 'Mental health support, peer relationships, identity' },
    { id: 'teen-career',      label: 'College & Career Readiness',    icon: '🎓', desc: 'College planning, internships, job skills, test prep' },
    { id: 'teen-leadership',  label: 'Civic Engagement & Leadership', icon: '🌟', desc: 'Youth voice, volunteering, community leadership' },
    { id: 'teen-physical',    label: 'Physical Health & Wellness',    icon: '🏃', desc: 'Physical activity, substance prevention, health literacy' },
  ],
  families: [
    { id: 'fam-childcare',   label: 'Child Care Access & Affordability', icon: '🏠', desc: 'Safe, affordable care during working hours' },
    { id: 'fam-engagement',  label: 'Parent Education & Engagement',     icon: '📣', desc: 'Workshops, family literacy nights, school involvement' },
    { id: 'fam-economic',    label: 'Economic Stability',                 icon: '💼', desc: 'Employment support, financial literacy, benefits navigation' },
    { id: 'fam-health',      label: 'Family Health & Wellness',           icon: '❤️', desc: 'Access to health services, mental health, insurance' },
    { id: 'fam-services',    label: 'Connecting to Community Services',   icon: '🔗', desc: 'Referrals, food access, housing, legal assistance' },
  ],
  community: [
    { id: 'comm-awareness', label: 'Program Awareness & Access',    icon: '📢', desc: 'Knowledge of available afterschool services' },
    { id: 'comm-safety',    label: 'Safe Community Spaces',          icon: '🏟️', desc: 'Accessible, welcoming spaces for youth afterschool' },
    { id: 'comm-civic',     label: 'Civic Engagement',               icon: '🗳️', desc: 'Community decision-making, advocacy, participation' },
    { id: 'comm-workforce', label: 'Workforce Development',          icon: '📈', desc: 'Job skills, employment pipelines, economic impact' },
  ],
}

const DATA_SOURCES = {
  'youth-academic': [
    'School report cards and grade-level performance data',
    'State standardized test scores',
    'Teacher and principal surveys',
    'Student academic needs surveys',
    'Chronic absenteeism data from partner schools',
  ],
  'youth-sel': [
    'Parent and student surveys on peer relationships and behavior',
    'School discipline and referral records',
    'School counselor interviews',
    'Youth focus groups',
    'Community mental health service utilization data',
  ],
  'youth-physical': [
    'School nurse referral and health screening records',
    'USDA free/reduced lunch eligibility data',
    'Local health department community health assessment',
    'Parent and student health surveys',
    'Physical fitness assessment data from schools',
  ],
  'youth-enrichment': [
    'Student interest and preference surveys',
    'School curriculum gap analysis',
    'Community asset map of existing enrichment programs',
    'Focus groups with youth and families',
    'Local arts and STEM program availability data',
  ],
  'youth-safety': [
    'Community crime and safety statistics',
    'Parent surveys on afterschool supervision needs',
    'School latchkey program waitlist data',
    'Juvenile justice and truancy data',
    'Neighborhood observation and safety assessments',
  ],
  'teen-academic': [
    'High school GPA and course completion data',
    'State assessment scores and graduation rates',
    'Teacher and counselor surveys',
    'Student academic self-assessment surveys',
    'Dropout and credit-deficiency data from school district',
  ],
  'teen-sel': [
    'Youth mental health prevalence data (YRBS or local surveys)',
    'School discipline, suspension, and expulsion records',
    'Youth and family focus groups',
    'School counselor interviews and referral data',
    'Local behavioral health service utilization data',
  ],
  'teen-career': [
    'Post-secondary enrollment and completion rates',
    'Youth employment and internship availability data',
    'Student surveys on college and career aspirations',
    'High school counselor interviews',
    'Local employer workforce needs assessments',
  ],
  'teen-leadership': [
    'Youth civic engagement and voting surveys',
    'Volunteer and service hours data from schools',
    'Focus groups with teen participants',
    'Community organization capacity assessments',
    'Youth-led participatory action research data',
  ],
  'teen-physical': [
    'Youth Risk Behavior Survey (YRBS) data',
    'School physical education assessment data',
    'Substance use prevalence data (local or state)',
    'Student and parent health surveys',
    'Local parks and recreation program availability data',
  ],
  'fam-childcare': [
    'Child care waitlist data from local providers',
    'Census data on working families with school-age children',
    'Parent surveys on work schedules and child care needs',
    'State child care subsidy (CCDF) utilization data',
    'Interviews with school and community liaisons',
  ],
  'fam-engagement': [
    'School family engagement surveys',
    'Parent meeting and event attendance records',
    'Parent interviews and focus groups',
    'Language access and literacy data from school records',
    'Community needs assessments from local organizations',
  ],
  'fam-economic': [
    'Free/reduced lunch eligibility rates',
    'Local unemployment and poverty data (Census/ACS)',
    'Referral data from community service organizations',
    'Parent surveys on financial stress and employment status',
    'State SNAP/TANF enrollment data',
  ],
  'fam-health': [
    'Local hospital or health department community health needs assessment',
    'Medicaid and CHIP insurance enrollment data',
    'Parent and family surveys on health access barriers',
    'Local healthcare provider interviews',
    'Food insecurity data (Feeding America, USDA)',
  ],
  'fam-services': [
    'Referral data from local social service agencies',
    'Community resource directory gaps analysis',
    'Parent focus groups on service awareness and access',
    'Case manager and social worker interviews',
    '211 call data for local service needs',
  ],
  'comm-awareness': [
    'Community surveys on afterschool program awareness',
    'Outreach event attendance data',
    'Focus groups with community members and leaders',
    'Social media reach and engagement analytics',
    'Interviews with community gatekeepers (clergy, business owners)',
  ],
  'comm-safety': [
    'Community crime statistics and police reports',
    'Community observation and walking audits',
    'Youth and parent safety perception surveys',
    'Parks and recreation facility assessments',
    'Interviews with neighborhood associations',
  ],
  'comm-civic': [
    'Voter registration and turnout data',
    'Survey of community members on civic participation barriers',
    'Interviews with local elected officials and civic leaders',
    'Nonprofit capacity and collaboration assessments',
    'Youth civic knowledge and engagement surveys',
  ],
  'comm-workforce': [
    'Local labor market data (unemployment rates, wage levels)',
    'Employer surveys on workforce readiness gaps',
    'Chamber of commerce and workforce board reports',
    'Community college enrollment and completion data',
    'Program alumni employment and outcome surveys',
  ],
}

/* ─────────────────────────────────────────────────────────
   Print helper
───────────────────────────────────────────────────────── */

function openPrintWindow(rows) {
  const win = window.open('', '_blank', 'width=820,height=680')
  if (!win) return
  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  win.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Community Needs Assessment Outline</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Georgia,'Times New Roman',serif;font-size:11pt;color:#1a1a1a;padding:0.65in 0.75in}
h1{font-size:20pt;font-weight:bold;margin-bottom:4pt;color:#1e3a8a}
.sub{color:#555;font-size:10pt;margin-bottom:24pt}
table{width:100%;border-collapse:collapse}
thead th{background:#1e3a8a;color:#fff;text-align:left;padding:8pt 10pt;font-size:10pt;font-weight:bold}
th:first-child{width:16%}th:nth-child(2){width:24%}
tbody tr:nth-child(even) td{background:#eff6ff}
td{padding:7pt 10pt;border-bottom:1px solid #ccc;vertical-align:top;font-size:10pt;line-height:1.5}
ul{margin:0;padding-left:14pt}li{margin:2pt 0}
@media print{body{padding:0.4in 0.5in}}
</style>
</head>
<body>
<h1>Community Needs Assessment Outline</h1>
<p class="sub">Generated ${date}</p>
<table>
<thead><tr><th>Audience</th><th>Area of Need</th><th>Potential Data Sources</th></tr></thead>
<tbody>
${rows.map(r => `<tr><td>${r.audienceLabel}</td><td>${r.needLabel}</td><td><ul>${r.sources.map(s => `<li>${s}</li>`).join('')}</ul></td></tr>`).join('')}
</tbody>
</table>
<script>window.addEventListener('load',()=>window.print())<\/script>
</body></html>`)
  win.document.close()
}

/* ─────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────── */

function StepIndicator({ step }) {
  const labels = ['Target Audience', 'Areas of Need', 'Data Sources']
  return (
    <div className={styles.stepIndicator} aria-label="Progress">
      {labels.map((label, i) => {
        const n = i + 1
        const done = n < step
        const active = n === step
        return (
          <div key={n} className={styles.stepItem}>
            <div className={[styles.stepDot, active ? styles.stepDotActive : '', done ? styles.stepDotDone : ''].join(' ')}>
              {done ? '✓' : n}
            </div>
            <span className={[styles.stepLabel, active ? styles.stepLabelActive : ''].join(' ')}>
              {label}
            </span>
            {i < labels.length - 1 && (
              <div className={[styles.stepLine, done ? styles.stepLineDone : ''].join(' ')} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function Step1({ selectedAudiences, onToggle }) {
  return (
    <div className={styles.stepPane}>
      <p className={styles.stepHint}>Select all groups your program intends to serve. You can choose more than one.</p>
      <div className={styles.audienceGrid}>
        {AUDIENCES.map(aud => {
          const active = selectedAudiences.has(aud.id)
          return (
            <button
              key={aud.id}
              className={[styles.audienceCard, active ? styles.audienceCardActive : ''].join(' ')}
              onClick={() => onToggle(aud.id)}
              aria-pressed={active}
            >
              <span className={styles.cardIcon}>{aud.icon}</span>
              <span className={styles.cardLabel}>{aud.label}</span>
              <span className={styles.cardDesc}>{aud.desc}</span>
              {active && <span className={styles.selectedBadge} aria-hidden="true">✓</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Step2({ selectedAudiences, selectedNeeds, onToggleNeed }) {
  return (
    <div className={styles.stepPane}>
      <p className={styles.stepHint}>Choose the need areas your program will address for each audience.</p>
      {[...selectedAudiences].map(audienceId => {
        const aud = AUDIENCES.find(a => a.id === audienceId)
        const needs = selectedNeeds[audienceId] ?? new Set()
        return (
          <div key={audienceId} className={styles.needGroup}>
            <p className={styles.groupLabel}>
              <span aria-hidden="true">{aud.icon}</span> {aud.label}
            </p>
            <div className={styles.needGrid}>
              {(NEED_AREAS[audienceId] ?? []).map(need => {
                const active = needs.has(need.id)
                return (
                  <button
                    key={need.id}
                    className={[styles.needCard, active ? styles.needCardActive : ''].join(' ')}
                    onClick={() => onToggleNeed(audienceId, need.id)}
                    aria-pressed={active}
                  >
                    <span className={styles.needIcon}>{need.icon}</span>
                    <span className={styles.needLabel}>{need.label}</span>
                    <span className={styles.needDesc}>{need.desc}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Step3({ selectedAudiences, selectedNeeds, selectedSources, onToggleSource }) {
  function toggleAll(needId, allSources, selectAll) {
    onToggleSource(needId, null, selectAll ? new Set(allSources) : new Set())
  }

  const pairs = []
  for (const audienceId of selectedAudiences) {
    const aud = AUDIENCES.find(a => a.id === audienceId)
    for (const needId of (selectedNeeds[audienceId] ?? [])) {
      const need = (NEED_AREAS[audienceId] ?? []).find(n => n.id === needId)
      if (need) pairs.push({ audienceId, aud, needId, need })
    }
  }

  if (pairs.length === 0) {
    return <p className={styles.stepHint}>No needs selected — go back to Step 2 to choose areas of need.</p>
  }

  return (
    <div className={styles.stepPane}>
      <p className={styles.stepHint}>All sources are pre-selected. Uncheck any your program won't use.</p>
      <div className={styles.sourceGroups}>
        {pairs.map(({ aud, needId, need }) => {
          const allSrcs = DATA_SOURCES[needId] ?? []
          const selected = selectedSources[needId] ?? new Set()
          const allChecked = allSrcs.every(s => selected.has(s))
          return (
            <div key={needId} className={styles.sourceGroup}>
              <div className={styles.sourceGroupHeader}>
                <p className={styles.groupLabel}>
                  <span aria-hidden="true">{aud.icon}</span> {aud.label} —{' '}
                  <span className={styles.needTagInline}>{need.label}</span>
                </p>
                <button
                  className={styles.toggleAllBtn}
                  onClick={() => toggleAll(needId, allSrcs, !allChecked)}
                >
                  {allChecked ? 'Deselect all' : 'Select all'}
                </button>
              </div>
              <ul className={styles.sourceList}>
                {allSrcs.map(src => (
                  <li key={src}>
                    <label className={styles.sourceItem}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={selected.has(src)}
                        onChange={() => onToggleSource(needId, src, null)}
                      />
                      <span>{src}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AssessmentTable({ rows }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    const header = 'Audience\tArea of Need\tPotential Data Sources'
    const body = rows
      .map(r => `${r.audienceLabel}\t${r.needLabel}\t${r.sources.join('; ')}`)
      .join('\n')
    navigator.clipboard.writeText(`${header}\n${body}`).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    })
  }

  if (rows.length === 0) {
    return (
      <div className={styles.tableEmpty}>
        <span className={styles.tableEmptyIcon} aria-hidden="true">📋</span>
        <p>Your assessment outline will appear here as you make selections.</p>
      </div>
    )
  }

  return (
    <div className={styles.tableSection}>
      <div className={styles.tableHeader}>
        <p className={styles.tableTitle}>Your Assessment Outline</p>
        <div className={styles.exportButtons}>
          <button className={styles.btnCopy} onClick={handleCopy}>
            {copied ? '✓ Copied!' : 'Copy to Clipboard'}
          </button>
          <button className={styles.btnPrint} onClick={() => openPrintWindow(rows)}>
            Save as PDF
          </button>
        </div>
      </div>

      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Audience</th>
              <th>Area of Need</th>
              <th>Potential Data Sources</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td className={styles.tdAudience}>{row.audienceLabel}</td>
                <td className={styles.tdNeed}>{row.needLabel}</td>
                <td>
                  <ul className={styles.sourceUl}>
                    {row.sources.map((s, j) => <li key={j}>{s}</li>)}
                    {row.sources.length === 0 && (
                      <li className={styles.noSources}>No sources selected</li>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────── */

export default function NeedsAssessmentBuilder() {
  const [step, setStep] = useState(1)
  const [selectedAudiences, setSelectedAudiences] = useState(new Set())
  const [selectedNeeds, setSelectedNeeds] = useState({})
  const [selectedSources, setSelectedSources] = useState({})

  function toggleAudience(id) {
    setSelectedAudiences(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function toggleNeed(audienceId, needId) {
    const currentNeeds = new Set(selectedNeeds[audienceId] ?? [])
    const adding = !currentNeeds.has(needId)
    adding ? currentNeeds.add(needId) : currentNeeds.delete(needId)
    setSelectedNeeds(prev => ({ ...prev, [audienceId]: currentNeeds }))

    if (adding && !selectedSources[needId]) {
      setSelectedSources(prev => ({
        ...prev,
        [needId]: new Set(DATA_SOURCES[needId] ?? []),
      }))
    }
  }

  function toggleSource(needId, src, override) {
    setSelectedSources(prev => {
      if (override !== null) return { ...prev, [needId]: override }
      const next = new Set(prev[needId] ?? [])
      next.has(src) ? next.delete(src) : next.add(src)
      return { ...prev, [needId]: next }
    })
  }

  const tableRows = useMemo(() => {
    const rows = []
    for (const audienceId of selectedAudiences) {
      const aud = AUDIENCES.find(a => a.id === audienceId)
      for (const needId of (selectedNeeds[audienceId] ?? [])) {
        const need = (NEED_AREAS[audienceId] ?? []).find(n => n.id === needId)
        if (!need) continue
        rows.push({
          audienceLabel: aud.label,
          needLabel: need.label,
          sources: [...(selectedSources[needId] ?? [])],
        })
      }
    }
    return rows
  }, [selectedAudiences, selectedNeeds, selectedSources])

  const canAdvanceStep1 = selectedAudiences.size > 0
  const canAdvanceStep2 = [...selectedAudiences].some(
    aid => (selectedNeeds[aid]?.size ?? 0) > 0
  )

  const STEP_HEADING = [
    'Who is your target audience?',
    'What areas of need will you address?',
    'What data will you collect?',
  ]

  return (
    <div className={styles.builder}>
      {/* ── Wizard ── */}
      <div className={styles.wizardCard}>
        <StepIndicator step={step} />
        <h3 className={styles.stepHeading}>{STEP_HEADING[step - 1]}</h3>

        {step === 1 && (
          <Step1 selectedAudiences={selectedAudiences} onToggle={toggleAudience} />
        )}
        {step === 2 && (
          <Step2
            selectedAudiences={selectedAudiences}
            selectedNeeds={selectedNeeds}
            onToggleNeed={toggleNeed}
          />
        )}
        {step === 3 && (
          <Step3
            selectedAudiences={selectedAudiences}
            selectedNeeds={selectedNeeds}
            selectedSources={selectedSources}
            onToggleSource={toggleSource}
          />
        )}

        {/* Navigation */}
        <div className={styles.navRow}>
          {step > 1 ? (
            <button className={styles.btnBack} onClick={() => setStep(s => s - 1)}>
              ← Back
            </button>
          ) : <span />}

          {step < 3 ? (
            <button
              className={styles.btnNext}
              onClick={() => setStep(s => s + 1)}
              disabled={step === 1 ? !canAdvanceStep1 : !canAdvanceStep2}
            >
              Next →
            </button>
          ) : (
            <span className={styles.completeNote}>
              ✓ Review your outline below
            </span>
          )}
        </div>
      </div>

      {/* ── Live table ── */}
      <AssessmentTable rows={tableRows} />
    </div>
  )
}
