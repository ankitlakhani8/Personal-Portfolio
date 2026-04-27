import { motion } from 'framer-motion'
import { reveal, revealTransition, EASE } from '../variants'

function PreviewCamera() {
  return (
    <div className="pv-camera" style={{ position: 'absolute', inset: 0, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--line-strong)' }}>
      <span style={{ position: 'absolute', left: 10, bottom: 8, zIndex: 2, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink)', mixBlendMode: 'difference' }}>01 — Hardware × RAG</span>
    </div>
  )
}

function PreviewVoice() {
  const heights = ['28%', '64%', '90%', '50%', '78%', '36%', '60%']
  const delays = [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72]
  return (
    <div style={{ position: 'absolute', inset: 0, borderRadius: 10, overflow: 'hidden', background: 'linear-gradient(180deg,#0a0a0c,#1a0f06)', border: '1px solid var(--line-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
      {heights.map((h, i) => (
        <i key={i} style={{ display: 'block', width: 6, height: h, background: 'var(--accent)', borderRadius: 3, animation: `bars 1.4s ease-in-out ${delays[i]}s infinite` }} />
      ))}
      <span style={{ position: 'absolute', left: 10, bottom: 8, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink)', mixBlendMode: 'difference' }}>02 — Claude · Voice</span>
    </div>
  )
}

function PreviewTrader() {
  return (
    <div style={{ position: 'absolute', inset: 0, borderRadius: 10, overflow: 'hidden', background: '#0a0a0c', border: '1px solid var(--line-strong)' }}>
      <svg viewBox="0 0 280 180" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="ga" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff9559" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff9559" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,140 L20,120 L40,128 L60,96 L80,108 L100,72 L120,84 L140,60 L160,68 L180,40 L200,52 L220,30 L240,42 L260,18 L280,30 L280,180 L0,180 Z" fill="url(#ga)" />
        <path d="M0,140 L20,120 L40,128 L60,96 L80,108 L100,72 L120,84 L140,60 L160,68 L180,40 L200,52 L220,30 L240,42 L260,18 L280,30" fill="none" stroke="#ff9559" strokeWidth="1.5" />
      </svg>
      <span style={{ position: 'absolute', left: 10, bottom: 8, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink)', mixBlendMode: 'difference' }}>03 — Algo · Auto</span>
    </div>
  )
}

function PreviewInvestHR() {
  return (
    <div className="pv-investhr" style={{ position: 'absolute', inset: 0, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--line-strong)' }}>
      <span style={{ position: 'absolute', left: 10, bottom: 8, zIndex: 2, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink)', mixBlendMode: 'difference' }}>04 — Freelance · Live</span>
    </div>
  )
}

const projects = [
  { num: '/01', title: ['Poetic ', 'Camera'], stack: ['Raspberry Pi', 'Python', 'RAG', 'Optics'], desc: 'A hardware–software hybrid: Raspberry Pi, custom lenses, and a bespoke RAG system that turns moments into language.', Preview: PreviewCamera },
  { num: '/02', title: ['Virtual Voice ', 'Assistant'], stack: ['Python', 'Claude API', 'STT/TTS', 'FastAPI'], desc: 'An intelligent assistant powered by Python and the Claude API — voice in, action out, with grounded reasoning.', Preview: PreviewVoice },
  { num: '/03', title: ['Auto Pilot ', 'Trader'], stack: ['Python', 'FastAPI', 'WebSockets', 'Automation'], desc: 'An algorithmic trading platform with strategy hooks, broker integration, and end-to-end automation pipelines.', Preview: PreviewTrader },
  { num: '/04', title: ['InvestHR ', 'Web Platform'], stack: ['React', 'Next.js', 'CMS', 'Freelance'], desc: 'A professional, freelance build for a specialized executive search firm — branded, accessible, and fast.', Preview: PreviewInvestHR },
]

function ProjectRow({ proj, delay }: { proj: typeof projects[0]; delay: number }) {
  const { num, title, stack, desc, Preview } = proj
  return (
    <motion.a
      href="#" data-h="" onClick={e => e.preventDefault()}
      variants={reveal} initial="hidden" whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={revealTransition(delay)}
      whileHover="rowHover"
      className="proj-row"
      style={{ display: 'grid', gridTemplateColumns: '56px 1.1fr 1.4fr 220px 220px 60px', alignItems: 'center', gap: 24, padding: '28px 0', borderBottom: '1px solid var(--line)', color: 'var(--ink)', textDecoration: 'none', cursor: 'none' }}
    >
      <div className="proj-num" style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-faint)', letterSpacing: '.04em', position: 'relative', zIndex: 1 }}>{num}</div>

      <motion.div
        className="proj-title"
        style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 'clamp(22px, 2.6vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.05, position: 'relative', zIndex: 1 }}
        variants={{ rowHover: { x: 8, color: '#ff9559', transition: { duration: 0.5, ease: EASE } } }}
      >
        {title[0]}<em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'inherit' }}>{title[1]}</em>
      </motion.div>

      <div className="proj-desc" style={{ color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.5, maxWidth: '46ch', position: 'relative', zIndex: 1 }}>{desc}</div>

      <div className="proj-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'flex-end', position: 'relative', zIndex: 1 }}>
        {stack.map(s => (
          <span key={s} style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--ink-faint)', padding: '4px 9px', borderRadius: 999, border: '1px solid var(--line)' }}>{s}</span>
        ))}
      </div>

      <div className="proj-preview" style={{ height: 124, position: 'relative', zIndex: 1 }}>
        <motion.div
          style={{ position: 'absolute', inset: 0, opacity: 0, x: 20, scale: 0.94, boxShadow: '0 18px 40px rgba(0,0,0,.4)' }}
          variants={{ rowHover: { opacity: 1, x: 0, scale: 1, transition: { opacity: { duration: 0.35, ease: EASE }, x: { duration: 0.45, ease: EASE }, scale: { duration: 0.45, ease: EASE } } } }}
        >
          <Preview />
        </motion.div>
      </div>

      <motion.div
        style={{ justifySelf: 'end', width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--line-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-dim)', position: 'relative', zIndex: 1 }}
        variants={{ rowHover: { backgroundColor: '#ff9559', borderColor: '#ff9559', color: '#1a0d04', rotate: -45, scale: 1.05, transition: { duration: 0.35, ease: EASE } } }}
      >
        ↗
      </motion.div>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="work" style={{ padding: '140px 0', position: 'relative', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={revealTransition()}
          style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-dim)', marginBottom: 56 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
          <span style={{ color: 'var(--ink-faint)' }}>[ 02 ]</span>
          <span>Selected Work</span>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 40 }}>
          <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={revealTransition()}
            style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 'clamp(36px, 4.4vw, 64px)', lineHeight: 1, letterSpacing: '-0.03em', margin: 0 }}>
            Projects, in <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--accent)' }}>practice</em>.
          </motion.h2>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={revealTransition(0.08)}
            style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-faint)' }}>
            04 / 04 — 2024–2026
          </motion.div>
        </div>

        <div style={{ borderTop: '1px solid var(--line-strong)' }}>
          {projects.map((p, i) => <ProjectRow key={p.num} proj={p} delay={i * 0.08} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .proj-row { grid-template-columns: 40px 1fr 60px !important; gap: 14px !important; padding: 22px 0 !important; } .proj-desc, .proj-stack, .proj-preview { display: none !important; } }
        @media (max-width: 720px) { #work { padding: 88px 0 !important; } #work > div { padding: 0 22px !important; } }
      `}</style>
    </section>
  )
}
