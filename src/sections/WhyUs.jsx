import { motion, useReducedMotion } from 'framer-motion';
import {
  Sparkles,
  Briefcase,
  Smartphone,
  Wallet,
  Zap,
  MapPin,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { WHY_US } from '../data/site';

const ICONS = {
  sparkles: Sparkles,
  briefcase: Briefcase,
  smartphone: Smartphone,
  wallet: Wallet,
  zap: Zap,
  'map-pin': MapPin,
};

export default function WhyUs() {
  const reduce = useReducedMotion();
  return (
    <section className="noise relative py-24 lg:py-32" aria-label="Why choose Neet Creatives">
      <div className="absolute left-0 top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="section-tag">Why Us</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              WHY BRANDS CHOOSE <span className="text-gradient">NEET CREATIVES</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduce ? {} : { y: -8, rotateX: 3, rotateY: -3 }}
                className="card-border-glow group relative overflow-hidden rounded-3xl bg-ink-800/60 p-7 shadow-card backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    animate={reduce ? {} : { rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-600/25 to-cyan-500/20 text-violet-300 ring-1 ring-white/10 transition-all duration-500 group-hover:from-violet-600 group-hover:to-cyan-500 group-hover:text-white"
                  >
                    <Icon size={21} />
                  </motion.span>
                  <span className="font-display text-sm font-bold text-white/25">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
