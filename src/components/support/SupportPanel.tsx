import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../content/site'
import { Icon } from '../ui/Icon'
import { ReviewFlag } from '../ui/ReviewFlag'

function CopyValue({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      /* Clipboard unavailable — the value stays visible to copy manually. */
    }
  }
  return (
    <div className="flex items-center justify-between gap-3 border-b border-navy/10 py-2.5">
      <span className="flex min-w-0 flex-col">
        <span className="text-[12.5px] text-slate">{label}</span>
        <span className="font-display text-sm font-bold break-all text-navy tabular">{value}</span>
      </span>
      <button
        type="button"
        onClick={copy}
        className="flex size-9 shrink-0 items-center justify-center rounded-md text-slate hover:bg-navy/5 hover:text-navy"
        aria-label={copied ? `${label} copied` : `Copy ${label}`}
      >
        <Icon name={copied ? 'check' : 'copy'} size={16} />
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? `${label} copied` : ''}
      </span>
    </div>
  )
}

export function SupportPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="support-title"
      className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[1080px] overflow-y-auto rounded-2xl bg-ivory p-0 text-charcoal shadow-float backdrop:bg-[#06101e]/70"
    >
      <div className="flex items-start justify-between gap-6 border-b border-navy/12 px-6 pt-8 pb-6 md:px-12 md:pt-10">
        <div className="flex flex-col gap-2.5">
          <p className="eyebrow text-gold-ink">Support KGWF</p>
          <h2 id="support-title" className="font-serif text-[30px] leading-[1.1] font-normal tracking-[-0.01em] md:text-[40px]">
            Every rupee goes to work <em>on the ground.</em>
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex size-11 shrink-0 items-center justify-center rounded-md border border-navy/20 bg-white text-navy hover:border-navy"
        >
          <Icon name="x" size={20} strokeWidth={1.8} />
        </button>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[300px_minmax(0,1fr)_minmax(0,1fr)]">
        <section aria-labelledby="give-upi" className="flex flex-col items-start gap-3.5 border-b border-navy/10 bg-white px-6 py-8 md:border-r md:border-b-0 md:pl-12">
          <h3 id="give-upi" className="eyebrow text-[10.5px] text-navy">
            01 · Give by UPI
          </h3>
          <img
            src="/images/payment/upi-qr.jpg"
            alt="Official KGWF UPI QR code issued by ICICI Bank Eazypay for M/S Kalindi Global Welfare Foundation"
            width={220}
            height={295}
            className="w-[220px] rounded-lg border border-navy/12"
          />
          <p className="text-[13.5px] leading-normal text-slate">Scan with any UPI app — BHIM, Google Pay, PhonePe or Paytm.</p>
        </section>

        <section aria-labelledby="give-bank" className="flex flex-col gap-4 border-b border-navy/10 px-6 py-8 md:border-r md:border-b-0 md:px-8">
          <h3 id="give-bank" className="eyebrow text-[10.5px] text-navy">
            02 · Bank transfer
          </h3>
          <div className="border-t border-navy/14">
            <CopyValue label="Account name" value={site.bank.accountName} />
            <CopyValue label="Account no." value={site.bank.accountNumber} />
            <CopyValue label="IFSC" value={site.bank.ifsc} />
            <div className="flex flex-col border-b border-navy/10 py-2.5">
              <span className="text-[12.5px] text-slate">Bank</span>
              <span className="font-display text-sm font-bold text-navy">{site.bank.bank}</span>
            </div>
            <CopyValue label="UPI ID" value={site.bank.upiId} />
          </div>
        </section>

        <section aria-labelledby="give-receipt" className="flex flex-col gap-4 px-6 py-8 md:pr-12 md:pl-8">
          <h3 id="give-receipt" className="eyebrow text-[10.5px] text-navy">
            03 · Your receipt
          </h3>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            Donations to KGWF are covered under Section 80G of the Income Tax Act
            <ReviewFlag note={site.registration.reg80GVerify} />. After giving, share your name, PAN, address, amount and transaction
            reference so we can issue your receipt.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href={`${site.contact.emailHref}?subject=${encodeURIComponent('Donation receipt request')}&body=${encodeURIComponent('Name:\nPAN:\nAddress:\nAmount (₹):\nDate of transfer:\nUPI / bank transaction reference:\n')}`}
              className="flex h-12 items-center justify-between rounded-md bg-navy px-4 font-display text-sm font-bold text-ivory hover:bg-navy-deep"
            >
              Email for a receipt <Icon name="mail" size={18} />
            </a>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 items-center justify-between rounded-md border border-navy/30 px-4 font-display text-sm font-bold text-navy hover:border-navy"
            >
              WhatsApp {site.contact.whatsapp} <Icon name="message" size={18} />
            </a>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 border-t border-navy/10 bg-ivory-dim px-6 py-5 md:px-12">
        <span className="eyebrow mr-1.5 text-[10.5px] text-slate">Or give time &amp; things</span>
        {[
          ['Volunteer', '/get-involved#volunteer'],
          ['Mentor', '/get-involved#mode-mentor'],
          ['Sponsor equipment', '/get-involved#mode-sponsor'],
          ['In-kind support', '/get-involved#mode-in-kind'],
          ['Partner as an organisation', '/csr-partnerships'],
        ].map(([label, to]) => (
          <Link
            key={to}
            to={to}
            onClick={onClose}
            className="inline-flex h-10 items-center rounded-md border border-navy/20 px-3.5 font-display text-[13.5px] font-bold text-navy hover:border-navy"
          >
            {label}
          </Link>
        ))}
      </div>
      <p className="border-t border-navy/8 px-6 py-3.5 text-[12.5px] text-slate md:px-12">
        No payment is processed on this website. KGWF will never ask for your card details, PIN or OTP.
      </p>
    </dialog>
  )
}
