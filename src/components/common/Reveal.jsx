import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../motion/variants'

// Scroll-triggered reveal for section-level groups (not individual paragraphs).
export default function Reveal({ children, variants = fadeUp, stagger = false, ...props }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div {...props}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger ? staggerContainer() : variants}
      {...props}
    >
      {children}
    </motion.div>
  )
}
