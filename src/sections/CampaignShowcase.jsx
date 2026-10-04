import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BarChart3, Heart, MessageCircle, Megaphone, Share2 } from 'lucide-react';
import Reveal from '../components/Reveal';

const feedCards = [
  { label: 'Brand story', tone: 'from-violet-500/80 via-fuchsia-500/70 to-pink-400/70' },
  { label: 'Product feature', tone: 'from-cyan-500/80 via-blue-500/70 to-violet-500/70' },
  { label: 'Campaign creative', tone: 'from-amber-400/80 via-rose-500/70 to-fuchsia-500/70' },
];

const demoMetrics = [
  { label: 'Reach', value: '28.4K' },
  { label: 'Clicks', value: '2.8K' },
  { label: 'Leads', value: '186' },
];

export default function CampaignShowcase() {
  const reduce = useReducedMotion();

  return (
    <section className="noise relative overflow-hidden py-24 lg:py-32" aria-label="Social media and advertising showcase">
      <div className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="section-tag">Attention, built with intention</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              MAKE EVERY <span className="text-gradient">SCROLL COUNT.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Bring thoughtful creative and targeted campaigns together to help your business show up online.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card-border-glow relative h-full overflow-hidden rounded-3xl bg-ink-800/60 p-6 shadow-card backdrop-blur-sm sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/70">Social media</p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    STOP SCROLLING.<br /><span className="text-gradient">START STANDING OUT.</span>
                  </h3>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-violet-200">
                  <Share2 size={22} />
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
                Distinctive social content for your brand, product launches and campaigns.
              </p>

              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-7 grid grid-cols-3 gap-3"
              >
                {feedCards.map((card) => (
                  <div key={card.label} className="rounded-2xl border border-white/10 bg-ink-950/70 p-2.5">
                    <div className={`relative grid aspect-[0.78] place-items-center overflow-hidden rounded-xl bg-gradient-to-br ${card.tone} p-2 text-center`}>
                      <span className="absolute -right-5 -top-5 h-16 w-16 rounded-full border border-white/30" />
                      <span className="font-display text-[10px] font-bold uppercase leading-tight tracking-wider text-white sm:text-xs">
                        {card.label}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between px-1 text-white/65">
                      <span className="flex items-center gap-1"><Heart size={12} /> <MessageCircle size={12} /></span>
                      <span className="text-[9px]">Post concept</span>
                    </div>
                  </div>
                ))}
              </motion.div>

              <a href="#project-builder" className="btn-ghost group mt-7 min-h-11 !px-5">
                Grow My Social Media
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="card-border-glow relative h-full overflow-hidden rounded-3xl bg-ink-800/60 p-6 shadow-card backdrop-blur-sm sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/15 blur-3xl" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200/70">Meta Ads</p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    PUT YOUR BRAND<br />IN FRONT OF THE<br /><span className="text-gradient">RIGHT AUDIENCE.</span>
                  </h3>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-400/20 text-violet-200">
                  <Megaphone size={22} />
                </span>
              </div>
              <div className="relative mt-7 rounded-2xl border border-white/10 bg-ink-950/75 p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
                    <BarChart3 size={16} className="text-cyan-300" />
                    Campaign dashboard
                  </div>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-cyan-100/70">
                    Sample
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {demoMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3"
                    >
                      <p className="text-[9px] uppercase tracking-[0.12em] text-white/40">{metric.label}</p>
                      <p className="mt-1.5 font-display text-lg font-bold text-white sm:text-xl">{metric.value}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-3 text-[10px] leading-relaxed text-white/40">
                  Illustrative campaign interface — not a client result.
                </p>
              </div>
              <a href="#project-builder" className="btn-primary group relative mt-7 min-h-11 !px-5">
                Start Meta Ads
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
