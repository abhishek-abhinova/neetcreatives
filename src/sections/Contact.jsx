import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Globe,
  MapPin,
  Send,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import {
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_LINK,
  PHONE_LINK,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  waLinkWithMessage,
} from '../data/site';

const CONTACT_CARDS = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: WHATSAPP_NUMBER_DISPLAY,
    action: 'Chat on WhatsApp',
    href: WHATSAPP_LINK,
    external: true,
    color: 'text-[#25D366]',
    bg: 'from-[#25D366]/20 to-emerald-500/10',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: WHATSAPP_NUMBER_DISPLAY,
    action: 'Call Now',
    href: PHONE_LINK,
    external: false,
    color: 'text-violet-300',
    bg: 'from-violet-600/20 to-blue-500/10',
  },
  {
    icon: Globe,
    title: 'Website',
    value: 'neetcreatives.com',
    action: null,
    href: 'https://neetcreatives.com',
    external: true,
    color: 'text-cyan-300',
    bg: 'from-cyan-500/20 to-sky-500/10',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Garhwa Town, Jharkhand, India',
    action: null,
    href: null,
    external: false,
    color: 'text-rose-300',
    bg: 'from-rose-500/20 to-orange-500/10',
  },
];

const inputCls =
  'w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition-all duration-300 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25';

export default function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    service: '',
    budget: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Hello Neet Creatives! I am interested in your digital services.',
      '',
      `Name: ${form.name || '-'}`,
      `Phone: ${form.phone || '-'}`,
      `Email: ${form.email || '-'}`,
      `Business: ${form.business || '-'}`,
      `Service: ${form.service || '-'}`,
      `Budget: ${form.budget || '-'}`,
      `Message: ${form.message || '-'}`,
    ];
    window.open(waLinkWithMessage(lines.join('\n')), '_blank', 'noopener,noreferrer');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="noise relative overflow-hidden py-24 lg:py-32">
      <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-[130px]" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="section-tag">Contact</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              LET'S CREATE <span className="text-gradient">SOMETHING GREAT.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((card, i) => {
            const Icon = card.icon;
            const inner = (
              <>
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${card.bg} ${card.color} ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-sm font-semibold leading-snug">{card.value}</p>
                {card.action && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300">
                    {card.action}
                  </span>
                )}
              </>
            );
            const cls =
              'card-border-glow group rounded-3xl bg-ink-800/60 p-6 text-left shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5';
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                {card.href ? (
                  <a
                    href={card.href}
                    {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`block ${cls}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="card-border-glow relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl bg-ink-800/60 p-7 shadow-card backdrop-blur-sm sm:p-10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/15 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                Send an Enquiry
              </h3>
              <p className="mt-2 text-sm text-white/50">
                Fill this form and it opens directly in WhatsApp — no data is stored on this site.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/60">
                    Name *
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-white/60">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="Your phone number"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/60">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@email.com"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="business" className="mb-1.5 block text-xs font-medium text-white/60">
                    Business Name
                  </label>
                  <input
                    id="business"
                    value={form.business}
                    onChange={update('business')}
                    placeholder="Your business name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-white/60">
                    Service Required *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      required
                      value={form.service}
                      onChange={update('service')}
                      className={`${inputCls} appearance-none pr-10 ${form.service ? '' : 'text-white/30'}`}
                    >
                      <option value="" disabled className="bg-ink-900">
                        Select Service
                      </option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s} className="bg-ink-900 text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-xs font-medium text-white/60">
                    Budget
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={update('budget')}
                      className={`${inputCls} appearance-none pr-10 ${form.budget ? '' : 'text-white/30'}`}
                    >
                      <option value="" disabled className="bg-ink-900">
                        Select Budget
                      </option>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b} className="bg-ink-900 text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-white/60">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us about your project..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <motion.button
                    type="submit"
                    whileTap={reduce ? {} : { scale: 0.98 }}
                    className="btn-primary group w-full !py-4 !text-base"
                  >
                    {sent ? (
                      <>
                        <CheckCircle2 size={18} className="text-emerald-300" />
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        Submit via WhatsApp
                      </>
                    )}
                  </motion.button>
                  <p className="mt-3 text-center text-[11px] text-white/35">
                    This form does not store your data. It opens a pre-filled WhatsApp message.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
