import { motion, useReducedMotion } from 'framer-motion';
import { Laptop, Smartphone, Monitor, TrendingUp, Palette, Target } from 'lucide-react';
import { STATS } from '../data/site';

export default function AboutViz() {
  const reduce = useReducedMotion();

  const items = [
    { icon: Laptop, title: 'Laptop', color: 'violet' },
    { icon: Smartphone, title: 'Smartphone', color: 'cyan' },
    { icon: Monitor, title: 'Website UI', color: 'blue' },
    { icon: Palette, title: 'Design', color: 'pink' },
    { icon: Target, title: 'Ads', color: 'red' },
    { icon: TrendingUp, title: 'Growth', color: 'green' },
  ];

  return (
    <section className="noise relative py-24 lg:py-32" aria-label="About Neet Creatives">
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-violet-700/12 blur-[130px]" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl md:max-w-3xl text-center">
          <span className="section-tag mb-4">We're Not Just An Agency.</span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-[1.2] tracking-tight sm:text-3xl">
            WE TURN IDEAS INTO
            <span className="text-gradient">DIGITAL EXPERIENCES.</span>
          </h2>
          <p className="mt-3 text-white/60 text-sm leading-relaxed">
            Neet Creatives is a digital creative and marketing agency based in Garhwa Town,
            Jharkhand. We help businesses, entrepreneurs, startups and local brands build a
            stronger presence online through modern websites, creative design, social media
            management and Meta advertising.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl bg-ink-800/60 p-5 shadow-card backdrop-blur-sm"
            >
              <motion.span
                animate={reduce ? {} : { rotate: [0, -8, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
                className="mb-3 inline-flex text-violet-400"
              >
                <item.icon size={28} />
              </motion.span>
              <h3 className="font-display text-xl font-bold tracking-tight">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-2xl bg-ink-800/60 p-4 text-center backdrop-blur-sm">
              <p className="font-display text-2xl font-bold text-gradient">{s.value}{s.suffix}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/45">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}