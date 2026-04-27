import { motion } from 'framer-motion'
import { reveal, revealTransition } from '../variants'

const pills = ['React', 'TypeScript', 'Python', 'FastAPI', 'Pinecone', 'RAG / Semantic Search', 'Claude API', 'Tailwind']

export default function About() {
  return (
    <section id="about" style={{ padding: '140px 0', position: 'relative', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 56px' }}>
        <motion.div
          variants={reveal} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={revealTransition()}
          style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-dim)', marginBottom: 56 }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
          <span style={{ color: 'var(--ink-faint)' }}>[ 01 ]</span>
          <span>About</span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }} className="about-grid">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={revealTransition(0.08)}>
            <h2 style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 'clamp(36px, 4.4vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: '0 0 24px', maxWidth: '18ch' }}>
              Engineer with an{' '}
              <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>obsession</em>
              {' '}for products that quietly do a lot.
            </h2>
          </motion.div>

          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={revealTransition(0.16)}>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-dim)', maxWidth: '58ch', margin: '0 0 22px' }}>
              I'm a final-year <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>B.Tech CSE</strong> student at{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>MIT-WPU</strong>, focused on building products with
              HTML, CSS, JavaScript, React, Python and FastAPI. My specialty is{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>AI integration</strong> — RAG systems, semantic search,
              and vector databases like Pinecone.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-dim)', maxWidth: '58ch', margin: 0 }}>
              I'm targeting <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>global, remote software roles at product-focused companies</strong>{' '}
              where engineering and design share a workbench.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
              {pills.map(p => (
                <span key={p} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 999, border: '1px solid var(--line-strong)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.04em', color: 'var(--ink-dim)', transition: 'color .2s, border-color .2s, background .2s', cursor: 'default' }}
                  onMouseEnter={e => { (e.currentTarget.style.color = 'var(--ink)'); (e.currentTarget.style.borderColor = 'var(--accent)'); (e.currentTarget.style.background = 'rgba(255,149,89,.06)') }}
                  onMouseLeave={e => { (e.currentTarget.style.color = 'var(--ink-dim)'); (e.currentTarget.style.borderColor = 'var(--line-strong)'); (e.currentTarget.style.background = 'transparent') }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', opacity: 0.7 }} />{p}
                </span>
              ))}
            </div>

            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={revealTransition(0.24)}
              style={{ marginTop: 36, border: '1px solid var(--line)', borderRadius: 14, padding: 28, background: 'linear-gradient(180deg, rgba(255,255,255,.015), rgba(255,255,255,0))' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22, fontSize: 13 }}>
                <span className="live-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#6ee787', display: 'inline-block' }} />
                <span style={{ color: 'var(--ink)' }}>Open for offers — </span>
                <span style={{ color: 'var(--ink-dim)' }}>Q3 2026 onward</span>
              </div>
              <h4 style={{ fontFamily: 'var(--mono)', fontWeight: 500, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-faint)', margin: '0 0 12px' }}>At a glance</h4>
              {[
                { k: 'Studying', v: 'B.Tech CSE · MIT-WPU', amber: false },
                { k: 'Based', v: 'Pune, India', amber: false },
                { k: 'Looking for', v: 'Remote, product roles', amber: true },
                { k: 'Stack', v: 'Python · React · FastAPI', amber: false },
                { k: 'Working on', v: 'Poetic Camera v2', amber: false },
              ].map(({ k, v, amber }, i, arr) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: i < arr.length - 1 ? '1px dashed var(--line)' : 'none', fontFamily: 'var(--mono)', fontSize: 12 }}>
                  <span style={{ color: 'var(--ink-faint)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: 10 }}>{k}</span>
                  <span style={{ color: amber ? 'var(--accent)' : 'var(--ink)', textAlign: 'right', maxWidth: '60%' }}>{v}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 720px) { #about { padding: 88px 0 !important; } #about > div { padding: 0 22px !important; } }
      `}</style>
    </section>
  )
}
