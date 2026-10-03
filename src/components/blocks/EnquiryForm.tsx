import { useId, useState, type FormEvent } from 'react'
import { site } from '../../content/site'
import { Button } from '../ui/Button'

type Props = {
  /** Subject line prefix, e.g. "CSR partnership enquiry". */
  subject: string
  interests: string[]
  defaultInterest?: string
  showOrganisation?: boolean
  submitLabel?: string
}

const field =
  'h-12 w-full rounded-md border border-navy/20 bg-white px-3.5 text-[16px] text-charcoal placeholder:text-slate/70 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25'

/**
 * Static-site enquiry form. It composes an email in the visitor's own mail app —
 * nothing is sent or stored by this website, and no success state is faked.
 */
export function EnquiryForm({ subject, interests, defaultInterest, showOrganisation = true, submitLabel = 'Compose email' }: Props) {
  const id = useId()
  const [opened, setOpened] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const lines = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      get('phone') && `Phone: ${get('phone')}`,
      showOrganisation && get('organisation') && `Organisation: ${get('organisation')}`,
      `Interested in: ${get('interest')}`,
      '',
      get('message'),
    ].filter((l) => l !== false && l !== '') as string[]
    const href = `${site.contact.emailHref}?subject=${encodeURIComponent(`${subject} — ${get('interest')}`)}&body=${encodeURIComponent(lines.join('\n'))}`
    window.location.href = href
    setOpened(true)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2" htmlFor={`${id}-name`}>
          <span className="font-display text-[13px] font-bold text-navy">Your name</span>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={field} />
        </label>
        <label className="flex flex-col gap-2" htmlFor={`${id}-email`}>
          <span className="font-display text-[13px] font-bold text-navy">Email</span>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="flex flex-col gap-2" htmlFor={`${id}-phone`}>
          <span className="font-display text-[13px] font-bold text-navy">
            Phone <span className="font-normal text-slate">(optional)</span>
          </span>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        {showOrganisation && (
          <label className="flex flex-col gap-2" htmlFor={`${id}-org`}>
            <span className="font-display text-[13px] font-bold text-navy">
              Organisation <span className="font-normal text-slate">(optional)</span>
            </span>
            <input id={`${id}-org`} name="organisation" autoComplete="organization" className={field} />
          </label>
        )}
      </div>
      <label className="flex flex-col gap-2" htmlFor={`${id}-interest`}>
        <span className="font-display text-[13px] font-bold text-navy">I’m interested in</span>
        <select id={`${id}-interest`} name="interest" defaultValue={defaultInterest ?? interests[0]} className={`${field} appearance-auto`}>
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2" htmlFor={`${id}-message`}>
        <span className="font-display text-[13px] font-bold text-navy">Message</span>
        <textarea id={`${id}-message`} name="message" rows={5} required className={`${field} h-auto py-3 leading-relaxed`} />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" arrow>
          {submitLabel}
        </Button>
        <p className="text-[13.5px] leading-snug text-slate sm:max-w-xs sm:text-right">
          Opens your email app with this message addressed to {site.contact.email}. Nothing is sent from this website.
        </p>
      </div>
      {opened && (
        <p role="status" className="rounded-md bg-ivory-dim px-4 py-3 text-[14.5px] text-ink-soft">
          If your email app didn’t open, write to{' '}
          <a className="font-bold text-navy underline" href={site.contact.emailHref}>
            {site.contact.email}
          </a>{' '}
          or WhatsApp{' '}
          <a className="font-bold text-navy underline" href={site.contact.whatsappHref} target="_blank" rel="noreferrer">
            {site.contact.whatsapp}
          </a>
          .
        </p>
      )}
    </form>
  )
}
