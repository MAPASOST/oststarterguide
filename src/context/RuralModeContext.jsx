import { createContext, useContext, useState } from 'react'

const RuralModeContext = createContext({ ruralMode: false, toggleRuralMode: () => {} })

export function RuralModeProvider({ children }) {
  const [ruralMode, setRuralMode] = useState(() => {
    try { return localStorage.getItem('ruralMode') === 'true' } catch { return false }
  })

  function toggleRuralMode() {
    setRuralMode(prev => {
      const next = !prev
      try { localStorage.setItem('ruralMode', String(next)) } catch {}
      return next
    })
  }

  return (
    <RuralModeContext.Provider value={{ ruralMode, toggleRuralMode }}>
      {children}
    </RuralModeContext.Provider>
  )
}

export function useRuralMode() {
  return useContext(RuralModeContext)
}
