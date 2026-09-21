import { useEffect } from 'react'
import { useI18n } from '../i18n'
import { languages, paths } from '../i18n/routes'
import { ogImagePath, siteUrl } from '../config'

const MANAGED = 'data-dz-seo'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    el.setAttribute(MANAGED, '')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function resetLinks() {
  document.head
    .querySelectorAll(`link[${MANAGED}]`)
    .forEach((el) => el.parentElement?.removeChild(el))
}

function addLink(rel: string, href: string, hreflang?: string) {
  const el = document.createElement('link')
  el.setAttribute('rel', rel)
  el.setAttribute('href', href)
  el.setAttribute(MANAGED, '')
  if (hreflang) el.setAttribute('hreflang', hreflang)
  document.head.appendChild(el)
}

/**
 * Per page, per language head tags: title, description, Open Graph and the
 * sv/en hreflang pair. Rendered once from the layout.
 */
export function Seo() {
  const { lang, page, t } = useI18n()
  const meta = t.meta[page]

  useEffect(() => {
    const canonical = `${siteUrl}${paths[lang][page]}`

    document.documentElement.lang = t.htmlLang
    document.title = meta.title

    upsertMeta('name', 'description', meta.description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', 'Dynzatec AB')
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:locale', lang === 'sv' ? 'sv_SE' : 'en_GB')
    if (ogImagePath) {
      upsertMeta('property', 'og:image', `${siteUrl}${ogImagePath}`)
    }
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)

    resetLinks()
    addLink('canonical', canonical)
    languages.forEach((code) => {
      addLink('alternate', `${siteUrl}${paths[code][page]}`, code)
    })
    addLink('alternate', `${siteUrl}${paths.sv[page]}`, 'x-default')
  }, [lang, page, meta.title, meta.description, t.htmlLang])

  return null
}
