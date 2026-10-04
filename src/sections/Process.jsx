import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Target, PenTool, Rocket, TrendingUp } from 'lucide-react';
import Reveal from '../components/Reveal';
import { PROCESS_STEPS } from '../data/site';

const ICONS = [Compass, Target, PenTool, Rocket, TrendingUp];

export default function Process() {
  const reduce = useReducedMotion();
  return (
    <section id="process" className="noise relative overflow-hidden py-24 lg:py-32">
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="section-tag">Our Process</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              FROM IDEA <span className="text-gradient">TO GROWTH.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-violet-500/60 via-blue-500/40 to-cyan-400/50 lg:left-0 lg:top-[27px] lg:h-px lg:w-full lg:bg-gradient-to-r"
            aria-hidden="true"
          />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={step.index}
                  initial={reduce ? false : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-16 lg:pl-0 lg:pt-16"
                >
                  <motion.div
                    initial={reduce ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 260, damping: 16 }}
                    className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 shadow-glow lg:left-0"
                  >
                    <Icon size={22} className="text-white" />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-ink-950 font-display text-[10px] font-bold text-cyan-300 ring-1 ring-cyan-400/40">
                      {i + 1}
                    </span>
                  </motion.div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    <span className="mr-2 text-sm text-white/30">{step.index}</span>
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
