import Sidebar from './Sidebar'
import TabBar from './TabBar'
import styles from './Layout.module.css'

/**
 * Layout
 * Props:
 *   phases         Phase[]    – full phases array from content.js
 *   activePhaseId  string     – id of the currently active phase
 *   activeSectionId string    – id of the currently active section
 *   onSelectPhase  (id) => void
 *   onSelectSection (id) => void
 *   children       ReactNode  – the main content area
 */
export default function Layout({
  phases,
  activePhaseId,
  activeSectionId,
  activeView,
  onSelectPhase,
  onSelectSection,
  onSelectResources,
  children,
}) {
  return (
    <div className={styles.root}>
      <Sidebar
        phases={phases}
        activePhaseId={activePhaseId}
        activeSectionId={activeSectionId}
        activeView={activeView}
        onSelectPhase={onSelectPhase}
        onSelectSection={onSelectSection}
        onSelectResources={onSelectResources}
      />

      <div className={styles.body}>
        <main className={styles.main} id="main-content">
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
