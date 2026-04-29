import { motion } from 'framer-motion'
import { reveal, revealTransition } from '../variants'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V8h3v11zM6.5 6.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V19h-3V8h2.9v1.5h.04A3.2 3.2 0 0 1 14.9 8c3 0 3.6 2 3.6 4.6V19z" />
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} width={16} height={16}>
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
  </svg>
)

const btnBase: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 22px', borderRadius: 980, fontFamily: 'var(--sans)', fontSize: 13, letterSpacing: '.02em', textDecoration: 'none', cursor: 'none', transition: 'background 0.3s var(--ease), color 0.3s var(--ease), border-color 0.3s var(--ease), filter 0.3s var(--ease), transform 0.3s var(--ease)', willChange: 'transform' }

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '160px 0 60px', borderTop: '1px solid var(--line)', position: 'relative' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={revealTransition()}
          style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-dim)', marginBottom: 56 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
          <span style={{ color: 'var(--ink-faint)' }}>[ 03 ]</span>
          <span>Contact</span>
        </motion.div>

        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={revealTransition(0.08)}
          style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 'clamp(42px, 7vw, 120px)', lineHeight: 1.0, letterSpacing: '-0.04em', margin: 0, maxWidth: '18ch' }}>
          Let&apos;s build{' '}
          <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>something</em>
          <br />
          <span style={{ WebkitTextStroke: '1px var(--ink)', color: 'transparent' }}>worth</span> shipping.
        </motion.h2>

        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={revealTransition(0.16)}
          style={{ marginTop: 56, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="https://www.linkedin.com/in/ankit50/" target="_blank" rel="noopener" data-h=""
            style={{ ...btnBase, background: 'var(--accent)', color: '#1a0d04', border: '1px solid var(--accent)' }}
            onMouseEnter={e => { (e.currentTarget.style.filter = 'brightness(1.08)'); (e.currentTarget.style.transform = 'scale(1.02)') }}
            onMouseLeave={e => { (e.currentTarget.style.filter = 'none'); (e.currentTarget.style.transform = 'scale(1)') }}>
            <span>Say Hello</span><span>→</span>
          </a>
          <a href="https://github.com/ankitlakhani8" target="_blank" rel="noopener" data-h=""
            style={{ ...btnBase, background: 'transparent', color: 'var(--ink)', border: '1px solid var(--line-strong)' }}
            onMouseEnter={e => { (e.currentTarget.style.background = 'var(--ink)'); (e.currentTarget.style.color = '#0b0b0c'); (e.currentTarget.style.borderColor = 'var(--ink)'); (e.currentTarget.style.transform = 'scale(1.02)') }}
            onMouseLeave={e => { (e.currentTarget.style.background = 'transparent'); (e.currentTarget.style.color = 'var(--ink)'); (e.currentTarget.style.borderColor = 'var(--line-strong)'); (e.currentTarget.style.transform = 'scale(1)') }}>
            <span>GitHub</span><span>↗</span>
          </a>
        </motion.div>

        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={revealTransition(0.24)}
          style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 60 }}>
          {[
            { href: 'https://github.com/ankitlakhani8', icon: <GithubIcon />, label: 'github.com/ankitlakhani8' },
            { href: 'https://www.linkedin.com/in/ankit50/', icon: <LinkedInIcon />, label: 'linkedin.com/in/ankit50' },
            { href: 'mailto:hello@ankitlakhani.dev', icon: <MailIcon />, label: 'Email me' },
          ].map(({ href, icon, label }) => (
            <a key={href} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener" data-h=""
              className="contact-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--ink-dim)', textDecoration: 'none', fontSize: 14, padding: '12px 0', transition: 'color .25s', cursor: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-dim)')}>
              {icon}{label}
            </a>
          ))}
        </motion.div>

        <div style={{ marginTop: 120, paddingTop: 28, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.04em', color: 'var(--ink-faint)' }}>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <span>© 2026 Ankit Lakhani</span>
            <span>Designed &amp; built solo</span>
          </div>
          <div>Last updated · 27.04.26</div>
        </div>
      </div>
      <style>{`@media (max-width: 720px) { #contact { padding: 88px 0 60px !important; } #contact > div { padding: 0 22px !important; } }`}</style>
    </section>
  )
}
