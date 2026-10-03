import { Link } from 'react-router-dom'
import { CtaBand } from '../components/blocks/CtaBand'
import { PageMeta } from '../components/blocks/PageMeta'
import { CsrBand } from '../components/sections/CsrBand'
import { ImpactBand } from '../components/sections/ImpactBand'
import { FounderFeature, LeadershipGrid } from '../components/sections/People'
import { StoryCard } from '../components/sections/StoryCard'
import { Transparency } from '../components/sections/Transparency'
import { WhyLetter } from '../components/sections/WhyLetter'
import { useSupport } from '../components/support/SupportContext'
import { ButtonLink, Button, TextLink } from '../components/ui/Button'
import { Icon, type IconName } from '../components/ui/Icon'
import { Dot, IllustrationNote, Motto } from '../components/ui/Misc'
import { Pathway } from '../components/ui/Pathway'
import { Reveal } from '../components/ui/Reveal'
import { ReviewFlag } from '../components/ui/ReviewFlag'
import { Eyebrow, SectionHeading } from '../components/ui/Section'
import { impactSteps } from '../content/impact'
import { programmes } from '../content/programmes'
import { site } from '../content/site'
import { gallery, stories } from '../content/stories'

const areaIcon: Record<string, IconName> = {
  education: 'book',
  'skills-livelihoods': 'scissors',
  sustainability: 'leaf',
  'community-wellness': 'users',
  volunteerism: 'heart',
}

function Hero() {
  const { openSupport } = useSupport()
  return (
    <section aria-labelledby="hero-title" className="relative pt-6 md:pt-10">
      <div className="container-site relative">
        <span aria-hidden="true" className="absolute top-[-40px] bottom-0 left-5 hidden w-px bg-navy/10 md:left-8 lg:block" />
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center gap-8 lg:py-14 lg:pl-10">
            <Eyebrow tone="gold" rule>
              A registered charitable organisation · Jaipur
            </Eyebrow>
            <h1 id="hero-title" className="text-[56px] leading-[0.96] font-extrabold tracking-[-0.035em] sm:text-[72px] xl:text-[96px]">
              Helping,
              <br />
              because
              <br />
              we can.
            </h1>
            <p className="max-w-[500px] text-[19px] leading-[1.55] text-ink-soft md:text-[21px]">
              Creating pathways to learning, opportunity and dignity — one person, one family and one community at a time.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
              <ButtonLink to="/impact" arrow>
                See our impact
              </ButtonLink>
              <Button variant="outline" onClick={openSupport}>
                Support KGWF
              </Button>
            </div>
            <Motto className="text-lg tracking-[0.02em] text-gold-ink" />
          </div>

          <div className="relative min-h-[440px] sm:min-h-[560px] lg:min-h-[700px]">
            <div aria-hidden="true" className="absolute inset-[4px_8px_28px_28px] rounded-[320px_320px_14px_14px] border border-sand-line sm:inset-[4px_20px_28px_44px]" />
            <div className="absolute inset-[18px_0_0_14px] overflow-hidden rounded-[300px_300px_12px_12px] sm:inset-[18px_4px_0_64px]">
              <img
                src="/images/community/kits-girls.jpg"
                alt="A KGWF volunteer handing education kits to schoolgirls in uniform"
                fetchPriority="high"
                className="size-full object-cover object-[30%_50%]"
              />
            </div>
            <div className="absolute bottom-10 left-0 flex items-center gap-3.5 rounded-[10px] bg-white px-5 py-4 shadow-float sm:bottom-24">
              <span className="font-display text-[28px] leading-none font-extrabold tracking-[-0.03em] text-navy tabular sm:text-[34px]">3,000+</span>
              <span className="text-[13px] leading-snug text-slate sm:text-[13.5px]">
                rural youth &amp; women
                <br />
                upskilled through KGWF
              </span>
            </div>
            <div className="absolute right-4 bottom-4 hidden items-center gap-2 rounded-full bg-ivory/92 px-3 py-2 sm:flex sm:right-9 sm:bottom-12">
              <Icon name="map-pin" size={16} className="text-teal" strokeWidth={1.8} />
              <span className="font-display text-xs font-bold tracking-[0.04em] text-navy">{site.city}</span>
            </div>
          </div>
        </div>
        <Pathway className="pt-12 pb-16 lg:pt-10 lg:pl-10" />
      </div>
    </section>
  )
}

