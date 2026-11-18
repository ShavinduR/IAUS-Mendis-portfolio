import { m } from 'framer-motion'

/** Fades and lifts its children into view once, when scrolled into the viewport. */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Component = m[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
