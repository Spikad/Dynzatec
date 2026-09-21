import { useI18n } from '../i18n'
import { Container } from './ui'

/** Reusable credibility strip. Mono labels, brand violet markers. */
export function ProofStrip() {
  const { t } = useI18n()

  return (
    <div className="border-y border-alloyGrey/40 bg-mistTint py-6">
      <Container>
        <ul className="grid gap-4 sm:grid-cols-3">
          {t.proof.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-[7px] h-2 w-2 shrink-0 rotate-45 bg-deepCore"
              />
              <span className="font-mono text-sm leading-relaxed text-obsidian">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
