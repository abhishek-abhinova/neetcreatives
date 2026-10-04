import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Globe, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import Reveal from '../components/Reveal';
import {
  BUDGET_OPTIONS,
  PHONE_LINK,
  SERVICE_OPTIONS,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER_DISPLAY,
  waLinkWithMessage,
} from '../data/site';

const TIMELINES = ['As soon as possible', 'Within 2–4 weeks', 'Within 1–2 months', 'Just exploring'];
const inputClass =
  'w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/20';

const SERVICE_QUESTIONS = {
  'Website Design': {
    label: 'What kind of website do you need?',
    options: ['Landing page', 'Business website', 'E-commerce'],
    key: 'websiteType',
  },
  'Graphic Design': {
    label: 'What would you like designed?',
    options: ['Social media creative', 'Branding', 'Ad creative', 'Print design'],
    key: 'designType',
  },
  'Social Media Management': {
    label: 'Which platforms are you focused on?',
    options: ['Instagram', 'Facebook', 'Instagram and Facebook', 'Other'],
    key: 'socialPlatform',
  },
  'Meta Ads': {
    label: 'What is your primary campaign goal?',
    options: ['Generate enquiries', 'Promote a product', 'Increase awareness', 'Other'],
    key: 'adsGoal',
  },
};

const INITIAL_FORM = {
  name: '',
  business: '',
  phone: '',
  email: '',
  services: [],
  websiteType: '',
  designType: '',
  socialPlatform: '',
  adsGoal: '',
  budget: '',
  timeline: '',
  message: '',
};

