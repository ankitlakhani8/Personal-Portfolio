import type { Variants } from 'framer-motion'

export const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
export const EASE_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1]

export const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export const revealTransition = (delay = 0) => ({
  duration: 0.7,
  ease: EASE_OUT,
  delay,
})
