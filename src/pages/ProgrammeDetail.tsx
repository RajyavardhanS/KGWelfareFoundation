import { Link, Navigate, useParams } from 'react-router-dom'
import { CtaBand } from '../components/blocks/CtaBand'
import { PageHero } from '../components/blocks/PageHero'
import { PageMeta } from '../components/blocks/PageMeta'
import { StoryCard } from '../components/sections/StoryCard'
import { useSupport } from '../components/support/SupportContext'
import { Button, ButtonLink } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { IllustrationNote } from '../components/ui/Misc'
import { Reveal } from '../components/ui/Reveal'
import { ReviewFlag } from '../components/ui/ReviewFlag'
import { Eyebrow } from '../components/ui/Section'
import { getProgramme, programmes } from '../content/programmes'
import { stories } from '../content/stories'

export default function ProgrammeDetail() {
  const { slug } = useParams()
  const p = getProgramme(slug)
  const { openSupport } = useSupport()
  if (!p) return <Navigate to="/programmes" replace />

  const idx = programmes.indexOf(p)
  const next = programmes[(idx + 1) % programmes.length]
  const related = stories.filter((s) => s.programme === p.slug).slice(0, 2)
  const sage = p.accent === 'sage'

  return (
    <>
      <PageMeta title={p.title} description={p.line} />
      <PageHero
        eyebrow={`Programme ${p.number}`}
        title={p.title}
        intro={<p>{p.line}</p>}
        image={p.image}
        imageAlt={p.imageAlt}
        illustrative={p.illustrative}
        actions={
          <>
            <Button onClick={openSupport}>Support this programme</Button>
            <ButtonLink to="/get-involved#volunteer" variant="outline">
              Volunteer
            </ButtonLink>
          </>
        }
      />

      <section aria-label="Programme details" className={`py-24 md:py-32 ${sage ? 'bg-sage' : 'border-t border-navy/12 bg-white'}`}>
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-6">
          <Reveal className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow tone={sage ? 'sage' : 'teal'}>Overview</Eyebrow>
            <p className="font-serif text-[26px] leading-[1.38] text-navy md:text-[30px]">{p.summary}</p>
            <p className="text-[15px] text-slate">
              Programme outcomes and participant numbers
              <ReviewFlag kind="add" />
            </p>
          </Reveal>
          <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7">
            {p.groups.map((g) => (
              <Reveal key={g.title} className="flex flex-col gap-4">
                <h2 className="text-[22px] font-bold">{g.title}</h2>
                <ul className={`border-t ${sage ? 'border-navy/20' : 'border-navy/14'}`}>
                  {g.items.map((item) => (
                    <li key={item} className={`flex gap-3.5 border-b py-3.5 text-[16.5px] leading-snug text-ink-soft ${sage ? 'border-navy/12' : 'border-navy/10'}`}>
                      <Icon name="check" size={18} className={`mt-0.5 shrink-0 ${sage ? 'text-teal-deep' : 'text-teal'}`} strokeWidth={1.8} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {p.gallery.length > 0 && (
        <section aria-label="In pictures" className="py-24 md:py-28">
          <div className={`container-site grid gap-4 sm:grid-cols-2 ${p.gallery.length >= 3 ? 'lg:grid-cols-3' : ''}`}>
            {p.gallery.map((g) => (
              <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-paper">
                <img src={g.src} alt={g.alt} loading="lazy" className="size-full object-cover" />
                {g.src.endsWith('.svg') && <IllustrationNote className="absolute right-3 bottom-3" />}
              </div>
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="needs-title" className="pb-24 md:pb-32">
        <div className="container-site grid gap-10 rounded-[20px] bg-navy px-7 py-12 text-ivory md:px-16 md:py-16 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <Eyebrow tone="sand">How you can help</Eyebrow>
            <h2 id="needs-title" className="text-[32px] leading-[1.08] font-extrabold tracking-[-0.025em] text-ivory md:text-[40px]">
              What helps this programme grow.
            </h2>
          </div>
          <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-sand/20">
              {p.supportNeeded.map((n) => (
                <li key={n} className="border-b border-sand/20 py-4 font-display text-lg font-bold">
                  {n}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3.5">
              <Button variant="sand" onClick={openSupport}>
                Support KGWF
              </Button>
              <ButtonLink to="/csr-partnerships#enquire" variant="outline-light">
                Fund through CSR
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-navy/12 py-24 md:py-28">
          <div className="container-site flex flex-col gap-10">
            <h2 id="related-title" className="eyebrow text-terracotta-deep">
              Stories from this programme
            </h2>
            <div className="grid gap-12 md:grid-cols-2 md:gap-6">
              {related.map((s) => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section aria-label="Next programme" className="border-t border-navy/12">
        <Link to={`/programmes/${next.slug}`} className="card-hover container-site flex items-center justify-between gap-6 py-12">
          <span className="flex flex-col gap-2">
            <span className="eyebrow text-[11px] text-slate">Next programme</span>
            <span className="card-title font-display text-[26px] font-bold tracking-[-0.015em] text-navy md:text-[34px]">{next.title}</span>
          </span>
          <Icon name="arrow-right" size={32} className="shrink-0 text-navy" strokeWidth={1.4} />
        </Link>
      </section>
      <CtaBand />
    </>
  )
}
