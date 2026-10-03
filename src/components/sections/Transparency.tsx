import { site } from '../../content/site'
import { Icon } from '../ui/Icon'
import { ReviewFlag } from '../ui/ReviewFlag'

export function Transparency({ detailed = false }: { detailed?: boolean }) {
  const r = site.registration
  const items: { label: string; value: string; flag?: string; add?: boolean }[] = [
    { label: 'Corporate Identity No. (CIN)', value: r.cin },
    { label: 'Section 12A registration', value: r.reg12A },
    { label: 'Section 80G', value: r.reg80G, flag: r.reg80GVerify },
    { label: 'Income-tax returns', value: r.itReturns },
    { label: 'Legal form', value: r.companyType },
    ...(detailed
      ? [
          { label: 'PAN', value: r.pan },
          { label: 'TAN', value: r.tan },
        ]
      : []),
    { label: 'Annual reports', value: 'Published here once available', add: true },
  ]
  return (
    <section id="transparency" aria-labelledby="transparency-title" className="border-y border-navy/8 bg-white py-16 md:py-[72px]">
      <div className="container-site grid gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">
        <div className="flex flex-col gap-3.5">
          <Icon name="shield" size={30} className="text-teal" strokeWidth={1.5} />
          <h2 id="transparency-title" className="text-[30px] leading-[1.15] font-extrabold tracking-[-0.02em]">
            Transparency &amp; credentials
          </h2>
          <p className="text-[15.5px] leading-normal text-slate">Section 12A and 80G registered. IT returns filed. Full financial accountability.</p>
        </div>
        <dl className="grid border-t border-navy/16 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.label} className="flex flex-col gap-1.5 border-b border-navy/10 py-[18px] sm:pr-6">
              <dt className="eyebrow text-[10.5px] text-slate">
                {it.label}
                {it.flag && <ReviewFlag note={it.flag} />}
              </dt>
              <dd className="font-display text-[15px] font-bold break-words text-navy">
                {it.value}
                {it.add && <ReviewFlag kind="add" />}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
