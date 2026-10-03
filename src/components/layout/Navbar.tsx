import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../../content/site'
import { useSupport } from '../support/SupportContext'
import { Icon } from '../ui/Icon'
import { Logo, Motto } from '../ui/Misc'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openSupport } = useSupport()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded bg-navy px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to content
      </a>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled ? 'border-b border-navy/10 bg-white/95 shadow-[0_6px_18px_-12px_rgba(12,32,56,0.25)] backdrop-blur-sm' : 'border-b border-transparent bg-ivory'
        }`}
      >
        <div className={`container-site flex items-center justify-between gap-6 transition-[height] duration-300 ${scrolled ? 'h-[68px]' : 'h-[84px]'}`}>
          <Link to="/" aria-label={`${site.name} — home`} className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-6 font-display text-[14px] font-semibold text-navy">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `relative py-2 transition-colors hover:text-teal ${isActive ? 'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-sand-line' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={openSupport}
              className={`inline-flex items-center rounded-md bg-navy px-4 font-display text-[13px] font-bold text-ivory transition-[height,background-color] hover:bg-navy-deep sm:px-5 sm:text-sm ${scrolled ? 'h-10' : 'h-11'}`}
            >
              Support<span className="hidden sm:inline">&nbsp;KGWF</span>
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex size-11 items-center justify-center rounded-md border border-navy/20 text-navy hover:border-navy xl:hidden"
            >
              <Icon name="menu" size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onSupport={openSupport} />
    </>
  )
}

function MobileMenu({ open, onClose, onSupport }: { open: boolean; onClose: () => void; onSupport: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      id="mobile-menu"
      onClose={onClose}
      aria-label="Menu"
      className="m-0 h-dvh max-h-none w-full max-w-none bg-navy-deep p-0 text-ivory backdrop:bg-transparent"
    >
      <div className="flex min-h-full flex-col px-6 pb-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" onClick={onClose} aria-label="Home">
            <Logo light compact />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-11 items-center justify-center rounded-md border border-sand/35 text-ivory"
          >
            <Icon name="x" size={20} strokeWidth={1.8} />
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-5 border-t border-sand/16">
          <ul>
            {[{ label: 'Home', to: '/' }, ...nav].map((item, i) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-baseline justify-between border-b border-sand/16 py-3.5 transition-colors hover:text-sand ${isActive ? 'text-sand' : ''}`
                  }
                >
                  <span className="font-display text-[26px] font-bold tracking-[-0.02em]">{item.label}</span>
                  <span className="font-display text-[11px] text-mist-dim">0{i + 1}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1" />
        <div className="mt-10 flex flex-col gap-4">
          <button
            type="button"
            onClick={() => {
              onClose()
              onSupport()
            }}
            className="flex h-14 items-center justify-center rounded-md bg-sand font-display text-base font-extrabold text-navy-deep"
          >
            Support KGWF
          </button>
          <div className="flex justify-between text-sm text-mist">
            <a href={site.contact.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp {site.contact.whatsapp}
            </a>
            <a href={site.contact.emailHref}>Email</a>
          </div>
          <Motto className="text-[15px] text-sand" />
        </div>
      </div>
    </dialog>
  )
}
