import { EnquiryForm } from '../components/blocks/EnquiryForm'
import { PageHero } from '../components/blocks/PageHero'
import { PageMeta } from '../components/blocks/PageMeta'
import { Icon, type IconName } from '../components/ui/Icon'
import { ReviewFlag } from '../components/ui/ReviewFlag'
import { site } from '../content/site'

export default function Contact() {
  const channels: { icon: IconName; label: string; value: string; href: string; external?: boolean }[] = [
    { icon: 'phone', label: 'Phone', value: site.contact.phone, href: site.contact.phoneHref },
    { icon: 'message', label: 'WhatsApp', value: site.contact.whatsapp, href: site.contact.whatsappHref, external: true },
    { icon: 'mail', label: 'Email', value: site.contact.email, href: site.contact.emailHref },
    { icon: 'linkedin', label: 'LinkedIn (Founder)', value: 'linkedin.com/in/vibhutimangal', href: site.contact.linkedin, external: true },
  ]
  return (
    <>
      <PageMeta title="Contact" description="Contact Kalindi Global Welfare Foundation (KGWF), Jaipur — phone, WhatsApp, email and address." />
      <PageHero eyebrow="Contact" title="Let’s talk." intro={<p>Whether you want to give, volunteer, partner or simply learn more, we’d be glad to hear from you.</p>} />

      <section aria-label="Contact details" className="pb-24 md:pb-32">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-10 lg:col-span-4">
            <ul className="border-t border-navy/14">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="flex items-center gap-4 border-b border-navy/10 py-5 hover:text-teal"
                  >
                    <Icon name={c.icon} size={22} className="shrink-0 text-teal" strokeWidth={1.5} />
                    <span className="flex flex-col">
                      <span className="eyebrow text-[10.5px] text-slate">{c.label}</span>
                      <span className="font-display text-[17px] font-bold break-all text-navy">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <address className="flex gap-4 not-italic">
              <Icon name="map-pin" size={22} className="mt-1 shrink-0 text-teal" strokeWidth={1.5} />
              <span className="flex flex-col gap-1">
                <span className="eyebrow text-[10.5px] text-slate">Address</span>
                {site.address.lines.map((l) => (
                  <span key={l} className="font-display text-[17px] font-bold text-navy">
                    {l}
                  </span>
                ))}
                <ReviewFlag note={site.address.verify} className="mt-1 ml-0 self-start" />
              </span>
            </address>
          </div>
          <div className="rounded-2xl border border-navy/12 bg-white p-6 md:p-10 lg:col-span-7 lg:col-start-6">
            <EnquiryForm
              subject="Message to KGWF"
              interests={['General enquiry', 'Donation & receipts', 'Volunteering', 'CSR partnership', 'Corporate / Learning', 'Media']}
              submitLabel="Compose email"
            />
          </div>
        </div>
      </section>
    </>
  )
}
