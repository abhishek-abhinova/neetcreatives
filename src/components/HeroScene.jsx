import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import {
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Bell,
  Play,
  Image,
  BarChart3,
  MousePointerClick,
} from 'lucide-react';

const floatTransition = (duration, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
});

function PhoneMockup() {
  return (
    <div className="relative h-[420px] w-[210px] rounded-[2.4rem] border border-white/15 bg-ink-800 p-2.5 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.85)] sm:h-[480px] sm:w-[240px]">
      <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-950" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.9rem] bg-gradient-to-b from-ink-700 to-ink-900">
        <div className="flex items-center justify-between px-5 pt-10">
          <div>
            <p className="text-[10px] text-white/40">Illustrative interface</p>
            <p className="text-sm font-semibold">Growth Dashboard</p>
          </div>
          <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-[10px] font-bold">
            N
          </div>
        </div>

        <div className="mx-4 mt-4 rounded-2xl bg-gradient-to-br from-violet-600/80 to-blue-600/80 p-3.5">
          <p className="text-[10px] text-white/70">Sample reach</p>
          <p className="mt-0.5 font-display text-xl font-bold">4.8K</p>
          <div className="mt-2 flex items-end gap-1" aria-hidden="true">
            {[35, 55, 40, 70, 52, 85, 64, 95].map((h, i) => (
              <div
                key={i}
                className="w-full rounded-sm bg-white/30"
                style={{ height: `${h * 0.32}px`, opacity: 0.4 + i * 0.08 }}
              />
            ))}
          </div>
        </div>

        <div className="mx-4 mt-3 flex gap-2.5">
          {[
          { icon: Heart, label: '8.2%', color: 'text-rose-400' },
          { icon: MessageCircle, label: '126', color: 'text-cyan-400' },
          { icon: Share2, label: '+12%', color: 'text-violet-400' },
          ].map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex flex-1 flex-col items-center gap-1 rounded-xl bg-white/[0.05] py-2.5"
            >
              <Icon size={14} className={color} />
              <span className="text-[10px] font-semibold text-white/80">{label}</span>
            </div>
          ))}
        </div>

        <div className="mx-4 mt-3 space-y-2">
          {['Engagement overview', 'Content preview', 'Enquiry pathway'].map((t, i) => (
            <div key={t} className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] px-3 py-2.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  i === 0 ? 'bg-emerald-400' : i === 1 ? 'bg-violet-400' : 'bg-cyan-400'
                }`}
              />
              <span className="text-[10px] text-white/60">{t}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-around border-t border-white/[0.06] py-3.5">
          {['Home', 'Shop', 'Stats', 'Chat'].map((t, i) => (
            <span
              key={t}
              className={`text-[9px] ${i === 0 ? 'font-semibold text-violet-400' : 'text-white/35'}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard() {
  return (
    <div className="glass w-44 rounded-2xl p-4 shadow-card sm:w-52">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-400/15 text-cyan-300">
            <BarChart3 size={15} />
          </span>
          <div>
            <p className="text-[10px] text-white/40">Illustrative</p>
            <p className="text-xs font-semibold">Analytics UI</p>
          </div>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
          <TrendingUp size={11} /> Demo
        </span>
      </div>
      <div className="mt-3 flex h-16 items-end gap-1.5" aria-hidden="true">
        {[30, 45, 38, 60, 52, 78, 66, 92, 84, 100].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-violet-500/60 to-cyan-400/80"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 0.8 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
    </div>
  );
}

function AdCard() {
  return (
    <div className="glass w-48 rounded-2xl p-4 shadow-card sm:w-56">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-500/15 text-blue-300">
          <MousePointerClick size={15} />
        </span>
        <div>
          <p className="text-[10px] text-white/40">Meta Ads</p>
          <p className="text-xs font-semibold">Campaign preview</p>
        </div>
        <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
      </div>
      <div className="mt-3 space-y-2">
        {[
          { label: 'Sample reach', value: '28.4K' },
          { label: 'Sample leads', value: '186' },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2">
            <span className="text-[10px] text-white/45">{row.label}</span>
            <span className="text-xs font-bold text-white">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DesignCard() {
  return (
    <div className="glass w-40 rounded-2xl p-3.5 shadow-card sm:w-44">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-600/70 via-violet-600/70 to-blue-600/70 p-3">
        <Image size={14} className="text-white/70" />
        <p className="mt-6 text-[10px] font-semibold">Brand Post</p>
        <p className="text-[9px] text-white/50">Festival Collection</p>
        <div className="absolute -right-4 -top-4 h-14 w-14 rounded-full bg-white/15" aria-hidden="true" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex -space-x-1.5">
          {['bg-rose-400', 'bg-cyan-400', 'bg-violet-400'].map((c) => (
            <span key={c} className={`h-5 w-5 rounded-full ${c} ring-2 ring-ink-800`} />
          ))}
        </div>
        <span className="text-[9px] text-white/40">Creative preview</span>
      </div>
    </div>
  );
}

function NotificationCard() {
  return (
    <div className="glass flex w-44 items-center gap-3 rounded-2xl p-3.5 shadow-card sm:w-48">
      <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500">
        <Bell size={15} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-ink-800 bg-rose-400" />
      </span>
      <div>
        <p className="text-[11px] font-semibold">New Lead</p>
        <p className="text-[9px] text-white/45">WhatsApp enquiry · 2m</p>
      </div>
    </div>
  );
}

function VideoCard() {
  return (
    <div className="glass w-40 rounded-2xl p-3 shadow-card sm:w-44">
      <div className="relative grid h-20 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-ink-600 to-ink-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,92,255,0.35),transparent_60%)]" />
        <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white/15 backdrop-blur transition-transform duration-300 hover:scale-110">
          <Play size={15} fill="currentColor" className="ml-0.5 text-white" />
        </span>
      </div>
      <p className="mt-2.5 text-[10px] font-semibold">Reel concept</p>
    </div>
  );
}

export default function HeroScene() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.6 });

  const layerSlowX = useTransform(sx, [-0.5, 0.5], [reduce ? 0 : -14, reduce ? 0 : 14]);
  const layerSlowY = useTransform(sy, [-0.5, 0.5], [reduce ? 0 : -10, reduce ? 0 : 10]);
  const layerMidX = useTransform(sx, [-0.5, 0.5], [reduce ? 0 : -26, reduce ? 0 : 26]);
  const layerMidY = useTransform(sy, [-0.5, 0.5], [reduce ? 0 : -18, reduce ? 0 : 18]);
  const layerFastX = useTransform(sx, [-0.5, 0.5], [reduce ? 0 : -40, reduce ? 0 : 40]);
  const layerFastY = useTransform(sy, [-0.5, 0.5], [reduce ? 0 : -26, reduce ? 0 : 26]);

  const handleMouse = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetMouse = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      className="perspective-1200 relative mx-auto hidden h-[560px] w-full max-w-[560px] select-none sm:block lg:h-[620px]"
      aria-hidden="true"
    >
      <span className="absolute bottom-1 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-ink-950/70 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/50 backdrop-blur">
        Illustrative UI · sample data
      </span>
      <div className="absolute inset-0 grid place-items-center">
        <div className="absolute h-72 w-72 rounded-full bg-violet-600/25 blur-[100px]" />
        <div className="absolute h-56 w-56 translate-x-16 translate-y-10 rounded-full bg-cyan-500/20 blur-[90px]" />
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ x: layerMidX, y: layerMidY }}
      >
        <motion.div
          animate={reduce ? {} : { y: [0, -14, 0], rotateY: [0, 4, 0] }}
          transition={floatTransition(8)}
          className="preserve-3d"
        >
          <PhoneMockup />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-0 top-16"
        style={{ x: layerFastX, y: layerFastY }}
      >
        <motion.div
          animate={reduce ? {} : { y: [0, -10, 0] }}
          transition={floatTransition(6.5, 0.4)}
        >
          <AnalyticsCard />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-0 top-40"
        style={{ x: layerFastX, y: layerFastY }}
      >
        <motion.div
          animate={reduce ? {} : { y: [0, 12, 0] }}
          transition={floatTransition(7.5, 1)}
        >
          <AdCard />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-2"
        style={{ x: layerSlowX, y: layerSlowY }}
      >
        <motion.div
          animate={reduce ? {} : { y: [0, -12, 0] }}
          transition={floatTransition(9, 0.8)}
        >
          <DesignCard />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-4"
        style={{ x: layerSlowX, y: layerSlowY }}
      >
        <motion.div
          animate={reduce ? {} : { y: [0, 10, 0] }}
          transition={floatTransition(7, 1.4)}
        >
          <NotificationCard />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -left-2 top-2"
        style={{ x: layerMidX, y: layerMidY }}
      >
        <motion.div
          animate={reduce ? {} : { y: [0, -9, 0] }}
          transition={floatTransition(6, 0.2)}
        >
          <VideoCard />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ x: layerSlowX, y: layerSlowY }}
      >
        <div className="relative grid h-80 w-80 place-items-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-violet-400/25 animate-spin-slower" />
          <div className="absolute inset-8 rounded-full border border-cyan-400/15 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          <div className="absolute h-24 w-24 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 opacity-90 blur-[2px] animate-float-slow shadow-glow" />
        </div>
      </motion.div>
    </div>
  );
}
