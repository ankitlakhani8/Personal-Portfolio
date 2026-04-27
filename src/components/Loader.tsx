import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'var(--bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <span
            className="loader-spin"
            style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 64, color: 'var(--accent)' }}
          >
            A
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
