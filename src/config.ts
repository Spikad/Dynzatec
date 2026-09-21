import tokens from './brand.tokens.json'

/**
 * Single edit point for the site.
 * Colors and fonts live in ./brand.tokens.json so that Tailwind (tailwind.config.js)
 * and the React code read the exact same values. Change a hex or a font family
 * there and it updates everywhere.
 */

/** Primary contact. Every CTA on the site opens a mail to this address. */
export const contactEmail = 'omar.alzokani@dynzatec.se'

/** Co-founder, listed as a second contact in the footer. */
export const coFounderEmail = 'ahmad.arafat@dynzatec.se'

export const demoUrl = 'https://dynzatec-demo.vercel.app'

// PLACEHOLDER: replace with the real Dynzatec AB company page.
export const linkedinUrl = 'https://www.linkedin.com/company/dynzatec'

export const siteUrl = 'https://dynzatec.se'

/** 1200x630 social card. Empty means no og:image tag is emitted. */
export const ogImagePath = '/brand/og-image.png'

/**
 * Brand artwork in public/brand/. The official lockups are currently PNG.
 * When the SVG originals land, drop them in public/brand/ and change the three
 * extensions below to .svg. The favicon links live in index.html, which cannot
 * read this file, so change those two there at the same time.
 */
export const brandAssets = {
  logoHorizontal: '/brand/logo-horizontal.png',
  logoStacked: '/brand/logo-stacked.png',
  icon: '/brand/icon.png',
}

export const company = {
  legalName: 'Dynzatec AB',
  city: 'Göteborg',
  countrySv: 'Sverige',
  countryEn: 'Sweden',
  foundedYear: 2026,
}

export const colors = tokens.colors
export const fonts = tokens.fonts
export const googleFontsHref = tokens.googleFontsHref

export const mailtoSv = `mailto:${contactEmail}?subject=${encodeURIComponent(
  'Förfrågan om konstruktionsuppdrag',
)}`

export const mailtoEn = `mailto:${contactEmail}?subject=${encodeURIComponent(
  'Structural engineering enquiry',
)}`
