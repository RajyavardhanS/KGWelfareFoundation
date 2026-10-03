import { Link } from 'react-router-dom'
import { CtaBand } from '../components/blocks/CtaBand'
import { EnquiryForm } from '../components/blocks/EnquiryForm'
import { PageHero } from '../components/blocks/PageHero'
import { PageMeta } from '../components/blocks/PageMeta'
import { useSupport } from '../components/support/SupportContext'
import { Button, ButtonLink } from '../components/ui/Button'
import { Icon, type IconName } from '../components/ui/Icon'
import { Reveal } from '../components/ui/Reveal'
import { ReviewFlag } from '../components/ui/ReviewFlag'
import { Eyebrow, SectionHeading } from '../components/ui/Section'
import { supportModes } from '../content/partnerships'

const modeIcon: Record<string, IconName> = {
  donate: 'heart',
  volunteer: 'volunteer',
  mentor: 'mentor',
  sponsor: 'laptop',
  organisation: 'users',
  'in-kind': 'box',
}

const volunteerWays = [
  { title: 'Community drives', text: 'Plantation drives, neighbourhood clean-ups and food distribution — weekends, with the people who live there.' },
  { title: 'Learning sessions', text: 'Weekend tutoring, digital literacy, AI awareness, photography and creative workshops for children.' },
  { title: 'Skill sessions', text: 'Interview preparation, communication, presentation and technology training for youth and women.' },
  { title: 'Career guidance', text: 'College career counselling and higher-education guidance for students.' },
  { title: 'Employee volunteering', text: 'Ready-to-run programmes for corporate teams, planned with your HR or CSR lead.' },
  { title: 'Veteran-led mentoring', text: 'Veterans guiding young people with discipline, leadership and life experience.' },
]

export default function GetInvolved() {
  const { openSupport } = useSupport()
  return (
    <>
      <PageMeta title="Get Involved" description="Donate, volunteer, mentor, sponsor equipment or offer in-kind support to KGWF in Jaipur." />
      <PageHero
        eyebrow="Get involved"
        title={
          <>
            Your time can become someone else’s opportunity.
          </>
        }
        intro={<p>Volunteering here is participation, not charity. Give money, give time, give know-how — every form of help turns into a step on someone’s pathway.</p>}
        image="/images/illustrations/mentoring.svg"
        imageAlt="Illustration of a mentoring conversation across a table"
        illustrative
        actions={
          <>
            <Button onClick={openSupport}>Donate</Button>
            <ButtonLink to="#volunteer" variant="outline">
              Volunteer
            </ButtonLink>
          </>
        }
      />

      <section aria-labelledby="ways-title" className="border-t border-navy/12 bg-white py-24 md:py-32">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading id="ways-title" eyebrow="Six ways to help" title="Choose how you’d like to help." />
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-navy/12 bg-navy/12 sm:grid-cols-2 lg:grid-cols-3">
            {supportModes.map((m) => (
              <li key={m.id} id={`mode-${m.id}`} className="flex flex-col gap-4 bg-white p-8">
                <Icon name={modeIcon[m.id]} size={28} className="text-teal" strokeWidth={1.5} />
                <h3 className="text-[22px] font-bold">{m.title}</h3>
                <p className="flex-1 text-[15.5px] leading-normal text-slate">{m.text}</p>
                {m.id === 'donate' ? (
                  <button type="button" onClick={openSupport} className="text-link self-start text-[14px] text-navy">
                    {m.cta} →
                  </button>
                ) : m.id === 'organisation' ? (
                  <Link to="/csr-partnerships" className="text-link self-start text-[14px] text-navy">
                    {m.cta} →
                  </Link>
                ) : (
                  <a href="#write-to-us" className="text-link self-start text-[14px] text-navy">
                    {m.cta} →
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="volunteer" aria-labelledby="volunteer-title" className="py-24 md:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-6">
          <Reveal className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow tone="terracotta">Volunteer</Eyebrow>
            <h2 id="volunteer-title" className="text-[36px] leading-[1.06] font-extrabold tracking-[-0.03em] md:text-[48px]">
              Every individual can become an agent of change.
            </h2>
            <p className="text-[18px] leading-relaxed text-ink-soft">
              Students, professionals, veterans and corporate teams volunteer with KGWF. Tell us what you’re good at and when you’re free — we’ll find the
              right place for you.
            </p>
          </Reveal>
          <ul className="grid gap-x-8 border-t border-navy/14 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {volunteerWays.map((w) => (
              <li key={w.title} className="flex flex-col gap-1.5 border-b border-navy/10 py-5">
                <h3 className="text-lg font-bold">{w.title}</h3>
                <p className="text-[15px] leading-normal text-slate">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="veterans-title" className="pb-24 md:pb-32">
        <div className="container-site grid items-center gap-10 rounded-[20px] bg-navy p-7 text-ivory md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-14 md:p-14">
          <img src="/images/brand/career-connect-veterans.jpg" alt="KGWF Career Connect Veterans emblem — Respect, Support, Opportunity, Growth, Inclusion, Gratitude" loading="lazy" className="mx-auto w-full max-w-[320px] rounded-full" />
          <div className="flex flex-col gap-5">
            <Eyebrow tone="sand">KGWF Career Connect — Veterans</Eyebrow>
            <h2 id="veterans-title" className="text-[32px] leading-[1.08] font-extrabold tracking-[-0.025em] text-ivory md:text-[42px]">
              Honouring service. Supporting transitions. Building brighter tomorrows.
            </h2>
            <p className="text-[17px] leading-relaxed text-mist">
              Veteran-led mentoring is part of how KGWF works — and veterans moving into new careers deserve the same support we give our communities.
              <ReviewFlag kind="add" label="Programme details to be added" />
            </p>
            <a href="#write-to-us" className="text-link self-start text-[15px] text-sand">
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="form-title" className="border-t border-navy/12 bg-white py-24 md:py-32">
        <div id="write-to-us" className="container-site grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Eyebrow>Write to us</Eyebrow>
            <h2 id="form-title" className="text-[34px] leading-[1.08] font-extrabold tracking-[-0.025em] md:text-[42px]">
              Volunteer, mentor or offer support.
            </h2>
            <p className="text-[16.5px] leading-relaxed text-slate">We’ll reply by email or WhatsApp to plan the next step with you.</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm
              subject="Get involved with KGWF"
              interests={['Volunteering', 'Mentoring', 'Sponsoring equipment', 'In-kind support', 'Employee volunteering for my team', 'Career Connect — Veterans', 'Something else']}
              submitLabel="Compose email"
            />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
