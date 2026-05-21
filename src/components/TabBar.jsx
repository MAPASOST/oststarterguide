import styles from './TabBar.module.css'

/**
 * TabBar — mobile-only bottom navigation showing the three phases as tabs.
 *
 * Props:
 *   phases        Phase[]
 *   activePhaseId string
 *   onSelectPhase (id) => void
 */
export default function TabBar({ phases, activePhaseId, onSelectPhase }) {
  return (
    <nav className={styles.tabBar} aria-label="Phase navigation">
      {phases.map((phase) => {
        const isActive = phase.id === activePhaseId
        return (
          <button
            key={phase.id}
            className={`${styles.tab} ${styles[`color-${phase.colorKey}`]} ${isActive ? styles.tabActive : ''}`}
            onClick={() => onSelectPhase(phase.id)}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className={styles.tabIcon} aria-hidden="true">{phase.icon}</span>
            <span className={styles.tabLabel}>{phase.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
