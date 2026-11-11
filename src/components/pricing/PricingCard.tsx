import React from 'react';
import { Calendar, Check, ShieldCheck, Users, X, Zap } from 'lucide-react';
import { HomePlanCard, MembershipTier } from '../../data/plans';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const TIER_ICONS = {
  calendar: Calendar,
  zap: Zap,
  users: Users,
  shield: ShieldCheck,
};

const PRICE_TEXT_COLOR = {
  red: 'text-[#F87171]',
  blue: 'text-[#7DB7FF]',
  purple: 'text-[#C4B5FD]',
  white: 'text-white',
};

interface TierPricingCardProps {
  tier: MembershipTier;
  onSelect: (tier: MembershipTier) => void;
}

export const PricingCard: React.FC<TierPricingCardProps> = ({ tier, onSelect }) => {
  const Icon = TIER_ICONS[tier.iconName];

  const topAccent =
    tier.accent === 'red'
      ? 'red'
      : tier.accent === 'blue'
        ? 'blue'
        : tier.accent === 'purple'
          ? 'purple'
          : 'none';

  const checkTone =
    tier.accent === 'red'
      ? 'bg-[#C8102E]/20 text-[#F87171]'
      : tier.accent === 'purple'
        ? 'bg-[#8B5CF6]/20 text-[#C4B5FD]'
        : 'bg-[#3B82F6]/20 text-[#7DB7FF]';

  return (
    <div className="relative flex flex-col pt-3">
      {tier.badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <Badge tone="red">{tier.badge}</Badge>
        </div>
      )}

      <Card
        topAccent={topAccent}
        glow={tier.featured ? 'red' : 'none'}
        className={`flex-1 flex flex-col p-6 ${
          tier.featured ? 'border-[#C8102E]/55 bg-gradient-to-b from-[#1A161C] to-[#12151B]' : ''
        }`}
      >
        {/* Top Row: Category & Icon */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            {tier.eyebrow}
          </span>
          <Icon
            className={`w-4 h-4 ${
              tier.accent === 'red'
                ? 'text-[#F87171]'
                : tier.accent === 'purple'
                  ? 'text-[#C4B5FD]'
                  : 'text-[#7DB7FF]'
            }`}
            aria-hidden="true"
          />
        </div>

        {/* Tier Title & Subtitle */}
        <h3 className="font-display text-2xl sm:text-[1.65rem] font-bold uppercase text-white tracking-tight">
          {tier.title}
        </h3>
        <p className="text-xs text-slate-400 mt-1 min-h-[2.25rem] leading-relaxed">
          {tier.subtitle}
        </p>

        {/* Inset Price Box */}
        <div className="mt-4 rounded-lg bg-[#0C0F15] border border-[#222733] divide-y divide-[#1D222D]">
          {tier.pricingRows.map((row) => (
            <div key={row.label} className="px-3.5 py-3 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-200 leading-tight">
                  {row.label}
                </p>
                {row.sublabel && (
                  <p className="text-[10px] text-slate-500 mt-0.5">{row.sublabel}</p>
                )}
                {row.tag && (
                  <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#7DB7FF]">
                    {row.tag}
                  </span>
                )}
              </div>
              <div className="text-right shrink-0">
                <span
                  className={`font-display text-2xl font-bold leading-none ${
                    PRICE_TEXT_COLOR[row.highlight ?? 'white']
                  }`}
                >
                  {row.price}
                </span>
                {row.unit && (
                  <span className="block text-[10px] text-slate-400 mt-0.5">{row.unit}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <ul className="mt-5 space-y-2.5 flex-1 text-xs text-slate-300">
          {tier.checklist.map((item) => (
            <li key={item.text} className="flex items-start gap-2.5">
              {item.included ? (
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${checkTone}`}
                >
                  <Check className="w-2.5 h-2.5 stroke-[3]" aria-hidden="true" />
                </span>
              ) : (
                <span className="w-4 h-4 rounded-full bg-slate-800/80 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-2.5 h-2.5" aria-hidden="true" />
                </span>
              )}
              <span className={item.included ? 'text-slate-300' : 'text-slate-500'}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="mt-6 pt-2">
          <Button
            variant={tier.ctaVariant}
            size="md"
            fullWidth
            onClick={() => onSelect(tier)}
          >
            {tier.ctaLabel}
          </Button>
        </div>
      </Card>
    </div>
  );
};

interface HomeQuickPlanCardProps {
  plan: HomePlanCard;
}

export const HomeQuickPlanCard: React.FC<HomeQuickPlanCardProps> = ({ plan }) => {
  const isBlue = plan.accent === 'blue';

  return (
    <Card
      topAccent={isBlue ? 'blue' : 'red'}
      className="p-6 sm:p-7 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
              isBlue ? 'text-[#7DB7FF]' : 'text-[#F87171]'
            }`}
          >
            {plan.eyebrow}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            {plan.audienceTag}
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-[1.7rem] font-bold uppercase text-white tracking-tight">
          {plan.title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-[13px] text-slate-400 leading-relaxed">
          {plan.description}
        </p>

        <ul className="mt-5 space-y-2.5 text-xs sm:text-[13px] text-slate-300">
          {plan.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5">
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  isBlue
                    ? 'bg-[#3B82F6]/20 text-[#7DB7FF]'
                    : 'bg-[#C8102E]/20 text-[#F87171]'
                }`}
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" aria-hidden="true" />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 pt-5 border-t border-[#242934] flex items-end justify-between gap-4">
        <div>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            {plan.priceLabel}
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="font-display text-3xl font-bold text-white leading-none">
              {plan.price}
            </span>
            <span className="text-xs text-slate-400">{plan.unit}</span>
          </div>
        </div>

        <Button
          to={`/memberships?plan=${plan.selectValue}#signup`}
          variant={plan.ctaVariant}
          size="md"
        >
          {plan.ctaLabel}
        </Button>
      </div>
    </Card>
  );
};
