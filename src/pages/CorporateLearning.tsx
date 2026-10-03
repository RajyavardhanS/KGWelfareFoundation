import { Link } from 'react-router-dom'
import { EnquiryForm } from '../components/blocks/EnquiryForm'
import { PageMeta } from '../components/blocks/PageMeta'
import { ButtonLink } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { VerticalTag } from '../components/ui/Misc'
import { Reveal } from '../components/ui/Reveal'
import { ReviewFlag } from '../components/ui/ReviewFlag'
import { Eyebrow, SectionHeading } from '../components/ui/Section'
import { learningMetrics } from '../content/impact'
import {
  ascentModel,
  caseStudies,
  clusters,
  credentials,
  deliveryModes,
  engagementModels,
  learningIntro,
  learningOutcomes,
  programmeCatalogue,
  sectors,
  sixD,
  toolCatalogue,
  whyPartner,
  workshopGallery,
} from '../content/learning'
import { founder } from '../content/people'

function Hero() {
  return (
    <section aria-labelledby="ll-title" className="relative overflow-hidden bg-navy-deep text-ivory">
      <div className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-6">
        <div className="flex flex-col gap-7 lg:col-span-7">
          <Eyebrow tone="sand" rule>
            {learningIntro.name}
          </Eyebrow>
          <h1 id="ll-title" className="text-[42px] leading-[1.02] font-extrabold tracking-[-0.035em] text-ivory md:text-[64px]">
            Building capability in people.
            <br />
            <span className="text-sand">Building opportunity in communities.</span>
          </h1>
          <p className="max-w-2xl text-[19px] leading-[1.6] text-mist">{learningIntro.about[0]}</p>
          <div className="flex flex-wrap gap-3.5">
            <ButtonLink to="#enquire" variant="sand" arrow>
              Book a discovery call
            </ButtonLink>
            <ButtonLink to="#catalogue" variant="outline-light">
              Programme catalogue
            </ButtonLink>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-[8px_8px_0_0] sm:aspect-[5/4] lg:aspect-[4/5]">
            <img src="/images/learning/workshop-group.jpg" alt="Participants and facilitators at a KGWF leadership workshop" className="size-full object-cover" />
          </div>
          <div aria-hidden="true" className="absolute inset-[14px_14px_0] rounded-[4px_4px_0_0] border border-b-0 border-sand/60" />
        </div>
      </div>
    </section>
  )
}

