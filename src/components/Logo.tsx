import { useEffect, useState } from 'react'
import { brandAssets } from '../config'

/**
 * horizontal: icon plus wordmark side by side, for the navbar and wide spaces.
 * stacked: icon above the wordmark, for the footer and square spaces.
 * icon: the D mark alone, for the mobile navbar and small spaces.
 */
export type LogoVariant = 'horizontal' | 'stacked' | 'icon'

const sources: Record<LogoVariant, string> = {
  horizontal: brandAssets.logoHorizontal,
  stacked: brandAssets.logoStacked,
  icon: brandAssets.icon,
}

type Props = {
  variant?: LogoVariant
  /** Renders the lockup in white, for gradient and dark backgrounds. */
  onDark?: boolean
  className?: string
}

/**
 * Renders the official lockup from public/brand/. If the file is missing it
 * falls back to the D mark plus the wordmark set in the heading font, so the
 * site never shows a broken image.
 */
export function Logo({ variant = 'horizontal', onDark = false, className = '' }: Props) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [variant])

  if (!failed) {
    return (
      <img
        src={sources[variant]}
        alt="Dynzatec"
        className={`w-auto ${onDark ? 'brightness-0 invert' : ''} ${className}`}
        onError={() => setFailed(true)}
      />
    )
  }

  const mark = (
    <span
      aria-hidden="true"
      className={`grid h-8 w-8 place-items-center rounded-lg font-heading text-lg font-bold leading-none ${
        onDark ? 'bg-white text-deepCore' : 'bg-deepCore text-white'
      }`}
    >
      D
    </span>
  )

  const wordmark = (
    <span
      className={`font-heading text-xl font-bold tracking-tight ${
        onDark ? 'text-white' : 'text-deepCore'
      }`}
    >
      Dynzatec
    </span>
  )

  if (variant === 'icon') {
    return (
      <span className={`inline-flex ${className}`}>
        {mark}
        <span className="sr-only">Dynzatec</span>
      </span>
    )
  }

  return (
    <span
      className={`inline-flex ${
        variant === 'stacked' ? 'flex-col items-start gap-2' : 'items-center gap-2'
      } ${className}`}
    >
      {mark}
      {wordmark}
    </span>
  )
}
