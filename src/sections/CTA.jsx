import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';
import { WHATSAPP_LINK, PHONE_LINK, WHATSAPP_NUMBER_DISPLAY } from '../data/site';

export default function CTA() {
  const reduce = useReducedMotion();
  return (
    <section id="final-cta" className="relative overflow-hidden py-24 lg:py-36" aria-label="Call to action">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          className="h-[420px] w-[720px] rounded-full bg-violet-700/25 blur-[130px]"
          animate={reduce ? {} : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute h-[280px] w-[480px] translate-x-40 translate-y-16 rounded-full bg-cyan-500/15 blur-[110px]" />
        <motion.div
          className="absolute h-56 w-56 rounded-full border border-cyan-200/20 bg-[radial-gradient(circle_at_32%_28%,rgba(34,211,238,0.28),rgba(124,92,255,0.18)_40%,rgba(10,12,28,0.08)_72%)] shadow-[0_0_90px_rgba(124,92,255,0.16)] sm:h-72 sm:w-72"
          animate={reduce ? {} : { scale: [0.96, 1.04, 0.96], rotate: [0, 4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000,transparent)]" />

      <div className="container-x relative text-center">
        <Reveal>
          <span className="section-tag">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Let's Build Together
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
            READY TO
            <span className="text-gradient animate-gradient-x block">GROW ONLINE?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Let's turn your business idea into a digital experience people remember.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="btn-primary group !px-9 !py-4 !text-base"
            >
              Start Your Project
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-9 !py-4 !text-base"
            >
              <MessageCircle size={17} className="text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-white/50 sm:flex-row sm:gap-8">
            <a
              href={PHONE_LINK}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone size={14} className="text-violet-300" />
              {WHATSAPP_NUMBER_DISPLAY}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-violet-300" />
              Garhwa Town, Jharkhand
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
