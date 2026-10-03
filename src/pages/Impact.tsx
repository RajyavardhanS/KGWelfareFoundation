import { CtaBand } from '../components/blocks/CtaBand'
import { PageHero } from '../components/blocks/PageHero'
import { PageMeta } from '../components/blocks/PageMeta'
import { ImpactBand } from '../components/sections/ImpactBand'
import { Transparency } from '../components/sections/Transparency'
import { VerticalTag } from '../components/ui/Misc'
import { Pathway } from '../components/ui/Pathway'
import { Reveal } from '../components/ui/Reveal'
import { ReviewFlag } from '../components/ui/ReviewFlag'
import { SectionHeading } from '../components/ui/Section'
import { communityMetrics, founderMetrics, impactSteps, learningMetrics, type Metric } from '../content/impact'

function LedgerRow({ m }: { m: Metric }) {
  const muted = m.vertical === 'founder'
  return (
    <tr className="border-b border-navy/14 align-baseline">
      <th scope="row" className={`py-5 pr-6 text-left font-display text-[40px] leading-none font-extrabold tracking-[-0.035em] tabular md:text-[52px] ${muted ? 'text-gold-ink' : 'text-navy'}`}>
        {m.value}
      </th>
      <td className="py-5 pr-6 text-[16.5px] leading-normal">
        {m.label}
        {m.verify && <ReviewFlag note={m.verify} />}
        <span className="mt-1 block text-[13px] text-slate">Source: {m.source}</span>
      </td>
      <td className="hidden py-5 text-right md:table-cell">
        <VerticalTag vertical={m.vertical} />
      </td>
    </tr>
  )
}

export default function Impact() {
  return (
    <>
      <PageMeta title="Impact" description="KGWF’s impact at a glance — every figure labelled with its programme vertical and source." />
      <PageHero
        eyebrow="Impact"
        title={
          <>
            Counted in people,
            <br />
            not in posters.
          </>
        }
        intro={<p>Every figure on this page carries its vertical and its source document. Nothing rounded up, nothing merged.</p>}
      >
        <Pathway className="pt-6" />
      </PageHero>

      <ImpactBand id="glance" />

      <section aria-labelledby="ledger-title" className="py-24 md:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <p className="eyebrow text-teal">The full ledger</p>
            <h2 id="ledger-title" className="font-serif text-[40px] leading-[1.05] font-normal tracking-[-0.02em] md:text-[52px]">
              Every number, with its source.
            </h2>
            <p className="text-[17px] leading-relaxed text-slate">
              Community programme figures come first. Founder-led and corporate-learning figures are labelled so they are never read as the same thing.
            </p>
          </div>
          <div className="overflow-x-auto lg:col-span-7 lg:col-start-6">
            <table className="w-full min-w-[520px] border-collapse">
              <caption className="sr-only">KGWF impact figures with source and vertical</caption>
              <thead>
                <tr className="eyebrow border-b-2 border-navy text-left text-[10.5px] text-slate">
                  <th scope="col" className="pb-3 font-bold">Figure</th>
                  <th scope="col" className="pb-3 font-bold">What it counts</th>
                  <th scope="col" className="hidden pb-3 text-right font-bold md:table-cell">Vertical</th>
                </tr>
              </thead>
              <tbody>
                {[...communityMetrics, ...founderMetrics, ...learningMetrics].map((m) => (
                  <LedgerRow key={m.value + m.label} m={m} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-title" className="border-t border-navy/12 bg-white py-24 md:py-32">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading
            id="how-title"
            eyebrow="How we create impact"
            title="From first contact to follow-through."
            aside={<p className="max-w-[300px] text-[13px] text-slate">An illustrative way of describing our work — not a formal KGWF methodology.</p>}
          />
          <ol className="grid border-t border-navy sm:grid-cols-2 lg:grid-cols-5">
            {impactSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 70} className={`flex flex-col gap-3.5 pt-7 pb-6 sm:pr-7 lg:pb-0 ${i > 0 ? 'lg:border-l lg:border-navy/12 lg:pl-7' : ''}`}>
                <span className="font-display text-[13px] font-bold text-gold-ink">0{i + 1}</span>
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="text-[15.5px] leading-normal text-slate">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="Reports" className="py-20">
        <div className="container-site flex flex-col items-start gap-4 rounded-2xl border border-navy/14 bg-ivory-dim p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Annual reports &amp; impact reports</h2>
            <p className="text-[15.5px] text-slate">
              Reports will be published here for donors, CSR partners and the public.
              <ReviewFlag kind="add" />
            </p>
          </div>
        </div>
      </section>
      <Transparency />
      <CtaBand />
    </>
  )
}
