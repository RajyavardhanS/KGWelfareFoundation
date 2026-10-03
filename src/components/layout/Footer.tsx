import { Link } from 'react-router-dom'
import { site } from '../../content/site'
import { useSupport } from '../support/SupportContext'
import { Icon } from '../ui/Icon'
import { Motto } from '../ui/Misc'
import { ReviewFlag } from '../ui/ReviewFlag'

const columns = [
  {
    title: 'Explore',
    links: [
      ['About', '/about'],
      ['Programmes', '/programmes'],
      ['Impact', '/impact'],
      ['Stories', '/stories'],
    ],
  },
  {
    title: 'Act',
    links: [
      ['Get Involved', '/get-involved'],
      ['CSR & Partnerships', '/csr-partnerships'],
      ['Corporate / Learning', '/corporate-learning'],
      ['Contact', '/contact'],
    ],
  },
]

export function Footer() {
  const { openSupport } = useSupport()
  return (
    <footer className="bg-navy-deep pt-20 pb-10 text-mist md:pt-24">
      <div className="container-site flex flex-col gap-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-6">
          <div className="flex flex-col gap-5 md:col-span-4">
            <Link to="/" className="flex items-center gap-3" aria-label="Home">
              <img src="/images/brand/kgwf-mark-light.png" alt="" width={56} height={40} className="h-10 w-auto" />
              <span className="font-display text-[20px] font-extrabold tracking-[0.08em] text-ivory">{site.shortName}</span>
            </Link>
            <p className="font-display text-2xl leading-tight font-bold tracking-[-0.01em] text-ivory">{site.tagline}</p>
            <Motto className="text-[17px] text-sand" />
            <button
              type="button"
              onClick={openSupport}
              className="mt-2 inline-flex h-12 w-fit items-center rounded-md bg-sand px-5 font-display text-sm font-extrabold text-navy-deep hover:bg-[#dcc89f]"
            >
              Support KGWF
            </button>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3 md:col-span-2 md:first-of-type:col-start-6">
              <p className="eyebrow text-[10.5px] text-sand">{col.title}</p>
              <ul className="flex flex-col gap-3 text-[15px]">
                {col.links.map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="hover:text-ivory">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <address className="flex flex-col gap-3 text-[15px] leading-normal not-italic md:col-span-3">
            <p className="eyebrow text-[10.5px] text-sand">Contact</p>
            <p>
              {site.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <ReviewFlag note={site.address.verify} />
            </p>
            <a href={site.contact.phoneHref} className="flex items-center gap-2 hover:text-ivory">
              <Icon name="phone" size={16} /> {site.contact.phone}
            </a>
            <a href={site.contact.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-ivory">
              <Icon name="message" size={16} /> WhatsApp {site.contact.whatsapp}
            </a>
            <a href={site.contact.emailHref} className="flex items-center gap-2 hover:text-ivory">
              <Icon name="mail" size={16} /> {site.contact.email}
            </a>
          </address>
        </div>

        <div className="flex flex-col gap-3 border-t border-sand/18 pt-6 text-[13px] text-mist-dim md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · Section 8 company · CIN {site.registration.cin}
          </p>
          <p>
            12A {site.registration.reg12A} · 80G {site.registration.reg80G}
          </p>
        </div>
      </div>
    </footer>
  )
}
