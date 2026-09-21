import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { pageOrder, type PageKey } from '../i18n/routes'
import { coFounderEmail, company, contactEmail, demoUrl, linkedinUrl } from '../config'
import { Container } from './ui'
import { Logo } from './Logo'

export function Footer() {
  const { t, href } = useI18n()

  const labels: Record<PageKey, string> = {
    home: t.nav.home,
    services: t.nav.services,
    tools: t.nav.tools,
    research: t.nav.research,
  }

  return (
    <footer className="border-t border-alloyGrey/40 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-obsidian/80">
              {t.footer.tagline}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-obsidian/70">
              {company.legalName} · {t.footer.location}
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-deepCore">
              {t.footer.navLabel}
            </h2>
            <ul className="mt-4 space-y-2">
              {pageOrder.map((page) => (
                <li key={page}>
                  <Link
                    to={href(page)}
                    className="text-sm text-obsidian underline-offset-4 hover:text-deepCore hover:underline"
                  >
                    {labels[page]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-deepCore">
              {t.footer.contactLabel}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[contactEmail, coFounderEmail].map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="break-words text-obsidian underline-offset-4 hover:text-deepCore hover:underline"
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-obsidian underline-offset-4 hover:text-deepCore hover:underline"
                >
                  {t.footer.demoLabel}
                </a>
              </li>
              <li>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-obsidian underline-offset-4 hover:text-deepCore hover:underline"
                >
                  {t.footer.linkedinLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-alloyGrey/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-obsidian/70">{t.footer.rights}</p>
          <p className="font-mono text-xs text-obsidian/70">{t.footer.peerReviewed}</p>
        </div>
      </Container>
    </footer>
  )
}
