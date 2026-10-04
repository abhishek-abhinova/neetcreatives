import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import HeroScene from '../components/HeroScene';
import homeBackground from '../assets/homepage.png';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink-950"
      style={{
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[linear-gradient(90deg,rgba(7,8,18,0.54)_0%,rgba(7,8,18,0.2)_56%,transparent_100%),linear-gradient(0deg,rgba(7,8,18,0.64)_0%,transparent_32%)]" />

      <div className="container-x relative z-10 flex min-h-[100svh] items-center pt-28 pb-16 lg:pt-24 lg:pb-20">
        <div className="grid w-full items-center gap-4 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-tag border-cyan-300/20 bg-ink-950/40 text-cyan-100/90"
            >
              <Sparkles size={13} className="text-cyan-300" />
              Digital creative agency
            </motion.span>

            <motion.h1
              id="hero-title"
              initial="hidden"
              animate="visible"
              className="mt-7 font-display text-[clamp(3.35rem,8vw,6.6rem)] font-bold leading-[0.92] tracking-[-0.065em] text-white"
            >
              {['WE MAKE', 'BRANDS', 'IMPOSSIBLE', 'TO IGNORE.'].map((line, index) => (
                <motion.span
                  key={line}
                  variants={{
                    hidden: { opacity: 0, y: reduce ? 0 : 28 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.65, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className={`block ${line === 'BRANDS' ? 'text-gradient animate-gradient-x' : ''}`}
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              We build powerful digital experiences through websites, creative design, social media
              and targeted advertising — helping businesses stand out and grow online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#project-builder" className="btn-primary group min-h-12 !px-6">
                Start Your Project
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#work" className="btn-ghost group min-h-12 !px-6">
                Explore Our Work
                <ArrowDown size={15} className="text-cyan-200 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium text-white/65 sm:text-sm">
              <span>Websites</span><span className="text-cyan-300">•</span>
              <span>Design</span><span className="text-cyan-300">•</span>
              <span>Social Media</span><span className="text-cyan-300">•</span>
              <span>Meta Ads</span>
            </div>
            <p className="mt-3 text-xs text-white/50 sm:text-sm">
              Garhwa, Jharkhand <span className="px-1.5 text-white/30">•</span> Serving businesses online
            </p>
          </div>

          <div className="hidden lg:block">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}