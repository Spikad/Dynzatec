import type { Lang } from './sv'

export type PageKey = 'home' | 'services' | 'tools' | 'research'

export const languages: Lang[] = ['sv', 'en']

/** Path based i18n: Swedish lives at the root, English under /en. */
export const paths: Record<Lang, Record<PageKey, string>> = {
  sv: {
    home: '/',
    services: '/tjanster',
    tools: '/verktyg',
    research: '/forskning',
  },
  en: {
    home: '/en',
    services: '/en/services',
    tools: '/en/tools',
    research: '/en/research',
  },
}

export const pathFor = (lang: Lang, page: PageKey): string => paths[lang][page]

export const pageOrder: PageKey[] = ['home', 'services', 'tools', 'research']
