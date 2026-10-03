import { CtaBand } from '../components/blocks/CtaBand'
import { PageHero } from '../components/blocks/PageHero'
import { PageMeta } from '../components/blocks/PageMeta'
import { FounderFeature, LeadershipGrid } from '../components/sections/People'
import { Transparency } from '../components/sections/Transparency'
import { WhyLetter } from '../components/sections/WhyLetter'
import { Pathway } from '../components/ui/Pathway'
import { Reveal } from '../components/ui/Reveal'
import { Eyebrow } from '../components/ui/Section'
import { founder } from '../content/people'
import { site, whoWeAre } from '../content/site'

export default function About() {
  return (
    <>
      <PageMeta title="About" description="Who we are, why we do this, and the people behind Kalindi Global Welfare Foundation, Jaipur." />
      <PageHero
        eyebrow="About KGWF"
        title={
          <>
            Practitioners,
            <br />
            not fundraisers.
          </>
        }
        intro={<p>{whoWeAre[0]}</p>}
        image="/images/community/kits-children.jpg"
        imageAlt="Children receiving school kits from KGWF volunteers"
      />

      <section aria-label="Who we are" className="border-t border-navy/12 py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Who we are</Eyebrow>
          </Reveal>
          <Reveal className="flex flex-col gap-6 text-[19px] leading-[1.65] text-ink-soft lg:col-span-7 lg:col-start-6">
            {whoWeAre.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-label="Vision and mission" className="pb-24 md:pb-32">
        <div className="container-site grid gap-6 md:grid-cols-2">
          <Reveal className="flex flex-col gap-5 rounded-2xl bg-sage p-8 md:p-12">
            <p className="eyebrow text-teal-deep">Our vision</p>
            <p className="font-serif text-[24px] leading-[1.38] text-navy md:text-[28px]">{site.vision}</p>
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-5 rounded-2xl bg-paper p-8 md:p-12">
            <p className="eyebrow text-gold-ink">Our mission</p>
            <p className="font-serif text-[24px] leading-[1.38] text-navy md:text-[28px]">{site.mission}</p>
          </Reveal>
        </div>
        <div className="container-site pt-16">
          <Pathway />
        </div>
      </section>

      <div className="border-t border-navy/12">
        <WhyLetter image="/images/community/women-community.jpg" imageAlt="Women and a child at a KGWF community gathering" />
      </div>

      <section id="founder" aria-label="Founder story" className="bg-white py-24 md:py-32">
        <div className="container-site flex flex-col gap-20">
          <FounderFeature full />
          <div className="grid gap-12 border-t border-navy/14 pt-14 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col gap-4">
              <p className="eyebrow text-teal">Education</p>
              <ul className="flex flex-col gap-2.5 text-[15.5px] leading-snug text-ink-soft">
                {founder.education.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="eyebrow text-teal">Certifications</p>
              <ul className="flex flex-wrap gap-2">
                {founder.certifications.map((c) => (
                  <li key={c} className="rounded bg-ivory-dim px-2.5 py-1.5 font-display text-[12.5px] font-bold text-navy">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="eyebrow text-teal">Recognition</p>
              <ul className="flex flex-col gap-2.5 text-[15.5px] leading-snug text-ink-soft">
                {founder.recognition.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <img src="/images/founder/speaking.jpg" alt="Squadron Leader Vibhuti Mangal (Retd.) speaking at a technology transformation session" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
            <img src="/images/founder/women-achievers-award.jpg" alt="Receiving the Women Achievers Award 2023" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
            <img src="/images/founder/dei-champion.jpg" alt="DEI Champion 2024 trophy" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      <section id="leadership" aria-label="Leadership and governance" className="py-24 md:py-32">
        <div className="container-site flex flex-col gap-10">
          <h2 className="max-w-3xl text-[36px] leading-[1.06] font-extrabold tracking-[-0.03em] md:text-[48px]">
            Family, friends, veterans and professionals — accountable to the communities we serve.
          </h2>
          <LeadershipGrid />
        </div>
      </section>

      <Transparency detailed />
      <CtaBand />
    </>
  )
}