export default function CorporateLearning() {
  return (
    <>
      <PageMeta
        title="Corporate / Learning"
        description="KGWF Learning & Leadership Solutions — leadership, executive communication, AI and enterprise technology training delivered by practising industry leaders."
      />
      <Hero />

      <section aria-label="About the vertical" className="py-24 md:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-6">
          <Reveal className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow>{learningIntro.tagline}</Eyebrow>
            <blockquote className="font-serif text-[28px] leading-[1.32] text-navy md:text-[34px]">“{learningIntro.quote}”</blockquote>
          </Reveal>
          <Reveal className="flex flex-col gap-5 text-[18px] leading-[1.65] text-ink-soft lg:col-span-6 lg:col-start-7">
            {learningIntro.about.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="rounded-xl bg-sage p-5 text-[16px] text-teal-deep">
              <strong className="font-display">Social responsibility built in. </strong>
              {learningIntro.socialLink}
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="reach-title" className="border-y border-navy/12 bg-white py-20 md:py-24">
        <div className="container-site flex flex-col gap-10">
          <div className="flex flex-wrap items-center gap-4">
            <h2 id="reach-title" className="eyebrow text-teal">
              Reach &amp; outcomes
            </h2>
            <VerticalTag vertical="learning" />
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
            {learningMetrics.map((m) => (
              <li key={m.label} className="flex flex-col gap-2 border-t-2 border-navy pt-4">
                <span className="font-display text-[38px] leading-none font-extrabold tracking-[-0.03em] text-navy tabular">{m.value}</span>
                <span className="text-[14px] leading-snug text-slate">
                  {m.label}
                  {m.verify && <ReviewFlag note={m.verify} />}
                </span>
              </li>
            ))}
          </ul>
          <ul className="grid gap-4 border-t border-navy/12 pt-8 md:grid-cols-3">
            {learningOutcomes.map((o) => (
              <li key={o.label} className="flex items-baseline gap-4">
                <span className="font-display text-[30px] font-extrabold text-gold-ink tabular">{o.value}</span>
                <span className="text-[14.5px] leading-snug text-slate">{o.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="gap-title" className="py-24 md:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow tone="terracotta">Why organisations partner with us</Eyebrow>
            <h2 id="gap-title" className="text-[34px] leading-[1.08] font-extrabold tracking-[-0.025em] md:text-[44px]">
              The gap is not in expertise.
            </h2>
            <p className="text-[18px] leading-relaxed text-ink-soft">{whyPartner.gap}</p>
          </div>
          <ul className="grid gap-x-8 border-t border-navy/14 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {whyPartner.outcomes.map((o) => (
              <li key={o} className="flex gap-3 border-b border-navy/10 py-4 text-[15.5px] leading-snug text-ink-soft">
                <Icon name="check" size={18} className="mt-0.5 shrink-0 text-teal" strokeWidth={1.8} />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="ascent-title" className="bg-ivory-dim py-24 md:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Eyebrow tone="gold">The Capability Ascent Model™</Eyebrow>
            <h2 id="ascent-title" className="text-[34px] leading-[1.08] font-extrabold tracking-[-0.025em] md:text-[44px]">
              From technical knowledge to leadership impact.
            </h2>
          </div>
          <ol className="flex flex-col gap-2.5 lg:col-span-7 lg:col-start-6">
            {ascentModel.map((l) => (
              <li
                key={l.level}
                className="flex flex-col gap-1 rounded-xl border border-navy/12 bg-white px-6 py-5 sm:flex-row sm:items-center sm:gap-6"
                style={{ marginLeft: `calc(${(5 - l.level) * 4}%)` }}
              >
                <span className="font-display text-xs font-bold whitespace-nowrap text-gold-ink">Level {l.level}</span>
                <span className="font-display text-lg font-bold text-navy sm:w-64 sm:shrink-0">{l.title}</span>
                <span className="text-[14.5px] text-slate">{l.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="clusters-title" className="py-24 md:py-32">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading id="clusters-title" eyebrow="Capability clusters" title="Four suites. Standalone sessions or integrated journeys." />
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {clusters.map((c) => (
              <li key={c.title} className="flex flex-col gap-4 rounded-2xl border border-navy/12 bg-white p-7">
                <h3 className="text-xl font-bold">{c.title}</h3>
                <ul className="flex flex-col gap-2 text-[15px] leading-snug text-slate">
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="catalogue" aria-labelledby="catalogue-title" className="border-t border-navy/12 bg-white py-24 md:py-32">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading id="catalogue-title" eyebrow="Programme catalogue" title="Programmes we deliver." />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {programmeCatalogue.map((c) => (
              <div key={c.title} className="flex flex-col gap-4">
                <h3 className="border-b-2 border-navy pb-3 text-lg font-bold">{c.title}</h3>
                <ul className="flex flex-col">
                  {c.items.map((i) => (
                    <li key={i} className="border-b border-navy/10 py-2.5 text-[15px] text-ink-soft">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 pt-6">
            <h3 className="text-[26px] font-bold tracking-[-0.015em]">Technology &amp; tool proficiency catalogue</h3>
            <div className="overflow-x-auto rounded-xl border border-navy/12">
              <table className="w-full min-w-[860px] border-collapse text-left text-[14.5px]">
                <caption className="sr-only">Technology training programmes, audiences and certification alignment</caption>
                <thead className="bg-navy text-ivory">
                  <tr>
                    {['Technology / tool', 'Programme content', 'Target audience', 'Alignment'].map((h) => (
                      <th key={h} scope="col" className="eyebrow px-5 py-3.5 text-[10.5px] font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {toolCatalogue.map((t, i) => (
                    <tr key={t.tool} className={i % 2 ? 'bg-ivory-dim' : 'bg-white'}>
                      <th scope="row" className="px-5 py-4 align-top">
                        <span className="block font-display font-bold text-navy">{t.tool}</span>
                        <span className="text-[13px] font-normal text-slate">{t.area}</span>
                      </th>
                      <td className="px-5 py-4 align-top text-ink-soft">{t.content}</td>
                      <td className="px-5 py-4 align-top text-slate">{t.audience}</td>
                      <td className="px-5 py-4 align-top font-display text-[13px] font-bold whitespace-nowrap text-teal-deep">{t.alignment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="sixd-title" className="bg-navy py-24 text-ivory md:py-32">
        <div className="container-site flex flex-col gap-14">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-2xl flex-col gap-4">
              <Eyebrow tone="sand">Our learning methodology</Eyebrow>
              <h2 id="sixd-title" className="text-[36px] leading-[1.06] font-extrabold tracking-[-0.03em] text-ivory md:text-[48px]">
                The KGWF 6D Framework™
              </h2>
            </div>
            <p className="max-w-sm text-[15.5px] text-mist">Every engagement follows six steps so that learning turns into workplace behaviour change and measurable outcomes.</p>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-2xl bg-sand/20 sm:grid-cols-2 lg:grid-cols-3">
            {sixD.map((s, i) => (
              <li key={s.step} className="flex flex-col gap-3 bg-navy p-7">
                <span className="font-display text-xs font-bold text-sand">Step {i + 1}</span>
                <h3 className="text-2xl font-bold text-ivory">{s.step}</h3>
                <p className="text-[15px] leading-relaxed text-mist">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="facilitator-title" className="py-24 md:py-32">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <img src={founder.portrait} alt="Squadron Leader Vibhuti Mangal (Retd.)" loading="lazy" className="mx-auto aspect-square w-full max-w-[380px] rounded-[20px] object-cover" />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6">
            <Eyebrow tone="gold">Meet the lead facilitator</Eyebrow>
            <h2 id="facilitator-title" className="text-[34px] leading-[1.08] font-extrabold tracking-[-0.025em] md:text-[44px]">
              {founder.name}
            </h2>
            <p className="font-display text-[15px] font-semibold text-slate">{founder.roles.join(' · ')}</p>
            <p className="text-[18px] leading-relaxed text-ink-soft">
              With over 15 years of experience across defence, technology and corporate leadership, she has led enterprise transformation initiatives while
              building people capabilities across multiple countries — teaching from boardrooms, war rooms, project reviews and leadership forums she
              operates in daily, not from textbooks.
              <ReviewFlag note="The source also states “20+ Years of Experience”." />
            </p>
            <ul className="flex flex-wrap gap-2">
              {founder.certifications.map((c) => (
                <li key={c} className="rounded bg-ivory-dim px-2.5 py-1.5 font-display text-[12.5px] font-bold text-navy">
                  {c}
                </li>
              ))}
            </ul>
            <Link to="/about#founder" className="text-link self-start text-navy">
              The founder’s story →
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="cases-title" className="border-t border-navy/12 bg-white py-24 md:py-32">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading id="cases-title" eyebrow="Success stories" tone="terracotta" title="Behaviour change, measured." />
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <article key={c.title} className="flex flex-col gap-5 rounded-2xl border border-navy/12 bg-ivory p-7">
                <span className="font-display text-xs font-bold text-gold-ink">Case study {i + 1}</span>
                <h3 className="text-[22px] leading-tight font-bold">{c.title}</h3>
                <div className="flex flex-col gap-1.5">
                  <p className="eyebrow text-[10px] text-slate">Situation</p>
                  <p className="text-[15px] leading-normal text-ink-soft">{c.situation}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="eyebrow text-[10px] text-slate">Approach</p>
                  <p className="text-[15px] leading-normal text-ink-soft">{c.approach}</p>
                </div>
                <div className="mt-auto flex flex-col gap-2 border-t border-navy/12 pt-4">
                  <p className="eyebrow text-[10px] text-teal-deep">
                    Outcome
                    {c.verify && <ReviewFlag note={c.verify} />}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {c.outcomes.map((o) => (
                      <li key={o} className="font-display text-[15px] font-bold text-navy">
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="models-title" className="py-24 md:py-32">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading id="models-title" eyebrow="Engagement models" title="From a keynote to a six-month learning journey." />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {engagementModels.map((m) => (
              <div key={m.title} className="flex flex-col gap-4">
                <h3 className="border-b-2 border-navy pb-3 text-lg font-bold">{m.title}</h3>
                <ul className="flex flex-col">
                  {m.items.map((i) => (
                    <li key={i} className="border-b border-navy/10 py-2.5 text-[15px] text-ink-soft">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid gap-10 border-t border-navy/12 pt-12 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <p className="eyebrow text-[11px] text-teal">Delivery</p>
              <ul className="flex flex-wrap gap-2">
                {deliveryModes.map((d) => (
                  <li key={d} className="rounded-full border border-navy/18 bg-white px-4 py-2 font-display text-[13.5px] font-bold text-navy">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="eyebrow text-[11px] text-teal">Sectors served</p>
              <ul className="flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <li key={s} className="rounded-full border border-navy/18 bg-white px-4 py-2 font-display text-[13.5px] font-bold text-navy">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="ws-gallery-title" className="border-t border-navy/12 bg-white py-24 md:py-32">
        <div className="container-site flex flex-col gap-12">
          <SectionHeading id="ws-gallery-title" eyebrow="Workshop gallery" title="In the room." />
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {workshopGallery.map((g) => (
              <li key={g.src}>
                <figure className="flex flex-col gap-2">
                  <img src={g.src} alt={g.caption} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
                  <figcaption className="text-[13px] leading-snug text-slate">{g.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="cred-title" className="py-20">
        <div className="container-site grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">
          <h2 id="cred-title" className="text-[28px] leading-tight font-extrabold tracking-[-0.02em]">
            Foundation credentials
          </h2>
          <ul className="grid border-t border-navy/14 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((c) => (
              <li key={c.text} className="border-b border-navy/10 py-4 font-display text-[15px] font-bold text-navy sm:pr-6">
                {c.text}
                {c.verify && <ReviewFlag note="Listed in the Capability Statement only — confirm with supporting evidence before publishing." />}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="enquire" aria-labelledby="ll-enquire-title" className="bg-navy-deep py-24 text-ivory md:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Eyebrow tone="sand">Start a conversation</Eyebrow>
            <h2 id="ll-enquire-title" className="text-[34px] leading-[1.08] font-extrabold tracking-[-0.025em] text-ivory md:text-[44px]">
              Every engagement begins with a complimentary 30-minute discovery call.
            </h2>
            <p className="text-[16px] leading-relaxed text-mist">
              Proposals are tailored to your objectives, participant profile, group size, duration, format and delivery mode. A detailed commercial
              quotation follows the discovery conversation.
            </p>
          </div>
          <div className="rounded-2xl bg-ivory p-6 text-charcoal md:p-10 lg:col-span-7 lg:col-start-6">
            <EnquiryForm
              subject="Learning & Leadership enquiry"
              interests={['Leadership development', 'Executive communication', 'AI & technology training', 'Tool proficiency (Power BI, Tableau, Excel, SAP, ServiceNow, AWS)', 'Campus / academic programme', 'Executive coaching', 'Something else']}
              submitLabel="Request a discovery call"
            />
          </div>
        </div>
      </section>
    </>
  )
}
