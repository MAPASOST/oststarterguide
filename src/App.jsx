import { useState, useCallback, useEffect } from 'react'
import { phases } from './data/content'
import { RuralModeProvider } from './context/RuralModeContext'
import Layout from './components/Layout'
import HeroPage from './components/HeroPage'
import PhaseView from './components/PhaseView'
import ResourceLibrary from './components/ResourceLibrary'

// Derive initial view + phase from the URL hash (e.g. #partnerships)
function deriveInitialState() {
  const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
  if (hash) {
    for (const phase of phases) {
      if (phase.id === hash) return { view: 'phases', phaseId: phase.id, sectionId: phase.sections[0]?.id ?? null }
      const section = phase.sections.find(s => s.id === hash)
      if (section) return { view: 'phases', phaseId: phase.id, sectionId: section.id }
    }
  }
  return { view: 'hero', phaseId: phases[0].id, sectionId: phases[0].sections[0]?.id ?? null }
}

const INITIAL = deriveInitialState()

export default function App() {
  const [activeView, setActiveView]       = useState(INITIAL.view)       // 'hero' | 'phases' | 'resources'
  const [activePhaseId, setActivePhaseId] = useState(INITIAL.phaseId)
  const [activeSectionId, setActiveSectionId] = useState(INITIAL.sectionId)

  const activePhase = phases.find(p => p.id === activePhaseId)

  // Scroll to a hash target after the initial render when arriving via deep link
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash || INITIAL.view !== 'phases') return
    const el = document.getElementById(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectPhase = useCallback((id) => {
    const phase = phases.find(p => p.id === id)
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

  const handleSelectHero = useCallback(() => {
    setActiveView('hero')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleStart = useCallback(() => {
    handleSelectPhase(phases[0].id)
  }, [handleSelectPhase])

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
        onSelectHero={handleSelectHero}
      >
        {activeView === 'hero' ? (
          <HeroPage onStart={handleStart} />
        ) : activeView === 'resources' ? (
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
