import tokens from './brand.tokens.json'

/**
 * Single edit point for the site.
 * Colors and fonts live in ./brand.tokens.json so that Tailwind (tailwind.config.js)
 * and the React code read the exact same values. Change a hex or a font family
 * there and it updates everywhere.
 */

// PLACEHOLDER: confirm the address Omar wants public before launch.
export const contactEmail = 'omar@dynzatec.se'

export const demoUrl = 'https://dynzatec-demo.vercel.app'

// PLACEHOLDER: replace with the real Dynzatec AB company page.
export const linkedinUrl = 'https://www.linkedin.com/company/dynzatec'

export const siteUrl = 'https://dynzatec.se'

/**
 * PLACEHOLDER: drop a 1200x630 brand image at public/brand/og-image.png and set
 * this to '/brand/og-image.png'. While it is empty no og:image tag is emitted,
 * so link previews never point at a missing file.
 */
export const ogImagePath = ''

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
