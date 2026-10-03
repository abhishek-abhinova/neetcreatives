import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Monitor, Palette, Share2, Sparkles, Target } from 'lucide-react';
import { STATS, waLinkWithMessage } from '../data/site';

const floatingCards = [
  {
    Icon: Monitor,
    title: 'Website',
    subtitle: 'Modern & Responsive',
    tone: 'from-violet-500/20 to-cyan-400/20',
    iconClass: 'text-violet-400',
    wrapperClass: 'relative',
  },
  {
    Icon: Share2,
    title: 'Social Growth',
    subtitle: 'Audience Growth',
    tone: 'from-violet-500/20 to-blue-500/20',
    iconClass: 'text-violet-400',
    wrapperClass: 'absolute right-0 top-10',
  },
  {
    Icon: Target,
    title: 'Meta Ads',
    subtitle: 'Campaigns Live',
    tone: 'from-red-500/20 to-orange-500/20',
    iconClass: 'text-red-400',
    wrapperClass: 'absolute bottom-10 left-0',
  },
  {
    Icon: Palette,
    title: 'Creative Design',
    subtitle: 'Brand Visuals',
    tone: 'from-pink-500/20 to-purple-500/20',
    iconClass: 'text-pink-400',
    wrapperClass: 'absolute bottom-10 left-10',
  },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-ink-950"
      style={{
        backgroundImage: "url('/assets/homepage.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: reduce ? 1 : [0, 1, 1] }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-900/90 to-ink-950/95" />
      </motion.div>

      <div className="relative flex min-h-screen items-center justify-center px-6 pt-[72px] lg:px-10">
        <div className="container-x grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="lg:pt-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-gradient-to-br from-violet-500/30 to-cyan-400/30 px-4 py-2 text-[10px] font-medium uppercase tracking-wider text-violet-300">
                <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2L15.09 8.26L22 9.27L17 11L22 15.03L15.09 22L12 19.74L9 22L2.91 15.03L7 11L2 9.27L13.91 8.26L12 2Z" />
                </svg>
                DIGITAL CREATIVE AGENCY
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
              <h1 className="mb-5 font-display text-[2.8rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                WE MAKE
                <span className="relative mt-2 block text-violet-300">BRANDS</span>
                <span className="block">IMPOSSIBLE TO IGNORE.</span>
              </h1>

              <p className="mb-8 max-w-xl text-lg font-medium leading-relaxed text-white/60">
                We design websites, create scroll-stopping content and run targeted digital campaigns
                that help businesses build a stronger online presence.
              </p>

              <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href={waLinkWithMessage("Hello Neet Creatives! I'd like to start a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Start Your Project
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  href="#services"
                  className="btn-ghost group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  Explore Our Services
                  <Sparkles size={14} className="text-violet-300 transition-transform duration-300 group-hover:rotate-12" />
                </motion.a>
              </div>

              <p className="text-sm leading-relaxed text-white/50">Garhwa Town, Jharkhand</p>
            </motion.div>

            <p className="mt-8 text-sm leading-relaxed text-white/40">
              Web Design • Graphic Design • Social Media • Meta Ads
            </p>
          </div>

          <div className="relative lg:-mt-20">
            {floatingCards.map(({ Icon, title, subtitle, tone, iconClass, wrapperClass }, index) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`${wrapperClass} group`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              >
                <div className="glass rounded-2xl border border-white/10 p-5 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                  <div className={`mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${tone}`}>
                    <Icon className={iconClass} size={28} />
                  </div>
                  <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-white/90">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-ink-950/80 backdrop-blur-md">
        <div className="container-x grid grid-cols-2 gap-4 py-4 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold text-white">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}