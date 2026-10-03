import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Monitor,
  Palette,
  Share2,
  Target,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { waLinkWithMessage } from '../data/site';

const ICONS = {
  monitor: Monitor,
  palette: Palette,
  share: Share2,
  target: Target,
};

export default function ServiceCard({ service, index }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const Icon = ICONS[service.icon] || Monitor;

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -7, y: px * 9 });
  };

  const message = `Hello Neet Creatives! I'm interested in ${service.title}.`;

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setTilt({ x: 0, y: 0 });
      }}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.18s ease-out',
      }}
      className="card-border-glow group relative flex flex-col overflow-hidden rounded-3xl bg-ink-800/70 p-7 shadow-card backdrop-blur-sm sm:p-8"
      aria-label={service.title}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ opacity: hover ? 1 : 0.4 }}
      />

      <div className="flex items-start justify-between">
        <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-600/25 to-cyan-500/20 text-violet-300 ring-1 ring-white/10 transition-all duration-500 group-hover:from-violet-600 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-glow">
          <Icon size={24} />
        </span>
        {service.badge && (
          <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-400/25">
            {service.badge}
          </span>
        )}
      </div>

      <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/55">{service.description}</p>

      <p className="mt-5 font-display text-lg font-bold text-gradient">{service.price}</p>
      {service.note && <p className="mt-1 text-xs font-medium text-amber-300/90">{service.note}</p>}

      <ul className="mt-6 grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-[13px] text-white/65">
            <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-violet-500/15 text-violet-300">
              <Check size={11} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href={waLinkWithMessage(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors duration-300 hover:text-white"
      >
        <span className="relative">
          {service.cta}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
        </span>
        <ArrowUpRight
          size={16}
          className="text-violet-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </motion.article>
  );
}
