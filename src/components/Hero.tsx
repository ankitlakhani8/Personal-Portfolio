import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Transition } from 'framer-motion'
import KineticName from './KineticName'
import { EASE } from '../variants'

const t = (delay: number): Transition => ({ duration: 0.9, ease: EASE, delay })

function LiveClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => {
      const d = new Date()
      setTime([d.getHours(), d.getMinutes(), d.getSeconds()].map(n => String(n).padStart(2, '0')).join(':'))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return <span>v.2026.04 — IST {time}</span>
}

export default function Hero({ loaded }: { loaded: boolean }) {
  const vis = loaded ? { opacity: 1, y: 0 } : {}
  const init = { opacity: 0, y: 8 }

  return (
    <header style={{ position: 'relative', minHeight: '100vh', padding: '120px 0 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
      {/* grid bg */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)', backgroundSize: '96px 96px', maskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, #000 30%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, #000 30%, transparent 80%)' }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px', width: '100%' }}>
        {/* meta row */}
        <motion.div initial={init} animate={vis} transition={t(0.6)}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-dim)', marginBottom: 64 }}>
          <span>Portfolio · 2026</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <span>Pune, IN <span style={{ color: 'var(--accent)' }}>↳</span> Remote</span>
            <span><span style={{ color: 'var(--accent)' }}>●</span> Available Q3</span>
          </div>
        </motion.div>

        <KineticName loaded={loaded} />

        {/* roles */}
        <motion.div initial={init} animate={vis} transition={t(0.7)}
          style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 'clamp(20px, 2.4vw, 30px)', fontWeight: 300, letterSpacing: '-0.01em' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '.08em', minWidth: 28 }}>01</span>
            <span>Software Developer</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '.08em', minWidth: 28 }}>02</span>
            <span>& <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--accent)' }}>AI Specialist</span></span>
          </div>
        </motion.div>

        {/* subhead */}
        <motion.p initial={init} animate={vis} transition={t(0.75)}
          style={{ marginTop: 28, maxWidth: 560, fontSize: 15, lineHeight: 1.55, color: 'var(--ink-dim)' }}>
          Building at the seam where <span style={{ color: 'var(--ink)' }}>AI integration</span>, workflow automation,
          and scalable applications meet. Currently a final-year B.Tech student, shipping
          production-grade RAG systems &amp; full-stack products.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={init} animate={vis} transition={t(0.8)}
          style={{ marginTop: 48, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#work" data-h=""
            onClick={e => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 22px', borderRadius: 999, background: 'var(--accent)', color: '#1a0d04', border: '1px solid var(--accent)', fontFamily: 'var(--sans)', fontSize: 13, letterSpacing: '.02em', textDecoration: 'none', cursor: 'none', transition: 'background .25s, border-color .25s' }}
            onMouseEnter={e => { (e.currentTarget.style.background = '#ffb083'); (e.currentTarget.style.borderColor = '#ffb083') }}
            onMouseLeave={e => { (e.currentTarget.style.background = 'var(--accent)'); (e.currentTarget.style.borderColor = 'var(--accent)') }}>
            <span>View My Work</span><span>→</span>
          </a>
          <a href="#contact" data-h=""
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 22px', borderRadius: 999, background: 'transparent', color: 'var(--ink)', border: '1px solid var(--line-strong)', fontFamily: 'var(--sans)', fontSize: 13, letterSpacing: '.02em', textDecoration: 'none', cursor: 'none', transition: 'background .25s, color .25s, border-color .25s' }}
            onMouseEnter={e => { (e.currentTarget.style.background = 'var(--ink)'); (e.currentTarget.style.color = '#0b0b0c'); (e.currentTarget.style.borderColor = 'var(--ink)') }}
            onMouseLeave={e => { (e.currentTarget.style.background = 'transparent'); (e.currentTarget.style.color = 'var(--ink)'); (e.currentTarget.style.borderColor = 'var(--line-strong)') }}>
            <span>Say Hello</span><span>↗</span>
          </a>
        </motion.div>
      </div>

      {/* ribbon */}
      <motion.div initial={init} animate={vis} transition={t(0.85)}
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '18px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="sweep-line" /><span>Scroll</span>
        </div>
        <LiveClock />
        <div>04 sections / 04 projects</div>
      </motion.div>

      <style>{`@media (max-width: 720px) { header { padding: 100px 0 80px !important; } header > div { padding: 0 22px !important; } header .ribbon-inner { padding: 14px 22px !important; flex-wrap: wrap; gap: 8px; } }`}</style>
    </header>
  )
}
