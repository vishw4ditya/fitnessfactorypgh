import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell,
  Facebook,
  Instagram,
  KeyRound,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';
import { FOOTER_NAV_LEFT, FOOTER_NAV_RIGHT, SITE_INFO } from '../../data/site';

interface FooterProps {
  onOpenLegal: (doc: 'privacy' | 'terms' | 'rules') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#080A0E] text-slate-300 mt-auto pb-16 md:pb-0">
      <div className="footer-top-gradient w-full" aria-hidden="true" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Brand & Blurb */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-white hover:text-[#7DB7FF] transition-colors"
            >
              <Dumbbell className="w-5 h-5 text-[#7DB7FF]" aria-hidden="true" />
              <span className="font-display text-lg font-bold uppercase tracking-wider">
                {SITE_INFO.shortName}
              </span>
            </Link>
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-sm">
              {SITE_INFO.blurb}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#131720] border border-[#272D38] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#7DB7FF]/50 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#131720] border border-[#272D38] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#7DB7FF]/50 transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#131720] border border-[#272D38] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#7DB7FF]/50 transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: HQ & Contact */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#7DB7FF]">
              HQ &amp; CONTACT
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7DB7FF] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {SITE_INFO.addressLine1},
                  <br />
                  {SITE_INFO.addressCityZip}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#7DB7FF] shrink-0" aria-hidden="true" />
                <a href={SITE_INFO.phoneHref} className="hover:text-white transition-colors">
                  {SITE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#7DB7FF] shrink-0" aria-hidden="true" />
                <a
                  href={SITE_INFO.emailHref}
                  className="hover:text-white transition-colors break-all"
                >
                  {SITE_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Access & Hours */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#7DB7FF]">
              ACCESS &amp; HOURS
            </h3>
            <div className="rounded-lg bg-[#12151C] border border-[#242934] p-3.5 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C4B5FD]">
                <KeyRound className="w-3.5 h-3.5 text-[#A78BFA]" aria-hidden="true" />
                <span>{SITE_INFO.hours.badge}</span>
              </div>
              <div className="text-xs leading-relaxed text-slate-400">
                <p className="font-semibold text-slate-200">{SITE_INFO.hours.deskLabel}</p>
                <p>{SITE_INFO.hours.weekdays}</p>
                <p>{SITE_INFO.hours.weekends}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Navigation in two sub-columns */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#7DB7FF]">
              NAVIGATION
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.09em]">
              <ul className="space-y-2">
                {FOOTER_NAV_LEFT.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {FOOTER_NAV_RIGHT.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p className="text-center sm:text-left">{SITE_INFO.copyright}</p>
          <div className="flex items-center gap-5 uppercase tracking-[0.1em] font-semibold">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('rules')}
              className="hover:text-slate-200 transition-colors"
            >
              Facility Rules
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
