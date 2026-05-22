import { useRuralMode } from '../context/RuralModeContext'
import styles from './Sidebar.module.css'

export default function Sidebar({
  phases,
  activePhaseId,
  activeSectionId,
  activeView,
  onSelectPhase,
  onSelectSection,
  onSelectResources,
  onSelectHero,
}) {
  const { ruralMode, toggleRuralMode } = useRuralMode()

  return (
    <nav className={styles.sidebar} aria-label="Guide navigation">

      {/* ── Logo / home link ── */}
      <button
        className={styles.logo}
        onClick={onSelectHero}
        aria-label="OST Starter Guide — go to home"
        aria-current={activeView === 'hero' ? 'page' : undefined}
      >
        <span className={styles.logoIcon} aria-hidden="true">🌟</span>
        <span className={styles.logoText}>OST Starter Guide</span>
      </button>

      {/* ── Phase list ── */}
      <ul className={styles.phaseList} role="list">
        {phases.map((phase, index) => {
          const isActive = activeView === 'phases' && phase.id === activePhaseId

          return (
            <li key={phase.id} className={styles.phaseItem}>
              <button
                className={`${styles.phaseButton} ${styles[`color-${phase.colorKey}`]} ${isActive ? styles.phaseButtonActive : ''}`}
                onClick={() => onSelectPhase(phase.id)}
                aria-current={isActive ? 'true' : undefined}
                aria-expanded={isActive}
              >
                <span className={styles.phaseNumber} aria-hidden="true">{index + 1}</span>
                <span className={styles.phaseIcon} aria-hidden="true">{phase.icon}</span>
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

      {/* ── Resource Library link ── */}
      <div className={styles.libraryLinkRow}>
        <button
          className={[styles.libraryLink, activeView === 'resources' ? styles.libraryLinkActive : ''].join(' ')}
          onClick={onSelectResources}
          aria-current={activeView === 'resources' ? 'page' : undefined}
        >
          <span className={styles.libraryLinkIcon} aria-hidden="true">📚</span>
          <span>Resource Library</span>
        </button>
      </div>

      {/* ── Settings ── */}
      <div className={styles.settings}>
        <p className={styles.settingsLabel} id="settings-label">Settings</p>
        <div
          className={styles.ruralToggle}
          role="group"
          aria-labelledby="settings-label"
        >
          <span className={styles.ruralToggleText}>
            <span className={styles.ruralIcon} aria-hidden="true">🌾</span>
            <span>Rural community mode</span>
          </span>
          <button
            role="switch"
            aria-checked={ruralMode}
            className={[styles.toggleTrack, ruralMode ? styles.toggleTrackOn : ''].join(' ')}
            onClick={toggleRuralMode}
            aria-label={ruralMode ? 'Rural community tips: on. Click to turn off.' : 'Rural community tips: off. Click to turn on.'}
          >
            <span className={[styles.toggleThumb, ruralMode ? styles.toggleThumbOn : ''].join(' ')} aria-hidden="true" />
          </button>
        </div>
        {ruralMode && (
          <p className={styles.ruralHint} role="status">
            Rural-specific tips are now visible throughout the guide.
          </p>
        )}
      </div>
    </nav>
  )
}
