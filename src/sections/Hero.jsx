import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import HeroScene from '../components/HeroScene';
import { waLinkWithMessage } from '../data/site';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0]);

  return (
    <section id="home" ref={ref} className="noise relative overflow-hidden pt-[72px]">
      <motion.div style={{ y: bgY, opacity: fade }} className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000,transparent)]" />
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-violet-700/20 blur-[130px] animate-blob" />
        <div
          className="absolute -right-32 top-64 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px] animate-blob"
          style={{ animationDelay: '-6s' }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-blue-600/15 blur-[120px] animate-blob"
          style={{ animationDelay: '-12s' }}
        />
      </motion.div>

      <div className="container-x relative grid min-h-[calc(100vh-72px)] items-center gap-10 py-14 lg:grid-cols-2 lg:gap-6 lg:py-8">
        <div className="max-w-2xl">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="section-tag">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                Digital Creative Agency — Garhwa, Jharkhand
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 font-display text-[2.65rem] font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.35rem]"
            >
              WE MAKE BRANDS
              <span className="text-gradient animate-gradient-x block">
                IMPOSSIBLE TO IGNORE.
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-base font-medium text-white/70 sm:text-lg">
              Websites, social media, graphics &amp; Meta advertising that turn attention into
              growth.
            </motion.p>

            <motion.p variants={item} className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/50">
              Neet Creatives helps businesses build a powerful digital presence through creative
              design, social media marketing and performance-driven advertising.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={waLinkWithMessage("Hello Neet Creatives! I'd like to start a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Start Your Project
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-ghost group">
                Explore Services
                <Sparkles size={15} className="text-violet-300 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              {[
                { v: '50+', l: 'Projects' },
                { v: '25+', l: 'Businesses' },
                { v: '100%', l: 'Commitment' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-2xl font-bold text-white">{s.v}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <HeroScene />
      </div>
    </section>
  );
}
