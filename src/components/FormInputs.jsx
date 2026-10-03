import { useReducedMotion } from 'framer-motion';

export function FormLabel({ htmlFor, children, required = false }) {
  const reduce = useReducedMotion();
  return (
    <p className={required ? 'text-[12px] font-medium uppercase tracking-[0.18em] text-white/60 mb-1.5' : 'text-[12px] font-medium uppercase tracking-[0.18em] text-white/45 mb-1.5'}>
      {children}
      {required && <span className="text-red-400">*</span>}
    </p>
  );
}

export function FormInput({ type, name, placeholder, value, onChange, required = false, className = '' }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: reduce ? 0 : 0.1 }}
      className="mb-4"
    >
      <FormLabel required={required}>{placeholder}</FormLabel>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all duration-300 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25 ${className}`}
        ariaRequired={required}
      />
    </motion.div>
  );
}

export function FormSelect({ name, placeholder, value, onChange, options, required = false }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: reduce ? 0 : 0.1 }}
      className="mb-4"
    >
      <FormLabel>{placeholder}</FormLabel>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 appearance-none focus:outline-none focus:ring-2 focus:ring-violet-500/25 bg-no-repeat bg-right-3/4`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-ink-900 text-white">
            {opt}
          </option>
        ))}
      </select>
    </motion.div>
  );
}

export function FormTextarea({ name, placeholder, value, onChange, required = false, chars = 500 }) {
  const reduce = useReducedMotion();
  const [charCount, setCharCount] = useState(form?.description?.length || 0);

  useEffect(() => {
    setCharCount(value?.length || 0);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: reduce ? 0 : 0.1 }}
      className="mb-4"
    >
      <FormLabel required={required}>{placeholder}</FormLabel>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={4}
        className={`w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 resize-none transition-all duration-300 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/25`}
        ariaRequired={required}
      />
      <p className="mt-2 text-[11px] text-white/40">
        {chars - (charCount || 0)} / {chars} characters remaining
      </p>
    </motion.div>
  );
}

export function FormCheckbox({ id, label, checked, onChange }) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/60">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="rounded border border-white/15 bg-ink-900 w-4 h-4 cursor-pointer"
      />
      <label htmlFor={id} className="cursor-pointer">{label}</label>
    </div>
  );
}

export function FormCard({ children, title, description }) {
  return (
    <div className="glass rounded-2xl p-5 shadow-card mb-4">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-3">{title}</p>
      <p className="text-sm text-white/50">{description}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function ServiceCard({ service, isSelected, onSelect }) {
  const serviceData = {
    'Website Design': { icon: 'Monitor', color: 'text-violet-300', gradient: 'from-violet-500/30 to-blue-500/30' },
    'Graphic Design': { icon: 'Palette', color: 'text-rose-300', gradient: 'from-rose-500/30 to-pink-500/30' },
    'Social Media Management': { icon: 'Share2', color: 'text-cyan-300', gradient: 'from-cyan-500/30 to-sky-500/30' },
    'Meta Ads': { icon: 'Target', color: 'text-emerald-300', gradient: 'from-emerald-500/30 to-cyan-500/30' },
    'Branding': { icon: 'Sparkles', color: 'text-violet-300', gradient: 'from-violet-500/30 to-purple-500/30' },
    'Complete Digital Marketing': { icon: 'TrendingUp', color: 'text-green-300', gradient: 'from-green-500/30 to-emerald-500/30' },
    'Other': { icon: 'MoreHorizontal', color: 'text-white/50', gradient: 'from-gray-600/30 to-gray-700/30' },
  };

  const data = serviceData[service] || serviceData['Other'];
  const isGradientSelected = isSelected 
    ? `bg-gradient-to-br ${data.gradient}` 
    : `bg-white/[0.04]`;

  return (
    <div
      onClick={onSelect}
      className={`rounded-xl p-5 cursor-pointer transition-all duration-300 ${
        isSelected ? 'shadow-glow' : ''
      } ${isGradientSelected}`}
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl mb-3 ${data.color}">
        <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {data.icon === 'Monitor' && <path d="M17 2H9a7 7 0 0 0 7 11v-5h-2V7a5 5 0 0 1 5-5h2v2z" />}{data.icon === 'Palette' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v14c0 3 5 4 8 4z" />}{data.icon === 'Share2' && <path d="M16 7a4 4 0 1 1-.1 7.7L7 21l9-4zM13 2v3h2v7h4v-7h2V2h-6z" />}{data.icon === 'Target' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v14c0 3 5 4 8 4zM12 2L4.95 8.05 3 10l8.95 2.07L21.45 1 18 5.19 15.55 13z" />}{data.icon === 'Sparkles' && <path d="M12 2L5.05 14.1L2 9l7.05 7.06L2 15l7.05 7.06L22 9l-7.05 7.06L19 22l-7.05-7.06L12 2z" />}{data.icon === 'TrendingUp' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v14c0 3 5 4 8 4zM12 2L4.95 8.05 3 10l8.95 2.07L21.45 1 18 5.19 15.55 13z" />}{data.icon === 'MoreHorizontal' && <path d="M12 20h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4l-2-2h-2l-2 2h-4c-3 0-5 3-5 5v2z" />}
        </svg>
      </span>
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight">{service}</h3>
      <p className="mt-1 text-sm text-white/50 line-clamp-1">{serviceDescriptions[service] || ''}</p>
    </div>
  );
}

const serviceDescriptions = {
  'Website Design': 'Modern, responsive websites that convert visitors into customers.',
  'Graphic Design': 'Eye-catching designs for digital and print platforms.',
  'Social Media Management': 'Consistent content and strategy for growth.',
  'Meta Ads': 'Targeted campaigns on Facebook and Instagram.',
  'Branding': 'Complete brand identity and visual systems.',
  'Complete Digital Marketing': 'Full-spectrum digital growth solutions.',
  'Other': 'Other services not listed above.',
};