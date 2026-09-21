import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n'
import { pageOrder, type PageKey } from '../i18n/routes'
import { mailtoEn, mailtoSv } from '../config'
import { ButtonLink, Container } from './ui'
import { Logo } from './Logo'

export function Navbar() {
  const { t, lang, href, otherLang, otherLangHref } = useI18n()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const mailto = lang === 'sv' ? mailtoSv : mailtoEn

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const labels: Record<PageKey, string> = {
    home: t.nav.home,
    services: t.nav.services,
    tools: t.nav.tools,
    research: t.nav.research,
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-heading text-sm font-semibold transition-colors ${
      isActive ? 'text-deepCore' : 'text-obsidian hover:text-deepCore'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-alloyGrey/40 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to={href('home')} aria-label="Dynzatec" className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label={t.nav.home} className="hidden items-center gap-7 md:flex">
            {pageOrder.map((page) => (
              <NavLink key={page} to={href(page)} end={page === 'home'} className={linkClass}>
                {labels[page]}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LanguageToggle
              lang={lang}
              otherLang={otherLang}
              otherLangHref={otherLangHref}
              label={t.nav.languageLabel}
            />
            <ButtonLink href={mailto} variant="primary" className="px-4 py-2">
              {t.common.bookCallShort}
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid h-10 w-10 place-items-center rounded-lg border border-alloyGrey/60 text-obsidian md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-alloyGrey/40 bg-white md:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1">
              {pageOrder.map((page) => (
                <NavLink
                  key={page}
                  to={href(page)}
                  end={page === 'home'}
                  className={({ isActive }) =>
                    `rounded-lg px-2 py-3 font-heading text-base font-semibold ${
                      isActive ? 'bg-mistTint text-deepCore' : 'text-obsidian'
                    }`
                  }
                >
                  {labels[page]}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4 flex items-center justify-between gap-4">
              <LanguageToggle
                lang={lang}
                otherLang={otherLang}
                otherLangHref={otherLangHref}
                label={t.nav.languageLabel}
              />
              <ButtonLink href={mailto} variant="primary" className="px-4 py-2">
                {t.common.bookCallShort}
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

function LanguageToggle({
  lang,
  otherLang,
  otherLangHref,
  label,
}: {
  lang: string
  otherLang: 'sv' | 'en'
  otherLangHref: string
  label: string
}) {
  const current = 'font-mono text-xs font-medium uppercase text-deepCore'
  const other = 'font-mono text-xs font-medium uppercase text-obsidian hover:text-deepCore'

  return (
    <div className="flex items-center gap-2" aria-label={label}>
      <span className={current} aria-current="true">
        {lang}
      </span>
      <span aria-hidden="true" className="font-mono text-xs text-alloyGrey">
        |
      </span>
      <Link
        to={otherLangHref}
        hrefLang={otherLang}
        className={other}
        lang={otherLang}
      >
        {otherLang}
      </Link>
    </div>
  )
}
