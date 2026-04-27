import { motion } from 'framer-motion'
import { EASE } from '../variants'

const segments = [
  { text: 'An', serif: false },
  { text: 'k', serif: true },
  { text: 'it', serif: false },
]

export default function KineticName({ loaded }: { loaded: boolean }) {
  return (
    <h1
      aria-label="Ankit Lakhani"
      style={{ fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 'clamp(64px, 14vw, 220px)', lineHeight: 0.88, letterSpacing: '-0.045em', margin: 0 }}
    >
      <span style={{ display: 'block' }}>
        {segments.map((seg, i) => (
          <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
            <motion.span
              style={{ display: 'inline-block', fontFamily: seg.serif ? 'var(--serif)' : 'var(--sans)', fontStyle: seg.serif ? 'italic' : 'normal', fontWeight: seg.serif ? 400 : 500, letterSpacing: seg.serif ? '-0.02em' : undefined, color: seg.serif ? 'var(--accent)' : 'var(--ink)' }}
              initial={{ y: '102%' }}
              animate={loaded ? { y: '0%' } : { y: '102%' }}
              transition={{ duration: 1.1, ease: EASE, delay: i * 0.1 }}
            >
              {seg.text}
            </motion.span>
          </span>
        ))}
      </span>
      <span style={{ display: 'block', overflow: 'hidden' }}>
        <motion.span
          style={{ display: 'inline-block' }}
          initial={{ y: '102%' }}
          animate={loaded ? { y: '0%' } : { y: '102%' }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.32 }}
        >
          Lakhani
        </motion.span>
      </span>
    </h1>
  )
}
