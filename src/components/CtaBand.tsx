import { useI18n } from '../i18n'
import { mailtoEn, mailtoSv } from '../config'
import { ButtonLink, Container, DecorD } from './ui'

export function CtaBand({
  title,
  body,
  button,
}: {
  title: string
  body?: string
  button: string
}) {
  const { lang } = useI18n()
  const mailto = lang === 'sv' ? mailtoSv : mailtoEn

  return (
    <section className="relative overflow-hidden bg-quantum py-16 sm:py-20">
      <DecorD className="absolute -bottom-24 -left-16 h-[24rem] w-[24rem] text-white/10" />
      <Container className="relative">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
              {title}
            </h2>
            {body ? <p className="mt-3 text-base leading-relaxed text-white/85">{body}</p> : null}
          </div>
          <ButtonLink href={mailto} variant="onGradient" className="shrink-0">
            {button}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
