import { ArrowUpRight, MapPin, Phone, Globe, Heart } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_NUMBER_DISPLAY, WHATSAPP_LINK, PHONE_LINK } from '../data/site';
import logo from '../assets/logo.png';

const SERVICE_LINKS = [
  'Website Design',
  'Graphic Design',
  'Social Media Management',
  'Meta Ads',
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-900/60">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <a href="#home" className="inline-flex items-center" aria-label="Neet Creatives home">
            <img src={logo} alt="Neet Creatives logo" className="h-12 w-auto object-contain" />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
            Creative Ideas • Digital Experiences • Business Growth
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-6 !px-5 !py-2.5 text-xs"
          >
            Start a Conversation
            <ArrowUpRight size={14} />
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-white/60">
            <li>
              <a
                href={PHONE_LINK}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone size={15} className="text-violet-400" />
                {WHATSAPP_NUMBER_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={15} className="text-violet-400" />
              Garhwa Town, Jharkhand, India
            </li>
            <li>
              <a
                href="https://neetcreatives.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Globe size={15} className="text-violet-400" />
                neetcreatives.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Neet Creatives. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={12} className="text-violet-400" fill="currentColor" /> in Garhwa,
            Jharkhand.
          </p>
        </div>
      </div>
    </footer>
  );
}
