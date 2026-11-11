import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Dumbbell, Facebook, Instagram, Menu, User, X, Youtube } from 'lucide-react';
import { NAV_LINKS, SITE_INFO } from '../../data/site';

interface HeaderProps {
  onOpenPortal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPortal }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 header-bar-bg shadow-lg shadow-black/40">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left: Brand & Neighborhood Tagline */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF] rounded-lg py-1"
        >
          <div className="flex items-center gap-2 bg-[#072B52]/90 border border-white/15 rounded-full px-2.5 py-1 shadow-inner">
            <span className="w-6 h-6 rounded-full bg-[#C8102E] flex items-center justify-center text-white shadow">
              <Dumbbell className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            <span className="font-display text-xs font-bold tracking-wider uppercase text-white hidden sm:inline">
              {SITE_INFO.name}
            </span>
          </div>

          <div className="hidden xl:flex flex-col leading-none border-l border-white/20 pl-3">
            <span className="font-display text-sm font-bold tracking-wide uppercase text-white group-hover:text-[#7DB7FF] transition-colors">
              {SITE_INFO.shortName}
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9AC9FF]">
              {SITE_INFO.tagline}
            </span>
          </div>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                [
                  'px-2.5 xl:px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] whitespace-nowrap transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF]',
                  isActive
                    ? 'bg-[#0A0E17] text-white border border-white/25 shadow-inner'
                    : 'text-slate-100/90 hover:text-white hover:bg-white/10 border border-transparent',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Socials + JOIN NOW CTA + Mobile Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 mr-1">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Fitness Factory Pittsburgh on Instagram"
              className="w-7 h-7 rounded-full bg-[#0A0E17]/85 border border-white/15 flex items-center justify-center text-slate-200 hover:text-white hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF]"
            >
              <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Fitness Factory Pittsburgh on YouTube"
              className="w-7 h-7 rounded-full bg-[#0A0E17]/85 border border-white/15 flex items-center justify-center text-slate-200 hover:text-white hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF]"
            >
              <Youtube className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Fitness Factory Pittsburgh on Facebook"
              className="w-7 h-7 rounded-full bg-[#0A0E17]/85 border border-white/15 flex items-center justify-center text-slate-200 hover:text-white hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF]"
            >
              <Facebook className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          <Link
            to="/memberships#signup"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#C8102E] hover:bg-[#E11637] text-white font-display font-bold text-xs uppercase tracking-[0.09em] px-4 py-1.5 border border-[#F43F5E]/40 shadow-[0_6px_18px_rgba(200,16,46,0.55)] hover:-translate-y-0.5 transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF]"
          >
            JOIN NOW
          </Link>

          <button
            type="button"
            onClick={onOpenPortal}
            aria-label="Member 24/7 Access Info"
            title="Member 24/7 Keycard Info"
            className="hidden md:flex w-7 h-7 rounded-full bg-[#7DB7FF]/20 border border-[#7DB7FF]/40 items-center justify-center text-white hover:bg-[#7DB7FF]/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF]"
          >
            <User className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0A0E17]/80 border border-white/20 text-white hover:bg-[#0A0E17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Tagline Strip */}
      <div className="xl:hidden border-t border-white/10 bg-[#072B52]/65 px-4 py-1 text-center lg:hidden">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B7DAFF]">
          {SITE_INFO.shortName} &ndash; {SITE_INFO.tagline}
        </p>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0B111B] border-t border-white/15 px-4 py-5 space-y-4 shadow-2xl"
        >
          <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((item) => {
              const active =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={`px-3.5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.09em] transition-colors ${
                    active
                      ? 'bg-[#C8102E] text-white shadow'
                      : 'bg-[#141821] text-slate-200 border border-[#262B36] hover:border-[#3E4554]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#161B24] border border-white/15 flex items-center justify-center text-slate-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#161B24] border border-white/15 flex items-center justify-center text-slate-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#161B24] border border-white/15 flex items-center justify-center text-slate-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <Link
              to="/memberships#signup"
              onClick={closeMenu}
              className="inline-flex items-center justify-center rounded-full bg-[#C8102E] text-white font-display font-bold text-xs uppercase tracking-[0.1em] px-5 py-2 shadow-[0_6px_18px_rgba(200,16,46,0.5)]"
            >
              JOIN NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
