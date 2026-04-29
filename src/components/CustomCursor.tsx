import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, motion } from 'framer-motion'

export default function CustomCursor() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const rx = useSpring(mx, { damping: 26, stiffness: 300, mass: 0.5 })
  const ry = useSpring(my, { damping: 26, stiffness: 300, mass: 0.5 })
  const hovering = useRef(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }
    const onEnter = () => {
      hovering.current = true
      dotRef.current?.classList.add('cursor-hover')
      ringRef.current?.classList.add('cursor-ring-hover')
    }
    const onLeave = () => {
      hovering.current = false
      dotRef.current?.classList.remove('cursor-hover')
      ringRef.current?.classList.remove('cursor-ring-hover')
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('[data-h]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.querySelectorAll('[data-h]').forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [mx, my])

  return (
    <>
      {/* dot — instant follow */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: 'fixed', left: 0, top: 0, zIndex: 9999,
          width: 10, height: 10, borderRadius: '50%',
          background: 'var(--accent)',
          pointerEvents: 'none',
          transform: 'translate(-100px,-100px) translate(-50%,-50%)',
          mixBlendMode: 'difference',
          transition: 'width 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), height 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
      />
      {/* ring — spring follow */}
      <motion.div
        ref={ringRef}
        style={{
          position: 'fixed', left: 0, top: 0, zIndex: 9998,
          width: 36, height: 36, borderRadius: '50%',
          border: '1px solid var(--accent)',
          pointerEvents: 'none',
          x: rx, y: ry,
          translateX: '-50%', translateY: '-50%',
          opacity: 0.4,
        }}
      />
      <style>{`
        @media (max-width: 720px) { .cursor-dot, .framer-cursor-ring { display: none; } }
        .cursor-dot.cursor-hover { width: 54px !important; height: 54px !important; background: var(--ink) !important; }
      `}</style>
    </>
  )
}
