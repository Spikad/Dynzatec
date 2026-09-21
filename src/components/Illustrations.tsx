/** Line illustrations only. No photography anywhere on the site. */

export function PortalFrameIllustration({
  className = '',
  label,
  onDark = false,
}: {
  className?: string
  label: string
  onDark?: boolean
}) {
  const primary = onDark ? '#FFFFFF' : '#572A96'
  const accent = '#A688FF'
  const faint = onDark ? 'rgba(255,255,255,0.45)' : '#BBBBBB'

  return (
    <svg
      viewBox="0 0 320 180"
      role="img"
      aria-label={label}
      className={className}
      fill="none"
    >
      {/* ground */}
      <path d="M20 160h280" stroke={faint} strokeWidth="2" strokeDasharray="6 6" />
      {/* columns and rafters */}
      <path
        d="M50 160V70l110-42 110 42v90"
        stroke={primary}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* haunches */}
      <path d="M50 82l34 13M270 82l-34 13" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      {/* purlins */}
      {[0.33, 0.66].map((t) => (
        <g key={t}>
          <circle cx={50 + 110 * t} cy={70 - 42 * t} r="3.5" fill={accent} />
          <circle cx={160 + 110 * t} cy={28 + 42 * t} r="3.5" fill={accent} />
        </g>
      ))}
      <circle cx="160" cy="28" r="4" fill={primary} />
      {/* footings */}
      <path d="M36 160h28M256 160h28" stroke={primary} strokeWidth="4" strokeLinecap="round" />
      {/* span arrow */}
      <path d="M50 174h220" stroke={faint} strokeWidth="1.5" />
      <path d="M50 170v8M270 170v8" stroke={faint} strokeWidth="1.5" />
    </svg>
  )
}

export function LSlabIllustration({
  className = '',
  label,
}: {
  className?: string
  label: string
}) {
  return (
    <svg
      viewBox="0 0 220 200"
      role="img"
      aria-label={label}
      className={className}
      fill="none"
    >
      <path
        d="M30 20h70v80h90v80H30V20Z"
        stroke="#572A96"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* mesh free isolines, a nod to the VPINN field output */}
      <path d="M46 36h38v80h76" stroke="#A688FF" strokeWidth="2" />
      <path d="M62 52h22v80h60" stroke="#A688FF" strokeWidth="2" opacity="0.75" />
      <path d="M78 68h6v80h44" stroke="#A688FF" strokeWidth="2" opacity="0.5" />
      <circle cx="150" cy="150" r="5" fill="#572A96" />
    </svg>
  )
}

export function HexPattern({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 104" aria-hidden="true" className={className} fill="none">
      <path
        d="M30 2 58 18v32L30 66 2 50V18L30 2Zm60 36 28 16v32l-28 16-28-16V54l28-16Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}
