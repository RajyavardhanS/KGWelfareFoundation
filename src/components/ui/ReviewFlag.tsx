import { SHOW_REVIEW_FLAGS } from '../../config'

type Props = {
  /** Why this item needs verification — shown as a tooltip and to screen readers. */
  note?: string
  kind?: 'verify' | 'add'
  label?: string
  className?: string
}

/**
 * Inline review marker. Renders nothing once VITE_SHOW_REVIEW_FLAGS=false.
 * verify = sources disagree; add = content still to be supplied by KGWF.
 */
export function ReviewFlag({ note, kind = 'verify', label, className = '' }: Props) {
  if (!SHOW_REVIEW_FLAGS) return null
  const text = label ?? (kind === 'verify' ? 'Verify with KGWF' : 'Content to be added')
  const tone = kind === 'verify' ? 'bg-flag text-flag-ink' : 'bg-info text-navy'
  return (
    <span
      title={note}
      className={`ml-1.5 inline-block rounded px-1.5 py-0.5 align-middle font-display text-[10px] font-bold uppercase leading-tight tracking-[0.06em] whitespace-nowrap ${tone} ${className}`}
    >
      [{text}]{note && <span className="sr-only">: {note}</span>}
    </span>
  )
}
