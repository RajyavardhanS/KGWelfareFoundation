import { whyWeDoThis } from '../../content/site'
import { Eyebrow } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

/** “Why we do this” — the organisation’s own words, quoted intact. */
export function WhyLetter({ image = '/images/community/students-outdoors.jpg', imageAlt = 'Students seated outdoors during a KGWF session' }) {
  return (
    <section aria-labelledby="why-title" className="py-24 md:py-36">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-6">
        <Reveal className="flex flex-col gap-8 lg:col-span-7 lg:pr-10">
          <Eyebrow tone="terracotta">
            <span id="why-title">Why we do this</span>
          </Eyebrow>
          <blockquote className="font-serif text-[26px] leading-[1.36] text-navy md:text-[34px] md:leading-[1.32]">
            “{whyWeDoThis.opening}”
          </blockquote>
          <p className="max-w-[600px] text-[18px] leading-[1.65] text-ink-soft">{whyWeDoThis.body}</p>
          <p className="max-w-[600px] border-t border-sand-line pt-5 font-serif text-[21px] leading-snug text-gold-ink italic md:text-[22px]">
            {whyWeDoThis.closing}
          </p>
        </Reveal>
        <Reveal delay={120} className="relative lg:col-span-5">
          <div aria-hidden="true" className="absolute inset-[24px_-12px_-12px_24px] rounded-[20px] border border-sand-line md:inset-[24px_-16px_-16px_24px]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
            <img src={image} alt={imageAlt} loading="lazy" className="size-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
