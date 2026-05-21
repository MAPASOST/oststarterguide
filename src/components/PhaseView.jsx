import TopicSection from './TopicSection'
import Checklist from './Checklist'
import { useRuralMode } from '../context/RuralModeContext'
import styles from './PhaseView.module.css'

/**
 * PhaseView — renders the header for the active phase and all of its sections.
 *
 * Props:
 *   phase           Phase      – the active phase object from content.js
 *   activeSectionId string     – id of the currently highlighted section
 *   onSelectSection (id) => void
 */
export default function PhaseView({ phase, activeSectionId, onSelectSection }) {
  const { ruralMode, toggleRuralMode } = useRuralMode()
  return (
    <div className={styles.phaseView}>
      {/* ── Phase header ── */}
      <header className={`${styles.phaseHeader} ${styles[`color-${phase.colorKey}`]}`}>
        <div className={styles.phaseHeaderInner}>
          <span className={styles.phaseIcon} aria-hidden="true">{phase.icon}</span>
          <div>
            <p className={styles.phaseEyebrow}>Phase</p>
            <h1 className={styles.phaseTitle}>{phase.label}</h1>
            <p className={styles.phaseTagline}>{phase.tagline}</p>
          </div>
        </div>

        {/* ── Mobile rural mode toggle ── */}
        <div className={styles.mobileRuralRow}>
          <button
            role="switch"
            aria-checked={ruralMode}
            className={[styles.mobileRuralBtn, ruralMode ? styles.mobileRuralBtnOn : ''].join(' ')}
            onClick={toggleRuralMode}
          >
            <span aria-hidden="true">🌾</span>
            <span>{ruralMode ? 'Rural tips: on' : 'Rural tips: off'}</span>
            <span className={[styles.mobilePill, ruralMode ? styles.mobilePillOn : ''].join(' ')} />
          </button>
        </div>

        {/* ── Mobile in-phase section list ── */}
        {phase.sections.length > 0 && (
          <nav className={styles.mobileSectionNav} aria-label="Sections in this phase">
            <ul className={styles.mobileSectionList} role="list">
              {phase.sections.map((section) => (
                <li key={section.id}>
                  <button
                    className={`${styles.mobileSectionChip} ${section.id === activeSectionId ? styles.mobileSectionChipActive : ''}`}
                    onClick={() => onSelectSection(section.id)}
                    aria-current={section.id === activeSectionId ? 'true' : undefined}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* ── Phase milestone checklist ── */}
      {phase.progressCheck && (
        <Checklist
          title={phase.progressCheck.title}
          items={phase.progressCheck.items}
          colorKey={phase.colorKey}
        />
      )}

      {/* ── Sections ── */}
      <div className={styles.sections}>
        {phase.sections.map((section) => (
          <TopicSection
            key={section.id}
            section={section}
            colorKey={phase.colorKey}
            isActive={section.id === activeSectionId}
            onVisible={() => onSelectSection(section.id)}
          />
        ))}
      </div>
    </div>
  )
}
