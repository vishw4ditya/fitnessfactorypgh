export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  meta: string;
  initials: string;
  avatarBg: 'blue' | 'red' | 'purple';
}

export const HOME_TESTIMONIALS: Testimonial[] = [
  {
    id: 'tyler-d',
    quote:
      '"No influencers dominating squat racks, no bright lights, no corporate gimmicks. Just heavy iron, great people, and everything you need to build real strength. The 24/7 key fob access is awesome for my odd work schedule."',
    name: 'TYLER D.',
    meta: 'East Liberty Resident • Member 3 yrs',
    initials: 'T',
    avatarBg: 'blue',
  },
  {
    id: 'marcus-kayla',
    quote:
      '"The best gym in Pittsburgh hands down. Friendly owners, clean equipment, plenty of dumbbells, and authentic neighborhood grit. The couples membership saves me and my partner hundreds over studio classes and big chains."',
    name: 'MARCUS & KAYLA M.',
    meta: 'Shadyside • Members 2 yrs',
    initials: 'MK',
    avatarBg: 'red',
  },
  {
    id: 'devon-b',
    quote:
      '"I was intimidated by gyms before my friend took me to Fitness Factory. Everyone is focused on their own workout, staff gets it, and there’s zero ego or arrogance. Honestly it feels like an actual neighborhood clubhouse."',
    name: 'DEVON B.',
    meta: 'Bloomfield • Member 1 yr',
    initials: 'D',
    avatarBg: 'purple',
  },
];

export const TRAINERS_TESTIMONIAL = {
  quote:
    '"Marcus taught me proper hip hinge mechanics after 4 years of lower back stiffness. Down 16 lbs, deadlifting pain-free."',
  author: '— DAN H., SHADYSIDE MEMBER',
};
