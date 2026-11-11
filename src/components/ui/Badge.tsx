import React from 'react';

type BadgeTone = 'red' | 'blue' | 'sky' | 'purple' | 'slate' | 'dark';

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  dot?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const TONE_CLASSES: Record<BadgeTone, string> = {
  red: 'bg-[#C8102E] text-white border border-[#F43F5E]/40 shadow-[0_4px_14px_rgba(200,16,46,0.45)]',
  blue: 'bg-[#1D4ED8]/25 text-[#7DB7FF] border border-[#3B82F6]/35',
  sky: 'bg-[#0EA5E9]/15 text-[#7DB7FF] border border-[#7DB7FF]/30',
  purple: 'bg-[#7C3AED]/25 text-[#C4B5FD] border border-[#8B5CF6]/40',
  slate: 'bg-[#1A1E26] text-slate-300 border border-[#2D3340]',
  dark: 'bg-[#0F131A]/90 text-slate-200 border border-white/15',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  tone = 'dark',
  dot = false,
  icon,
  className = '',
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.14em] leading-none ${TONE_CLASSES[tone]} ${className}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" aria-hidden="true" />}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
