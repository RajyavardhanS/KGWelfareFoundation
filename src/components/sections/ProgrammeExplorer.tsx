import { useId, useState, type KeyboardEvent } from 'react'
import { programmes } from '../../content/programmes'
import { TextLink } from '../ui/Button'
import { IllustrationNote } from '../ui/Misc'

/** Accessible tabbed explorer of the five programme areas (from Concept B). */
export function ProgrammeExplorer() {
  const [active, setActive] = useState(0)
  const base = useId()
  const p = programmes[active]

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    if (e.key in keys) {
      e.preventDefault()
      const next = (active + keys[e.key] + programmes.length) % programmes.length
      setActive(next)
      document.getElementById(`${base}-tab-${next}`)?.focus()
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
      <div role="tablist" aria-orientation="vertical" aria-label="Programme areas" className="flex flex-col border-t border-navy/16 lg:col-span-4">
        {programmes.map((prog, i) => {
          const selected = i === active
          return (
            <button
              key={prog.slug}
              id={`${base}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${base}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKey}
              className={`flex w-full items-center gap-4 border-b border-navy/12 py-5 text-left transition-colors ${selected ? 'text-navy' : 'text-slate hover:text-navy'}`}
            >
              <span className="w-6 font-display text-xs font-bold text-gold-ink">{prog.number}</span>
              <span className={`flex-1 font-display text-[19px] tracking-[-0.01em] ${selected ? 'font-extrabold' : 'font-semibold'}`}>{prog.title}</span>
              <span aria-hidden="true" className={`h-0.5 w-6 transition-colors ${selected ? 'bg-gold-ink' : 'bg-transparent'}`} />
            </button>
          )
        })}
      </div>

      <div
        id={`${base}-panel`}
        role="tabpanel"
        aria-labelledby={`${base}-tab-${active}`}
        className="grid gap-8 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:col-span-7 lg:col-start-6"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-paper md:aspect-auto md:h-[440px]">
          <img key={p.image} src={p.image} alt={p.imageAlt} loading="lazy" className="size-full object-cover" />
          {p.illustrative && <IllustrationNote className="absolute right-3 bottom-3" />}
        </div>
        <div className="flex flex-col gap-4">
          <p className="eyebrow text-[11px] text-teal">{p.title}</p>
          <p className="font-serif text-[24px] leading-[1.3] text-navy md:text-[26px]">{p.line}</p>
          <ul className="border-t border-navy/12">
            {p.groups
              .flatMap((g) => g.items)
              .slice(0, 6)
              .map((item) => (
                <li key={item} className="border-b border-navy/8 py-2.5 text-[15.5px] leading-snug text-ink-soft">
                  {item}
                </li>
              ))}
          </ul>
          <TextLink to={`/programmes/${p.slug}`} className="mt-1.5 self-start text-navy">
            Explore programme
          </TextLink>
        </div>
      </div>
    </div>
  )
}
