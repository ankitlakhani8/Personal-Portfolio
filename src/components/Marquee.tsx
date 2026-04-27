const phrases = [
  'Available for remote roles',
  'RAG & semantic search',
  'Full-stack engineering',
  'Workflow automation',
  'AI integration',
]

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...phrases, ...phrases]
  return (
    <div
      aria-hidden="true"
      style={{
        overflow: 'hidden', padding: '18px 0',
        borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
        background: 'rgba(0,0,0,.2)',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex', gap: 60, whiteSpace: 'nowrap',
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 'clamp(40px, 7vw, 96px)', lineHeight: 1,
          color: 'var(--ink)',
        }}
      >
        {items.map((phrase, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 60 }}>
            {phrase}
            <span style={{ fontFamily: 'var(--sans)', fontSize: '0.4em', color: 'var(--accent)' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
