import React from 'react';

export type CardTopAccent = 'none' | 'red' | 'blue' | 'purple' | 'pink' | 'gradient';

interface CardProps {
  children: React.ReactNode;
  topAccent?: CardTopAccent;
  hoverable?: boolean;
  glow?: 'none' | 'red' | 'blue';
  className?: string;
}

const TOP_ACCENT_BAR: Record<Exclude<CardTopAccent, 'none'>, string> = {
  red: 'bg-[#C8102E]',
  blue: 'bg-[#3B82F6]',
  purple: 'bg-[#8B5CF6]',
  pink: 'bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]',
  gradient: 'bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#C8102E]',
};

const GLOW_CLASS: Record<'none' | 'red' | 'blue', string> = {
  none: 'shadow-card',
  red: 'shadow-[0_0_40px_-8px_rgba(200,16,46,0.28)] border-[#C8102E]/45',
  blue: 'shadow-[0_0_36px_-8px_rgba(59,130,246,0.22)]',
};

export const Card: React.FC<CardProps> = ({
  children,
  topAccent = 'none',
  hoverable = true,
  glow = 'none',
  className = '',
}) => {
  return (
    <div
      className={[
        'relative rounded-xl bg-gradient-to-b from-[#161920] to-[#12151B] border border-[#2A2E37]',
        topAccent !== 'none' ? 'overflow-hidden' : '',
        hoverable
          ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3E4554]'
          : '',
        GLOW_CLASS[glow],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {topAccent !== 'none' && (
        <div className={`h-[2px] w-full ${TOP_ACCENT_BAR[topAccent]}`} aria-hidden="true" />
      )}
      {children}
    </div>
  );
};
