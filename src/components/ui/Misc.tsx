import type { ReactNode } from 'react'
import { site } from '../../content/site'
import { verticalLabel, type Vertical } from '../../content/impact'

export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={light ? '/images/brand/kgwf-mark-light.png' : '/images/brand/kgwf-mark.png'}
        alt=""
        width={50}
        height={36}
        className="h-9 w-auto"
      />
      <span className="flex flex-col gap-[3px]">
        <span className={`font-display text-[19px] leading-none font-extrabold tracking-[0.08em] ${light ? 'text-ivory' : 'text-navy'}`}>
          {site.shortName}
        </span>
        {!compact && (
          <span className={`eyebrow hidden text-[9.5px] tracking-[0.12em] lg:block ${light ? 'text-mist' : 'text-slate'}`}>{site.name}</span>
        )}
      </span>
    </span>
  )
}

export function Motto({ className = '' }: { className?: string }) {
  return (
    <span lang="sa" className={`font-deva ${className}`}>
      {site.motto}
    </span>
  )
}

const verticalTone: Record<Vertical, string> = {
  community: 'bg-sage text-teal-deep',
  founder: 'bg-paper text-[#6b5222]',
  learning: 'bg-info text-navy',
}

export function VerticalTag({ vertical, className = '' }: { vertical: Vertical; className?: string }) {
  return (
    <span className={`inline-block rounded px-2 py-1 font-display text-[10.5px] font-bold uppercase tracking-[0.08em] ${verticalTone[vertical]} ${className}`}>
      {verticalLabel[vertical]}
    </span>
  )
}

export function Monogram({ initials, tone = 'paper' }: { initials: string; tone?: 'paper' | 'sage' }) {
  return (
    <span
      aria-hidden="true"
      className={`flex size-12 shrink-0 items-center justify-center rounded-full font-display text-[15px] font-bold ${tone === 'paper' ? 'bg-paper text-[#6b5222]' : 'bg-sage text-teal-deep'}`}
    >
      {initials}
    </span>
  )
}

/** Small caption shown on illustrations standing in for missing photographs. */
export function IllustrationNote({ className = '' }: { className?: string }) {
  return (
    <span className={`rounded bg-ivory/90 px-2 py-1 font-display text-[10.5px] font-semibold tracking-[0.04em] text-slate ${className}`}>
      Illustration
    </span>
  )
}

export function Dot() {
  return <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-sand-line" />
}

export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`flex flex-col gap-5 text-[18px] leading-[1.65] text-ink-soft ${className}`}>{children}</div>
}