function TrustStrip() {
  const items = ['Registered charitable organisation', 'Section 12A registered', '80G registered', 'IT returns filed', 'CSR implementation partner', site.city]
  return (
    <section aria-label="Credentials" className="border-y border-navy/14 bg-ivory-dim">
      <ul className="container-site grid grid-cols-2 gap-x-6 gap-y-3 py-5 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between lg:gap-6">
        {items.map((t, i) => (
          <li key={t} className="flex items-center gap-6">
            {i > 0 && <span className="hidden lg:block"><Dot /></span>}
            <span className="eyebrow text-[10.5px] text-navy lg:text-[11px]">
              {t}
              {t === '80G registered' && <ReviewFlag note={site.registration.reg80GVerify} />}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function WhatWeDo() {
  return (
    <section aria-labelledby="what-title" className="py-24 md:pt-36 md:pb-28">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-6">
        <Reveal className="flex flex-col gap-7 lg:col-span-5 lg:pr-6">
          <Eyebrow>What we do</Eyebrow>
          <h2 id="what-title" className="text-[40px] leading-[1.04] font-extrabold tracking-[-0.03em] md:text-[56px]">
            Impact begins with opportunity.
          </h2>
          <p className="text-[19px] leading-[1.6] text-ink-soft">
            We work with underserved communities in and around Jaipur across five connected areas — so that a school kit can lead to a skill, a skill
            to confidence, and confidence to a livelihood.
          </p>
          <TextLink to="/programmes" className="self-start text-navy">
            All programmes
          </TextLink>
        </Reveal>
        <ul className="border-t border-navy/16 lg:col-span-6 lg:col-start-7">
          {programmes.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 60}>
              <Link to={`/programmes/${p.slug}`} className="card-hover flex items-center gap-5 border-b border-navy/12 py-5 md:gap-6 md:py-[22px]">
                <span className="w-7 shrink-0 font-display text-[13px] font-bold text-gold-ink">{p.number}</span>
                <span className="flex flex-1 flex-col gap-1.5">
                  <span className="card-title flex items-center gap-2.5 font-display text-xl font-bold tracking-[-0.01em] text-navy md:text-2xl">
                    <Icon name={areaIcon[p.slug]} size={20} className="hidden shrink-0 text-teal sm:block" strokeWidth={1.5} />
                    {p.title}
                  </span>
                  <span className="text-[15.5px] leading-normal text-slate">{p.line}</span>
                </span>
                <span className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-paper sm:block">
                  <img src={p.image} alt="" loading="lazy" className="card-img size-full object-cover" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function FeaturedProgrammes() {
  const [edu, skills, sus, well] = programmes
  return (
    <section aria-labelledby="featured-title" className="pb-24 md:pb-36">
      <div className="container-site flex flex-col gap-14">
        <SectionHeading id="featured-title" eyebrow="Featured programmes" title="Where the work happens." aside={<TextLink to="/programmes" className="text-navy">Explore all programmes</TextLink>} />
        <div className="grid items-start gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <Link to={`/programmes/${edu.slug}`} className="card-hover flex flex-col gap-4">
              <span className="block aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-auto lg:h-[560px]">
                <img src={edu.image} alt={edu.imageAlt} loading="lazy" className="card-img size-full object-cover" />
              </span>
              <span className="eyebrow text-[11px] text-teal">{edu.title}</span>
              <span className="card-title font-display text-[26px] leading-[1.15] font-bold tracking-[-0.015em] text-navy md:text-[28px]">
                School kits, weekend mentoring, digital literacy &amp; career counselling
              </span>
              <span className="text-base leading-relaxed text-slate">{edu.summary}</span>
              <span className="text-link self-start text-[14px] text-navy">Explore programme →</span>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-12 lg:col-span-4 lg:pt-24">
            <Reveal>
              <Link to={`/programmes/${skills.slug}`} className="card-hover flex flex-col gap-4">
                <span className="relative block aspect-[4/3] overflow-hidden rounded-2xl bg-paper">
                  <img src={skills.image} alt={skills.imageAlt} loading="lazy" className="card-img size-full object-cover" />
                  <IllustrationNote className="absolute right-3 bottom-3" />
                </span>
                <span className="eyebrow text-[11px] text-teal">{skills.title}</span>
                <span className="card-title font-display text-2xl leading-tight font-bold text-navy">Women’s Empowerment &amp; Youth Upskilling</span>
                <span className="text-[15.5px] leading-relaxed text-slate">
                  Silai machines with hands-on training, textile craft and micro-entrepreneurship — alongside interview preparation, communication and
                  digital tools.
                </span>
                <span className="text-link self-start text-[14px] text-navy">Explore programme →</span>
              </Link>
            </Reveal>
            <Reveal>
              <Link to={`/programmes/${well.slug}`} className="card-hover flex flex-col gap-4">
                <span className="block aspect-[16/10] overflow-hidden rounded-2xl">
                  <img src="/images/community/women-community.jpg" alt="Women and a child at a KGWF community gathering" loading="lazy" className="card-img size-full object-cover" />
                </span>
                <span className="eyebrow text-[11px] text-teal">{well.title}</span>
                <span className="card-title font-display text-2xl leading-tight font-bold text-navy">Food, hygiene &amp; wellbeing with local families</span>
                <span className="text-link self-start text-[14px] text-navy">Explore programme →</span>
              </Link>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 md:col-span-2 md:grid md:grid-cols-2 lg:col-span-3 lg:flex lg:pt-6">
            <Reveal>
              <Link to={`/programmes/${sus.slug}`} className="card-hover flex flex-col gap-4 rounded-2xl bg-sage p-7">
                <Icon name="leaf" size={30} className="text-teal-deep" strokeWidth={1.5} />
                <span className="eyebrow text-[11px] text-teal-deep">{sus.title}</span>
                <span className="card-title font-display text-2xl leading-tight font-bold text-navy">Plantation drives, clean-ups &amp; green workshops</span>
                <span className="relative block aspect-[4/3] overflow-hidden rounded-[10px]">
                  <img src={sus.image} alt={sus.imageAlt} loading="lazy" className="card-img size-full object-cover" />
                  <IllustrationNote className="absolute right-2 bottom-2" />
                </span>
                <span className="text-link self-start text-[14px] text-teal-deep">Explore programme →</span>
              </Link>
            </Reveal>
            <Reveal>
              <Link to="/programmes/volunteerism" className="card-hover flex h-full flex-col gap-4 rounded-2xl bg-navy p-7 text-ivory">
                <span className="eyebrow text-[11px] text-sand">Volunteerism &amp; Leadership</span>
                <span className="card-title font-display text-[26px] leading-[1.18] font-bold">Your time can become someone else’s opportunity.</span>
                <span className="text-[15px] leading-normal text-mist">Employee volunteering, veteran-led mentoring, youth leadership.</span>
                <span className="mt-auto font-display text-sm font-bold text-sand">Volunteer with us →</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stories() {
  const [feature, ...rest] = [stories[1], stories[2], stories[0], stories[3]]
  return (
    <section aria-labelledby="stories-title" className="border-t border-navy/8 bg-white py-24 md:py-32">
      <div className="container-site flex flex-col gap-14">
        <SectionHeading id="stories-title" eyebrow="Stories from the field" tone="terracotta" title="Small moments, real change." aside={<TextLink to="/stories" className="text-navy">All stories</TextLink>} />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <StoryCard story={feature} layout="feature" />
          </Reveal>
          <div className="flex flex-col gap-10 lg:gap-8">
            {rest.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <StoryCard story={s} layout="row" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HowWeWork() {
  return (
    <section aria-labelledby="how-title" className="py-24 md:py-32">
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
  )
}

function Gallery() {
  const picks = [gallery[2], gallery[6], gallery[3], gallery[7]]
  return (
    <section aria-labelledby="gallery-title" className="pt-24 md:pt-32">
      <div className="container-site flex flex-col gap-8">
        <div className="flex items-baseline justify-between">
          <h2 id="gallery-title" className="eyebrow text-teal">
            Gallery
          </h2>
          <TextLink to="/stories#gallery" className="text-navy">
            View gallery
          </TextLink>
        </div>
        <div className="grid grid-cols-2 gap-3 md:h-[300px] md:grid-cols-[2fr_1fr_1fr_1.4fr] md:gap-4">
          {picks.map((g, i) => (
            <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className={`size-full rounded-xl object-cover ${i === 0 ? 'col-span-2 aspect-[16/9] md:col-span-1 md:aspect-auto' : 'aspect-square md:aspect-auto'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <PageMeta />
      <Hero />
      <TrustStrip />
      <WhatWeDo />
      <ImpactBand />
      <WhyLetter />
      <FeaturedProgrammes />
      <Stories />
      <HowWeWork />
      <CsrBand />
      <section aria-label="People behind KGWF" className="pb-24 md:pb-36">
        <div className="container-site flex flex-col gap-24">
          <FounderFeature />
          <LeadershipGrid />
        </div>
      </section>
      <Transparency />
      <Gallery />
      <CtaBand />
    </>
  )
}
