import styles from './TabBar.module.css'

/**
 * TabBar — mobile-only bottom navigation showing the three phases as tabs.
 *
 * Props:
 *   phases        Phase[]
 *   activePhaseId string
 *   onSelectPhase (id) => void
 */
export default function TabBar({ phases, activePhaseId, activeView, onSelectPhase, onSelectResources }) {
  return (
    <nav className={styles.tabBar} aria-label="Guide navigation">
      {phases.map((phase) => {
        const isActive = activeView === 'phases' && phase.id === activePhaseId
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
      <button
        className={`${styles.tab} ${activeView === 'resources' ? styles.tabActiveLibrary : ''}`}
        onClick={onSelectResources}
        aria-current={activeView === 'resources' ? 'page' : undefined}
      >
        <span className={styles.tabIcon} aria-hidden="true">📚</span>
        <span className={styles.tabLabel}>Library</span>
      </button>
    </nav>
  )
}
