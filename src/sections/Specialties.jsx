import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Globe2, MessageCircle, Palette, Share2, Target, TrendingUp } from 'lucide-react';
import Reveal from '../components/Reveal';
import { SPECIALTIES } from '../data/site';

const ICONS = [Globe2, Share2, Palette, Target, MessageCircle, TrendingUp];
const POSITIONS = [
  'left-1/2 top-0 -translate-x-1/2',
  'right-0 top-[22%]',
  'right-0 bottom-[22%]',
  'bottom-0 left-1/2 -translate-x-1/2',
  'left-0 bottom-[22%]',
  'left-0 top-[22%]',
];

export default function Specialties() {
  const reduce = useReducedMotion();

  return (
    <section className="noise relative overflow-hidden py-24 lg:py-32" aria-labelledby="ecosystem-title">
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-[130px]" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="max-w-xl">
          <Reveal>
            <span className="section-tag">One connected ecosystem</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="ecosystem-title" className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-6xl">
              YOUR BUSINESS.
              <span className="text-gradient block">CONNECTED.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-[15px] leading-relaxed text-white/55">
              From your first impression to the next customer conversation, every touchpoint can
              work together as one digital experience.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a href="#services" className="btn-ghost group mt-8">
              Explore our services
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[540px]" aria-label="Digital ecosystem: website, social media, content, advertising, customers and growth">
          <div className="absolute inset-[13%] rounded-full border border-dashed border-violet-300/20" />
          <div className="absolute inset-[23%] rounded-full border border-cyan-300/15" />
          <motion.div
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-500/35 via-blue-500/30 to-cyan-400/35 blur-2xl sm:h-48 sm:w-48"
            animate={reduce ? {} : { scale: [0.94, 1.06, 0.94], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <div className="absolute left-1/2 top-1/2 z-10 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-900/85 text-center shadow-[0_0_55px_rgba(124,92,255,0.25)] backdrop-blur-xl sm:h-32 sm:w-32">
            <span>
              <span className="block font-display text-lg font-bold tracking-tight text-white sm:text-2xl">NC</span>
              <span className="mt-1 block text-[8px] uppercase tracking-[0.16em] text-cyan-100/60 sm:text-[9px]">Digital growth</span>
            </span>
          </div>
          {SPECIALTIES.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={item.index}
                initial={reduce ? false : { opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                animate={reduce ? {} : { y: [0, -4, 0] }}
                className={`absolute z-20 ${POSITIONS[index]} glass flex min-w-[112px] items-center gap-2 rounded-xl px-3 py-2.5 shadow-card sm:min-w-[150px] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3`}
                style={{ animationDelay: `${index * 180}ms` }}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-500/25 to-cyan-400/20 text-cyan-100 sm:h-9 sm:w-9">
                  <Icon size={17} />
                </span>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.08em] text-white sm:text-xs">
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
