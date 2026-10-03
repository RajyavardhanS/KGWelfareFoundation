import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'

type Variant = 'primary' | 'outline' | 'sand' | 'outline-light' | 'terracotta' | 'light'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-md font-display font-bold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-navy text-ivory hover:bg-navy-deep',
  outline: 'border border-navy/50 text-navy hover:border-navy hover:bg-navy/5',
  sand: 'bg-sand text-navy-deep hover:bg-[#dcc89f]',
  'outline-light': 'border border-sand/60 text-ivory hover:border-sand hover:bg-white/5',
  terracotta: 'bg-terracotta-deep text-white hover:bg-[#864c34]',
  light: 'bg-ivory text-navy-deep hover:bg-white',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-[54px] px-6 text-[15px]',
}

export const buttonClass = (variant: Variant = 'primary', size: Size = 'lg', extra = '') =>
  `${base} ${variants[variant]} ${sizes[size]} ${extra}`

type Common = { variant?: Variant; size?: Size; arrow?: boolean; children: ReactNode; className?: string }

export function ButtonLink({ to, variant, size, arrow, children, className = '', ...rest }: Common & Omit<ComponentProps<typeof Link>, 'className'>) {
  return (
    <Link to={to} className={buttonClass(variant, size, className)} {...rest}>
      {children}
      {arrow && <Icon name="arrow-right" size={18} strokeWidth={1.8} />}
    </Link>
  )
}

export function ButtonA({ variant, size, arrow, children, className = '', ...rest }: Common & Omit<ComponentProps<'a'>, 'className'>) {
  return (
    <a className={buttonClass(variant, size, className)} {...rest}>
      {children}
      {arrow && <Icon name="arrow-right" size={18} strokeWidth={1.8} />}
    </a>
  )
}

export function Button({ variant, size, arrow, children, className = '', type = 'button', ...rest }: Common & Omit<ComponentProps<'button'>, 'className'>) {
  return (
    <button type={type} className={buttonClass(variant, size, className)} {...rest}>
      {children}
      {arrow && <Icon name="arrow-right" size={18} strokeWidth={1.8} />}
    </button>
  )
}

export function TextLink({ to, children, className = '' }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link to={to} className={`text-link ${className}`}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  )
}
