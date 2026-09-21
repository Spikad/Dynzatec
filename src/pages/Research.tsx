import { useI18n } from '../i18n'
import { demoUrl, mailtoEn, mailtoSv } from '../config'
import {
  ButtonLink,
  Card,
  Container,
  DecorD,
  Kicker,
  PageHeader,
  Section,
  SectionHeading,
} from '../components/ui'
import { ProofStrip } from '../components/ProofStrip'
import { LSlabIllustration } from '../components/Illustrations'

export function Research() {
  const { t, lang } = useI18n()
  const page = t.research
  const mailto = lang === 'sv' ? mailtoSv : mailtoEn

  return (
    <>
      <PageHeader kicker={page.kicker} title={page.h1} intro={page.intro} />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <Card highlighted>
              <Kicker>{page.paper.kicker}</Kicker>
              <h2 className="mt-4 font-heading text-2xl font-bold leading-snug text-obsidian">
                {page.paper.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-obsidian/80">{page.paper.venue}</p>
              {/* TODO: Omar must confirm with the co-authors before publishing
                  author names and the Chalmers affiliation. */}
              <p className="mt-2 text-base leading-relaxed text-obsidian/80">
                {page.paper.authors}
              </p>
            </Card>
            <div className="grid place-items-center rounded-2xl bg-mistTint p-8">
              <LSlabIllustration
                className="h-auto w-full max-w-[14rem]"
                label={t.illustrations.lSlab}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tint className="border-y border-alloyGrey/40">
        <Container>
          <Kicker>{page.stats.kicker}</Kicker>
          <dl className="mt-8 grid gap-10 sm:grid-cols-3">
            {page.stats.items.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="block font-mono text-4xl font-bold tracking-tight text-deepCore sm:text-5xl">
                    {item.value}
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-obsidian/80">
                    {item.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                kicker={page.meaning.kicker}
                title={page.meaning.title}
                intro={page.meaning.body}
              />
            </div>
            <div>
              <SectionHeading kicker={page.roadmap.kicker} title={page.roadmap.title} />
              <ol className="mt-8 space-y-5">
                {page.roadmap.steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-deepCore font-mono text-sm font-medium text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1.5 text-base leading-relaxed text-obsidian">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <ProofStrip />

      <section className="relative overflow-hidden bg-quantum py-16 sm:py-20">
        <DecorD className="absolute -right-20 -top-24 h-[26rem]" onDark />
        <Container className="relative">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
                {page.cta.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/85">{page.cta.body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={mailto} variant="onGradient">
                {page.cta.button}
              </ButtonLink>
              <ButtonLink href={demoUrl} variant="onGradientGhost" external>
                {t.common.openDemo}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
