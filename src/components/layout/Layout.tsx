import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SupportProvider } from '../support/SupportContext'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function Layout() {
  return (
    <SupportProvider>
      <ScrollManager />
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </SupportProvider>
  )
}
