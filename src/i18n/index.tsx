import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { sv, type Dict, type Lang } from './sv'
import { en } from './en'
import { pathFor, type PageKey } from './routes'

const dictionaries: Record<Lang, Dict> = { sv, en }

type I18nValue = {
  lang: Lang
  t: Dict
  page: PageKey
  /** Path to a page in the current language. */
  href: (page: PageKey) => string
  /** The same page in the other language. */
  otherLang: Lang
  otherLangHref: string
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({
  lang,
  page,
  children,
}: {
  lang: Lang
  page: PageKey
  children: ReactNode
}) {
  const value = useMemo<I18nValue>(() => {
    const otherLang: Lang = lang === 'sv' ? 'en' : 'sv'
    return {
      lang,
      page,
      t: dictionaries[lang],
      href: (target: PageKey) => pathFor(lang, target),
      otherLang,
      otherLangHref: pathFor(otherLang, page),
    }
  }, [lang, page])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext)
  if (!value) {
    throw new Error('useI18n must be used inside an I18nProvider')
  }
  return value
}

export { sv, en }
export type { Dict, Lang, PageKey }
