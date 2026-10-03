import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  y = 36,
  x = 0,
  scale = 1,
  once = true,
  className = '',
  duration = 0.8,
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y, x: reduce ? 0 : x, scale: reduce ? 1 : scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
