/** @type {import('tailwindcss').Config} */
// Colors and font stacks come from src/brand.tokens.json, the single source of
// truth shared with src/config.ts. Edit the tokens file, not this one.
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { colors, fonts } = require('./src/brand.tokens.json')

const stack = (value) => value.split(',').map((family) => family.trim())

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deepCore: colors.deepCore,
        neonMist: colors.neonMist,
        quantumFrom: colors.quantumFrom,
        quantumTo: colors.quantumTo,
        obsidian: colors.obsidian,
        alloyGrey: colors.alloyGrey,
        mistTint: colors.mistTint,
      },
      fontFamily: {
        heading: stack(fonts.heading),
        body: stack(fonts.body),
        mono: stack(fonts.mono),
      },
      backgroundImage: {
        quantum: `linear-gradient(135deg, ${colors.quantumFrom} 0%, ${colors.quantumTo} 100%)`,
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
