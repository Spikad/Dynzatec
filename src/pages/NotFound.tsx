import { useEffect } from 'react'
import { useI18n } from '../i18n'
import { ButtonLink, Container } from '../components/ui'

export function NotFound() {
  const { t, href } = useI18n()

  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => {
      meta.parentElement?.removeChild(meta)
    }
  }, [])

  return (
    <Container className="py-24 sm:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-deepCore">404</p>
      <h1 className="mt-4 font-heading text-4xl font-bold text-obsidian">{t.notFound.title}</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-obsidian/80">{t.notFound.body}</p>
      <ButtonLink to={href('home')} variant="primary" className="mt-8">
        {t.notFound.button}
      </ButtonLink>
    </Container>
  )
}
