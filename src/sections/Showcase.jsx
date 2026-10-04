import { motion, useReducedMotion } from 'framer-motion';
import { Zap, Smartphone, Layout, SearchCheck, MessageCircle, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const LABELS = [
  { icon: Smartphone, text: 'Responsive', pos: 'left-2 top-10', delay: 0 },
  { icon: Zap, text: 'Fast', pos: 'right-2 top-24', delay: 1.2 },
  { icon: Layout, text: 'Modern', pos: 'left-4 bottom-24', delay: 2.1 },
  { icon: SearchCheck, text: 'SEO ready', pos: 'left-1/2 -translate-x-1/2 -top-6', delay: 1.7 },
  { icon: MessageCircle, text: 'WhatsApp enabled', pos: 'right-4 bottom-10', delay: 0.6 },
];

function BrowserMockup() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 border-b border-white/[0.07] bg-ink-700/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 flex-1 rounded-md bg-white/[0.06] px-3 py-1 text-[10px] text-white/40">
            neetcreatives.com
          </span>
        </div>
        <div className="relative bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 p-6 sm:p-10">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-violet-600/25 blur-[80px]" />
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-[80px]" />
          <div className="relative grid items-center gap-8 sm:grid-cols-2">
            <div>
              <span className="rounded-full bg-violet-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300 ring-1 ring-violet-400/25">
                New Launch
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
                Your business, <span className="text-gradient">beautifully online.</span>
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-white/50 sm:text-sm">
                A premium website that works flawlessly on every device and turns visitors into
                customers.
              </p>
              <span className="btn-primary mt-5 !px-5 !py-2.5 text-xs">Get Started</span>
            </div>
            <div className="relative mx-auto w-full max-w-[220px]">
              <div className="rounded-xl border border-white/10 bg-ink-950/80 p-3 shadow-2xl">
                <div className="space-y-2" aria-hidden="true">
                  <div className="h-2 w-2/3 rounded-full bg-white/25" />
                  <div className="h-1.5 w-full rounded-full bg-white/10" />
                  <div className="h-1.5 w-5/6 rounded-full bg-white/10" />
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="h-8 rounded-lg bg-gradient-to-br from-violet-600/60 to-blue-600/60" />
                    <div className="h-8 rounded-lg bg-white/[0.07]" />
                  </div>
                  <div className="h-6 w-20 rounded-md bg-gradient-to-r from-violet-500 to-cyan-400" />
                </div>
              </div>
              <motion.div
                className="absolute -right-6 -top-6 w-24 rounded-xl border border-white/10 bg-ink-950/90 p-2.5 shadow-xl sm:-right-10"
                animate={reduce ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="h-1.5 w-3/4 rounded-full bg-white/25" />
                <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/10" />
                <div className="mt-2 h-4 w-12 rounded-md bg-emerald-400/70" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-8 right-6 w-32 rounded-2xl border border-white/10 bg-ink-800 p-2 shadow-2xl sm:-right-8 sm:w-40"
        animate={reduce ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <div className="rounded-xl bg-gradient-to-b from-ink-700 to-ink-900 p-3">
          <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-white/15" />
          <div className="space-y-1.5" aria-hidden="true">
            <div className="h-1.5 w-full rounded-full bg-white/20" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
            <div className="h-4 w-full rounded-md bg-gradient-to-r from-violet-500/70 to-cyan-400/70" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="noise relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[140px]" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="section-tag">Website Showcase</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              YOUR WEBSITE
              <span className="text-gradient block">IS YOUR DIGITAL SHOWROOM.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/55 sm:text-base">
            Make your first impression count with a modern website designed around your business.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {LABELS.map((label) => {
            const Icon = label.icon;
            return (
              <motion.span
                key={label.text}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + label.delay * 0.2, duration: 0.5 }}
                className={`glass absolute z-10 hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white/80 shadow-card md:flex ${label.pos}`}
              >
                <Icon size={13} className="text-cyan-300" />
                {label.text}
              </motion.span>
            );
          })}
          <BrowserMockup />
        </div>

        <Reveal delay={0.2} className="mt-16 text-center">
          <a
            href="#project-builder"
            className="btn-primary group"
          >
            Get Website Quote
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
