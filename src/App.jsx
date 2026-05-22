import { useState, useCallback } from 'react'
import { phases } from './data/content'
import { RuralModeProvider } from './context/RuralModeContext'
import Layout from './components/Layout'
import PhaseView from './components/PhaseView'
import ResourceLibrary from './components/ResourceLibrary'

export default function App() {
  const [activeView, setActiveView] = useState('phases') // 'phases' | 'resources'
  const [activePhaseId, setActivePhaseId] = useState(phases[0].id)
  const [activeSectionId, setActiveSectionId] = useState(phases[0].sections[0]?.id ?? null)

  const activePhase = phases.find((p) => p.id === activePhaseId)

  const handleSelectPhase = useCallback((id) => {
    const phase = phases.find((p) => p.id === id)
    if (!phase) return
    setActiveView('phases')
    setActivePhaseId(id)
    setActiveSectionId(phase.sections[0]?.id ?? null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleSelectSection = useCallback((id) => {
    setActiveSectionId(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const handleSelectResources = useCallback(() => {
    setActiveView('resources')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <RuralModeProvider>
      <Layout
        phases={phases}
        activePhaseId={activePhaseId}
        activeSectionId={activeSectionId}
        activeView={activeView}
        onSelectPhase={handleSelectPhase}
        onSelectSection={handleSelectSection}
        onSelectResources={handleSelectResources}
      >
        {activeView === 'resources' ? (
          <ResourceLibrary />
        ) : activePhase ? (
          <PhaseView
            phase={activePhase}
            activeSectionId={activeSectionId}
            onSelectSection={setActiveSectionId}
          />
        ) : null}
      </Layout>
    </RuralModeProvider>
  )
}
