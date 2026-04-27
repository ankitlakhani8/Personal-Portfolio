import type { Variants } from 'framer-motion'

export const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1]

export const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const revealTransition = (delay = 0) => ({
  duration: 0.9,
  ease: EASE,
  delay,
})
