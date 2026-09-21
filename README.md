# dynzatec.se

Public website for Dynzatec AB. Swedish is the primary language, English is
secondary. Vite + React + TypeScript + Tailwind CSS + react-router-dom.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build
```

## Routes

| Page | Swedish | English |
| --- | --- | --- |
| Home | `/` | `/en` |
| Services | `/tjanster` | `/en/services` |
| Tools | `/verktyg` | `/en/tools` |
| Research | `/forskning` | `/en/research` |
| About | `/om-oss` | `/en/about` |

Anything else renders a 404 page in the language of the path prefix.

## Where to edit things

| What | File |
| --- | --- |
| Contact emails (Omar primary, Ahmad in the footer), demo URL, LinkedIn URL, site URL, OG image path | `src/config.ts` |
| Brand colors and font stacks | `src/brand.tokens.json` (read by both `src/config.ts` and `tailwind.config.js`) |
| Swedish copy | `src/i18n/sv.ts` |
| English copy | `src/i18n/en.ts` |
| Route paths | `src/i18n/routes.ts` |
| Titles, meta descriptions, OG tags, hreflang | `src/components/Seo.tsx` plus the `meta` block in each dictionary |
| Sitemap and robots | `public/sitemap.xml`, `public/robots.txt` |

Swedish headings contain soft hyphens (U+00AD) inside long compound words such as
Byggnads&shy;konstruktion. They are invisible until the word has to break on a
narrow screen, where they produce a proper hyphen.

## Brand assets

`public/brand/` holds the official artwork:

| File | Used for |
| --- | --- |
| `logo-horizontal.png` | navbar, all screen sizes |
| `logo-stacked.png` | footer, and the source of the social card |
| `icon.png` | the D mark alone, source of the favicon and touch icon |
| `favicon.png` | browser tab icon, linked from `index.html` |
| `apple-touch-icon.png` | iOS home screen, linked from `index.html` |
| `og-image.png` | 1200x630 social card, referenced through `ogImagePath` |

`favicon.png`, `apple-touch-icon.png` and `og-image.png` are generated from the
lockups. Regenerate them if the artwork changes.

`public/team/` holds the About page portraits (`omar.jpg`, `ahmad.jpg`,
`dimos.jpg`), square 800px crops on the supplied violet background. If a file is
ever missing the page renders the person's initials on the brand gradient
instead of a broken image.

`public/images/hero-structure.jpg` is the home hero photograph, a square 900px
crop shown from the `lg` breakpoint up. Everywhere else the site uses inline SVG
line illustrations rather than photography.

The lockups are currently PNG. When the SVG originals arrive, drop them in
`public/brand/` and change the three extensions in `brandAssets` in
`src/config.ts`, plus the two favicon links in `index.html`. Nothing else needs
to change. `src/components/Logo.tsx` takes `variant="horizontal" | "stacked" |
"icon"` and falls back to the D mark plus the wordmark in the heading font if a
file is ever missing, so the site never shows a broken image. Pass `onDark` to
render a lockup in white on a gradient or dark background.

## Color use

`neonMist` (#A688FF) is a decorative color: badge backgrounds, rules, markers
and illustration accents. It is never used as text on white, and not as text on
the quantum gradient either, where it fails contrast against the light end.
Body text is `obsidian` (#3B3B3B), links and accents are `deepCore` (#572A96).

## Deploying to Vercel

New Vercel project from this repository. Root directory `./`, framework preset
Vite, build command `npm run build`, output directory `dist`. `vercel.json`
rewrites extensionless paths to `index.html` so the deep routes work on reload.
