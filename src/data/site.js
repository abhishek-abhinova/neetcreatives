export const WHATSAPP_NUMBER_DISPLAY = '+91 70504 08313';
export const WHATSAPP_NUMBER_RAW = '917050408313';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_RAW}`;
export const PHONE_LINK = 'tel:+917050408313';
export const EMAIL_LINK = 'mailto:hello@neetcreatives.com';

export const waLinkWithMessage = (message) =>
  `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const MARQUEE_ITEMS = [
  'WEB DESIGN',
  'GRAPHIC DESIGN',
  'SOCIAL MEDIA',
  'META ADS',
  'BRANDING',
  'DIGITAL MARKETING',
];

export const SERVICES = [
  {
    id: 'website-design',
    icon: 'monitor',
    title: 'Website Design',
    description:
      'Modern, responsive and conversion-focused websites designed to make your business look professional online.',
    price: 'Starting from ₹7,999+',
    features: [
      'Responsive design',
      'Modern UI/UX',
      'Mobile optimized',
      'WhatsApp integration',
      'Contact forms',
      'SEO-friendly structure',
      'Fast loading',
      'Deployment support',
    ],
    cta: 'Build My Website',
  },
  {
    id: 'graphic-design',
    icon: 'palette',
    title: 'Graphic Design',
    description:
      'Eye-catching designs that make your brand recognizable across digital and print platforms.',
    price: 'Starting from ₹499+',
    features: [
      'Social media posts',
      'Posters',
      'Banners',
      'Flyers',
      'Business cards',
      'Brochures',
      'Promotional creatives',
      'Ad creatives',
    ],
    cta: 'Get a Design',
  },
  {
    id: 'social-media',
    icon: 'share',
    title: 'Social Media Management',
    description:
      'Consistent, creative and strategic content management to keep your brand active and visible.',
    price: 'Starting from ₹4,999/month+',
    features: [
      'Content planning',
      'Creative posts',
      'Captions',
      'Hashtags',
      'Posting',
      'Page management',
      'Monthly strategy',
      'Performance tracking',
    ],
    cta: 'Grow My Social Media',
  },
  {
    id: 'meta-ads',
    icon: 'target',
    badge: 'Facebook + Instagram',
    title: 'Meta Ads',
    description:
      'Targeted advertising campaigns designed to help businesses reach the right audience and generate enquiries.',
    price: 'Starting from ₹2,999/month+',
    note: 'Ad spend is separate.',
    features: [
      'Campaign setup',
      'Audience targeting',
      'Creative strategy',
      'Facebook Ads',
      'Instagram Ads',
      'Lead campaigns',
      'Campaign monitoring',
      'Performance optimization',
    ],
    cta: 'Launch My Ads',
  },
  {
    id: 'digital-marketing',
    icon: 'chart',
    title: 'Digital Marketing',
    description:
      'A joined-up digital plan that brings your website, content and campaigns together around your business goals.',
    price: 'Custom quote',
    features: [
      'Digital strategy',
      'Channel planning',
      'Creative direction',
      'Campaign coordination',
    ],
    cta: 'Discuss My Business',
  },
];

export const SPECIALTIES = [
  { index: '01', title: 'Website', desc: 'A clear, useful home for your business online.' },
  { index: '02', title: 'Social Media', desc: 'A consistent presence built around your audience.' },
  { index: '03', title: 'Content', desc: 'Visual stories that give your brand a distinct voice.' },
  { index: '04', title: 'Advertising', desc: 'Campaigns designed to reach relevant audiences.' },
  { index: '05', title: 'Customers', desc: 'Simple paths from discovery to enquiry.' },
  { index: '06', title: 'Growth', desc: 'Connected digital work shaped around your goals.' },
];

export const WHY_US = [
  {
    icon: 'sparkles',
    title: 'Creative-First',
    desc: 'Design that captures attention and gives your brand a clear point of view.',
  },
  {
    icon: 'zap',
    title: 'Fast Execution',
    desc: 'Focused project delivery with clear priorities and practical next steps.',
  },
  {
    icon: 'sparkles',
    title: 'Modern Technology',
    desc: 'Modern design and development practices, chosen to fit your project.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile-First',
    desc: "Digital experiences made for today's mobile audience.",
  },
  {
    icon: 'briefcase',
    title: 'Business Focused',
    desc: 'Design and marketing planned around meaningful business goals.',
  },
  {
    icon: 'message-circle',
    title: 'Direct Communication',
    desc: 'Talk directly with the team and keep project communication straightforward.',
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: 'Local Retail Website Concept',
    category: 'Web Design',
    categoryKey: 'web',
    description: 'A sample direction for a responsive local-business website with a WhatsApp enquiry path.',
    gradient: 'from-violet-600 via-indigo-600 to-blue-600',
    accent: '#7C5CFF',
  },
  {
    id: 2,
    name: 'Artisan Brand Design Concept',
    category: 'Graphic Design',
    categoryKey: 'graphic',
    description: 'A sample visual identity and social campaign direction for an artisan brand.',
    gradient: 'from-fuchsia-600 via-purple-600 to-violet-600',
    accent: '#C026D3',
  },
  {
    id: 3,
    name: 'Fitness Social Concept',
    category: 'Social Media',
    categoryKey: 'social',
    description: 'A sample social content direction with post and reel creative ideas.',
    gradient: 'from-cyan-500 via-sky-600 to-blue-700',
    accent: '#22D3EE',
  },
  {
    id: 4,
    name: 'Automotive Ads Concept',
    category: 'Ads',
    categoryKey: 'ads',
    description: 'A sample Meta Ads campaign layout for a local automotive business.',
    gradient: 'from-blue-600 via-indigo-600 to-violet-700',
    accent: '#3B82F6',
  },
  {
    id: 5,
    name: 'Bakery Website Concept',
    category: 'Web Design',
    categoryKey: 'web',
    description: 'A sample bakery website direction with a menu and WhatsApp contact path.',
    gradient: 'from-amber-500 via-orange-600 to-rose-600',
    accent: '#F59E0B',
  },
  {
    id: 6,
    name: 'B2B Campaign Concept',
    category: 'Ads',
    categoryKey: 'ads',
    description: 'A sample B2B campaign direction across social ads and a landing page.',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    accent: '#10B981',
  },
];

