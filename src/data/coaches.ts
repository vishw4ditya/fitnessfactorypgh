export type CoachSpecialty =
  | 'Strength & Barbell'
  | 'Rehab & Mobility'
  | 'Bodybuilding'
  | 'Conditioning';

export interface Coach {
  id: string;
  name: string;
  role: string;
  specialty: CoachSpecialty;
  specialtyTag: string;
  yearsLabel: string;
  yearsBadge: string;
  certifications: string[];
  bio: string;
  quote: string;
  photo: string;
  accentTop: 'blue' | 'pink' | 'purple' | 'red';
  rates: {
    single: string;
    fivePack: string;
    tenPack: string;
  };
  selectLabel: string;
  featuredOnHome?: boolean;
}

export interface MethodPillar {
  number: string;
  title: string;
  description: string;
  iconName: 'dumbbell' | 'shield' | 'calendar' | 'users';
  accentColor: 'red' | 'blue' | 'purple' | 'slate';
}

export const COACH_FILTERS: { label: string; value: 'All' | CoachSpecialty }[] = [
  { label: 'ALL COACHES (4)', value: 'All' },
  { label: 'STRENGTH & BARBELL', value: 'Strength & Barbell' },
  { label: 'REHAB & MOBILITY', value: 'Rehab & Mobility' },
  { label: 'BODYBUILDING', value: 'Bodybuilding' },
  { label: 'CONDITIONING', value: 'Conditioning' },
];

export const COACHES: Coach[] = [
  {
    id: 'marcus-vance',
    name: 'MARCUS VANCE',
    role: 'HEAD STRENGTH & CONDITIONING COACH',
    specialty: 'Strength & Barbell',
    specialtyTag: 'STRENGTH & POWER',
    yearsLabel: '12+ YRS IN THE GYM',
    yearsBadge: '12 YRS',
    certifications: ['CSCS', 'USAW LEVEL 2'],
    bio: 'Specializes in barbell mechanics, raw powerlifting, collegiate athletic prep, and maximal force output.',
    quote:
      '"Strength isn’t given by the bar, it’s earned in the bottom of a heavy squat when doubt creeps in."',
    photo:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80',
    accentTop: 'blue',
    rates: {
      single: '$65',
      fivePack: '$300',
      tenPack: '$550',
    },
    selectLabel: 'Marcus Vance — Strength & Conditioning (CSCS)',
    featuredOnHome: true,
  },
  {
    id: 'sarah-kowalski',
    name: 'SARAH KOWALSKI',
    role: 'FUNCTIONAL MOVEMENT & REHAB COACH',
    specialty: 'Rehab & Mobility',
    specialtyTag: 'REHAB & MOBILITY',
    yearsLabel: '9 YRS IN THE GYM',
    yearsBadge: '9 YRS',
    certifications: ['NASM-CPT', 'CES SPECIALIST'],
    bio: 'Specializes in joint mobility, rotator cuff resilience, spinal decompression, and athletic re-alignment.',
    quote:
      '"You don’t get fit by breaking your joints. Move well first, rebuild the base, then lift heavy forever."',
    photo:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
    accentTop: 'pink',
    rates: {
      single: '$65',
      fivePack: '$300',
      tenPack: '$550',
    },
    selectLabel: 'Sarah Kowalski — Rehab & Mobility (NASM-CPT)',
    featuredOnHome: false,
  },
  {
    id: 'dave-miller',
    name: 'DAVE "IRON" MILLER',
    role: 'BODYBUILDING & HYPERTROPHY COACH',
    specialty: 'Bodybuilding',
    specialtyTag: 'BODYBUILDING & NUTRITION',
    yearsLabel: '16+ YRS IN THE GYM',
    yearsBadge: '16+ YRS',
    certifications: ['NPC NATIONAL PREP', 'ISSA MASTER'],
    bio: '16+ years engineering maximal muscle hypertrophy, contest conditioning, and macro-periodized nutrition.',
    quote:
      '"Time under tension and consistency beat trends every single decade. Let’s build real armor."',
    photo:
      'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=900&q=80',
    accentTop: 'blue',
    rates: {
      single: '$65',
      fivePack: '$300',
      tenPack: '$550',
    },
    selectLabel: 'Dave "Iron" Miller — Bodybuilding & Hypertrophy',
    featuredOnHome: true,
  },
  {
    id: 'elena-rostova',
    name: 'ELENA ROSTOVA',
    role: 'HIGH INTENSITY & CONDITIONING COACH',
    specialty: 'Conditioning',
    specialtyTag: 'MOBILITY & CONDITIONING',
    yearsLabel: '8 YRS IN THE GYM',
    yearsBadge: '8 YRS',
    certifications: ['RKC KETTLEBELL', 'ACSM-EP'],
    bio: 'Master kettlebell instructor, aerobic capacity architect, and metabolic conditioning specialist for grit and stamina.',
    quote:
      '"Lungs burning, sweat pouring, mind unshakeable. That is the engine we build every session."',
    photo:
      'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80',
    accentTop: 'red',
    rates: {
      single: '$65',
      fivePack: '$300',
      tenPack: '$550',
    },
    selectLabel: 'Elena Rostova — Conditioning & Kettlebells (RKC)',
    featuredOnHome: true,
  },
];

export const METHOD_PILLARS: MethodPillar[] = [
  {
    number: 'PILLAR 01',
    title: 'HONEST HARD WORK',
    description:
      'Nothing replaces focused sweat and unmarked repetitions. We teach you how to enjoy the physical process of building genuine work capacity.',
    iconName: 'dumbbell',
    accentColor: 'red',
  },
  {
    number: 'PILLAR 02',
    title: 'FORM OVER EGO',
    description:
      'Heavy weight moved poorly builds injuries, not strength. We strip the bar down to lock in human-safe joints, balance, and kinetic mechanics.',
    iconName: 'shield',
    accentColor: 'blue',
  },
  {
    number: 'PILLAR 03',
    title: 'SUSTAINABLE HABITS',
    description:
      'Crash diets and unsustainable 6-day routines flame out quickly. We calibrate training routines that slot realistically into your work and home schedule.',
    iconName: 'calendar',
    accentColor: 'purple',
  },
  {
    number: 'PILLAR 04',
    title: 'ZERO JUDGMENT',
    description:
      'Whether you’re touching a dumbbell for the first time or returning after 20 years, you cross the platform here as an equal in East Liberty.',
    iconName: 'users',
    accentColor: 'slate',
  },
];

export const OBJECTIVE_OPTIONS = [
  'STRENGTH & POWER',
  'FAT LOSS / CONDITIONING',
  'JOINT HEALTH & MOBILITY',
  'HYPERTROPHY / MUSCLE MASS',
  'CARDIO ENDURANCE',
];
