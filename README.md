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

Anything else renders a 404 page in the language of the path prefix.

## Where to edit things

| What | File |
| --- | --- |
| Contact email, demo URL, LinkedIn URL, site URL, OG image path | `src/config.ts` |
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

The site expects these files in `public/brand/`:

- `logo-horizontal.svg` (icon plus wordmark, Deep Core version)
- `logo-white.svg` (same lockup for gradient and dark backgrounds)
- `icon.svg` (the D mark alone, also used as the favicon)

Only a placeholder `icon.svg` is committed. `src/components/Logo.tsx` loads the
horizontal logo when it exists and otherwise renders the D mark plus the
wordmark in the heading font, so the site looks correct before the final files
land. Drop the real SVGs into `public/brand/` and nothing else has to change.

## Color use

`neonMist` (#A688FF) is a decorative color: badge backgrounds, rules, markers
and illustration accents. It is never used as text on white, and not as text on
the quantum gradient either, where it fails contrast against the light end.
Body text is `obsidian` (#3B3B3B), links and accents are `deepCore` (#572A96).

## Deploying to Vercel

New Vercel project from this repository. Root directory `./`, framework preset
Vite, build command `npm run build`, output directory `dist`. `vercel.json`
rewrites extensionless paths to `index.html` so the deep routes work on reload.
