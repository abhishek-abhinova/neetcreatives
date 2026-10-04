import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-32 lg:py-40" aria-labelledby="manifesto-title">
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="container-x relative text-center">
        <Reveal>
          <h2 id="manifesto-title" className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            YOUR IDEA
            <span className="block text-white/45">DESERVES</span>
            <span className="text-gradient">A BIGGER STAGE.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-sm text-white/50 sm:text-base">Let’s build it.</p>
          <a href="#project-builder" className="btn-ghost group mt-7">
            Start Your Project
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
