import { pathway } from '../../content/site'

/** The KGWF pathway: Support → Skills → Confidence → Opportunity → Independence → Community impact. */
export function Pathway({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  const line = dark ? 'bg-sand/35' : 'bg-navy/30'
  const label = dark ? 'text-ivory' : 'text-navy'
  const num = dark ? 'text-sand' : 'text-gold-ink'
  const dot = (last: boolean) =>
    `block shrink-0 rounded-full ${last ? `size-3.5 ${dark ? 'bg-sand' : 'bg-navy'}` : 'size-[11px] border border-gold-ink bg-sand'}`

  return (
    <div className={className}>
      <ol aria-label="The KGWF pathway" className="hidden items-start md:flex">
        {pathway.map((step, i) => {
          const last = i === pathway.length - 1
          return (
            <li key={step} className={`flex items-start ${last ? '' : 'flex-1'}`}>
              <div className="flex min-w-24 flex-col gap-2.5">
                <span aria-hidden="true" className={dot(last)} />
                <span aria-hidden="true" className={`font-display text-[11px] font-bold ${num}`}>
                  0{i + 1}
                </span>
                <span className={`font-display text-sm font-bold whitespace-nowrap ${label}`}>{step}</span>
              </div>
              {!last && <span aria-hidden="true" className={`mx-3 mt-[5px] h-px flex-1 ${line}`} />}
            </li>
          )
        })}
      </ol>
      <ol aria-label="The KGWF pathway" className="flex flex-col md:hidden">
        {pathway.map((step, i) => {
          const last = i === pathway.length - 1
          return (
            <li key={step} className="flex flex-col">
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className={dot(last)} />
                <span className={`font-display text-[15px] font-bold ${label}`}>{step}</span>
              </div>
              {!last && <span aria-hidden="true" className={`ml-[5px] h-[18px] w-px ${line}`} />}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
