import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Input, Select, Textarea, Checkbox, Button } from './FormInputs';
import { WA_LINK, PHONE_LINK, WHATSAPP_NUMBER_DISPLAY, SERVICE_OPTIONS, BUDGET_OPTIONS, PROJECT_TYPES, PLATFORMS, ADS_GOALS, TIMELINE_OPTIONS } from '../data/site';

const STEPS = [
  { key: 'details', label: '01', title: 'Customer Details', description: 'Tell us about yourself and your business' },
  { key: 'services', label: '02', title: 'Select Services', description: 'What do you need?' },
  { key: 'website', label: '03', title: 'Website Requirements', description: 'If Website Design is selected', conditional: 'services.includes("Website Design")' },
  { key: 'graphic', label: '04', title: 'Graphic Design Requirements', description: 'If Graphic Design is selected', conditional: 'services.includes("Graphic Design")' },
  { key: 'social', label: '05', title: 'Social Media Requirements', description: 'If Social Media Management is selected', conditional: 'services.includes("Social Media Management")' },
  { key: 'ads', label: '05', title: 'Meta Ads Requirements', description: 'If Facebook/Instagram Ads is selected', conditional: 'services.includes("Meta Ads")' },
  { key: 'budget', label: '06', title: 'Project Budget', description: 'What is your estimated project budget?' },
  { key: 'timeline', label: '07', title: 'Project Timeline', description: 'When do you want to start?' },
  { key: 'description', label: '08', title: 'Project Description', description: 'Tell us about your project' },
];

