import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Flame,
  Footprints,
  Heart,
  KeyRound,
  Mail,
  MapPin,
  Phone,
  Play,
  Star,
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { PittsburghMap } from '../components/common/PittsburghMap';
import { HomeQuickPlanCard } from '../components/pricing/PricingCard';
import { CoachCard } from '../components/trainers/CoachCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { InputField, SelectField, TextareaField, useToast } from '../components/ui/FormFields';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';
import { COACHES } from '../data/coaches';
import { BENTO_TILES, HOME_FEATURES } from '../data/facilities';
import { HOME_PLANS } from '../data/plans';
import { HERO_SLIDES, SITE_INFO } from '../data/site';
import { HOME_TESTIMONIALS } from '../data/testimonials';

const FEATURE_ICON_MAP = {
  dumbbell: Dumbbell,
  flame: Flame,
  heart: Heart,
  calendar: Calendar,
};

const FEATURE_ICON_STYLE = {
  blue: 'bg-[#1D4ED8]/20 text-[#7DB7FF] border-[#3B82F6]/30',
  red: 'bg-[#C8102E]/20 text-[#F87171] border-[#C8102E]/35',
  purple: 'bg-[#7C3AED]/20 text-[#C4B5FD] border-[#8B5CF6]/35',
  sky: 'bg-[#0284C7]/20 text-[#7DD3FC] border-[#38BDF8]/30',
};

const FEATURE_EYEBROW_COLOR = {
  blue: 'text-[#7DB7FF]',
  red: 'text-[#F87171]',
  purple: 'text-[#C4B5FD]',
  sky: 'text-[#7DD3FC]',
};

const AVATAR_BG = {
  blue: 'bg-[#1D4ED8] text-white',
  red: 'bg-[#C8102E] text-white',
  purple: 'bg-[#7C3AED] text-white',
};

