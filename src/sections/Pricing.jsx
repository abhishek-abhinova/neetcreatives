import { motion, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight, Info } from 'lucide-react';
import Reveal from '../components/Reveal';
import { PRICING, waLinkWithMessage } from '../data/site';

export default function Pricing() {
  const reduce = useReducedMotion();
  return (
    <section id="pricing" className="noise relative py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-violet-700/10 blur-[120px]" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="section-tag">Pricing</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              SIMPLE PRICING.
              <span className="text-gradient block">POWERFUL DIGITAL SERVICES.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRICING.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? {} : { y: -10 }}
              className={`card-border-glow relative flex flex-col rounded-3xl p-7 backdrop-blur-sm ${
                plan.featured
                  ? 'bg-gradient-to-b from-violet-600/20 to-ink-800/80 shadow-glow ring-1 ring-violet-500/40'
                  : 'bg-ink-800/60 shadow-card'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-lg font-bold tracking-tight">{plan.name}</h3>
              <p className="mt-1.5 min-h-[2rem] text-xs leading-relaxed text-white/45">
                {plan.tagline}
              </p>
              <p className="mt-4 font-display text-[1.7rem] font-bold leading-none text-gradient">
                {plan.price}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-white/65">
                    <span
                      className={`mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${
                        plan.featured ? 'bg-violet-500/25 text-violet-200' : 'bg-cyan-400/10 text-cyan-300'
                      }`}
                    >
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-amber-300/90">
                  <Info size={12} /> {plan.note}
                </p>
              )}

              <a
                href={waLinkWithMessage(`Hello Neet Creatives! I'm interested in the ${plan.name} plan.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'btn-primary'
                    : 'glass text-white/85 hover:-translate-y-0.5 hover:text-white hover:border-violet-500/50'
                }`}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-white/40">
            Starting prices are indicative and may vary depending on project scope, number of
            pages, features, content requirements and advertising budget.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