export default function SmartForm() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState('details');
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    services: [],
    website: {
      type: '',
      pages: '',
      domain: 'no',
      hosting: 'no',
      content: '',
    },
    graphic: {
      types: [],
      count: '',
    },
    social: {
      platforms: [],
      frequency: '',
      hasAccounts: false,
    },
    ads: {
      platform: '',
      goal: '',
      budget: '',
    },
    budget: '',
    timeline: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Phone validation
  const validatePhone = (val) => /^\+?91[6-9]\d{9}$/.test(val) || val === '';

  // Service selection toggle
  const toggleService = (service) => {
    setForm((prev) => {
      const idx = prev.services.indexOf(service);
      if (idx > -1) {
        prev.services.splice(idx, 1);
      } else {
        prev.services = [...prev.services, service];
      }
      return { ...prev };
    });
  };

  // Conditional rendering helper
  const hasService = (service) => form.services.includes(service);

  // Validate current step
  const validateStep = () => {
    let err = {};
    switch (step) {
      case 'details':
        if (!form.name?.trim()) err.name = 'Required';
        if (!form.business?.trim()) err.business = 'Required';
        if (!validatePhone(form.phone)) err.phone = 'Valid Indian number required';
        if (!form.email?.trim() || /^[^@]+@[^@]+\.[^@]+$/.test(form.email)) err.email = '';
        else err.email = 'Valid email required';
        break;
      case 'services':
        if (form.services.length === 0) err.services = 'Select at least one service';
        break;
      case 'website':
        if (!form.website.type) err.website = 'Select website type';
        if (!form.website.pages) err.pages = 'Select pages';
        break;
      case 'graphic':
        if (form.graphic.types.length === 0) err.graphic = 'Select at least one design type';
        break;
      case 'social':
        if (form.social.platforms.length === 0) err.social = 'Select at least one platform';
        break;
      case 'ads':
        if (!form.ads.platform) err.ads = 'Select platform';
        if (!form.ads.goal) err.adsGoal = 'Select goal';
        break;
      case 'budget':
        if (!form.budget) err.budget = 'Select budget';
        break;
      case 'timeline':
        if (!form.timeline) err.timeline = 'Select timeline';
        break;
      case 'description':
        if (!form.description?.trim()) err.description = 'Required';
        break;
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    const selectedServices = form.services.map(s => `✓ ${s.replace(/ /g, ' ')}`);

    const websiteSection = hasService('Website Design')
      ? `*WEBSITE REQUIREMENTS*
Website Type: ${form.website.type}
Pages: ${form.website.pages}
Domain: ${form.website.domain === 'yes' ? 'Yes' : 'No'}
Hosting: ${form.website.hosting === 'yes' ? 'Yes' : 'No'}
Content: ${form.website.content}`
      : '';

    const socialSection = hasService('Social Media Management')
      ? `*SOCIAL MEDIA*
Platforms: ${form.social.platforms.join(', ')}
Posting: ${form.social.frequency}`
      : '';

    const adsSection = hasService('Meta Ads')
      ? `*META ADS*
Platform: ${form.ads.platform}
Goal: ${form.ads.goal}
Monthly Ad Budget: ${form.ads.budget}
*Note: Meta advertising budget is paid separately to Meta.*`
      : '';

    const budgetLine = `*BUDGET*
${form.budget}`;

    const timelineLine = `*TIMELINE*
${form.timeline}`;

    const descriptionLine = `*PROJECT DESCRIPTION*
${form.description}`;

    const message = [
      'Hello Neet Creatives! 👋',
      '',
      'I found your website and would like to discuss a project.',
      '',
      '━━━━━━━━━━━━━━',
      '👤 CUSTOMER DETAILS',
      '━━━━━━━━━━━━━━',
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `WhatsApp: ${form.phone}`,
      `Email: ${form.email}`,
      '',
      '━━━━━━━━━━━━━━',
      '🎯 SERVICES REQUIRED',
      '━━━━━━━━━━━━━━',
      ...selectedServices,
      '',
      '━━━━━━━━━━━━━━',
      websiteSection,
      socialSection,
      adsSection,
      '',
      '━━━━━━━━━━━━━━',
      budgetLine,
      timelineLine,
      '',
      '━━━━━━━━━━━━━━',
      '💬 PROJECT DESCRIPTION',
      '━━━━━━━━━━━━━━',
      form.description,
      '',
      'Looking forward to discussing the project with you.',
      'Thank you!',
    ].join('\n');

    const encoded = encodeURIComponent(message);
    setWhatsappUrl(`${WA_LINK}?text=${encoded}`);
    return `${WA_LINK}?text=${encoded}`;
  };

  // Navigate to next step
  const nextStep = () => {
    if (!validateStep()) return;
    const currentStepIndex = STEPS.findIndex((s) => s.key === step);
    if (currentStepIndex < STEPS.length - 1) {
      setStep(STEPS[currentStepIndex + 1].key);
    }
  };

  // Go back step
  const prevStep = () => {
    const currentStepIndex = STEPS.findIndex((s) => s.key === step);
    if (currentStepIndex > 0) {
      setStep(STEPS[currentStepIndex - 1].key);
    }
  };

  // Handle form field changes - uses setForm updater pattern
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle budget change
  const handleBudgetChange = (e) => {
    setForm((prev) => ({ ...prev, budget: e.target.value }));
  };

  // Handle timeline change
  const handleTimelineChange = (e) => {
    setForm((prev) => ({ ...prev, timeline: e.target.value }));
  });

  // Generate WhatsApp and show confirmation
  const handleSubmit = () => {
    if (!validateStep()) return;
    const url = generateWhatsAppMessage();
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 1500);
  };

  // Auto-advance based on service selection
  useEffect(() => {
    // If Website Design selected, advance past services step
    if (hasService('Website Design') && step === 'services') {
      const timer = setTimeout(() => setStep('website'), 500);
      return () => clearTimeout(timer);
    }
    // If Graphic Design selected
    if (hasService('Graphic Design') && step === 'services') {
      const timer = setTimeout(() => setStep('graphic'), 500);
      return () => clearTimeout(timer);
    }
    // If Social Media selected
    if (hasService('Social Media Management') && step === 'services') {
      const timer = setTimeout(() => setStep('social'), 500);
      return () => clearTimeout(timer);
    }
    // If Meta Ads selected
    if (hasService('Meta Ads') && step === 'services') {
      const timer = setTimeout(() => setStep('ads'), 500);
      return () => clearTimeout(timer);
    }
  }, [form.services, step]);

  return (
    <section className="noise relative py-24 lg:py-32" aria-label="Project requirement form">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="container-x">
        <div className="mx-auto max-w-2xl">
          <FormProgressIndicator step={step} steps={STEPS} />
          
          <div className="mt-14 rounded-3xl bg-ink-800/80 backdrop-blur-sm shadow-card p-6 sm:p-8">
            {submitted ? (
              <ConfirmationScreen
                onOpenWhatsApp={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
                onAnotherProject={() => setSubmitted(false)}
              />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="font-display text-2xl font-bold tracking-tight text-white mb-2">
                  Tell Us About Your Project
                </h2>
                <p className="text-sm text-white/50 mb-6">
                  Have an idea? Tell us what you need and we'll help you turn it into reality.
                </p>
                
                {/* Step indicators */}
                <div className="grid grid-cols-3 gap-1 mb-8">
                  {STEPS.map((s) => {
                    const isActive = STEPS.indexOf(s) <= STEPS.indexOf(STEPS.find((x) => x.key === step));
                    return (
                      <motion.div
                        key={s.key}
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? '25%' : 'auto' }}
                        transition={{ duration: 0.4, delay: STEPS.indexOf(s) * 0.1 }}
                        className={`relative rounded-full h-8 bg-gradient-to-br from-violet-600/30 to-blue-600/30 ${
                          s.key === step ? 'bg-gradient-to-br from-violet-600 to-blue-600' : ''
                        } flex items-center justify-center text-xs font-medium text-white/60`}
                      >
                        {s.label}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Step content - each step receives form state and setForm */}
                {step === 'details' && <FormStep1Details form={form} setForm={setForm} validatePhone={validatePhone} />}
                {step === 'services' && <FormStep2Services form={form} toggleService={toggleService} hasService={hasService} />}
                {step === 'website' && <FormStep3Website form={form} setForm={setForm} />}
                {step === 'graphic' && <FormStep4Graphic form={form} />}
                {step === 'social' && <FormStep5Social form={form} />}
                {step === 'ads' && <FormStep6Ads form={form} />}
                {step === 'budget' && <FormStep7Budget form={form} />}
                {step === 'timeline' && <FormStep8Timeline form={form} />}
                {step === 'description' && <FormStep9Description form={form} />}
              </motion.div>
            )}
          </div>
        </div>

        {/* Quick Quote CTA at bottom on desktop */}
        {step !== 'description' && !submitted && (
          <motion.div
            className="mt-14 rounded-3xl bg-gradient-to-br from-violet-600 to-blue-600 p-5 sm:p-8 text-center"
            whileHover={{ y: -2, boxShadow: '0 20px 50px -12px rgba(124,92,255,0.4)' }}
          >
            <a
              href="javascript:void(0)"
              onClick={() => {
                // Reset to first step but keep current services selection if any
                setStep('details');
                setForm({
                  name: '',
                  business: '',
                  phone: '',
                  email: '',
                  services: form.services, // keep services
                  website: { type: '', pages: '', domain: 'no', hosting: 'no', content: '' },
                  graphic: { types: [], count: '' },
                  social: { platforms: [], frequency: '', hasAccounts: false },
                  ads: { platform: '', goal: '', budget: '' },
                  budget: '',
                  timeline: '',
                  description: '',
                });
              }}
              className="text-white font-semibold text-sm tracking-wide"
            >
              Start a New Project
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}