import { advisors, board, founder } from '../../content/people'
import { TextLink } from '../ui/Button'
import { Monogram } from '../ui/Misc'
import { ReviewFlag } from '../ui/ReviewFlag'
import { Eyebrow } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

export function FounderFeature({ full = false }: { full?: boolean }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
      <Reveal className="lg:col-span-5">
        <div className="mx-auto aspect-[4/5] max-w-[480px] overflow-hidden rounded-[300px_300px_14px_14px]">
          <img
            src={founder.flightSuit}
            alt="Squadron Leader Vibhuti Mangal (Retd.) in an Indian Air Force flight suit, holding a flying helmet"
            loading="lazy"
            className="size-full object-cover object-[50%_25%]"
          />
        </div>
      </Reveal>
      <Reveal delay={100} className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7">
        <Eyebrow tone="gold">{founder.role}</Eyebrow>
        <h2 className="text-[40px] leading-[1.02] font-extrabold tracking-[-0.03em] md:text-[56px]">
          From service
          <br />
          to social impact.
        </h2>
        <div className="flex flex-col gap-4 text-[18px] leading-[1.62] text-ink-soft md:text-[19px]">
          {(full ? founder.story : founder.story.slice(0, 1).concat(founder.story.slice(2))).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="grid border-t border-navy/14 sm:grid-cols-2">
          {founder.chapters.slice(0, 4).map((c, i) => (
            <li key={c.title} className="border-b border-navy/10 py-3.5 text-[15.5px] text-navy sm:pr-4">
              <strong className="font-display">{c.title}</strong>
              {i === 2 && <ReviewFlag note={founder.roleVerify} />}
            </li>
          ))}
        </ul>
        {!full && (
          <TextLink to="/about#founder" className="self-start text-navy">
            Read the founder’s story
          </TextLink>
        )}
      </Reveal>
    </div>
  )
}

export function LeadershipGrid() {
  const all = [...board.map((p) => ({ ...p, tone: 'paper' as const })), ...advisors.map((p) => ({ ...p, tone: 'sage' as const }))]
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-baseline justify-between gap-4">
        <Eyebrow>Leadership &amp; governance</Eyebrow>
        <ReviewFlag kind="add" label="Portraits to be added" />
      </div>
      <ul className="grid border-t border-navy/16 sm:grid-cols-2 lg:grid-cols-4">
        <li className="flex items-center gap-4 border-b border-navy/10 py-5 sm:pr-5">
          <img src={founder.portrait} alt="" className="size-12 shrink-0 rounded-full object-cover" />
          <span className="flex flex-col gap-0.5">
            <span className="font-display font-bold text-navy">{founder.name}</span>
            <span className="text-sm text-slate">{founder.role}</span>
          </span>
        </li>
        {all.map((p) => (
          <li key={p.name} className="flex items-center gap-4 border-b border-navy/10 py-5 sm:pr-5">
            <Monogram initials={p.initials} tone={p.tone} />
            <span className="flex flex-col gap-0.5">
              <span className="font-display font-bold text-navy">{p.name}</span>
              <span className="text-sm text-slate">
                {p.role}
                {p.note && ` · ${p.note}`}
                {p.verify && <ReviewFlag note={p.verify} />}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
