import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { demoUrl, mailtoEn, mailtoSv } from '../config'
import {
  ButtonLink,
  Card,
  Container,
  DecorD,
  Kicker,
  Section,
  SectionHeading,
} from '../components/ui'
import { ProofStrip } from '../components/ProofStrip'
import { CtaBand } from '../components/CtaBand'
import { HexPattern } from '../components/Illustrations'

export function Home() {
  const { t, lang, href } = useI18n()
  const page = t.home
  const mailto = lang === 'sv' ? mailtoSv : mailtoEn

  return (
    <>
      <section className="relative overflow-hidden bg-quantum">
        <DecorD className="absolute -right-24 -top-16 h-[34rem]" onDark />
        <HexPattern className="absolute bottom-6 left-[-2rem] h-40 w-48 text-white/15" />
        <Container className="relative py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="min-w-0">
              <Kicker onDark>{page.kicker}</Kicker>
              <h1 className="mt-4 max-w-3xl hyphens-auto break-words font-heading text-[1.9rem] font-bold leading-[1.12] text-white sm:text-[2.75rem] lg:text-[2.6rem] xl:text-[3.2rem]">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{page.sub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={mailto} variant="onGradient">
                  {t.common.bookCall}
                </ButtonLink>
                <ButtonLink href={demoUrl} variant="onGradientGhost" external>
                  {t.common.viewDemo}
                </ButtonLink>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-2xl border border-white/25">
                <img
                  src="/images/hero-structure.jpg"
                  alt={t.illustrations.heroPhoto}
                  width={900}
                  height={900}
                  className="aspect-square w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-deepCore/25 mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Kicker>{page.whyWeExist.kicker}</Kicker>
          <div className="mt-6 max-w-3xl space-y-6">
            {page.whyWeExist.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-heading text-xl font-medium leading-relaxed text-deepCore sm:text-2xl sm:leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container>
          <SectionHeading kicker={page.whatWeDo.kicker} title={page.whatWeDo.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {page.whatWeDo.cards.map((card) => (
              <Card key={card.title}>
                <h3 className="font-heading text-xl font-bold text-obsidian">{card.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-obsidian/80">
                  {card.body}
                </p>
                <Link
                  to={href(card.page)}
                  className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-deepCore underline-offset-4 hover:underline"
                >
                  {card.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <ProofStrip />

      <Section>
        <Container>
          <SectionHeading kicker={page.why.kicker} title={page.why.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {page.why.items.map((item, index) => (
              <div key={item.title} className="border-t-2 border-deepCore pt-5">
                <span className="font-mono text-xs text-deepCore">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-obsidian">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-obsidian/80">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title={page.cta.title} body={page.cta.body} button={page.cta.button} />
    </>
  )
}
