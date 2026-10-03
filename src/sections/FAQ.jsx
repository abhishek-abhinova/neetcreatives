import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal from '../components/Reveal';
import { FAQS } from '../data/site';

function FAQItem({ faq, index, open, onToggle }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`card-border-glow overflow-hidden rounded-2xl backdrop-blur-sm transition-colors duration-300 ${
        open ? 'bg-ink-800/80' : 'bg-ink-800/50'
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-[15px] font-semibold tracking-tight sm:text-base">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
            open ? 'bg-gradient-to-br from-violet-600 to-blue-600 text-white' : 'bg-white/[0.06] text-white/60'
          }`}
        >
          <Plus size={15} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/60">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="noise relative py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="section-tag">FAQ</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-[2.6rem]">
              QUESTIONS? <span className="text-gradient">ANSWERED.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
              Everything you need to know before starting your project. Still have questions? Chat
              with us on WhatsApp — we reply fast.
            </p>
          </Reveal>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
