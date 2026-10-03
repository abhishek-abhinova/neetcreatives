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
    price: 'Starting from ₹7,999',
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
    price: 'Starting from ₹499',
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
    price: 'Starting from ₹4,999/month',
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
    price: 'Starting from ₹2,999/month',
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
];

export const SPECIALTIES = [
  { index: '01', title: 'Websites', desc: 'Fast, responsive sites that convert visitors into customers.' },
  { index: '02', title: 'Social Media', desc: 'Content and strategy that keeps your brand visible daily.' },
  { index: '03', title: 'Creative Design', desc: 'Graphics and visuals that make your brand recognizable.' },
  { index: '04', title: 'Meta Ads', desc: 'Targeted campaigns that put you in front of the right people.' },
  { index: '05', title: 'Brand Growth', desc: 'Data-driven marketing that turns attention into revenue.' },
];

export const WHY_US = [
  {
    icon: 'sparkles',
    title: 'Creative First',
    desc: 'We combine strategy with strong visual design to make your brand stand out.',
  },
  {
    icon: 'briefcase',
    title: 'Business Focused',
    desc: 'Our work is designed around your business goals, not just aesthetics.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile First',
    desc: "Every website and creative is optimized for today's mobile-first audience.",
  },
  {
    icon: 'wallet',
    title: 'Affordable',
    desc: 'Professional digital services without agency-level complexity or unnecessary costs.',
  },
  {
    icon: 'zap',
    title: 'Fast Execution',
    desc: 'We focus on clear communication and efficient project delivery.',
  },
  {
    icon: 'map-pin',
    title: 'Local Understanding',
    desc: 'Based in Garhwa, Jharkhand, we understand the needs of local businesses and growing brands.',
  },
];

export const STATS = [
  { value: 50, suffix: '+', label: 'Creative Projects' },
  { value: 25, suffix: '+', label: 'Businesses Served' },
  { value: 4, suffix: '+', label: 'Core Digital Services' },
  { value: 100, suffix: '%', label: 'Creative Focus' },
];

export const PROJECTS = [
  {
    id: 1,
    name: 'Sharma General Store',
    category: 'Web Design',
    categoryKey: 'web',
    description: 'A modern business website with WhatsApp ordering for a local Garhwa store.',
    gradient: 'from-violet-600 via-indigo-600 to-blue-600',
    accent: '#7C5CFF',
  },
  {
    id: 2,
    name: 'Jharkhand Handicrafts',
    category: 'Graphic Design',
    categoryKey: 'graphic',
    description: 'Social media creatives and festive campaign banners for an artisan brand.',
    gradient: 'from-fuchsia-600 via-purple-600 to-violet-600',
    accent: '#C026D3',
  },
  {
    id: 3,
    name: 'FitLife Gym',
    category: 'Social Media',
    categoryKey: 'social',
    description: '30-day content system with reels creatives and audience growth strategy.',
    gradient: 'from-cyan-500 via-sky-600 to-blue-700',
    accent: '#22D3EE',
  },
  {
    id: 4,
    name: 'City Motors',
    category: 'Ads',
    categoryKey: 'ads',
    description: 'Lead-generation Meta Ads campaign for a dealership targeting Garhwa district.',
    gradient: 'from-blue-600 via-indigo-600 to-violet-700',
    accent: '#3B82F6',
  },
  {
    id: 5,
    name: 'Sunrise Bakery',
    category: 'Web Design',
    categoryKey: 'web',
    description: 'Warm, appetizing bakery website with online menu and order-on-WhatsApp flow.',
    gradient: 'from-amber-500 via-orange-600 to-rose-600',
    accent: '#F59E0B',
  },
  {
    id: 6,
    name: 'TechSprint Solutions',
    category: 'Ads',
    categoryKey: 'ads',
    description: 'B2B service ads on Facebook and Instagram with landing page optimization.',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    accent: '#10B981',
  },
];

export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Design' },
  { key: 'graphic', label: 'Graphic Design' },
  { key: 'social', label: 'Social Media' },
  { key: 'ads', label: 'Ads' },
];

export const PRICING = [
  {
    name: 'Starter Website',
    price: '₹7,999+',
    period: '',
    tagline: 'Best for small businesses and individuals.',
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
    name: 'Social Boost',
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
    note: 'Ad budget not included',
    cta: 'Start Advertising',
    featured: true,
  },
  {
    name: 'Custom Growth',
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
    title: 'Create',
    desc: 'We develop the creative direction, design and strategy.',
  },
  {
    index: '03',
    title: 'Launch',
    desc: 'We build, publish and launch your digital presence.',
  },
  {
    index: '04',
    title: 'Grow',
    desc: 'We optimize your content, social presence and advertising.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Rohit Sharma',
    business: 'Sharma General Store, Garhwa',
    text: 'Neet Creatives built our website in just one week. Customers now find us on Google and order directly on WhatsApp. Highly recommended for local businesses.',
    rating: 5,
  },
  {
    name: 'Priya Verma',
    business: 'Jharkhand Handicrafts',
    text: 'The social media designs they create for our brand are beautiful and professional. Our page engagement has grown noticeably within two months.',
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    business: 'FitLife Gym',
    text: 'Their Meta Ads campaign brought in real enquiries, not just likes. Clear reporting and honest communication throughout.',
    rating: 5,
  },
  {
    name: 'Sneha Devi',
    business: 'Sunrise Bakery',
    text: 'From posters to our website, everything was handled professionally. Affordable pricing and great creative quality.',
    rating: 4,
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
