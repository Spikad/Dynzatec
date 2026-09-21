import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../i18n'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Seo } from './Seo'

export function Layout({ children }: { children: ReactNode }) {
  const { t } = useI18n()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Seo />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-deepCore focus:px-4 focus:py-2 focus:font-heading focus:text-sm focus:text-white"
      >
        {t.common.skipToContent}
      </a>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
