import { MARQUEE_ITEMS } from '../data/site';

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative border-y border-white/[0.06] bg-ink-900/50 py-5 overflow-hidden">
      <div className="mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {items.map((text, i) => (
            <span key={i} className="flex items-center gap-10" aria-hidden={i >= MARQUEE_ITEMS.length}>
              <span className="font-display text-sm font-semibold tracking-[0.28em] text-white/45">
                {text}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
