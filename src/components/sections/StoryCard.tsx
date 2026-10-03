import { Link } from 'react-router-dom'
import type { Story } from '../../content/stories'
import { IllustrationNote } from '../ui/Misc'

export function StoryCard({ story, layout = 'stack' }: { story: Story; layout?: 'stack' | 'row' | 'feature' }) {
  const illustrative = story.image.endsWith('.svg')
  if (layout === 'row') {
    return (
      <Link to={`/stories/${story.slug}`} className="card-hover group flex flex-col gap-5 sm:flex-row sm:gap-6">
        <span className="relative block aspect-[4/3] overflow-hidden rounded-xl sm:h-[184px] sm:w-60 sm:shrink-0 sm:aspect-auto">
          <img src={story.image} alt={story.imageAlt} loading="lazy" className="card-img size-full object-cover" />
          {illustrative && <IllustrationNote className="absolute right-2 bottom-2" />}
        </span>
        <span className="flex flex-col gap-2.5">
          <span className="eyebrow text-[11px] text-teal">{story.category}</span>
          <span className="card-title font-display text-[22px] leading-tight font-bold text-navy">{story.title}</span>
          <span className="text-[15px] leading-normal text-slate">{story.intro}</span>
          <span className="text-link self-start text-[14px] text-navy">Read story →</span>
        </span>
      </Link>
    )
  }
  const tall = layout === 'feature'
  return (
    <Link to={`/stories/${story.slug}`} className="card-hover group flex flex-col gap-4">
      <span className={`relative block overflow-hidden rounded-[14px] ${tall ? 'aspect-[4/3] lg:aspect-auto lg:h-[400px]' : 'aspect-[4/3]'}`}>
        <img src={story.image} alt={story.imageAlt} loading="lazy" className="card-img size-full object-cover" />
        {illustrative && <IllustrationNote className="absolute right-3 bottom-3" />}
      </span>
      <span className="eyebrow text-[11px] text-teal">{story.category}</span>
      <span className={`card-title font-display leading-[1.15] font-bold tracking-[-0.015em] text-navy ${tall ? 'text-[28px] md:text-[30px]' : 'text-[22px]'}`}>
        {story.title}
      </span>
      <span className="text-[16px] leading-relaxed text-slate">{story.intro}</span>
      <span className="text-link self-start text-[14px] text-navy">Read story →</span>
    </Link>
  )
}
