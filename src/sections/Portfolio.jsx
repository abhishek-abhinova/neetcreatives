import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import ProjectVisual, { ProjectOverlay } from '../components/ProjectVisual';
import { PROJECTS, PROJECT_CATEGORIES, waLinkWithMessage } from '../data/site';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const visible = PROJECTS.filter((p) => filter === 'all' || p.categoryKey === filter);

  return (
    <section id="work" className="noise relative py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="section-tag">Our Work</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              WORK THAT <span className="text-gradient">SPEAKS LOUDER.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/55">
            A glimpse into what we can create for your brand.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Filter projects">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={filter === cat.key}
                onClick={() => setFilter(cat.key)}
                className={`relative rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                  filter === cat.key
                    ? 'text-white'
                    : 'glass text-white/55 hover:text-white'
                }`}
              >
                {filter === cat.key && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 shadow-glow"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{cat.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group perspective-1200"
              >
                <a
                  href={waLinkWithMessage(`Hello Neet Creatives! I'd like a project similar to ${project.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`Discuss the ${project.name}`}
                >
                  <div
                    className="relative transition-transform duration-500 ease-out group-hover:-translate-y-2"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                      <ProjectVisual project={project} />
                    </div>
                    <ProjectOverlay project={project} />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3 px-1">
                    <div>
                      <h3 className="font-display text-base font-bold tracking-tight transition-colors duration-300 group-hover:text-violet-300">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-xs text-white/45">{project.description}</p>
                    </div>
                    <span className="mt-1 shrink-0 rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                      {project.category}
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <p className="text-sm text-white/50">
            These are sample projects.{' '}
            <a
              href={waLinkWithMessage("Hello Neet Creatives! I'd like to see more of your work.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-violet-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Ask for our full portfolio on WhatsApp
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
