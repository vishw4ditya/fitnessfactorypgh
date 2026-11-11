import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Dumbbell,
  Lock,
  Mail,
  MapPin,
  Phone,
  Play,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { CoachCard } from '../components/trainers/CoachCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
  InputField,
  SelectField,
  TextareaField,
  useToast,
} from '../components/ui/FormFields';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';
import {
  COACHES,
  COACH_FILTERS,
  Coach,
  CoachSpecialty,
  METHOD_PILLARS,
  OBJECTIVE_OPTIONS,
} from '../data/coaches';
import { SITE_INFO } from '../data/site';
import { TRAINERS_TESTIMONIAL } from '../data/testimonials';

const PILLAR_ICONS = {
  dumbbell: Dumbbell,
  shield: Shield,
  calendar: Calendar,
  users: Users,
};

const PILLAR_BADGE_STYLES = {
  red: 'bg-[#C8102E]/20 border-[#C8102E]/40 text-[#F87171]',
  blue: 'bg-[#1D4ED8]/25 border-[#3B82F6]/40 text-[#7DB7FF]',
  purple: 'bg-[#7C3AED]/25 border-[#8B5CF6]/40 text-[#C4B5FD]',
  slate: 'bg-[#262C39] border-[#3B4354] text-slate-200',
};

