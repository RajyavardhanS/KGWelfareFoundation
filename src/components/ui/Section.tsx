import type { ReactNode } from 'react'

type Tone = 'teal' | 'gold' | 'terracotta' | 'sand' | 'sage'

const toneClass: Record<Tone, string> = {
  teal: 'text-teal',
  gold: 'text-gold-ink',
  terracotta: 'text-terracotta-deep',
  sand: 'text-sand',
  sage: 'text-teal-deep',
}

export function Eyebrow({ children, tone = 'teal', className = '', rule = false }: { children: ReactNode; tone?: Tone; className?: string; rule?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-3.5 ${toneClass[tone]} ${className}`}>
      {rule && <span className="h-px w-7 bg-current" aria-hidden="true" />}
      {children}
    </p>
  )
}

/** Standard section heading: eyebrow + headline + optional aside (link or note). */
export function SectionHeading({
  eyebrow,
  title,
  tone = 'teal',
  aside,
  dark = false,
  id,
  className = '',
}: {
  eyebrow: string
  title: ReactNode
  tone?: Tone
  aside?: ReactNode
  dark?: boolean
  id?: string
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12 ${className}`}>
      <div className="flex max-w-3xl flex-col gap-4">
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2 id={id} className={`text-[36px] leading-[1.06] font-extrabold tracking-[-0.03em] md:text-[48px] ${dark ? 'text-ivory' : ''}`}>
          {title}
        </h2>
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </div>
  )
}
