import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 sm:px-8 ${className}`}>{children}</div>
  )
}

export function Section({
  children,
  tint = false,
  className = '',
  id,
}: {
  children: ReactNode
  tint?: boolean
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 sm:py-20 ${
        tint ? 'bg-mistTint' : 'bg-white'
      } ${className}`}
    >
      {children}
    </section>
  )
}

export function Kicker({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  // On the quantum gradient the kicker is white: neonMist fails contrast against
  // the light end of the gradient. neonMist stays a decorative and badge color.
  return (
    <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em]">
      <span aria-hidden="true" className="h-[2px] w-5 bg-neonMist" />
      <span className={onDark ? 'text-white' : 'text-deepCore'}>{children}</span>
    </p>
  )
}

export function SectionHeading({
  kicker,
  title,
  intro,
}: {
  kicker?: string
  title: string
  intro?: string
}) {
  return (
    <div className="max-w-3xl">
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2 className="mt-3 break-words font-heading text-2xl font-bold leading-tight text-obsidian sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-obsidian/80">{intro}</p> : null}
    </div>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block w-fit self-start rounded-full bg-neonMist/25 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-deepCore">
      {children}
    </span>
  )
}

export function Card({
  children,
  className = '',
  highlighted = false,
}: {
  children: ReactNode
  className?: string
  highlighted?: boolean
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl bg-white p-6 transition-shadow sm:p-7 ${
        highlighted
          ? 'border-2 border-deepCore shadow-[0_12px_40px_-18px_rgba(87,42,150,0.55)]'
          : 'border border-alloyGrey/50 hover:border-neonMist hover:shadow-[0_10px_30px_-20px_rgba(87,42,150,0.45)]'
      } ${className}`}
    >
      {children}
    </div>
  )
}

type ButtonVariant = 'primary' | 'secondary' | 'onGradient' | 'onGradientGhost'

const buttonStyles: Record<ButtonVariant, string> = {
  primary: 'bg-deepCore text-white hover:bg-quantumTo focus-visible:outline-deepCore',
  secondary:
    'border border-deepCore text-deepCore hover:bg-mistTint focus-visible:outline-deepCore',
  onGradient: 'bg-white text-deepCore hover:bg-mistTint focus-visible:outline-white',
  onGradientGhost:
    'border border-white/70 text-white hover:bg-white/10 focus-visible:outline-white',
}

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-heading text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

export function ButtonLink({
  to,
  href,
  variant = 'primary',
  children,
  external = false,
  className = '',
}: {
  to?: string
  href?: string
  variant?: ButtonVariant
  children: ReactNode
  external?: boolean
  className?: string
}) {
  const classes = `${buttonBase} ${buttonStyles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
    </a>
  )
}

export function TextLink({
  to,
  href,
  children,
  external = false,
}: {
  to?: string
  href?: string
  children: ReactNode
  external?: boolean
}) {
  const classes =
    'font-heading text-sm font-semibold text-deepCore underline-offset-4 hover:underline'

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
    </a>
  )
}

export function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string
  title: string
  intro: string
}) {
  return (
    <section className="relative overflow-hidden bg-mistTint py-16 sm:py-20">
      <DecorD className="absolute -right-16 -top-20 h-[26rem] w-[26rem] text-white" />
      <Container className="relative">
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-4 max-w-4xl hyphens-auto break-words font-heading text-[1.9rem] font-bold leading-[1.15] text-obsidian sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-obsidian/80">{intro}</p>
      </Container>
    </section>
  )
}

/** Oversized brand D used as near invisible background decoration. */
export function DecorD({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className} fill="none">
      <path
        d="M52 30h52c38 0 66 30 66 70s-28 70-66 70H52V30Zm34 32v76h16c22 0 36-15 36-38s-14-38-36-38H86Z"
        fill="currentColor"
      />
    </svg>
  )
}
