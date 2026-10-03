import { PageMeta } from '../components/blocks/PageMeta'
import { ButtonLink } from '../components/ui/Button'
import { Pathway } from '../components/ui/Pathway'

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page not found" />
      <section className="py-24 md:py-36">
        <div className="container-site flex flex-col gap-8">
          <p className="eyebrow text-gold-ink">404</p>
          <h1 className="text-[48px] leading-none font-extrabold tracking-[-0.035em] md:text-[72px]">This path doesn’t lead anywhere.</h1>
          <p className="max-w-xl text-[19px] text-ink-soft">The page you were looking for has moved or never existed. These ones do:</p>
          <div className="flex flex-wrap gap-3.5">
            <ButtonLink to="/">Home</ButtonLink>
            <ButtonLink to="/programmes" variant="outline">
              Programmes
            </ButtonLink>
            <ButtonLink to="/get-involved" variant="outline">
              Get involved
            </ButtonLink>
          </div>
          <Pathway className="pt-10" />
        </div>
      </section>
    </>
  )
}
