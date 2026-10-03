import { partnerFormats } from '../../content/partnerships'
import { ButtonLink } from '../ui/Button'
import { Eyebrow } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

export function CsrBand() {
  return (
    <section aria-labelledby="csr-title" className="pb-24 md:pb-36">
      <Reveal className="container-site">
        <div className="grid overflow-hidden rounded-[20px] bg-navy text-ivory lg:grid-cols-12">
          <div className="flex flex-col gap-7 px-7 py-14 md:px-16 md:py-[72px] lg:col-span-7">
            <Eyebrow tone="sand">CSR &amp; partnerships</Eyebrow>
            <h2 id="csr-title" className="text-[36px] leading-[1.04] font-extrabold tracking-[-0.03em] text-ivory md:text-[52px]">
              Good intentions need good implementation.
            </h2>
            <p className="max-w-[560px] text-[18px] leading-[1.6] text-mist">
              KGWF designs, executes, monitors and reports community initiatives aligned with your CSR priorities — not just proposes them. Let’s build
              something useful together.
            </p>
            <div className="flex flex-wrap gap-3.5 pt-2">
              <ButtonLink to="/csr-partnerships#enquire" variant="sand">
                Partner with KGWF
              </ButtonLink>
              <ButtonLink to="/csr-partnerships" variant="outline-light">
                Explore CSR opportunities
              </ButtonLink>
            </div>
          </div>
          <ul className="flex flex-col bg-navy-deep px-7 py-12 md:px-14 md:py-[72px] lg:col-span-5">
            {partnerFormats.map((f, i) => (
              <li key={f.title} className={`flex flex-col gap-1.5 py-5 ${i === 0 ? 'pt-0' : ''} ${i < partnerFormats.length - 1 ? 'border-b border-sand/20' : 'pb-0'}`}>
                <span className="font-display text-xl font-bold">{f.title}</span>
                <span className="text-[15px] leading-snug text-[#b9c2ce]">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
