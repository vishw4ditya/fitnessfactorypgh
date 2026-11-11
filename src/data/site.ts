export interface NavLinkItem {
  label: string;
  to: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  imageAlt: string;
  caption: string;
}

export const SITE_INFO = {
  name: 'Fitness Factory Pittsburgh',
  shortName: 'FITNESS FACTORY',
  tagline: 'Your neighborhood, your gym',
  addressLine1: '212 S. Highland Ave',
  addressCityZip: 'Pittsburgh, PA 15206',
  fullAddress: '212 S. Highland Ave, Pittsburgh, PA 15206',
  neighborhood: 'East Liberty / Shadyside',
  phone: '412-362-6303',
  phoneHref: 'tel:+14123626303',
  email: 'fitnessfactorypgh@gmail.com',
  emailHref: 'mailto:fitnessfactorypgh@gmail.com',
  hours: {
    badge: '24/7 MEMBER KEYCARD ACCESS',
    deskLabel: 'Staffed Front Desk:',
    weekdays: 'Mon – Fri: 6:00 AM – 9:00 PM',
    weekends: 'Sat – Sun: 8:00 AM – 6:00 PM',
    compact: 'Mon–Fri 6AM–9PM | Sat–Sun 8AM–6PM',
  },
  copyright:
    '© 2024 Fitness Factory Pittsburgh. Built with Pittsburgh steel and neighborhood pride. All rights reserved.',
  blurb:
    'Rooted in the heart of East Liberty and Shadyside. Authentic iron, local neighborhood pride, and an unpretentious workspace built for true strength since day one.',
};

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Virtual Tour', to: '/virtual-tour' },
  { label: 'About', to: '/about' },
  { label: 'Memberships', to: '/memberships' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'iron-floor',
    image:
      'https://images.unsplash.com/photo-1682965635455-3b4ab0cd9023?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Moody industrial Pittsburgh gym floor with American flag and squat racks',
    caption: '212 S. HIGHLAND AVE, PITTSBURGH',
  },
  {
    id: 'steel-racks',
    image:
      'https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Row of heavy-duty power racks and calibrated weight plates',
    caption: 'OLYMPIC PLATFORMS & HAMMER STRENGTH',
  },
  {
    id: 'night-access',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80',
    imageAlt: '24/7 gym iron floor lit for early morning and late-night training',
    caption: '24/7 KEYCARD ACCESS • NO CONTRACTS',
  },
];

export const FOOTER_NAV_LEFT: NavLinkItem[] = [
  { label: 'Memberships', to: '/memberships' },
  { label: 'Home', to: '/' },
  { label: 'Reviews', to: '/#reviews' },
  { label: 'Equipment', to: '/#facility' },
];

export const FOOTER_NAV_RIGHT: NavLinkItem[] = [
  { label: 'Trainers', to: '/trainers' },
  { label: 'Virtual Tour', to: '/virtual-tour' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];
