import { useState } from 'react'

type Props = {
  /** White wordmark for gradient and dark backgrounds. */
  variant?: 'default' | 'white'
  className?: string
}

/**
 * Renders public/brand/logo-horizontal.svg (or logo-white.svg) when the brand
 * files are in place. Until then it falls back to the D mark plus the wordmark
 * set in the heading font.
 */
export function Logo({ variant = 'default', className = '' }: Props) {
  const [useFallback, setUseFallback] = useState(false)
  const file = variant === 'white' ? 'logo-white.svg' : 'logo-horizontal.svg'
  const isWhite = variant === 'white'

  if (!useFallback) {
    return (
      <img
        src={`/brand/${file}`}
        alt="Dynzatec"
        className={`h-8 w-auto ${className}`}
        onError={() => setUseFallback(true)}
      />
    )
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className={`grid h-8 w-8 place-items-center rounded-lg font-heading text-lg font-bold leading-none ${
          isWhite ? 'bg-white text-deepCore' : 'bg-deepCore text-white'
        }`}
      >
        D
      </span>
      <span
        className={`font-heading text-xl font-bold tracking-tight ${
          isWhite ? 'text-white' : 'text-deepCore'
        }`}
      >
        Dynzatec
      </span>
    </span>
  )
}
