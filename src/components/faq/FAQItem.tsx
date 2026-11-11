import React from 'react';
import { ChevronDown, KeyRound, Snowflake, TrendingUp, Users } from 'lucide-react';
import { FAQEntry } from '../../data/faqs';

const FAQ_ICONS = {
  snowflake: Snowflake,
  key: KeyRound,
  users: Users,
  trending: TrendingUp,
};

const ICON_COLORS = {
  sky: 'text-[#7DB7FF]',
  purple: 'text-[#C4B5FD]',
  blue: 'text-[#60A5FA]',
  red: 'text-[#F87171]',
};

interface FAQItemProps {
  faq: FAQEntry;
  isOpen: boolean;
  onToggle: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => {
  const Icon = FAQ_ICONS[faq.iconName];

  return (
    <div className="rounded-xl bg-[#131720] border border-[#282D38] transition-colors hover:border-[#3A4252]">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${faq.id}`}
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF] rounded-xl"
      >
        <span className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
          {faq.question}
        </span>
        <span className="flex items-center gap-2 shrink-0">
          <Icon className={`w-4 h-4 ${ICON_COLORS[faq.iconColor]}`} aria-hidden="true" />
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-white' : ''
            }`}
            aria-hidden="true"
          />
        </span>
      </button>

      {isOpen && (
        <div
          id={`faq-panel-${faq.id}`}
          className="px-5 pb-5 pt-0.5 text-xs sm:text-[13px] text-slate-300 leading-relaxed border-t border-[#1F242E]"
        >
          <p className="pt-3">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};