const CONTACT_DETAILS = [
  { Icon: MessageCircle, title: 'WhatsApp', value: WHATSAPP_NUMBER_DISPLAY, href: WHATSAPP_LINK, external: true },
  { Icon: Phone, title: 'Call', value: WHATSAPP_NUMBER_DISPLAY, href: PHONE_LINK },
  { Icon: Globe, title: 'Website', value: 'neetcreatives.com', href: 'https://neetcreatives.com', external: true },
  { Icon: MapPin, title: 'Location', value: 'Garhwa Town, Jharkhand', href: null },
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [step, setStep] = useState(1);
  const [serviceError, setServiceError] = useState('');
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));
  const toggleService = (service) => {
    setServiceError('');
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    if (form.services.length === 0) {
      setServiceError('Choose at least one service so we can route your enquiry.');
      return;
    }

    const questions = Object.values(SERVICE_QUESTIONS)
      .filter((question) => form[question.key])
      .map((question) => `${question.label} ${form[question.key]}`);
    const message = [
      'Hello Neet Creatives! 👋',
      '',
      'I would like to discuss a project.',
      '',
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `WhatsApp: ${form.phone}`,
      `Email: ${form.email || 'Not provided'}`,
      `Services: ${form.services.join(', ')}`,
      ...questions,
      ...(form.services.includes('Meta Ads') ? ['Note: Meta advertising spend is separate.'] : []),
      `Budget: ${form.budget || 'To be discussed'}`,
      `Timeline: ${form.timeline || 'To be discussed'}`,
      '',
      'Requirements:',
      form.message || 'I would like to discuss the requirements.',
    ].join('\n');

    window.open(waLinkWithMessage(message), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setStep(1);
    setServiceError('');
    setSent(false);
  };

  return (
    <section id="contact" className="noise relative overflow-hidden py-24 lg:py-32" aria-labelledby="contact-title">
      <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-[130px]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><span className="section-tag">Start a conversation</span></Reveal>
          <Reveal delay={0.1}>
            <h2 id="contact-title" className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              TELL US WHAT <span className="text-gradient">YOU'RE BUILDING.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Share a little about your project. Your details stay in this browser and are only added to a WhatsApp message when you choose to send it.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {CONTACT_DETAILS.map(({ Icon, title, value, href, external }) => {
              const content = (
                <>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/15 text-cyan-100">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">{title}</span>
                    <span className="mt-1 block text-xs font-semibold text-white/85 sm:text-sm">{value}</span>
                  </span>
                </>
              );
              const className = 'glass flex items-center gap-3 rounded-2xl p-4 transition hover:border-violet-400/30';
              return href ? (
                <a
                  key={title}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <div key={title} className={className}>{content}</div>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="card-border-glow relative overflow-hidden rounded-3xl bg-ink-800/65 p-6 shadow-card backdrop-blur-sm sm:p-8">
              {sent ? (
                <div className="grid min-h-[420px] content-center justify-items-center text-center" role="status">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-400/10 text-emerald-300">
                    <CheckCircle2 size={28} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold">Your enquiry is ready.</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/55">
                    WhatsApp should open with your project details. If it did not, use the WhatsApp contact link.
                  </p>
                  <button type="button" onClick={resetForm} className="btn-ghost mt-6">Send another enquiry</button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/65">Project enquiry · 0{step}/02</p>
                      <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">
                        {step === 1 ? 'A little about you' : 'Your project details'}
                      </h3>
                    </div>
                    <div className="flex gap-1.5" aria-label={`Step ${step} of 2`}>
                      {[1, 2].map((item) => (
                        <span key={item} className={`h-1.5 w-8 rounded-full ${step >= item ? 'bg-gradient-to-r from-violet-400 to-cyan-300' : 'bg-white/10'}`} />
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-7">
                    {step === 1 ? (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="text-xs font-medium text-white/65">
                          Name *
                          <input autoComplete="name" required value={form.name} onChange={update('name')} placeholder="Your name" className={`${inputClass} mt-2`} />
                        </label>
                        <label className="text-xs font-medium text-white/65">
                          Business Name *
                          <input autoComplete="organization" required value={form.business} onChange={update('business')} placeholder="Your business" className={`${inputClass} mt-2`} />
                        </label>
                        <label className="text-xs font-medium text-white/65">
                          WhatsApp Number *
                          <input autoComplete="tel" required type="tel" pattern="[+0-9() -]{8,20}" value={form.phone} onChange={update('phone')} placeholder="+91 00000 00000" className={`${inputClass} mt-2`} />
                        </label>
                        <label className="text-xs font-medium text-white/65">
                          Email
                          <input autoComplete="email" type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" className={`${inputClass} mt-2`} />
                        </label>
                      </div>
                    ) : (
                      <div className="space-y-5">
                        <fieldset>
                          <legend className="mb-3 text-xs font-medium text-white/65">Services you need *</legend>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {SERVICE_OPTIONS.filter((service) => service !== 'Other').map((service) => (
                              <label key={service} className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-3 text-sm transition ${form.services.includes(service) ? 'border-violet-400/40 bg-violet-500/10 text-white' : 'border-white/10 bg-ink-950/30 text-white/60 hover:text-white'}`}>
                                <input
                                  type="checkbox"
                                  checked={form.services.includes(service)}
                                  onChange={() => toggleService(service)}
                                  className="accent-violet-500"
                                />
                                {service}
                              </label>
                            ))}
                          </div>
                          {serviceError && <p className="mt-2 text-xs text-rose-300" role="alert">{serviceError}</p>}
                        </fieldset>

                        <div className="grid gap-4 sm:grid-cols-2">
                          {Object.entries(SERVICE_QUESTIONS).map(([service, question]) => form.services.includes(service) && (
                            <label key={service} className="text-xs font-medium text-white/65">
                              {question.label}
                              <select required value={form[question.key]} onChange={update(question.key)} className={`${inputClass} mt-2`}>
                                <option value="">Choose one</option>
                                {question.options.map((option) => <option key={option} value={option} className="bg-ink-900">{option}</option>)}
                              </select>
                            </label>
                          ))}
                          <label className="text-xs font-medium text-white/65">
                            Budget
                            <select value={form.budget} onChange={update('budget')} className={`${inputClass} mt-2`}>
                              <option value="">Choose a range</option>
                              {BUDGET_OPTIONS.map((option) => <option key={option} value={option} className="bg-ink-900">{option}</option>)}
                            </select>
                          </label>
                          <label className="text-xs font-medium text-white/65">
                            Timeline
                            <select value={form.timeline} onChange={update('timeline')} className={`${inputClass} mt-2`}>
                              <option value="">Choose a timeline</option>
                              {TIMELINES.map((option) => <option key={option} value={option} className="bg-ink-900">{option}</option>)}
                            </select>
                          </label>
                          <label className="text-xs font-medium text-white/65 sm:col-span-2">
                            Project Description
                            <textarea rows={4} value={form.message} onChange={update('message')} placeholder="What are you building? Any goals, requirements or details we should know?" className={`${inputClass} mt-2 resize-y`} />
                          </label>
                        </div>
                      </div>
                    )}

                    <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                      {step === 2 ? (
                        <button type="button" onClick={() => setStep(1)} className="btn-ghost min-h-12 !px-5">
                          <ArrowLeft size={15} /> Back
                        </button>
                      ) : <span />}
                      <motion.button
                        type="submit"
                        whileTap={reduce ? {} : { scale: 0.98 }}
                        className="btn-primary min-h-12 !px-6"
                      >
                        {step === 1 ? <>Continue <ArrowRight size={15} /></> : <>Send via WhatsApp <Send size={15} /></>}
                      </motion.button>
                    </div>
                    <p className="mt-4 text-center text-[10px] leading-relaxed text-white/35">
                      No details are stored by this site. You’ll review and send the message in WhatsApp.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
