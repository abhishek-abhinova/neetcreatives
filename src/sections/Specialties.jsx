import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { SPECIALTIES, waLinkWithMessage } from '../data/site';

export default function Specialties() {
  const reduce = useReducedMotion();
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['4%', reduce ? '0%' : '-38%']);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" aria-label="Specializations">
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-[130px]" />
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="section-tag">Specializations</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                FROM IDEA TO <span className="text-gradient">DIGITAL PRESENCE.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href={waLinkWithMessage("Hello Neet Creatives! I'd like to know more about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-5 !py-2.5 text-xs"
            >
              Discuss Your Project
              <ArrowRight size={14} />
            </a>
          </Reveal>
        </div>
      </div>

      <div ref={trackRef} className="mt-14">
        <motion.div style={{ x }} className="flex w-max gap-6 pl-5 pr-5 sm:pl-8 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
          {SPECIALTIES.map((s, i) => (
            <motion.div
              key={s.index}
              initial={{ opacity: 0, y: 40, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? {} : { y: -12, rotateY: -6, scale: 1.02 }}
              className="card-border-glow group relative w-[280px] shrink-0 overflow-hidden rounded-3xl bg-ink-800/70 p-7 shadow-card backdrop-blur-sm sm:w-[320px]"
            >
              <span className="pointer-events-none absolute -right-10 -top-14 font-display text-[7rem] font-bold leading-none text-white/[0.05] transition-colors duration-500 group-hover:text-violet-500/15">
                {s.index}
              </span>
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-600/25 to-cyan-500/20 ring-1 ring-white/10 transition-all duration-500 group-hover:from-violet-600 group-hover:to-cyan-500 group-hover:shadow-glow">
                <span className="font-display text-sm font-bold text-violet-300 group-hover:text-white">
                  {s.index}
                </span>
              </span>
              <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight">
                {s.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-white/55">{s.desc}</p>
              <span className="relative mt-6 block h-px w-full bg-gradient-to-r from-violet-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
