import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  eyebrowTone?: 'red' | 'blue' | 'slate';
  eyebrowDot?: boolean;
  eyebrowIcon?: React.ReactNode;
  title: string;
  highlightWord?: string;
  highlightStyle?: 'sky' | 'gradient' | 'red';
  align?: 'left' | 'center';
  rightContent?: React.ReactNode;
  subtitle?: string;
  className?: string;
}

const EYEBROW_COLOR = {
  red: 'text-[#EF4444]',
  blue: 'text-[#7DB7FF]',
  slate: 'text-slate-400',
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  eyebrowTone = 'red',
  eyebrowDot = false,
  eyebrowIcon,
  title,
  highlightWord,
  highlightStyle = 'sky',
  align = 'left',
  rightContent,
  subtitle,
  className = '',
}) => {
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    const parts = title.split(highlightWord);
    const highlightCls =
      highlightStyle === 'gradient'
        ? 'text-gradient-blue-pink'
        : highlightStyle === 'red'
          ? 'text-[#EF4444]'
          : 'text-[#7DB7FF]';

    return (
      <>
        {parts[0]}
        <span className={highlightCls}>{highlightWord}</span>
        {parts.slice(1).join(highlightWord)}
      </>
    );
  };

  if (align === 'center') {
    return (
      <div className={`text-center max-w-2xl mx-auto ${className}`}>
        <div
          className={`inline-flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] mb-2 ${EYEBROW_COLOR[eyebrowTone]}`}
        >
          {eyebrowDot && <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" aria-hidden="true" />}
          {eyebrowIcon}
          <span>{eyebrow}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold uppercase tracking-tight text-white leading-[1.03]">
          {renderTitle()}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm sm:text-[15px] text-slate-400 leading-relaxed">{subtitle}</p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-4 ${className}`}
    >
      <div className="max-w-2xl">
        <div
          className={`inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] mb-1.5 ${EYEBROW_COLOR[eyebrowTone]}`}
        >
          {eyebrowDot && <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" aria-hidden="true" />}
          {eyebrowIcon}
          <span>{eyebrow}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold uppercase tracking-tight text-white leading-[1.03]">
          {renderTitle()}
        </h2>
        {subtitle && (
          <p className="mt-2.5 text-sm text-slate-400 leading-relaxed max-w-xl">{subtitle}</p>
        )}
      </div>
      {rightContent && <div className="md:max-w-sm shrink-0">{rightContent}</div>}
    </div>
  );
};
