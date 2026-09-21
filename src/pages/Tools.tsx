import { useI18n } from '../i18n'
import { demoUrl } from '../config'
import {
  Badge,
  ButtonLink,
  Card,
  Container,
  Kicker,
  PageHeader,
  Section,
} from '../components/ui'
import { ProofStrip } from '../components/ProofStrip'
import { LSlabIllustration } from '../components/Illustrations'

export function Tools() {
  const { t } = useI18n()
  const page = t.tools

  return (
    <>
      <PageHeader kicker={page.kicker} title={page.h1} intro={page.intro} />

      <Section>
        <Container>
          <Card highlighted>
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_0.6fr]">
              <div>
                <Badge>{page.liveNow.badge}</Badge>
                <h2 className="mt-4 font-heading text-2xl font-bold text-obsidian sm:text-3xl">
                  {page.liveNow.title}
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-obsidian/80">
                  {page.liveNow.body}
                </p>
                <ButtonLink href={demoUrl} variant="primary" external className="mt-6">
                  {page.liveNow.button}
                </ButtonLink>
              </div>
              <LSlabIllustration
                className="mx-auto h-auto w-40 md:w-full md:max-w-[12rem]"
                label={t.illustrations.lSlab}
              />
            </div>
          </Card>

          <div className="mt-14">
            <Kicker>{page.listTitle}</Kicker>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {page.items.map((item) => (
                <Card key={item.title}>
                  <Badge>{item.badge}</Badge>
                  <h3 className="mt-4 font-heading text-lg font-bold text-obsidian">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-obsidian/80">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ProofStrip />

      <Section tint>
        <Container>
          <p className="max-w-3xl border-l-4 border-deepCore pl-6 font-heading text-xl font-semibold leading-relaxed text-obsidian sm:text-2xl">
            {page.principle}
          </p>
        </Container>
      </Section>
    </>
  )
}
