import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, waLinkWithMessage } from '../data/site';
import navLogo from '../assets/navlogo.png';

function Logo() {
  return (
    <a href="#home" className="group flex items-center" aria-label="Neet Creatives home">
      <img
        src={navLogo}
        alt="Neet Creatives logo"
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-card' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Main navigation">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-[13.5px] font-medium text-white/75 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={waLinkWithMessage("Hello Neet Creatives! I'd like to get a quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden !px-6 !py-2.5 md:inline-flex"
              aria-label="Get a Quote"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-xl glass text-white lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-ink-950/80 backdrop-blur-xl lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ y: reduce ? 0 : 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: reduce ? 0 : 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="container-x flex h-full flex-col justify-center gap-1 pt-16"
              aria-label="Mobile navigation"
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: reduce ? 0 : -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.4 }}
                  className="flex items-center justify-between border-b border-white/[0.06] py-4 font-display text-2xl font-semibold text-white transition-colors"
                >
                  {link.label}
                  <ArrowUpRight size={20} className="text-white/30" />
                </motion.a>
              ))}
              <a
                href={waLinkWithMessage("Hello Neet Creatives! I'd like to get a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full"
              >
                Get a Quote
                <ArrowUpRight size={16} />
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}