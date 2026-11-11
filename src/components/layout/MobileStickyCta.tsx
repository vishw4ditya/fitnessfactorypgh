import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const MobileStickyCta: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#0A0C10]/95 backdrop-blur-md border-t border-[#2A2E37] px-4 py-2.5 flex items-center justify-between gap-3 shadow-[0_-8px_24px_rgba(0,0,0,0.75)]">
      <div className="min-w-0">
        <p className="font-display text-xs font-bold uppercase tracking-wider text-white truncate">
          NO CONTRACTS • 24/7 ACCESS
        </p>
        <p className="text-[11px] text-slate-400 truncate">East Liberty &amp; Shadyside</p>
      </div>
      <Link
        to="/memberships#signup"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#C8102E] hover:bg-[#E11637] text-white font-display font-bold text-xs uppercase tracking-[0.09em] px-4 py-2 shadow-[0_6px_18px_rgba(200,16,46,0.55)] shrink-0"
      >
        <span>JOIN NOW</span>
        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
};
