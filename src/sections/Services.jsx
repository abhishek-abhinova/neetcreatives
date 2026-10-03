import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../data/site';

export default function Services() {
  return (
    <section id="services" className="noise relative py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="section-tag">What We Do</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              DIGITAL SERVICES THAT <span className="text-gradient">MOVE YOUR BRAND FORWARD.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-[15px] leading-relaxed text-white/55">
              Everything you need to look better, reach more people and grow online.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