export const TrainersPage: React.FC = () => {
  const { showToast } = useToast();
  const location = useLocation();

  const [activeFilter, setActiveFilter] = useState<'All' | CoachSpecialty>('All');
  const [preferredCoach, setPreferredCoach] = useState(COACHES[0].id);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('Complete Beginner (0–6 months)');
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([
    'STRENGTH & POWER',
  ]);
  const [preferredDays, setPreferredDays] = useState('');
  const [packagePref, setPackagePref] = useState('Just Free Assessment (30 min)');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const coachParam = params.get('coach');
    if (coachParam && COACHES.some((c) => c.id === coachParam)) {
      setPreferredCoach(coachParam);
      document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const filteredCoaches =
    activeFilter === 'All'
      ? COACHES
      : COACHES.filter((c) => c.specialty === activeFilter);

  const handleBookAssessment = (coach: Coach) => {
    setPreferredCoach(coach.id);
    showToast(
      'Coach Selected',
      `${coach.name} is pre-selected in the consultation form below.`,
      'info'
    );
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleObjective = (obj: string) => {
    setSelectedObjectives((prev) =>
      prev.includes(obj) ? prev.filter((item) => item !== obj) : [...prev, obj]
    );
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a valid phone number.';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Please enter a valid email address.';
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const coachName =
      COACHES.find((c) => c.id === preferredCoach)?.name ?? 'Fitness Factory Coach';
    showToast(
      'Assessment Request Submitted',
      `${coachName} will reach out within 24 hours to schedule your complimentary 30-minute session.`
    );
    setFullName('');
    setPhone('');
    setEmail('');
    setPreferredDays('');
    setNotes('');
  };

  return (
    <PageLayout
      title="Personal Trainers & Certified Coaches | Fitness Factory Pittsburgh"
      description="Meet Pittsburgh's dedicated strength, mobility, bodybuilding, and conditioning coaches. Free 30-minute assessment, standardized fair rates, zero contracts."
    >
      {/* 1. HERO + STATS CARD */}
      <section className="relative overflow-hidden border-b border-[#191E28] bg-[#0A0C10]">
        <div
          className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#3B82F6]/12 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C8102E]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <Badge tone="dark" dot>
                AUTHENTIC PITTSBURGH COACHING STAFF
              </Badge>

              <h1 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-[3.8rem] text-white">
                MEET YOUR <span className="text-gradient-blue-pink">COACHES</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Experienced, certified trainers who care about your progress &mdash; no
                cookie-cutter programs, no boutique pretension, just customized grit, biomechanics,
                and sustainable power.
              </p>
            </div>

            {/* Right Stats Card */}
            <Card
              hoverable={false}
              className="px-6 py-5 grid grid-cols-3 divide-x divide-[#262B37] shrink-0 lg:min-w-[410px]"
            >
              <div className="pr-4 sm:pr-6">
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#F87171] leading-none">
                  40+
                </p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-400 mt-1.5">
                  COMBINED YRS EXP
                </p>
              </div>
              <div className="px-4 sm:px-6">
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#7DB7FF] leading-none">
                  100%
                </p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-400 mt-1.5">
                  CERTIFIED PROS
                </p>
              </div>
              <div className="pl-4 sm:pl-6">
                <p className="font-display text-2xl sm:text-3xl font-bold text-white leading-none">
                  1-on-1
                </p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-400 mt-1.5">
                  ZERO GIMMICKS
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="border-b border-[#1A1F29] bg-[#0D1016]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 mr-1">
              SPECIALTY FOCUS:
            </span>
            {COACH_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF] ${
                    isActive
                      ? 'bg-[#C8102E] text-white shadow-[0_4px_14px_rgba(200,16,46,0.45)] border border-[#F43F5E]/40'
                      : 'bg-[#141821] text-slate-300 border border-[#282E3B] hover:border-[#3F485A] hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-300">
            <Award className="w-3.5 h-3.5 text-[#7DB7FF]" aria-hidden="true" />
            <span>Free consultation included with all coaches</span>
          </div>
        </div>
      </section>

      {/* 3. 2x2 COACH CARDS GRID */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCoaches.map((coach) => (
            <CoachCard
              key={coach.id}
              coach={coach}
              variant="full"
              onBookAssessment={handleBookAssessment}
            />
          ))}
        </div>

        {/* 4. RATE STRIP */}
        <div className="mt-8 rounded-xl bg-[#131720] border border-[#262B37] p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <span className="w-10 h-10 rounded-full bg-[#1D4ED8]/20 border border-[#3B82F6]/35 flex items-center justify-center text-[#7DB7FF] shrink-0">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-lg font-bold uppercase text-white">
                STANDARDIZED FAIR PITTSBURGH RATES
              </h2>
              <p className="text-xs text-slate-400">
                No hidden registration fees or lock-ins. Sessions never expire and are shareable
                across household members.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <span className="px-3.5 py-2 rounded-full bg-[#101827] border border-[#3B82F6]/45 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7DB7FF]">
              ZERO UPFRONT CONTRACT
            </span>
            <Button to="/memberships#comparison" variant="secondary" size="sm">
              <span>COMPARE ALL OPTIONS</span>
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* 5. THE FITNESS FACTORY METHOD */}
      <Reveal>
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-[#181C24]">
          <SectionHeader
            eyebrow="OUR COACHING STANDARD"
            eyebrowTone="red"
            title="THE FITNESS FACTORY METHOD"
            subtitle="We don't chase fitness fads, influencer tricks, or flashy equipment gimmicks. We follow a time-tested training blueprint built on work ethic and human anatomy."
            rightContent={
              <Badge tone="dark" dot>
                BUILT FOR REAL LIFE
              </Badge>
            }
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {METHOD_PILLARS.map((pillar) => {
              const Icon = PILLAR_ICONS[pillar.iconName];
              return (
                <Card key={pillar.number} className="p-6 space-y-3">
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center ${PILLAR_BADGE_STYLES[pillar.accentColor]}`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {pillar.number}
                  </p>
                  <h3 className="font-display text-xl font-bold uppercase text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                </Card>
              );
            })}
          </div>

          {/* 6. WIDE IMAGE BANNER */}
          <div className="mt-8 relative h-60 sm:h-72 rounded-xl overflow-hidden border border-[#2A2E37] group">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
              alt="Athletes and trainers working on the Pittsburgh gym floor"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-70 contrast-110"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-[#080A0E]/50 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                  FLOOR COACHING &amp; 24/7 ACCESS INTEGRATED
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300 mt-1">
                  Coaching clients receive full member keycard access to continue programming
                  off-hours.
                </p>
              </div>
              <Button to="/virtual-tour" variant="outline" size="md" className="shrink-0">
                <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                <span>TAKE VIRTUAL TOUR</span>
              </Button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. START YOUR FREE CONSULTATION */}
      <Reveal id="consultation-form">
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t border-[#181C24]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Info & Testimonial */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#EF4444] inline-flex items-center gap-1.5 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" aria-hidden="true" />
                  GET IN TOUCH
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white leading-[1.02]">
                  START YOUR FREE CONSULTATION
                </h2>
                <p className="mt-2.5 text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                  Every coaching journey begins with a complimentary 30-minute sit-down and
                  movement screen. We discuss your history, goals, schedule, and match you with the
                  right program.
                </p>
              </div>

              <Card hoverable={false} className="p-5 space-y-4">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#7DB7FF]">
                  DIRECT GYM COMMUNICATIONS
                </h3>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0D1017] border border-[#262C38] flex items-center justify-center text-[#7DB7FF] shrink-0">
                      <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        CALL OR TEXT
                      </p>
                      <a
                        href={SITE_INFO.phoneHref}
                        className="font-display text-lg font-bold text-white hover:text-[#7DB7FF]"
                      >
                        {SITE_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0D1017] border border-[#262C38] flex items-center justify-center text-[#7DB7FF] shrink-0">
                      <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        EMAIL DIRECTLY
                      </p>
                      <a
                        href={SITE_INFO.emailHref}
                        className="text-slate-200 hover:text-[#7DB7FF] font-medium"
                      >
                        {SITE_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0D1017] border border-[#262C38] flex items-center justify-center text-[#F87171] shrink-0">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        TRAINING LOCATION
                      </p>
                      <p className="text-slate-200 font-medium">{SITE_INFO.fullAddress}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#222733] flex items-center gap-2 text-[11px] text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-[#EF4444] shrink-0" aria-hidden="true" />
                  <span>Staffed Front Desk: {SITE_INFO.hours.compact}</span>
                </div>
              </Card>

              <Card hoverable={false} className="p-4 flex items-start gap-3">
                <Star className="w-4 h-4 text-[#7DB7FF] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs italic text-slate-300 leading-relaxed">
                    {TRAINERS_TESTIMONIAL.quote}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7DB7FF] mt-2">
                    {TRAINERS_TESTIMONIAL.author}
                  </p>
                </div>
              </Card>
            </div>

            {/* Right: Coach Booking Request Form */}
            <div className="lg:col-span-7">
              <Card topAccent="gradient" hoverable={false} className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase text-white">
                      COACH BOOKING REQUEST
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fill out this short form and your trainer will contact you within 24 hours.
                    </p>
                  </div>
                  <Calendar className="w-5 h-5 text-[#F87171] shrink-0" aria-hidden="true" />
                </div>

                <form onSubmit={handleConsultSubmit} noValidate className="mt-6 space-y-4">
                  <SelectField
                    id="coach-select"
                    label="Preferred Coach"
                    value={preferredCoach}
                    onChange={(e) => setPreferredCoach(e.target.value)}
                    options={COACHES.map((c) => ({ value: c.id, label: c.selectLabel }))}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      id="consult-name"
                      label="Your Full Name"
                      required
                      placeholder="e.g. Jordan Smith"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      error={errors.fullName}
                    />
                    <InputField
                      id="consult-phone"
                      label="Phone Number"
                      type="tel"
                      required
                      placeholder="412-555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      error={errors.phone}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      id="consult-email"
                      label="Email Address"
                      type="email"
                      required
                      placeholder="jordan@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={errors.email}
                    />
                    <SelectField
                      id="consult-exp"
                      label="Experience Level"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      options={[
                        {
                          value: 'Complete Beginner (0–6 months)',
                          label: 'Complete Beginner (0–6 months)',
                        },
                        {
                          value: 'Intermediate Lifter (1–3 years)',
                          label: 'Intermediate Lifter (1–3 years)',
                        },
                        {
                          value: 'Experienced / Competitive (3+ years)',
                          label: 'Experienced / Competitive (3+ years)',
                        },
                        {
                          value: 'Returning After Injury / Break',
                          label: 'Returning After Injury / Break',
                        },
                      ]}
                    />
                  </div>

                  {/* Multi-select Objective Chips */}
                  <div className="space-y-2">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                      PRIMARY OBJECTIVES (SELECT ALL THAT APPLY)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {OBJECTIVE_OPTIONS.map((obj) => {
                        const active = selectedObjectives.includes(obj);
                        return (
                          <button
                            key={obj}
                            type="button"
                            aria-pressed={active}
                            onClick={() => toggleObjective(obj)}
                            className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.09em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF] ${
                              active
                                ? 'bg-[#1D4ED8]/30 text-[#93C5FD] border border-[#3B82F6]/60'
                                : 'bg-[#0C0F15] text-slate-400 border border-[#282D38] hover:text-slate-200 hover:border-[#3D4556]'
                            }`}
                          >
                            {obj}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      id="consult-days"
                      label="Preferred Days"
                      placeholder="e.g. Mon / Wed / Fri mornings"
                      value={preferredDays}
                      onChange={(e) => setPreferredDays(e.target.value)}
                    />
                    <SelectField
                      id="consult-package"
                      label="Package Preference"
                      value={packagePref}
                      onChange={(e) => setPackagePref(e.target.value)}
                      options={[
                        {
                          value: 'Just Free Assessment (30 min)',
                          label: 'Just Free Assessment (30 min)',
                        },
                        { value: 'Single Session ($65)', label: 'Single Session ($65)' },
                        { value: '5-Pack ($300)', label: '5-Pack ($300)' },
                        { value: '10-Pack ($550)', label: '10-Pack ($550)' },
                      ]}
                    />
                  </div>

                  <TextareaField
                    id="consult-notes"
                    label="Injuries, Goals, or Past Experience"
                    placeholder="Tell us what you're working toward or if you have any existing joint issues..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Lock className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                      <span>No spam, direct to trainer inbox.</span>
                    </span>
                    <Button type="submit" variant="primary" size="lg">
                      <span>SUBMIT REQUEST</span>
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
