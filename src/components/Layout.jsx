import Sidebar from './Sidebar'
import TabBar from './TabBar'
import styles from './Layout.module.css'

export default function Layout({
  phases,
  activePhaseId,
  activeSectionId,
  activeView,
  onSelectPhase,
  onSelectSection,
  onSelectResources,
  onSelectHero,
  children,
}) {
  return (
    <div className={styles.root}>
      {/* Skip-to-content link — visible only on keyboard focus */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Sidebar
        phases={phases}
        activePhaseId={activePhaseId}
        activeSectionId={activeSectionId}
        activeView={activeView}
        onSelectPhase={onSelectPhase}
        onSelectSection={onSelectSection}
        onSelectResources={onSelectResources}
        onSelectHero={onSelectHero}
      />

      <div className={styles.body} data-content-body>
        <main className={styles.main} id="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>

      <TabBar
        phases={phases}
        activePhaseId={activePhaseId}
        activeView={activeView}
        onSelectPhase={onSelectPhase}
        onSelectResources={onSelectResources}
      />
    </div>
  )
}
