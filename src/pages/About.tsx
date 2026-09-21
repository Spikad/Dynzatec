import { useState } from 'react'
import { useI18n } from '../i18n'
import { Container, Kicker, PageHeader, Section } from '../components/ui'
import { ProofStrip } from '../components/ProofStrip'
import { CtaBand } from '../components/CtaBand'

export function About() {
  const { t } = useI18n()
  const page = t.about

  return (
    <>
      <PageHeader kicker={page.kicker} title={page.h1} intro={page.intro} />

      <Section>
        <Container>
          <Kicker>{page.teamKicker}</Kicker>
          <h2 className="mt-3 font-heading text-2xl font-bold text-obsidian sm:text-3xl">
            {page.teamTitle}
          </h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {page.team.map((member) => (
              <li
                key={member.name}
                className="overflow-hidden rounded-2xl border border-alloyGrey/50"
              >
                <TeamPhoto name={member.name} photo={member.photo} />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-obsidian">{member.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-deepCore">
                    {member.role}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-obsidian/80">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`LinkedIn: ${member.name}`}
                    className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-deepCore underline-offset-4 hover:underline"
                  >
                    <LinkedInGlyph />
                    {page.linkedinLabel}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ProofStrip />

      <CtaBand title={page.cta.title} body={page.cta.body} button={page.cta.button} />
    </>
  )
}

function LinkedInGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.76-1.95C21.6 8.69 22 11.1 22 14.24V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z" />
    </svg>
  )
}

/**
 * Shows the portrait from public/team/ and falls back to initials on the brand
 * gradient while the photographs are outstanding.
 */
function TeamPhoto({ name, photo }: { name: string; photo: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    const initials = name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()

    return (
      <div
        role="img"
        aria-label={name}
        className="grid aspect-square w-full place-items-center bg-quantum"
      >
        <span className="font-heading text-5xl font-bold tracking-tight text-white">
          {initials}
        </span>
      </div>
    )
  }

  return (
    <img
      src={photo}
      alt={name}
      className="aspect-square w-full object-cover"
      onError={() => setFailed(true)}
    />
  )
}
