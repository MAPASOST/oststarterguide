import { useState, useCallback } from 'react'
import { phases } from './data/content'
import Layout from './components/Layout'
import PhaseView from './components/PhaseView'

export default function App() {
  const [activePhaseId, setActivePhaseId] = useState(phases[0].id)
  const [activeSectionId, setActiveSectionId] = useState(phases[0].sections[0]?.id ?? null)

  const activePhase = phases.find((p) => p.id === activePhaseId)

  const handleSelectPhase = useCallback((id) => {
    const phase = phases.find((p) => p.id === id)
    if (!phase) return
    setActivePhaseId(id)
    setActiveSectionId(phase.sections[0]?.id ?? null)
    // Scroll to top of content area on phase switch
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleSelectSection = useCallback((id) => {
    setActiveSectionId(id)
    // Scroll the section into view
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <Layout
      phases={phases}
      activePhaseId={activePhaseId}
      activeSectionId={activeSectionId}
      onSelectPhase={handleSelectPhase}
      onSelectSection={handleSelectSection}
    >
      {activePhase && (
        <PhaseView
          phase={activePhase}
          activeSectionId={activeSectionId}
          onSelectSection={setActiveSectionId}
        />
      )}
    </Layout>
  )
}
