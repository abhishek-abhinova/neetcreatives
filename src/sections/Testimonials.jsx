import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Reveal from '../components/Reveal';
import { TESTIMONIALS } from '../data/site';

function Stars({ rating }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-amber-400' : 'text-white/15'}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 4200);
    return () => clearInterval(t);
  }, [paused, maxIndex, reduce]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section className="noise relative py-24 lg:py-32" aria-label="Client testimonials">
      <div className="absolute -right-32 top-1/4 h-[380px] w-[380px] rounded-full bg-violet-700/10 blur-[120px]" />
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="section-tag">Testimonials</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                WHAT CLIENTS <span className="text-gradient">SAY</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonials"
                className="grid h-11 w-11 place-items-center rounded-full glass text-white/70 transition-all duration-300 hover:border-violet-500/50 hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonials"
                className="grid h-11 w-11 place-items-center rounded-full glass text-white/70 transition-all duration-300 hover:border-violet-500/50 hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${index * (100 / perView)}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <div className="card-border-glow group relative h-full rounded-3xl bg-ink-800/60 p-7 shadow-card backdrop-blur-sm">
                  <Quote
                    size={36}
                    className="absolute right-6 top-6 text-white/[0.06] transition-colors duration-500 group-hover:text-violet-500/20"
                    fill="currentColor"
                  />
                  <Stars rating={t.rating} />
                  <p className="mt-5 min-h-[7.5rem] text-sm leading-relaxed text-white/70">
                    "{t.text}"
                  </p>
                  <div className="mt-6 flex items-center gap-3.5 border-t border-white/[0.07] pt-5">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 font-display text-sm font-bold">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-white/45">{t.business}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonial pages">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to testimonial page ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-gradient-to-r from-violet-500 to-cyan-400' : 'w-1.5 bg-white/15 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
