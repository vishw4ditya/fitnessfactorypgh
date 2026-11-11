export interface HomePlanCard {
  id: 'individual' | 'couples';
  eyebrow: string;
  audienceTag: string;
  title: string;
  description: string;
  features: string[];
  priceLabel: string;
  price: string;
  unit: string;
  ctaLabel: string;
  accent: 'blue' | 'red';
  ctaVariant: 'primary' | 'secondary';
  selectValue: string;
}

export interface MembershipTier {
  id: string;
  eyebrow: string;
  iconName: 'calendar' | 'zap' | 'users' | 'shield';
  title: string;
  subtitle: string;
  badge?: string;
  accent: 'slate' | 'red' | 'blue' | 'purple';
  featured?: boolean;
  pricingRows: {
    label: string;
    sublabel?: string;
    price: string;
    unit?: string;
    highlight?: 'blue' | 'red' | 'purple' | 'white';
    tag?: string;
  }[];
  checklist: { text: string; included: boolean }[];
  ctaLabel: string;
  ctaVariant: 'primary' | 'secondary';
  selectOptionValue: string;
}

export interface ComparisonRow {
  feature: string;
  dayWeek: string | boolean;
  individual: string | boolean;
  couples: string | boolean;
  discounted: string | boolean;
}

export const HOME_PLANS: HomePlanCard[] = [
  {
    id: 'individual',
    eyebrow: 'MOST POPULAR',
    audienceTag: 'SOLO LIFTER',
    title: 'INDIVIDUAL MEMBERSHIP',
    description:
      'Designed for neighborhood residents seeking serious lifting, cardio variety, and an unpretentious space.',
    features: [
      'Full access to free weights, machines, and cardio floors',
      'Locker room, shower, and toiletries access included',
      'Option to add 24/7 key fob access for $129/yr',
      'Month-to-month flexibility with zero cancellation penalty',
    ],
    priceLabel: 'STARTING FROM',
    price: '$45',
    unit: '/ month',
    ctaLabel: 'VIEW RATES & SIGN UP',
    accent: 'blue',
    ctaVariant: 'primary',
    selectValue: 'individual-monthly',
  },
  {
    id: 'couples',
    eyebrow: 'BEST VALUE FOR TWO',
    audienceTag: 'PARTNER ACCESS',
    title: 'COUPLES MEMBERSHIP',
    description:
      'Train together and save. Combined account privileges for couples, roommates, and workout partners.',
    features: [
      'Two full memberships with synchronized single billing',
      'Full access to every strength floor, cardio, & turf zone',
      'Locker room & private shower access for both lifters',
      'Option to add 24/7 key fob access onto either pass',
    ],
    priceLabel: 'STARTING FROM',
    price: '$79',
    unit: '/ month',
    ctaLabel: 'VIEW RATES & SIGN UP',
    accent: 'red',
    ctaVariant: 'secondary',
    selectValue: 'couples-monthly',
  },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'passes',
    eyebrow: 'FLEXIBLE ACCESS',
    iconName: 'calendar',
    title: 'PASSES',
    subtitle: 'Ideal for out-of-towners and casual visitors.',
    accent: 'slate',
    pricingRows: [
      {
        label: 'SINGLE DAY',
        price: '$15',
        highlight: 'blue',
      },
      {
        label: '1-WEEK PASS',
        price: '$45',
        highlight: 'blue',
      },
    ],
    checklist: [
      { text: 'Full access to weight floors', included: true },
      { text: 'Full access to cardio deck', included: true },
      { text: 'Locker room & shower privileges', included: true },
      { text: '24/7 keycard access excluded', included: false },
    ],
    ctaLabel: 'PURCHASE PASS',
    ctaVariant: 'secondary',
    selectOptionValue: 'pass-week',
  },
  {
    id: 'individual',
    eyebrow: 'FULL MEMBER',
    iconName: 'zap',
    title: 'INDIVIDUAL',
    subtitle: 'Our flagship membership for Pittsburgh locals.',
    badge: 'MOST POPULAR',
    accent: 'red',
    featured: true,
    pricingRows: [
      {
        label: 'MONTHLY AUTO-RENEW',
        sublabel: 'No long-term lock',
        price: '$49',
        unit: '/mo',
        highlight: 'red',
      },
      {
        label: '1-YEAR PAID-IN-FULL',
        price: '$499',
        unit: '/yr',
        highlight: 'white',
        tag: 'SAVE 15%',
      },
    ],
    checklist: [
      { text: 'Unrestricted weight room access', included: true },
      { text: 'Cardio machinery & plate-loaded gear', included: true },
      { text: 'Clean locker rooms, saunas & showers', included: true },
      { text: '24/7 keycard add-on eligible', included: true },
    ],
    ctaLabel: 'JOIN AS INDIVIDUAL',
    ctaVariant: 'primary',
    selectOptionValue: 'individual-monthly',
  },
  {
    id: 'couples',
    eyebrow: 'HOUSEHOLD PLAN',
    iconName: 'users',
    title: 'COUPLES',
    subtitle: 'For two partners residing at the same address.',
    accent: 'blue',
    pricingRows: [
      {
        label: 'MONTHLY RATE',
        sublabel: 'Covers 2 members',
        price: '$85',
        unit: '/mo',
        highlight: 'blue',
      },
      {
        label: 'ANNUAL UPFRONT',
        price: '$849',
        unit: '/yr',
        highlight: 'white',
        tag: 'BEST COUPLE VALUE',
      },
    ],
    checklist: [
      { text: 'Two individual access profiles', included: true },
      { text: 'All gym floors, racks & cable stacks', included: true },
      { text: 'Lockers & shower amenities', included: true },
      { text: 'Shared billing with single checkout', included: true },
    ],
    ctaLabel: 'JOIN AS COUPLE',
    ctaVariant: 'primary',
    selectOptionValue: 'couples-monthly',
  },
  {
    id: 'discounted',
    eyebrow: 'COMMUNITY HONOR',
    iconName: 'shield',
    title: 'DISCOUNTED',
    subtitle: 'Students, Active Military, Veterans & 65+.',
    accent: 'purple',
    pricingRows: [
      {
        label: 'MONTHLY RATE',
        sublabel: 'Requires valid ID at front desk',
        price: '$39',
        unit: '/mo',
        highlight: 'purple',
      },
      {
        label: 'ANNUAL OPTION',
        price: '$420',
        unit: '/yr',
        highlight: 'white',
      },
    ],
    checklist: [
      { text: 'Full facility iron & cardio privileges', included: true },
      { text: 'Pitt, CMU, Duquesne, Chatham accepted', included: true },
      { text: 'Zero processing surcharges', included: true },
      { text: 'Locker room access included', included: true },
    ],
    ctaLabel: 'CLAIM DISCOUNT',
    ctaVariant: 'primary',
    selectOptionValue: 'discounted-monthly',
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Staffed Hours Access',
    dayWeek: true,
    individual: true,
    couples: true,
    discounted: true,
  },
  {
    feature: 'Free Weights (Up to 150 lbs.)',
    dayWeek: true,
    individual: true,
    couples: true,
    discounted: true,
  },
  {
    feature: 'Cardio Deck & StairMasters',
    dayWeek: true,
    individual: true,
    couples: true,
    discounted: true,
  },
  {
    feature: '24/7 FOB Access Upgrade Available',
    dayWeek: false,
    individual: '+$129/yr',
    couples: '+$129/ea',
    discounted: '+$129/yr',
  },
  {
    feature: 'Contract Lock-In Period',
    dayWeek: 'None',
    individual: 'Month-to-Month',
    couples: 'Month-to-Month',
    discounted: 'Month-to-Month',
  },
  {
    feature: 'Personal Trainer Consultation Rate',
    dayWeek: 'Standard',
    individual: 'Member Rate (-20%)',
    couples: 'Member Rate (-20%)',
    discounted: 'Member Rate (-20%)',
  },
  {
    feature: 'Membership Freeze Permitted',
    dayWeek: false,
    individual: 'Up to 90 Days/Yr',
    couples: 'Up to 90 Days/Yr',
    discounted: 'Up to 90 Days/Yr',
  },
];

export const ONBOARDING_PLANS = [
  { value: 'individual-monthly', label: 'Individual — $49/mo (Auto-renew)' },
  { value: 'individual-annual', label: 'Individual — $499/yr (Save 15%)' },
  { value: 'couples-monthly', label: 'Couples — $85/mo (2 Members)' },
  { value: 'couples-annual', label: 'Couples — $849/yr (Best Couple Value)' },
  { value: 'discounted-monthly', label: 'Discounted (Student/Military/65+) — $39/mo' },
  { value: 'discounted-annual', label: 'Discounted Annual — $420/yr' },
  { value: 'pass-day', label: 'Single Day Pass — $15' },
  { value: 'pass-week', label: '1-Week Visitor Pass — $45' },
];
