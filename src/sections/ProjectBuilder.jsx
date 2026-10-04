import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal';
import { waLinkWithMessage } from '../data/site';

const GROUPS = [
  {
    title: 'Website',
    options: [
      { id: 'landing-page', label: 'Landing Page', priceKey: 'website' },
      { id: 'business-website', label: 'Business Website', priceKey: 'website' },
      { id: 'e-commerce', label: 'E-commerce', priceKey: 'website', scoped: true },
    ],
  },
  {
    title: 'Design',
    options: [
      { id: 'social-creative', label: 'Social Media', priceKey: 'design' },
      { id: 'branding', label: 'Branding', priceKey: 'design', scoped: true },
      { id: 'ad-creative', label: 'Ads', priceKey: 'design' },
      { id: 'print', label: 'Print', priceKey: 'design', scoped: true },
    ],
  },
  {
    title: 'Marketing',
    options: [
      { id: 'social-management', label: 'Social Media Management', priceKey: 'social' },
      { id: 'meta-ads', label: 'Meta Ads', priceKey: 'ads' },
      { id: 'digital-marketing', label: 'Digital Marketing', scoped: true },
    ],
  },
  {
    title: 'Add-ons',
    options: [
      { id: 'whatsapp', label: 'WhatsApp', scoped: true },
      { id: 'seo', label: 'SEO', scoped: true },
      { id: 'payment-gateway', label: 'Payment Gateway', scoped: true },
      { id: 'analytics', label: 'Analytics', scoped: true },
    ],
  },
];

const STARTING_PRICES = {
  website: { amount: 7999, billing: 'oneTime' },
  design: { amount: 499, billing: 'oneTime' },
  social: { amount: 4999, billing: 'monthly' },
  ads: { amount: 2999, billing: 'monthly' },
};

const ALL_OPTIONS = GROUPS.flatMap((group) => group.options);
const formatPrice = (amount) => `₹${amount.toLocaleString('en-IN')}+`;
const formatMonthly = (amount) => `₹${amount.toLocaleString('en-IN')}/month+`;

export default function ProjectBuilder() {
  const [selected, setSelected] = useState([]);
  const reduce = useReducedMotion();
  const selectedOptions = useMemo(
    () => ALL_OPTIONS.filter((option) => selected.includes(option.id)),
    [selected],
  );
  const estimate = useMemo(() => {
    const includedPriceKeys = new Set(selectedOptions.map((option) => option.priceKey).filter(Boolean));
    const totals = [...includedPriceKeys].reduce(
      (result, key) => {
        const price = STARTING_PRICES[key];
        result[price.billing] += price.amount;
        return result;
      },
      { oneTime: 0, monthly: 0 },
    );
    const summary = [
      totals.oneTime > 0 && `${formatPrice(totals.oneTime)} one-time starting`,
    totals.monthly > 0 && `${formatMonthly(totals.monthly)} starting`,
    ].filter(Boolean).join(' · ');
    return {
      ...totals,
      summary,
      needsScope: selectedOptions.some((option) => option.scoped),
      hasKnownPrice: includedPriceKeys.size > 0,
    };
  }, [selectedOptions]);

  const toggleOption = (id) => {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const whatsappUrl = waLinkWithMessage([
    'Hello Neet Creatives! I would like to discuss a project.',
    '',
    `Selected requirements: ${selectedOptions.map((option) => option.label).join(', ') || 'Not selected yet'}`,
    `Indicative starting estimate: ${estimate.hasKnownPrice ? estimate.summary : 'Custom quote'}`,
    'I understand the estimate is indicative only and final pricing depends on project scope.',
  ].join('\n'));

  return (
    <section id="project-builder" className="noise relative overflow-hidden py-24 lg:py-32" aria-labelledby="builder-title">
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="section-tag"><Sparkles size={13} className="text-cyan-300" /> Project builder</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="builder-title" className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              BUILD YOUR <span className="text-gradient">DIGITAL PACKAGE.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Choose what you have in mind. We’ll turn your selections into a clear WhatsApp enquiry.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {GROUPS.map((group, groupIndex) => (
              <Reveal key={group.title} delay={groupIndex * 0.06}>
                <fieldset className="card-border-glow h-full rounded-3xl bg-ink-800/60 p-5 shadow-card backdrop-blur-sm sm:p-6">
                  <legend className="px-2 font-display text-base font-bold text-white">{group.title}</legend>
                  <div className="mt-2 space-y-2">
                    {group.options.map((option) => {
                      const checked = selected.includes(option.id);
                      return (
                        <label
                          key={option.id}
                          className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-3 text-sm transition-colors focus-within:ring-2 focus-within:ring-violet-300/70 ${
                            checked
                              ? 'border-violet-400/50 bg-violet-500/10 text-white'
                              : 'border-white/[0.06] bg-white/[0.02] text-white/65 hover:border-white/15 hover:text-white'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleOption(option.id)}
                            className="peer sr-only"
                          />
                          <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border ${
                            checked ? 'border-violet-300 bg-violet-500 text-white' : 'border-white/25 text-transparent'
                          }`} aria-hidden="true">
                            <Check size={13} strokeWidth={3} />
                          </span>
                          <span>{option.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              </Reveal>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="card-border-glow flex flex-col rounded-3xl bg-gradient-to-b from-violet-600/15 to-ink-800/80 p-6 shadow-glow backdrop-blur-sm sm:p-8"
            aria-live="polite"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Estimated starting price</p>
            <p className="mt-3 font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
              {selected.length === 0 ? 'Choose options' : estimate.hasKnownPrice ? estimate.summary : 'Custom quote'}
            </p>
            {estimate.needsScope && (
              <p className="mt-3 text-xs leading-relaxed text-cyan-100/65">
                Some selected items need a custom scope and may add to this starting estimate.
              </p>
            )}
            <div className="my-6 h-px bg-white/10" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Your selection</p>
            <ul className="mt-3 min-h-20 space-y-2 text-sm text-white/70">
              {selectedOptions.length ? selectedOptions.map((option) => (
                <li key={option.id} className="flex items-center gap-2">
                  <Check size={14} className="text-cyan-300" />
                  {option.label}
                </li>
              )) : <li className="text-white/40">Your selected services will appear here.</li>}
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group mt-auto min-h-12 w-full !px-5"
            >
              Send My Requirement on WhatsApp
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-3 text-center text-[11px] leading-relaxed text-white/40">
              Indicative estimate only. Final pricing depends on project scope. Meta advertising spend is separate.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