export const HomePage: React.FC = () => {
  const { showToast } = useToast();
  const [slideIdx, setSlideIdx] = useState(0);

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('General Membership Inquiry');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setSlideIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const nextSlide = () => setSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) nextErrors.name = 'Please enter your name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) nextErrors.message = 'Tell us how we can help you get started.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    showToast(
      'Message Sent to Front Desk',
      `Thanks, ${name.trim()}! Our Highland Ave team will reply to ${email.trim()} within 1 business day.`
    );
    setName('');
    setEmail('');
    setMessage('');
  };

  const featuredCoaches = COACHES.filter((c) => c.featuredOnHome).slice(0, 3);
  const activeSlide = HERO_SLIDES[slideIdx];
  const walkthroughTile = BENTO_TILES[0];
  const dumbbellTile = BENTO_TILES[1];
  const lowerTiles = BENTO_TILES.slice(2);

  return (
    <PageLayout title="Fitness Factory Pittsburgh | Strength. Cardio. Wellness.">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex items-center overflow-hidden border-b border-[#1E232D]">
        {/* Background Slides */}
        {HERO_SLIDES.map((slide, idx) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.imageAlt}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 grayscale-[35%] contrast-110 brightness-[0.58] ${
              idx === slideIdx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        ))}

        {/* Moody Gradients for Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#07090D]/95 via-[#090C12]/78 to-[#090C12]/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-[#0A0C10]/45"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#C8102E]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1380px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-2xl space-y-5">
            <Badge tone="dark" dot>
              EAST LIBERTY &bull; SHADYSIDE &bull; OPEN 24/7
            </Badge>

            <h1 className="font-display font-bold uppercase tracking-tight leading-[0.94] text-5xl sm:text-6xl lg:text-[4.5rem]">
              <span className="block text-white">STRENGTH.</span>
              <span className="block text-[#7DB7FF]">CARDIO.</span>
              <span className="block text-[#F48FB1]">WELLNESS.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
              We do all that we can to help you feel good. Authentic Pittsburgh steel,
              neighborhood community, and round-the-clock iron access since day one.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button to="/memberships#signup" variant="primary" size="lg">
                <span>JOIN TODAY</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button to="/virtual-tour" variant="outline" size="lg">
                <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                <span>TAKE A VIRTUAL TOUR</span>
              </Button>
            </div>

            {/* Carousel Controls + Address Chip */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous hero photo"
                  className="w-8 h-8 rounded-full bg-[#11151E]/90 hover:bg-[#1D2433] border border-white/20 flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next hero photo"
                  className="w-8 h-8 rounded-full bg-[#11151E]/90 hover:bg-[#1D2433] border border-white/20 flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero slides">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === slideIdx}
                    aria-label={`View slide ${idx + 1}: ${s.caption}`}
                    onClick={() => setSlideIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === slideIdx
                        ? 'w-7 bg-[#C8102E]'
                        : 'w-2 bg-slate-500/60 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <span className="hidden sm:inline-block h-3.5 w-px bg-white/20" aria-hidden="true" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                {activeSlide.caption}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NO CONTRACTS. GENUINE LIFTING. */}
      <Reveal>
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <SectionHeader
            eyebrow="THE NEIGHBORHOOD STANDARD"
            eyebrowTone="red"
            title="NO CONTRACTS. GENUINE LIFTING."
            rightContent={
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                Flexible, straightforward membership packages crafted to fit your life. No
                convoluted cancellation clauses. No hidden maintenance penalties.
              </p>
            }
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOME_FEATURES.map((feat) => {
              const Icon = FEATURE_ICON_MAP[feat.iconName];
              return (
                <Card key={feat.id} className="p-6 flex flex-col justify-between">
                  <div>
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center mb-4 ${FEATURE_ICON_STYLE[feat.accent]}`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <p
                      className={`text-[9px] font-bold uppercase tracking-[0.16em] ${FEATURE_EYEBROW_COLOR[feat.accent]}`}
                    >
                      {feat.eyebrow}
                    </p>
                    <h3 className="font-display text-xl font-bold uppercase text-white mt-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#222733] flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-slate-500" aria-hidden="true" />
                    <span>{feat.footnote}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      </Reveal>

      {/* 3. BLUE GRADIENT 24/7 ACCESS BANNER */}
      <Reveal>
        <section className="relative banner-247-bg border-y border-[#3B82F6]/30 overflow-hidden">
          <div
            className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C8102E]/25 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-full bg-[#0B1221] border border-white/15 flex items-center justify-center shrink-0 shadow-lg">
                <KeyRound className="w-5 h-5 text-amber-400" aria-hidden="true" />
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 rounded bg-[#C8102E] text-[9px] font-bold uppercase tracking-[0.15em] text-white mb-1.5">
                  24/7/365 MEMBER ACCESS
                </span>
                <h2 className="font-display text-2xl sm:text-[1.65rem] font-bold uppercase text-white leading-tight">
                  WORKOUT ANY TIME WITH 24/7 KEYCARD ACCESS
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-200/85 mt-1 max-w-2xl leading-relaxed">
                  Early birds, shift workers, and midnight lifters welcome. Add round-the-clock
                  electronic access for just{' '}
                  <strong className="text-white">$129 per year</strong> on top of any standard
                  membership.
                </p>
              </div>
            </div>

            <Button
              to="/memberships?addon=247#signup"
              variant="primary"
              size="lg"
              className="shrink-0"
            >
              <span>PURCHASE ALL ACCESS</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </section>
      </Reveal>

      {/* 4. IT'S EASY TO GET STARTED TODAY */}
      <Reveal>
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader
            align="center"
            eyebrow="SIMPLE & TRANSPARENT PRICING"
            eyebrowTone="blue"
            title="IT'S EASY TO GET STARTED TODAY"
            subtitle="No sign-up tricks, no annual maintenance fees. Choose your setup and step onto the gym floor immediately."
          />

          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOME_PLANS.map((plan) => (
              <HomeQuickPlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          <p className="mt-7 text-center text-xs text-slate-400">
            Need short-term access? We also offer{' '}
            <strong className="text-slate-200">Day Passes ($15)</strong>,{' '}
            <strong className="text-slate-200">Weekly Passes ($45)</strong>, and discounted{' '}
            <strong className="text-slate-200">Student Semesters</strong>. No appointments
            required.
          </p>
        </section>
      </Reveal>

      {/* 5. BUILT WITH PITTSBURGH STEEL BENTO GRID */}
      <Reveal id="facility">
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-[#181C24]">
          <SectionHeader
            eyebrow="FACILITY GALLERY & VIRTUAL 360°"
            eyebrowTone="red"
            title="BUILT WITH PITTSBURGH STEEL"
            rightContent={
              <Link
                to="/virtual-tour"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7DB7FF] hover:text-white transition-colors"
              >
                <span>INSPECT ALL EQUIPMENT</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            }
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large 360 Walkthrough Tile */}
            <div className="md:col-span-2 relative h-72 sm:h-80 rounded-xl overflow-hidden border border-[#2A2E37] group bg-[#12151C]">
              <img
                src={walkthroughTile.image}
                alt={walkthroughTile.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 contrast-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090B0F] via-[#090B0F]/45 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute top-4 left-4">
                <Badge tone="purple">{walkthroughTile.badge}</Badge>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-md">
                  <h3 className="font-display text-2xl sm:text-[1.65rem] font-bold uppercase text-white leading-tight">
                    {walkthroughTile.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {walkthroughTile.description}
                  </p>
                </div>
                <Button to="/virtual-tour" variant="primary" size="md" className="shrink-0">
                  <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                  <span>{walkthroughTile.ctaText}</span>
                </Button>
              </div>
            </div>

            {/* Dumbbells to 150 lbs Tile */}
            <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden border border-[#2A2E37] group bg-[#12151C]">
              <img
                src={dumbbellTile.image}
                alt={dumbbellTile.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-70 contrast-115"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090B0F] via-[#090B0F]/55 to-transparent"
                aria-hidden="true"
              />
              <span className="absolute top-4 right-4 px-2 py-0.5 rounded bg-[#0A0C10]/85 border border-white/15 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-200">
                {dumbbellTile.chip}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 space-y-2">
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white leading-tight">
                  {dumbbellTile.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {dumbbellTile.description}
                </p>
                <Link
                  to="/virtual-tour"
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7DB7FF] hover:text-white pt-1"
                >
                  <span>{dumbbellTile.ctaText}</span>
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Bottom 3 Bento Tiles */}
            {lowerTiles.map((tile) => (
              <div
                key={tile.id}
                className="relative h-56 sm:h-60 rounded-xl overflow-hidden border border-[#2A2E37] group bg-[#12151C]"
              >
                <img
                  src={tile.image}
                  alt={tile.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-65 contrast-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#090B0F] via-[#090B0F]/55 to-transparent"
                  aria-hidden="true"
                />
                <span
                  className={`absolute top-3.5 left-3.5 w-7 h-7 rounded-lg border flex items-center justify-center ${
                    tile.iconColor === 'red'
                      ? 'bg-[#C8102E]/25 border-[#C8102E]/50 text-[#F87171]'
                      : tile.iconColor === 'green'
                        ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                        : 'bg-[#3B82F6]/25 border-[#3B82F6]/50 text-[#7DB7FF]'
                  }`}
                >
                  {tile.iconName === 'flame' && <Flame className="w-3.5 h-3.5" aria-hidden="true" />}
                  {tile.iconName === 'check' && <Check className="w-3.5 h-3.5" aria-hidden="true" />}
                  {tile.iconName === 'footprints' && (
                    <Footprints className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white">
                    {tile.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {tile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 6. PITTSBURGH'S DEDICATED COACHES */}
      <Reveal>
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t border-[#181C24]">
          <SectionHeader
            eyebrow="EXPERT GUIDANCE"
            eyebrowTone="red"
            title="PITTSBURGH'S DEDICATED COACHES"
            rightContent={
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                No pushy sales quotas. Only seasoned, certified coaches who know biomechanics,
                programming, and accountability.
              </p>
            }
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCoaches.map((coach) => (
              <CoachCard key={coach.id} coach={coach} variant="home" />
            ))}
          </div>

          <div className="mt-9 text-center">
            <Button to="/trainers" variant="secondary" size="md">
              <span>MEET ALL PERSONAL TRAINERS</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Button>
          </div>
        </section>
      </Reveal>

      {/* 7. REAL PITTSBURGHERS. REAL RESULTS. */}
      <Reveal id="reviews">
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t border-[#181C24]">
          <div className="flex justify-center gap-1 mb-2" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, idx) => (
              <Star
                key={idx}
                className="w-3.5 h-3.5 text-[#EF4444] fill-[#EF4444]"
                aria-hidden="true"
              />
            ))}
          </div>
          <SectionHeader
            align="center"
            eyebrow="NEIGHBORHOOD VERIFIED"
            eyebrowTone="slate"
            title="REAL PITTSBURGHERS. REAL RESULTS."
          />

          <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOME_TESTIMONIALS.map((item) => (
              <Card key={item.id} className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4" aria-hidden="true">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3 h-3 text-[#EF4444] fill-[#EF4444]"
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-[13px] italic text-slate-300 leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#222733] flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-display text-xs font-bold shrink-0 ${AVATAR_BG[item.avatarBg]}`}
                  >
                    {item.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-xs font-bold uppercase tracking-wider text-white">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-slate-400 truncate">{item.meta}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 8. DROP IN OR REACH OUT */}
      <Reveal>
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t border-[#181C24]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Location & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#EF4444] mb-1.5">
                  NEIGHBORHOOD DROP-IN
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white leading-tight">
                  DROP IN OR REACH OUT
                </h2>
                <p className="mt-2.5 text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                  Located right on South Highland Avenue between Shadyside and East Liberty. Ample
                  street parking and direct bus line accessibility.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#151923] border border-[#282E3B] flex items-center justify-center text-[#EF4444] shrink-0">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      GYM ADDRESS
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-white mt-0.5">
                      {SITE_INFO.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#151923] border border-[#282E3B] flex items-center justify-center text-[#7DB7FF] shrink-0">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      TELEPHONE
                    </p>
                    <a
                      href={SITE_INFO.phoneHref}
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#7DB7FF] transition-colors mt-0.5 block"
                    >
                      {SITE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#151923] border border-[#282E3B] flex items-center justify-center text-[#7DB7FF] shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      EMAIL
                    </p>
                    <a
                      href={SITE_INFO.emailHref}
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#7DB7FF] transition-colors mt-0.5 block"
                    >
                      {SITE_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <PittsburghMap />
            </div>

            {/* Right: Direct Message Form */}
            <div className="lg:col-span-7">
              <Card hoverable={false} className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold uppercase text-white">
                  SEND US A DIRECT MESSAGE
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Got questions about student rates, personal training, or 24/7 keycards? Send us a
                  quick note.
                </p>

                <form onSubmit={handleContactSubmit} noValidate className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      id="home-name"
                      label="Your Name"
                      required
                      placeholder="e.g. Tyler Dawson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={errors.name}
                    />
                    <InputField
                      id="home-email"
                      label="Email Address"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={errors.email}
                    />
                  </div>

                  <SelectField
                    id="home-interest"
                    label="Reason for Inquiry"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    options={[
                      { value: 'General Membership Inquiry', label: 'General Membership Inquiry' },
                      { value: '24/7 Keycard Access Upgrade', label: '24/7 Keycard Access Upgrade' },
                      { value: 'Personal Training Assessment', label: 'Personal Training Assessment' },
                      { value: 'Day / Week Visitor Pass', label: 'Day / Week Visitor Pass' },
                      { value: 'Student / Military Discount', label: 'Student / Military Discount' },
                    ]}
                  />

                  <TextareaField
                    id="home-message"
                    label="Message"
                    required
                    placeholder="Tell us what you're looking to achieve..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={errors.message}
                  />

                  <div className="pt-1">
                    <Button type="submit" variant="primary" size="lg">
                      <span>SEND MESSAGE</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </Reveal>
    </PageLayout>
  );
};
