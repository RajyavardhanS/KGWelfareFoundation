import { Link } from 'react-router-dom'
import { CtaBand } from '../components/blocks/CtaBand'
import { PageHero } from '../components/blocks/PageHero'
import { PageMeta } from '../components/blocks/PageMeta'
import { ProgrammeExplorer } from '../components/sections/ProgrammeExplorer'
import { IllustrationNote } from '../components/ui/Misc'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/Section'
import { programmes } from '../content/programmes'

export default function Programmes() {
  return (
    <>
      <PageMeta title="Programmes" description="Education, skills & livelihoods, sustainability, community wellness and volunteerism — KGWF’s five programme areas." />
      <PageHero
        eyebrow="Programmes"
        title={
          <>
            Five areas.
            <br />
            One pathway.
          </>
        }
        intro={
          <p>
            Support leads to skills, skills to confidence, confidence to opportunity — and opportunity to independence. Each of our programme areas is a
            different door onto the same path.
          </p>
        }
      />

      <section aria-label="Programme explorer" className="pb-24 md:pb-32">
        <div className="container-site">
          <ProgrammeExplorer />
        </div>
      </section>

      <section aria-labelledby="all-title" className="border-t border-navy/12 bg-white py-24 md:py-32">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading id="all-title" eyebrow="All programme areas" title="Where the work happens." />
          <ul className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 80} className={i === 1 || i === 4 ? 'lg:mt-20' : ''}>
                <Link to={`/programmes/${p.slug}`} className="card-hover flex flex-col gap-4">
                  <span className={`relative block aspect-[4/5] overflow-hidden rounded-2xl ${p.accent === 'sage' ? 'bg-sage' : 'bg-paper'}`}>
                    <img src={p.image} alt={p.imageAlt} loading="lazy" className="card-img size-full object-cover" />
                    {p.illustrative && <IllustrationNote className="absolute right-3 bottom-3" />}
                  </span>
                  <span className="font-display text-[13px] font-bold text-gold-ink">{p.number}</span>
                  <span className="card-title font-display text-[26px] leading-tight font-bold tracking-[-0.015em] text-navy">{p.title}</span>
                  <span className="text-base leading-relaxed text-slate">{p.summary}</span>
                  <span className="text-link self-start text-[14px] text-navy">Explore programme →</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Help one more person take the next step." text="Fund a programme, sponsor equipment, or give your time as a volunteer or mentor." />
    </>
  )
}
