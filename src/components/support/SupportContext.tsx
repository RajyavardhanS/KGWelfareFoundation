import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { SupportPanel } from './SupportPanel'

const SupportContext = createContext<{ openSupport: () => void }>({ openSupport: () => {} })

export function SupportProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openSupport = useCallback(() => setOpen(true), [])
  return (
    <SupportContext.Provider value={{ openSupport }}>
      {children}
      <SupportPanel open={open} onClose={() => setOpen(false)} />
    </SupportContext.Provider>
  )
}

export const useSupport = () => useContext(SupportContext)
