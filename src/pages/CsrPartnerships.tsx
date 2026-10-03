import { Link } from 'react-router-dom'
import { EnquiryForm } from '../components/blocks/EnquiryForm'
import { PageHero } from '../components/blocks/PageHero'
import { PageMeta } from '../components/blocks/PageMeta'
import { Transparency } from '../components/sections/Transparency'
import { ButtonLink } from '../components/ui/Button'
import { Icon, type IconName } from '../components/ui/Icon'
import { Reveal } from '../components/ui/Reveal'
import { ReviewFlag } from '../components/ui/ReviewFlag'
import { Eyebrow, SectionHeading } from '../components/ui/Section'
import { partnerFormats, partnerIdeas, partnerProcess, partnerReasons, supportNeeded } from '../content/partnerships'
import { programmes } from '../content/programmes'

export default function CsrPartnerships() {
  return (
    <>
      <PageMeta
        title="CSR & Partnerships"
        description="KGWF is a CSR implementation partner in Jaipur: we design, execute, monitor and report community programmes aligned with your CSR priorities."
      />
      <PageHero
        eyebrow="CSR & partnerships"
        title={<>Good intentions need good implementation.</>}
        intro={
          <p>
            Corporate Social Responsibility is most effective when every contribution creates measurable and lasting impact. KGWF offers organisations a
            credible implementation partner — with the ability to design, execute, monitor, and report community initiatives aligned with your CSR
            priorities.
          </p>
        }
        image="/images/community/classroom.jpg"
        imageAlt="A KGWF facilitator leading a classroom session"
        actions={
          <>
            <ButtonLink to="#enquire" arrow>
              Partner with KGWF
            </ButtonLink>
            <ButtonLink to="#formats" variant="outline">
              Explore CSR opportunities
            </ButtonLink>
          </>
        }
      />

      <section aria-labelledby="process-title" className="bg-navy py-20 text-ivory md:py-24">
        <div className="container-site flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow tone="sand">How a partnership runs</Eyebrow>
            <h2 id="process-title" className="text-[32px] leading-[1.08] font-extrabold tracking-[-0.025em] text-ivory md:text-[44px]">
              We design, execute, monitor and report — not just propose.
            </h2>
          </div>
          <ol className="grid border-t-2 border-sand sm:grid-cols-2 lg:grid-cols-4">
            {partnerProcess.map((s, i) => (
              <li key={s.title} className={`flex flex-col gap-2.5 py-6 sm:pr-6 ${i > 0 ? 'lg:border-l lg:border-sand/20 lg:pl-6' : ''}`}>
                <span className="font-display text-xs font-bold text-sand">0{i + 1}</span>
                <h3 className="text-[22px] font-bold text-ivory">{s.title}</h3>
                <p className="text-[15px] leading-normal text-mist">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="formats" aria-labelledby="formats-title" className="py-24 md:py-32">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading id="formats-title" eyebrow="Partnership formats" title="Four ways to work together." />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerFormats.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 70} className="flex flex-col gap-4 rounded-2xl border border-navy/12 bg-white p-7">
                <Icon name={f.icon as IconName} size={28} className="text-teal" strokeWidth={1.5} />
                <h3 className="text-[22px] font-bold">{f.title}</h3>
                <p className="text-[15.5px] leading-normal text-slate">{f.text}</p>
              </Reveal>
            ))}
          </ul>
          <div className="flex flex-col gap-4 rounded-2xl bg-ivory-dim p-7 md:flex-row md:items-center md:gap-8 md:p-9">
            <p className="eyebrow shrink-0 text-[11px] text-gold-ink">Ideas to start with</p>
            <ul className="flex flex-wrap gap-2.5">
              {partnerIdeas.map((idea) => (
                <li key={idea} className="rounded-full border border-navy/18 bg-white px-4 py-2 font-display text-[13.5px] font-bold text-navy">
                  {idea}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-partner-title" className="border-t border-navy/12 bg-white py-24 md:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Eyebrow>Why partner with KGWF</Eyebrow>
            <h2 id="why-partner-title" className="text-[34px] leading-[1.08] font-extrabold tracking-[-0.025em] md:text-[44px]">
              Military discipline, corporate rigour, grassroots trust.
            </h2>
          </div>
          <dl className="grid gap-x-10 border-t border-navy/14 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {partnerReasons.map((r) => (
              <div key={r.title} className="flex flex-col gap-1.5 border-b border-navy/10 py-5">
                <dt className="font-display text-[17px] font-bold text-navy">{r.title}</dt>
                <dd className="text-[15px] leading-normal text-slate">
                  {r.text}
                  {r.verify && <ReviewFlag note={r.verify} />}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="areas-title" className="py-24 md:py-32">
        <div className="container-site flex flex-col gap-12">
          <SectionHeading id="areas-title" eyebrow="Programme areas you can fund" title="Flexible execution across five areas." />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {programmes.map((p) => (
              <li key={p.slug}>
                <Link to={`/programmes/${p.slug}`} className="card-hover flex h-full flex-col gap-3 rounded-2xl border border-navy/12 bg-white p-6">
                  <span className="font-display text-xs font-bold text-gold-ink">{p.number}</span>
                  <span className="card-title font-display text-lg leading-snug font-bold text-navy">{p.title}</span>
                  <span className="text-[14.5px] leading-normal text-slate">{p.line}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="needs-title" className="pb-24 md:pb-32">
        <div className="container-site grid gap-12 rounded-[20px] bg-sage px-7 py-12 md:px-14 md:py-16 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Eyebrow tone="sage">What support we need</Eyebrow>
            <h2 id="needs-title" className="text-[30px] leading-[1.1] font-extrabold tracking-[-0.02em] md:text-[38px]">
              Where your contribution goes furthest.
            </h2>
          </div>
          <dl className="grid gap-x-8 border-t border-navy/20 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {supportNeeded.map((n) => (
              <div key={n.title} className="flex flex-col gap-1.5 border-b border-navy/12 py-5">
                <dt className="font-display text-[17px] font-bold text-navy">{n.title}</dt>
                <dd className="text-[15px] leading-normal text-[#2f4048]">{n.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Transparency detailed />

      <section id="enquire" aria-labelledby="enquire-title" className="py-24 md:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Eyebrow tone="terracotta">How to partner</Eyebrow>
            <h2 id="enquire-title" className="text-[34px] leading-[1.08] font-extrabold tracking-[-0.025em] md:text-[44px]">
              Let’s build something useful together.
            </h2>
            <p className="text-[16.5px] leading-relaxed text-slate">
              We welcome partnerships across CSR funding, employee volunteering, in-kind support, knowledge sharing, and co-created programmes.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm
              subject="CSR partnership enquiry"
              interests={['CSR funding', 'Employee volunteering', 'In-kind support', 'Mentorship / knowledge sharing', 'Co-created programme', 'Something else']}
              submitLabel="Compose enquiry"
            />
          </div>
        </div>
      </section>
    </>
  )
}
