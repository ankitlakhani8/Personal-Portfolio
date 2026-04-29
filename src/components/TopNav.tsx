import { motion } from 'framer-motion'
import { EASE } from '../variants'

const navStyle: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
  padding: '22px 56px',
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.02em',
  mixBlendMode: 'difference', color: '#f3efe7',
}

export default function TopNav({ loaded }: { loaded: boolean }) {
  return (
    <motion.nav
      style={navStyle}
      initial={{ opacity: 0, y: 8 }}
      animate={loaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
    >
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase' }}>
        <span
          className="pulse-dot"
          style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginRight: 8, transform: 'translateY(-1px)' }}
        />
        Ankit Lakhani
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: 28, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase' }}
          className="hidden-mobile-nav">
        {(['Work', 'About', 'Contact'] as const).map(item => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              data-h=""
              style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7, transition: 'opacity .2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
              onClick={e => {
                e.preventDefault()
                document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <style>{`
        @media (max-width: 720px) { .hidden-mobile-nav { display: none !important; } }
        @media (max-width: 720px) { nav { padding: 18px 22px !important; } }
      `}</style>
    </motion.nav>
  )
}
