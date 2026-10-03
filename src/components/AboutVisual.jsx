import { motion, useReducedMotion } from 'framer-motion';
import { TrendingUp, Heart, MessageCircle, Bell, Wifi } from 'lucide-react';

const float = (duration, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
});

export default function AboutVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="perspective-1200 relative mx-auto hidden h-[520px] w-full max-w-[520px] select-none sm:block" aria-hidden="true">
      <div className="absolute inset-0 grid place-items-center">
        <div className="absolute h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="absolute h-52 w-52 translate-x-14 translate-y-8 rounded-full bg-cyan-500/15 blur-[90px]" />
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 w-[340px] -translate-x-1/2 -translate-y-1/2"
        animate={reduce ? {} : { rotateY: [-4, 4, -4], y: [0, -10, 0] }}
        transition={float(9)}
      >
        <div className="rounded-2xl border border-white/10 bg-ink-800/90 p-2 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.85)]">
          <div className="rounded-xl bg-gradient-to-b from-ink-700 to-ink-900 p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold">Growth Dashboard</p>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                <TrendingUp size={11} /> +62%
              </span>
            </div>
            <div className="mt-4 flex h-28 items-end gap-2" aria-hidden="true">
              {[35, 50, 42, 65, 55, 80, 70, 95, 85, 100, 92, 100].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600/70 to-cyan-400/90"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { l: 'Visitors', v: '12.4K' },
                { l: 'Leads', v: '486' },
                { l: 'Sales', v: '₹86K' },
              ].map((s) => (
                <div key={s.l} className="rounded-lg bg-white/[0.05] px-2.5 py-2">
                  <p className="text-[9px] text-white/40">{s.l}</p>
                  <p className="text-xs font-bold">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-2 top-8"
        animate={reduce ? {} : { y: [0, -12, 0] }}
        transition={float(6.5, 0.5)}
      >
        <div className="glass w-36 rounded-2xl p-3 shadow-card">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-rose-500 to-pink-500">
              <Heart size={14} fill="currentColor" />
            </span>
            <div>
              <p className="text-[10px] text-white/40">Engagement</p>
              <p className="text-xs font-bold">+128%</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-3 bottom-16"
        animate={reduce ? {} : { y: [0, 10, 0] }}
        transition={float(7.5, 1.2)}
      >
        <div className="glass flex w-40 items-center gap-2.5 rounded-2xl p-3 shadow-card">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500">
            <Bell size={15} />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-ink-800 bg-rose-400" />
          </span>
          <div>
            <p className="text-[11px] font-semibold">New Lead</p>
            <p className="text-[9px] text-white/45">Just now</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-6"
        animate={reduce ? {} : { y: [0, -9, 0] }}
        transition={float(6, 0.9)}
      >
        <div className="glass flex w-32 items-center gap-2 rounded-2xl p-3 shadow-card">
          <MessageCircle size={15} className="text-cyan-300" />
          <p className="text-[11px] font-semibold">WhatsApp</p>
          <Wifi size={12} className="ml-auto text-emerald-400" />
        </div>
      </motion.div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-72 w-72 place-items-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/20 animate-spin-slower" />
          <div className="absolute inset-10 rounded-full border border-violet-400/15 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>
      </div>
    </div>
  );
}
