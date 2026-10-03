import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK, waLinkWithMessage } from '../data/site';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 sm:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="glass-strong flex items-center gap-2 rounded-2xl p-2 shadow-card">
            <a
              href={PHONE_LINK}
              aria-label="Call Neet Creatives"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl glass text-white/85"
            >
              <Phone size={19} />
            </a>
            <a
              href={waLinkWithMessage("Hello Neet Creatives! I'd like a free quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-sm font-semibold text-white shadow-glow"
            >
              <MessageCircle size={17} />
              Get a Free Quote
              <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
