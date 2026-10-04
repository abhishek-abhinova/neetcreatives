import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '../components/Reveal';

const JOURNEY = ['IDEA', 'DESIGN', 'DIGITAL PRESENCE', 'GROWTH'];

export default function HeroPost() {
  const reduce = useReducedMotion();

  return (
    <section className="noise relative overflow-hidden py-24 lg:py-32" aria-labelledby="statement-title">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="container-x">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="section-tag">We don't just make things look good.</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="statement-title"
              className="mt-7 font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
            >
              WE MAKE DIGITAL
              <span className="block">EXPERIENCES THAT</span>
              <span className="text-gradient">MOVE BUSINESSES.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              One connected journey from the first idea to a stronger digital presence.
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          <div
            className="absolute left-[12%] right-[12%] top-1/2 hidden h-px bg-gradient-to-r from-violet-500/0 via-cyan-300/50 to-violet-500/0 sm:block"
            aria-hidden="true"
          />
          {JOURNEY.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="glass relative rounded-2xl px-4 py-5 text-center shadow-card"
            >
              <span className="font-display text-[10px] font-semibold tracking-[0.22em] text-cyan-200/60">
                0{index + 1}
              </span>
              <p className="mt-2 font-display text-xs font-bold tracking-[0.12em] text-white sm:text-sm">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}