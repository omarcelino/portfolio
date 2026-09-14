import { motion } from 'framer-motion'
import { fadeUp } from '../../motion/variants'

// Child of a staggered <Reveal stagger>; inherits show/hidden state from the parent.
export default function RevealItem({ children, variants = fadeUp, ...props }) {
  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  )
}