export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Websites' },
  { key: 'graphic', label: 'Design' },
  { key: 'social', label: 'Social' },
  { key: 'ads', label: 'Ads' },
];

export const PRICING = [
  {
    name: 'Website',
    price: '₹7,999+',
    period: '',
    tagline: 'A professional, responsive home for your business.',
    features: [
      '1 responsive website',
      'Up to 5 pages',
      'Mobile optimization',
      'WhatsApp button',
      'Contact form',
      'Basic SEO structure',
      'Deployment support',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Graphic Design',
    price: '₹499+',
    period: '',
    tagline: 'Distinctive creative for your brand and campaigns.',
    features: [
      'Social media creative',
      'Promotional graphics',
      'Brand-aligned layouts',
      'Digital and print options',
    ],
    cta: 'Get a Design',
    featured: false,
  },
  {
    name: 'Social Media',
    price: '₹4,999/month+',
    period: '',
    tagline: 'Keep your brand active and visible online.',
    features: [
      'Social media management',
      'Content planning',
      'Creative posts',
      'Captions',
      'Hashtags',
      'Posting support',
      'Monthly strategy',
    ],
    cta: 'Grow My Socials',
    featured: false,
  },
  {
    name: 'Meta Ads',
    price: '₹2,999/month+',
    period: '',
    tagline: 'Reach the right audience and generate enquiries.',
    features: [
      'Campaign setup',
      'Facebook Ads',
      'Instagram Ads',
      'Audience targeting',
      'Ad creative guidance',
      'Monitoring',
      'Optimization',
    ],
    note: 'Advertising spend is separate.',
    cta: 'Start Advertising',
    featured: true,
  },
  {
    name: 'Custom',
    price: "Let's Talk",
    period: '',
    tagline: 'For businesses requiring multiple services.',
    features: [
      'Website',
      'Branding',
      'Social Media',
      'Graphic Design',
      'Meta Ads',
      'Digital Marketing',
    ],
    cta: 'Get Custom Quote',
    featured: false,
  },
];

export const PROCESS_STEPS = [
  {
    index: '01',
    title: 'Discover',
    desc: 'We understand your business, audience and goals.',
  },
  {
    index: '02',
    title: 'Strategize',
    desc: 'We plan a digital solution around your business and audience.',
  },
  {
    index: '03',
    title: 'Create',
    desc: 'We design and build the agreed digital experience.',
  },
  {
    index: '04',
    title: 'Launch',
    desc: 'We help put your brand and campaign online.',
  },
  {
    index: '05',
    title: 'Grow',
    desc: 'We review, optimize and improve the digital work.',
  },
];

export const FAQS = [
  {
    q: 'How much does a website cost?',
    a: 'Website projects start from ₹7,999 and vary depending on requirements such as number of pages, features and content.',
  },
  {
    q: 'Do you manage Facebook and Instagram?',
    a: 'Yes. Social media management and Meta advertising services are available for both Facebook and Instagram.',
  },
  {
    q: 'Is Meta Ads budget included?',
    a: 'No. Advertising spend paid to Meta is separate from the agency management fee. You control your own ad budget.',
  },
  {
    q: 'Do you provide WhatsApp integration?',
    a: 'Yes. Every website we build includes WhatsApp integration so customers can reach you with one tap.',
  },
  {
    q: 'Can you design social media posts?',
    a: 'Yes. Graphic design and social media creative services are available as one-time designs or monthly packages.',
  },
  {
    q: 'Do you work with businesses outside Garhwa?',
    a: 'Yes. Projects can be handled remotely across India. Most communication happens over WhatsApp and video calls.',
  },
  {
    q: 'How can I contact Neet Creatives?',
    a: 'The fastest way is WhatsApp or call on +91 70504 08313. You can also fill the enquiry form on this page and it will open directly in WhatsApp.',
  },
];

export const SERVICE_OPTIONS = [
  'Website Design',
  'Graphic Design',
  'Social Media Management',
  'Meta Ads',
  'Complete Digital Marketing',
  'Other',
];

export const BUDGET_OPTIONS = [
  'Under ₹5,000',
  '₹5,000–₹10,000',
  '₹10,000–₹25,000',
  '₹25,000–₹50,000',
  '₹50,000+',
];
