export interface FAQEntry {
  id: string;
  question: string;
  answer: string;
  iconName: 'snowflake' | 'key' | 'users' | 'trending';
  iconColor: 'sky' | 'purple' | 'blue' | 'red';
}

export const MEMBERSHIP_FAQS: FAQEntry[] = [
  {
    id: 'freeze-policy',
    question: 'CAN I FREEZE MY MEMBERSHIP IF I GO OUT OF TOWN?',
    answer:
      'Yes. Members in good standing on monthly auto-renewal and annual plans can freeze their account for up to 90 consecutive days per calendar year for medical reasons, seasonal travel, or academic breaks with written notice via email.',
    iconName: 'snowflake',
    iconColor: 'sky',
  },
  {
    id: 'keycard-entry',
    question: 'HOW DOES THE 24/7 KEYCARD ENTRY WORK?',
    answer:
      'The 24/7 add-on is $129 per year and provides an encrypted RFID key FOB. This lets you access our secure side entryway at 212 S. Highland Ave any hour of the day or night, 365 days a year—including holidays when staff is off-duty.',
    iconName: 'key',
    iconColor: 'purple',
  },
  {
    id: 'guest-policy',
    question: 'WHAT IS YOUR GUEST POLICY?',
    answer:
      'Guests are welcome during our staffed front desk hours. Guests can purchase a $15 Day Pass at the desk. Members are not permitted to badge in unauthorized guests during unstaffed 24/7 hours to preserve facility safety and compliance.',
    iconName: 'users',
    iconColor: 'blue',
  },
  {
    id: 'trainer-discounts',
    question: 'DO MEMBERS GET DISCOUNTS ON PERSONAL TRAINING?',
    answer:
      'Yes. Active Fitness Factory members receive exclusive pricing on one-on-one and partner personal training packages with our certified Pittsburgh coaching staff, saving an average of 20% compared to non-member coaching rates.',
    iconName: 'trending',
    iconColor: 'red',
  },
];

export const LEGAL_DOCUMENTS: Record<
  'privacy' | 'terms' | 'rules',
  { title: string; updated: string; paragraphs: string[] }
> = {
  privacy: {
    title: 'PRIVACY POLICY',
    updated: 'Effective January 2024',
    paragraphs: [
      'Fitness Factory Pittsburgh collects only the contact and billing information necessary to activate your membership, issue RFID key FOB access, and coordinate personal training sessions.',
      'We never sell, rent, or broker member email addresses, phone numbers, or payment records to third-party advertisers or data brokers.',
      'For membership record updates or deletion requests, email fitnessfactorypgh@gmail.com or stop by the front desk at 212 S. Highland Ave during staffed hours.',
    ],
  },
  terms: {
    title: 'TERMS OF SERVICE',
    updated: 'Effective January 2024',
    paragraphs: [
      'Month-to-month memberships renew automatically on your billing anniversary and may be cancelled prior to the next billing cycle with simple written notice by email or at the front desk—with zero hidden cancellation penalties.',
      'Annual paid-in-full memberships and 24/7 key FOB access upgrades ($129/yr) are valid for 12 months from activation and are eligible for up to 90 days of freeze protection per calendar year.',
      'All members and day-pass visitors must complete a standard facility liability waiver prior to first use of equipment.',
    ],
  },
  rules: {
    title: 'FACILITY RULES & 24/7 PROTOCOL',
    updated: 'East Liberty / Shadyside Floor Standards',
    paragraphs: [
      'Re-rack all dumbbells, Olympic plates, and barbells after your set. Leave the platform cleaner than you found it.',
      'Never prop open exterior doors or allow unauthorized non-members to tailgate through the 24/7 RFID entry door. Tailgating during unstaffed hours results in immediate revocation of 24/7 privileges.',
      'Use safety collars on heavy barbell lifts, chalk thoughtfully, wipe down benches and cardio consoles after use, and share equipment during peak evening hours.',
    ],
  },
};
