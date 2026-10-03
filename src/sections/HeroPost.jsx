import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check, TrendingUp, Palette, Target, Monitor, Share2 } from 'lucide-react';
import { SERVICES } from '../data/site';
import { waLinkWithMessage } from '../data/site';

export default function HeroPost() {
  const reduce = useReducedMotion();

  return (
    <section className="noise relative py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          {/* Trust Line */}
          <p className="section-tag mb-6 inline-block">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            Web Design • Graphic Design • Social Media • Meta Ads
          </p>

          <p className="text-white/50 text-sm leading-relaxed mb-10">
            Serving businesses in Garhwa, Jharkhand & beyond.
          </p>

          {/* Services Preview Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-2xl p-5 shadow-card backdrop-blur-sm hover:-translate-y-1.5 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-300">
                    {service.id === 'website-design' && <Monitor size={20} />}
                    {service.id === 'graphic-design' && <Palette size={20} />}
                    {service.id === 'social-media' && <Share2 size={20} />}
                    {service.id === 'meta-ads' && <Target size={20} />}
                  </span>
                  <span className="font-display text-sm font-medium tracking-tight">{service.title}</span>
                </div>
                <p className="text-white/50 text-[11px] leading-relaxed">{service.description}</p>
                <a
                  href={waLinkWithMessage(`Hello Neet Creatives! I'm interested in ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-violet-300 transition-colors hover:text-white"
                >
                  Build My Website
                  <ArrowUpRight size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}