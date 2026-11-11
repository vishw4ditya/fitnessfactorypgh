export interface FeaturePillar {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  footnote: string;
  iconName: 'dumbbell' | 'flame' | 'heart' | 'calendar';
  accent: 'blue' | 'red' | 'purple' | 'sky';
}

export interface BentoTile {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  ctaText?: string;
  chip?: string;
  iconName?: 'flame' | 'check' | 'footprints';
  iconColor?: 'red' | 'blue' | 'green';
  featured?: boolean;
}

export interface VirtualTourZone {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  specs: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  tag: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const HOME_FEATURES: FeaturePillar[] = [
  {
    id: 'strength',
    eyebrow: 'HEAVY IRON',
    title: 'STRENGTH',
    description:
      'Free weights up to 150 lbs, Olympic platforms, power cages, Hammer Strength plate-loaded machines, and clean iron barbells.',
    footnote: 'HAMMER STRENGTH & IVANKO',
    iconName: 'dumbbell',
    accent: 'blue',
  },
  {
    id: 'cardio',
    eyebrow: 'ENDURANCE & SWEAT',
    title: 'CARDIO',
    description:
      'Dedicated StairMaster Gauntlets, 15+ commercial treadmills, rowers, Assault AirBikes, and dedicated turf tracks.',
    footnote: 'CONCEPT2 & STAIRMASTER',
    iconName: 'flame',
    accent: 'red',
  },
  {
    id: 'wellness',
    eyebrow: 'MOVEMENT & LIFE',
    title: 'WELLNESS',
    description:
      'Friendly atmosphere, supportive front-desk staff, functional mobility turf, and zero judgment mentality.',
    footnote: 'LOCAL CULTURE',
    iconName: 'heart',
    accent: 'purple',
  },
  {
    id: 'flexible',
    eyebrow: 'NO GIMMICKS',
    title: 'FLEXIBLE PLANS',
    description:
      'Month-to-month freedom, discounted student passes, couples discounts, and day passes with zero "one-way" contracts.',
    footnote: 'TRANSPARENT PRICING',
    iconName: 'calendar',
    accent: 'sky',
  },
];

export const BENTO_TILES: BentoTile[] = [
  {
    id: 'walkthrough-3d',
    title: 'INTERACTIVE 360° FLOOR WALKTHROUGH',
    description:
      'Inspect every dumbbell rack, squat rack, and cardio deck from your couch before setting foot inside.',
    badge: 'LIVE MATTERPORT 3D TOUR',
    ctaText: 'LAUNCH 3D MODEL',
    image:
      'https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Main lifting floor at Fitness Factory Pittsburgh with racks and platforms',
    featured: true,
  },
  {
    id: 'dumbbells-150',
    title: 'DUMBBELLS TO 150 LBS.',
    description:
      'Full lines of traditional iron & rubber dumbbells, heavy pro-style iron, and dumbbell flat/incline benches.',
    chip: 'IRON',
    ctaText: 'EXPLORE HEAVY IRON',
    image:
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Heavy iron dumbbell racks up to 150 pounds',
  },
  {
    id: 'cardio-deck',
    title: 'CARDIO DECK',
    description:
      'Precor treadmills, StairMaster Gauntlets, Concept2 rowers, and SkiErgs with zero wait times.',
    iconName: 'flame',
    iconColor: 'red',
    image:
      'https://images.unsplash.com/photo-1771586791190-97ed536c54af?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cardio deck with treadmills and StairMasters',
  },
  {
    id: 'racks-platforms',
    title: 'RACKS & PLATFORMS',
    description:
      '6 competition-grade power racks, deadlift platforms, and dedicated specialty bars ready for heavy pulls.',
    iconName: 'check',
    iconColor: 'blue',
    image:
      'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Barbells, Olympic bumper plates, and power racks',
  },
  {
    id: 'turf-mobility',
    title: 'TURF & MOBILITY',
    description:
      'High-impact turf lane with sleds, kettlebells up to 48 kg, battle ropes, and foam rollers.',
    iconName: 'footprints',
    iconColor: 'green',
    image:
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Functional athletic turf lane and sled conditioning zone',
  },
];

export const VIRTUAL_TOUR_ZONES: VirtualTourZone[] = [
  {
    id: 'main-floor',
    name: 'Main Iron & Plate-Loaded Floor',
    eyebrow: 'ZONE 01 • NORTH BAY',
    description:
      'Step right off South Highland Ave into our flagship strength room—anchored by Hammer Strength ISO-lateral presses, cable crossovers, and raw Pittsburgh steel racks.',
    specs: [
      '14+ Hammer Strength & Cybex stations',
      'Dual cable towers with custom attachments',
      '100% rubberized anti-shock lifting flooring',
    ],
    image:
      'https://images.unsplash.com/photo-1682965635455-3b4ab0cd9023?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'racks-zone',
    name: 'Olympic Platforms & Dumbbell Alley',
    eyebrow: 'ZONE 02 • HEAVY IRON',
    description:
      'Built for lifters who hate waiting for a rack. Six full power cages sit beside dedicated deadlift platforms and continuous iron dumbbells running up to 150 lbs.',
    specs: [
      'Dumbbells in 2.5 lb & 5 lb jumps up to 150 lbs',
      'Ohio Power Bars, Trap Bars & Safety Squat Bars',
      'Chalk stations and bumper plates stocked at every rack',
    ],
    image:
      'https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'cardio-turf',
    name: 'Cardio Deck & Conditioning Turf',
    eyebrow: 'ZONE 03 • ENGINE ROOM',
    description:
      'High-output conditioning meets open mobility space—featuring StairMaster StepMills, Concept2 rowers, Assault bikes, and a 40-yard sled turf strip.',
    specs: [
      'StairMaster Gauntlets & Precor commercial treadmills',
      'Push/pull prowler sleds & kettlebells to 48 kg',
      'Warmup foam rollers, bands, and mobility mats',
    ],
    image:
      'https://images.unsplash.com/photo-1771586791190-97ed536c54af?auto=format&fit=crop&w=1600&q=80',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'winter-barbell-consistency',
    tag: 'STRENGTH',
    title: 'WHY 24/7 ACCESS CHANGES WINTER TRAINING IN PITTSBURGH',
    date: 'November 2024',
    readTime: '4 min read',
    excerpt:
      'Between icy Highland Avenue commutes and early dusk, having an RFID key FOB turns missed workouts into uninterrupted momentum.',
    content: [
      'When daylight disappears at 5:00 PM in Western Pennsylvania, big-box gyms hit gridlock right when most working folks finally clock out. Waiting 25 minutes for a squat rack kills motivation faster than freezing rain.',
      'With 24/7 RFID key FOB access at Fitness Factory Pittsburgh, early risers hit the platforms at 4:45 AM before hospital or university shifts, and night owls claim quiet floor space at 10:30 PM.',
      'Consistency isn’t about superhuman willpower—it’s about removing schedule friction so the iron is ready whenever your day opens up.',
    ],
    image:
      'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'no-ego-squat-mechanics',
    tag: 'COACHING',
    title: 'FORM OVER EGO: THREE FIXES FOR PAIN-FREE SQUATTING',
    date: 'October 2024',
    readTime: '5 min read',
    excerpt:
      'Coach Marcus Vance breaks down bracing, ankle dorsiflexion, and bar path cues that unlock stronger numbers without cranky knees.',
    content: [
      'Too many lifters treat the squat like a race to stack 45s instead of building tension from the ground up. If your heels peel up or your lower back rounds out of the hole, adding load only cements compensation.',
      'Start every warmup with 90 seconds of ankle mobilization, lock your ribcage down over your pelvis with a 360-degree breath before unracking, and control a 3-second eccentric down to depth.',
      'Drop in for a complimentary 30-minute movement screen with our coaching staff—we’ll film your working sets and dial in a setup tailored to your leverages.',
    ],
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'neighborhood-gym-vs-chains',
    tag: 'COMMUNITY',
    title: 'TRANSPARENT RATES VS. FRANCHISE LOCK-INS',
    date: 'September 2024',
    readTime: '3 min read',
    excerpt:
      'No certified-mail cancellations, no surprise annual "club enhancement" charges, and real neighborhood accountability on S. Highland Ave.',
    content: [
      'Most national fitness chains depend on members forgetting they signed a 24-month agreement—charging $59 "annual maintenance fees" while letting dumbbell racks rattle apart.',
      'At Fitness Factory Pittsburgh, your $49 monthly rate or $45 individual entry stays straightforward and honest. Need to freeze while traveling or between Pitt/CMU semesters? Send us an email.',
      'Every dollar goes back into maintaining commercial iron, clean showers, and keeping our East Liberty / Shadyside gym welcoming 365 days a year.',
    ],
    image:
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80',
  },
];
