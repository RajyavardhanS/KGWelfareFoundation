import { Link, Navigate, useParams } from 'react-router-dom'
import { CtaBand } from '../components/blocks/CtaBand'
import { PageMeta } from '../components/blocks/PageMeta'
import { StoryCard } from '../components/sections/StoryCard'
import { TextLink } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { IllustrationNote } from '../components/ui/Misc'
import { ReviewFlag } from '../components/ui/ReviewFlag'
import { Eyebrow } from '../components/ui/Section'
import { getProgramme } from '../content/programmes'
import { getStory, stories } from '../content/stories'

export default function StoryDetail() {
  const { slug } = useParams()
  const story = getStory(slug)
  if (!story) return <Navigate to="/stories" replace />
  const programme = getProgramme(story.programme)
  const more = stories.filter((s) => s.slug !== story.slug).slice(0, 3)

  return (
    <>
      <PageMeta title={story.title} description={story.intro} />
      <article>
        <header className="pt-10 pb-12 md:pt-16">
          <div className="container-site flex max-w-4xl flex-col gap-6">
            <Link to="/stories" className="flex items-center gap-2 font-display text-sm font-bold text-slate hover:text-navy">
              <Icon name="arrow-left" size={16} /> All stories
            </Link>
            <Eyebrow tone="terracotta">{story.category}</Eyebrow>
            <h1 className="text-[40px] leading-[1.02] font-extrabold tracking-[-0.035em] md:text-[64px]">{story.title}</h1>
            <p className="font-serif text-[22px] leading-[1.45] text-ink-soft md:text-[26px]">{story.intro}</p>
          </div>
        </header>
        <div className="container-site">
          <figure className="relative overflow-hidden rounded-[20px] bg-paper">
            <img src={story.image} alt={story.imageAlt} className="max-h-[640px] w-full object-cover" />
            {story.image.endsWith('.svg') && <IllustrationNote className="absolute right-4 bottom-4" />}
          </figure>
        </div>
        <div className="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-6">
          <aside className="flex flex-col gap-4 lg:col-span-4">
            <p className="eyebrow text-[11px] text-teal">What we know</p>
            <ul className="border-t border-navy/14">
              {story.facts.map((f) => (
                <li key={f} className="border-b border-navy/10 py-3.5 text-[15.5px] leading-snug text-ink-soft">
                  {f}
                </li>
              ))}
            </ul>
            {programme && (
              <TextLink to={`/programmes/${programme.slug}`} className="self-start text-navy">
                {programme.title}
              </TextLink>
            )}
          </aside>
          <div className="flex flex-col gap-6 text-[19px] leading-[1.7] text-ink-soft lg:col-span-7 lg:col-start-6">
            <p>
              The full story — the people involved (with their consent), where and when it happened, and what changed afterwards — will be published here.
              <ReviewFlag kind="add" label="Story text to be added" />
            </p>
            <p className="text-[15px] text-slate">
              Have a photo or account from this activity? Write to us at{' '}
              <a href="mailto:kalindiglobal@gmail.com" className="font-bold text-navy underline">
                kalindiglobal@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </article>

      <section aria-labelledby="more-title" className="border-t border-navy/12 bg-white py-24">
        <div className="container-site flex flex-col gap-10">
          <h2 id="more-title" className="eyebrow text-terracotta-deep">
            More stories
          </h2>
          <div className="grid gap-12 md:grid-cols-3 md:gap-6">
            {more.map((s) => (
              <StoryCard key={s.slug} story={s} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
