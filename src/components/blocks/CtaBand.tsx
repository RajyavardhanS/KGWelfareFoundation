import { useSupport } from '../support/SupportContext'
import { Button, ButtonLink } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function CtaBand({
  title = 'Because someone should.',
  text = 'Give, volunteer, mentor, or bring your organisation in. Every pathway starts with one person deciding to help.',
}: {
  title?: string
  text?: string
}) {
  const { openSupport } = useSupport()
  return (
    <section className="py-28 md:py-36">
      <Reveal className="container-site flex flex-col items-center gap-7 text-center">
        <span aria-hidden="true" className="h-16 w-px bg-sand-line" />
        <h2 className="text-[44px] leading-none font-extrabold tracking-[-0.035em] md:text-[72px]">{title}</h2>
        <p className="max-w-xl text-[19px] leading-[1.6] text-ink-soft">{text}</p>
        <div className="flex flex-wrap justify-center gap-3.5 pt-2">
          <Button onClick={openSupport}>Support KGWF</Button>
          <ButtonLink to="/get-involved#volunteer" variant="outline">
            Volunteer
          </ButtonLink>
          <ButtonLink to="/csr-partnerships" variant="outline">
            Partner with us
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  )
}
