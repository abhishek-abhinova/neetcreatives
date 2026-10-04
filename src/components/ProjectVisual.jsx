import { motion } from 'framer-motion';
import { Monitor, Palette, Share2, Target, ArrowUpRight } from 'lucide-react';

const CATEGORY_ICON = {
  web: Monitor,
  graphic: Palette,
  social: Share2,
  ads: Target,
};

export default function ProjectVisual({ project, large = false }) {
  const Icon = CATEGORY_ICON[project.categoryKey] || Monitor;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} ${
        large ? 'aspect-[4/3]' : 'aspect-[16/10]'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.22),transparent_55%)]" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10" aria-hidden="true" />
      <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-black/15" aria-hidden="true" />

      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          whileHover={{ scale: 1.06, rotateY: 6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="preserve-3d relative w-[62%] rounded-xl bg-ink-950/85 p-3 shadow-2xl ring-1 ring-white/20 backdrop-blur"
        >
          <div className="flex items-center gap-1.5 px-1 pb-2" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="space-y-1.5" aria-hidden="true">
            <div className="h-2 w-3/4 rounded-full bg-white/25" />
            <div className="h-1.5 w-full rounded-full bg-white/10" />
            <div className="h-1.5 w-5/6 rounded-full bg-white/10" />
            <div className="mt-2.5 flex gap-1.5">
              <div className="h-4 w-14 rounded-md bg-white/30" />
              <div className="h-4 w-14 rounded-md bg-white/10" />
            </div>
          </div>
          <span className="absolute -right-3 -top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-ink-900 shadow-lg">
            <Icon size={15} />
          </span>
        </motion.div>
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur">
        {project.category}
      </span>
    </div>
  );
}

export function ProjectOverlay({ project }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950/95 via-ink-950/40 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {project.category}
        </p>
        <h3 className="mt-1 font-display text-lg font-bold">{project.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/60">
          {project.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white">
          Discuss Concept
          <ArrowUpRight size={13} className="text-violet-300" />
        </span>
      </div>
    </div>
  );
}
