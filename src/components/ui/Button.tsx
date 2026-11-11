import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  to: string;
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  'aria-label'?: string;
};

type ButtonAsAnchor = BaseProps & {
  href: string;
  to?: undefined;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  'aria-label'?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#C8102E] hover:bg-[#DF1637] text-white border border-[#F43F5E]/30 shadow-[0_8px_24px_-4px_rgba(200,16,46,0.55)] hover:shadow-[0_12px_28px_-4px_rgba(225,22,55,0.7)] hover:-translate-y-0.5',
  secondary:
    'bg-[#1D212B] hover:bg-[#262C39] text-slate-100 border border-[#343A48] hover:border-[#4D566A] hover:-translate-y-0.5',
  outline:
    'bg-[#14171D]/85 hover:bg-[#1E232D] text-white border border-white/20 hover:border-white/40 hover:-translate-y-0.5 backdrop-blur-sm',
  ghost:
    'bg-transparent hover:bg-white/5 text-slate-200 border border-transparent hover:border-white/10',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[11px] tracking-[0.09em]',
  md: 'px-5 py-2.5 text-xs tracking-[0.09em]',
  lg: 'px-6 py-3.5 text-xs sm:text-[13px] tracking-[0.1em]',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...rest
}) => {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold uppercase whitespace-nowrap transition-all duration-200 cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0C10]',
    'disabled:opacity-50 disabled:pointer-events-none',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ('to' in rest && rest.to) {
    const { to, ...linkProps } = rest;
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  );
};
