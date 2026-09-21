import { useI18n } from '../i18n'
import { Badge, Card, Container, Section, SectionHeading, PageHeader } from '../components/ui'
import { ProofStrip } from '../components/ProofStrip'
import { CtaBand } from '../components/CtaBand'
import { PortalFrameIllustration } from '../components/Illustrations'

export function Services() {
  const { t } = useI18n()
  const page = t.services

  return (
    <>
      <PageHeader kicker={page.kicker} title={page.h1} intro={page.intro} />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.cards.map((card) => (
              <Card key={card.title}>
                {'badge' in card && card.badge ? (
                  <div className="mb-3">
                    <Badge>{card.badge}</Badge>
                  </div>
                ) : null}
                <h2 className="font-heading text-xl font-bold text-obsidian">{card.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-obsidian/80">{card.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <ProofStrip />

      <Section tint>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading kicker={page.howWeWork.kicker} title={page.howWeWork.title} />
              <ol className="mt-8 space-y-5">
                {page.howWeWork.steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-deepCore font-mono text-sm font-medium text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1.5 text-base leading-relaxed text-obsidian">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <SectionHeading
                kicker={page.whoWeWorkWith.kicker}
                title={page.whoWeWorkWith.title}
              />
              <ul className="mt-8 space-y-4">
                {page.whoWeWorkWith.items.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-alloyGrey/50 pb-4">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-2 w-2 shrink-0 rotate-45 bg-neonMist"
                    />
                    <span className="text-base leading-relaxed text-obsidian">{item}</span>
                  </li>
                ))}
              </ul>
              <PortalFrameIllustration
                className="mt-10 h-auto w-full max-w-sm"
                label={t.illustrations.portalFrame}
              />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand title={page.cta.title} body={page.cta.body} button={page.cta.button} />
    </>
  )
}
