import { Link } from 'react-router-dom'
import { communityMetrics, founderMetrics, learningMetrics } from '../../content/impact'
import { ReviewFlag } from '../ui/ReviewFlag'
import { Eyebrow } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { VerticalTag } from '../ui/Misc'

/** Impact at a glance — community figures first and largest; corporate figures labelled and secondary. */
export function ImpactBand({ id = 'impact' }: { id?: string }) {
  const big = [...communityMetrics, ...founderMetrics]
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-navy-deep py-24 text-ivory md:py-32">
      <div className="container-site flex flex-col gap-16 md:gap-[72px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex max-w-2xl flex-col gap-5">
            <Eyebrow tone="sand">Impact at a glance</Eyebrow>
            <h2 id={`${id}-title`} className="text-[38px] leading-[1.04] font-extrabold tracking-[-0.03em] text-ivory md:text-[56px]">
              Counted in people,
              <br />
              one pathway at a time.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-mist">
            Figures as reported in KGWF’s source documents. Community programmes and the Learning &amp; Leadership vertical are shown separately.
          </p>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-3.5">
            <VerticalTag vertical="community" />
            <span aria-hidden="true" className="h-px flex-1 bg-sand/35" />
          </div>
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {big.map((m, i) => {
              const founder = m.vertical === 'founder'
              return (
                <Reveal as="li" key={m.value + m.label} delay={i * 80} className="flex flex-col gap-3.5">
                  <span aria-hidden="true" className={`block size-[11px] rounded-full ${founder ? 'border border-sand' : 'bg-sand'}`} />
                  <span className={`font-display text-[60px] leading-[0.95] font-extrabold tracking-[-0.04em] tabular md:text-[64px] xl:text-[68px] ${founder ? 'text-sand' : 'text-ivory'}`}>
                    {m.value}
                  </span>
                  <span className="text-base leading-normal text-[#d5dbe3]">
                    {m.label}
                    {m.verify && <ReviewFlag note={m.verify} />}
                  </span>
                </Reveal>
              )
            })}
          </ul>
          <p className="text-[13.5px] text-mist-dim">
            Outlined markers: founder-led initiatives, which may predate KGWF’s incorporation in 2024.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3.5">
            <VerticalTag vertical="learning" />
            <span aria-hidden="true" className="h-px flex-1 bg-sand/20" />
            <Link to="/corporate-learning" className="font-display text-[13px] font-bold text-sand hover:text-ivory">
              Corporate / Learning →
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {learningMetrics.slice(0, 5).map((m) => (
              <li key={m.label} className="flex flex-col gap-2">
                <span className="font-display text-[34px] font-extrabold tracking-[-0.03em] tabular md:text-[40px]">{m.value}</span>
                <span className="text-[14.5px] leading-snug text-mist">{m.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
