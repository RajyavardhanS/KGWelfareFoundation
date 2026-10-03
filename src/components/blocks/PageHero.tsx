import type { ReactNode } from 'react'
import { Eyebrow } from '../ui/Section'
import { IllustrationNote } from '../ui/Misc'

type Props = {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  image?: string
  imageAlt?: string
  illustrative?: boolean
  actions?: ReactNode
  children?: ReactNode
}

/** Inner-page hero: editorial headline left, arch-framed image right (Concept A). */
export function PageHero({ eyebrow, title, intro, image, imageAlt = '', illustrative, actions, children }: Props) {
  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28">
      <div className="container-site">
        <div className={`grid items-center gap-12 ${image ? 'lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16' : ''}`}>
          <div className="flex max-w-3xl flex-col gap-7">
            <Eyebrow tone="gold" rule>
              {eyebrow}
            </Eyebrow>
            <h1 className="text-[44px] leading-[1] font-extrabold tracking-[-0.035em] md:text-[68px]">{title}</h1>
            {intro && <div className="max-w-2xl text-[19px] leading-[1.6] text-ink-soft md:text-[21px]">{intro}</div>}
            {actions && <div className="flex flex-wrap gap-3.5 pt-1">{actions}</div>}
            {children}
          </div>
          {image && (
            <div className="relative mx-auto w-full max-w-[460px]">
              <div aria-hidden="true" className="absolute inset-[0_0_14px_14px] rounded-[230px_230px_14px_14px] border border-sand-line" />
              <div className="relative mt-3.5 mr-3.5 aspect-[4/5] overflow-hidden rounded-[230px_230px_12px_12px] bg-paper">
                <img src={image} alt={imageAlt} className="size-full object-cover" />
                {illustrative && <IllustrationNote className="absolute right-4 bottom-4" />}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
