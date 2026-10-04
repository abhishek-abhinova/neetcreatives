import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import AboutVisual from '../components/AboutVisual';
import { waLinkWithMessage } from '../data/site';

export default function About() {
  return (
    <section id="about" className="noise relative overflow-hidden py-24 lg:py-32">
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-[130px]" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <Reveal>
            <span className="section-tag">About Us</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-[2.6rem]">
              WE'RE NOT JUST AN AGENCY.
              <span className="text-gradient block">WE'RE YOUR DIGITAL GROWTH PARTNER.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/55">
              Neet Creatives is a digital creative and marketing agency based in Garhwa Town,
              Jharkhand. We help businesses, entrepreneurs, startups and local brands build a
              stronger presence online through modern websites, creative design, social media
              management and Meta advertising.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href={waLinkWithMessage("Hello Neet Creatives! Tell me more about working together.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group mt-9"
            >
              Work With Us
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {['Strategy', 'Design', 'Digital', 'Growth'].map((value, i) => (
              <Reveal key={value} delay={0.15 + i * 0.08}>
                <div className="card-border-glow rounded-2xl bg-ink-800/60 p-4 text-center backdrop-blur-sm">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-gradient">
                    {value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} scale={0.94}>
          <AboutVisual />
        </Reveal>
      </div>
    </section>
  );
}
