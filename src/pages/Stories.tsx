import { useEffect, useRef, useState } from 'react'
import { CtaBand } from '../components/blocks/CtaBand'
import { PageHero } from '../components/blocks/PageHero'
import { PageMeta } from '../components/blocks/PageMeta'
import { StoryCard } from '../components/sections/StoryCard'
import { Icon } from '../components/ui/Icon'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/Section'
import { gallery, stories } from '../content/stories'

function Lightbox({ index, onClose, onStep }: { index: number | null; onClose: () => void; onStep: (d: number) => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (index !== null && !d.open) d.showModal()
    if (index === null && d.open) d.close()
  }, [index])
  const item = index !== null ? gallery[index] : null
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') onStep(1)
        if (e.key === 'ArrowLeft') onStep(-1)
      }}
      aria-label="Photo viewer"
      className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-navy-deep/92"
    >
      {item && (
        <figure className="flex flex-col items-center gap-4 p-4">
          <img src={item.src} alt={item.alt} className="max-h-[78dvh] max-w-[92vw] rounded-lg object-contain" />
          <figcaption className="text-center text-sm text-mist">{item.alt}</figcaption>
          <div className="flex gap-2">
            {[
              ['arrow-left', 'Previous photo', -1],
              ['arrow-right', 'Next photo', 1],
            ].map(([icon, label, d]) => (
              <button
                key={label as string}
                type="button"
                onClick={() => onStep(d as number)}
                aria-label={label as string}
                className="flex size-11 items-center justify-center rounded-full border border-sand/40 text-ivory hover:border-sand"
              >
                <Icon name={icon as 'arrow-left' | 'arrow-right'} size={18} />
              </button>
            ))}
            <button type="button" onClick={onClose} aria-label="Close" className="flex size-11 items-center justify-center rounded-full border border-sand/40 text-ivory hover:border-sand">
              <Icon name="x" size={18} />
            </button>
          </div>
        </figure>
      )}
    </dialog>
  )
}

export default function Stories() {
  const [open, setOpen] = useState<number | null>(null)
  const [first, ...rest] = stories
  return (
    <>
      <PageMeta title="Stories" description="Stories from the field — KGWF’s work in schools, neighbourhoods and communities around Jaipur." />
      <PageHero
        eyebrow="Stories from the field"
        title={
          <>
            Small moments,
            <br />
            real change.
          </>
        }
        intro={<p>A school kit handed over. A first class on digital tools. A meal served with the neighbourhood. These are the moments a pathway is made of.</p>}
      />

      <section aria-label="Stories" className="pb-24 md:pb-32">
        <div className="container-site flex flex-col gap-16">
          <Reveal>
            <StoryCard story={first} layout="feature" />
          </Reveal>
          <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <StoryCard story={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" aria-labelledby="gallery-title" className="border-t border-navy/12 bg-white py-24 md:py-32">
        <div className="container-site flex flex-col gap-12">
          <SectionHeading id="gallery-title" eyebrow="Gallery" title="In pictures." />
          <ul className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
            {gallery.map((g, i) => (
              <li key={g.src} className="mb-3 break-inside-avoid md:mb-4">
                <button type="button" onClick={() => setOpen(i)} className="card-hover block w-full overflow-hidden rounded-xl" aria-label={`View photo: ${g.alt}`}>
                  <img src={g.src} alt={g.alt} loading="lazy" className="card-img w-full object-cover" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Lightbox index={open} onClose={() => setOpen(null)} onStep={(d) => setOpen((o) => (o === null ? o : (o + d + gallery.length) % gallery.length))} />
      <CtaBand />
    </>
  )
}
