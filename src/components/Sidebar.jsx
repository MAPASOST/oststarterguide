import styles from './Sidebar.module.css'

/**
 * Sidebar — desktop-only left nav.
 * Shows all phases as collapsible groups; the active phase is expanded
 * and its sections are listed below it.
 *
 * Props:
 *   phases          Phase[]
 *   activePhaseId   string
 *   activeSectionId string
 *   onSelectPhase   (id) => void
 *   onSelectSection (id) => void
 */
export default function Sidebar({
  phases,
  activePhaseId,
  activeSectionId,
  onSelectPhase,
  onSelectSection,
}) {
  return (
    <nav className={styles.sidebar} aria-label="Guide navigation">
      <div className={styles.logo}>
        <span className={styles.logoIcon}>🌟</span>
        <span className={styles.logoText}>OST Starter Guide</span>
      </div>

      <ul className={styles.phaseList} role="list">
        {phases.map((phase, index) => {
          const isActive = phase.id === activePhaseId

          return (
            <li key={phase.id} className={styles.phaseItem}>
              <button
                className={`${styles.phaseButton} ${styles[`color-${phase.colorKey}`]} ${isActive ? styles.phaseButtonActive : ''}`}
                onClick={() => onSelectPhase(phase.id)}
                aria-current={isActive ? 'true' : undefined}
                aria-expanded={isActive}
              >
                <span className={styles.phaseNumber}>{index + 1}</span>
                <span className={styles.phaseIcon}>{phase.icon}</span>
                <span className={styles.phaseLabel}>{phase.label}</span>
                <span className={styles.phaseChevron} aria-hidden="true">
                  {isActive ? '▾' : '›'}
                </span>
              </button>

              {isActive && (
                <ul className={styles.sectionList} role="list">
                  {phase.sections.map((section) => {
                    const isCurrent = section.id === activeSectionId
                    return (
                      <li key={section.id}>
                        <button
                          className={`${styles.sectionButton} ${styles[`color-${phase.colorKey}`]} ${isCurrent ? styles.sectionButtonActive : ''}`}
                          onClick={() => onSelectSection(section.id)}
                          aria-current={isCurrent ? 'page' : undefined}
                        >
                          {section.title}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
