import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Dumbbell,
  KeyRound,
  Lock,
  Mail,
  MapPin,
  PhoneCall,
} from 'lucide-react';
import { FAQItem } from '../components/faq/FAQItem';
import { PageLayout } from '../components/layout/PageLayout';
import { ComparisonTable } from '../components/pricing/ComparisonTable';
import { PricingCard } from '../components/pricing/PricingCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
  CheckboxCard,
  InputField,
  SelectField,
  useToast,
} from '../components/ui/FormFields';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';
import { MEMBERSHIP_FAQS } from '../data/faqs';
import { MEMBERSHIP_TIERS, MembershipTier, ONBOARDING_PLANS } from '../data/plans';
import { SITE_INFO } from '../data/site';

export const MembershipsPage: React.FC = () => {
  const { showToast } = useToast();
  const location = useLocation();

  const [openFaqId, setOpenFaqId] = useState<string | null>(MEMBERSHIP_FAQS[0].id);
  const [selectedPlan, setSelectedPlan] = useState('individual-monthly');
  const [add247, setAdd247] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const planParam = params.get('plan');
    const addonParam = params.get('addon');
    if (planParam && ONBOARDING_PLANS.some((p) => p.value === planParam)) {
      setSelectedPlan(planParam);
    }
    if (addonParam === '247') {
      setAdd247(true);
    }
    if (location.hash === '#signup') {
      document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#comparison') {
      document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTier = (tier: MembershipTier) => {
    setSelectedPlan(tier.selectOptionValue);
    showToast('Tier Selected', `${tier.title} pre-selected in the onboarding form below.`, 'info');
    scrollToSignup();
  };

  const handleAdd247Upgrade = () => {
    setAdd247(true);
    showToast(
      '24/7 Keycard Upgrade Added',
      'The +$129/yr RFID key FOB add-on is checked in your checkout form.',
      'info'
    );
    scrollToSignup();
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!firstName.trim()) next.firstName = 'First name is required.';
    if (!lastName.trim()) next.lastName = 'Last name is required.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Enter a valid phone number.';
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const chosenLabel =
      ONBOARDING_PLANS.find((p) => p.value === selectedPlan)?.label ?? selectedPlan;
    showToast(
      'Membership Activated',
      `Welcome, ${firstName.trim()}! Plan: ${chosenLabel}${
        add247 ? ' + 24/7 Keycard Access (+$129/yr)' : ''
      }. Pick up your key FOB at ${SITE_INFO.addressLine1}.`
    );
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
  };

  return (
    <PageLayout
      title="Memberships & Transparent Pricing | Fitness Factory Pittsburgh"
      description="Transparent month-to-month gym memberships in East Liberty and Shadyside. Zero initiation fees, $49/mo individual, $85/mo couples, $39/mo student/military, and $129/yr 24/7 keycard upgrade."
    >
      {/* 1. HERO + LIVE FLOOR METRIC CARD */}
      <section className="relative overflow-hidden border-b border-[#191E28] bg-[#0A0C10]">
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#C8102E]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-[#3B82F6]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-5">
              <Badge tone="dark" dot>
                EAST LIBERTY &amp; SHADYSIDE SINCE DAY ONE
              </Badge>

              <h1 className="font-display font-bold uppercase tracking-tight leading-[0.96] text-4xl sm:text-5xl lg:text-[3.75rem]">
                <span className="block text-white">TRANSPARENT RATES.</span>
                <span className="block text-[#7DB7FF]">NO GIMMICKS.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                No hidden maintenance fees, no multi-year cancellation lock-ins, and zero
                franchise corporate fluff. Honest, upfront pricing built for our Pittsburgh lifting
                community.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-200">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7DB7FF]" aria-hidden="true" />
                  ZERO INITIATION FEES
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7DB7FF]" aria-hidden="true" />
                  24/7 SECURE FOB ACCESS
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7DB7FF]" aria-hidden="true" />
                  CANCEL ANYTIME POLICY
                </span>
              </div>
            </div>

            {/* Right: Live Floor Metric Card */}
            <div className="lg:col-span-5">
              <Card
                hoverable={false}
                glow="blue"
                className="p-6 relative overflow-hidden bg-gradient-to-br from-[#141822] to-[#10141C]"
              >
                <Dumbbell
                  className="w-28 h-28 text-white/[0.03] absolute -bottom-4 -right-3 -rotate-12 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#EF4444]">
                      FACILITY STATUS
                    </span>
                    <Badge tone="blue">24/7 READY</Badge>
                  </div>

                  <h2 className="font-display text-2xl font-bold uppercase text-white leading-none">
                    LIVE FLOOR METRIC
                  </h2>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em]">
                      <span className="text-slate-400">CARDIO &amp; IRON CAPACITY</span>
                      <span className="text-[#7DB7FF]">OPTIMAL (42%)</span>
                    </div>
                    <div
                      className="h-2 w-full rounded-full bg-[#090B10] border border-[#232834] overflow-hidden"
                      role="progressbar"
                      aria-valuenow={42}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label="Gym floor capacity 42 percent"
                    >
                      <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Unrestricted access to Hammer Strength, free weights up to 150 lbs, Olympic
                    platforms, and high-intensity cardio decks.
                  </p>

                  <a
                    href="#comparison"
                    className="w-full inline-flex items-center justify-between rounded-lg bg-[#0C0F16] hover:bg-[#161B26] border border-[#272D3A] px-4 py-2.5 text-[11px] font-display font-bold uppercase tracking-[0.12em] text-white transition-colors"
                  >
                    <span>COMPARE ALL OPTIONS</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#7DB7FF]" aria-hidden="true" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHTED BANNER: 24/7 ACCESS UPGRADE */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-xl bg-gradient-to-r from-[#101829] via-[#131823] to-[#171920] border border-[#2A3346] p-5 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-card">
          <div className="flex items-start sm:items-center gap-4">
            <span className="w-11 h-11 rounded-full bg-[#0A0E17] border border-[#3B82F6]/35 flex items-center justify-center shrink-0">
              <KeyRound className="w-5 h-5 text-[#7DB7FF]" aria-hidden="true" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Badge tone="purple">HIGH DEMAND</Badge>
                <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white">
                  24/7 ACCESS UPGRADE
                </h2>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                Work shifts, early risers, or late-night iron therapy. Secure FOB keycard for
                round-the-clock facility entry.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 self-end md:self-center shrink-0">
            <div className="text-right">
              <span className="font-display text-2xl sm:text-3xl font-bold text-white leading-none block">
                $129
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                PER YEAR ADD-ON
              </span>
            </div>
            <Button variant="primary" size="md" onClick={handleAdd247Upgrade}>
              ADD TO PASS
            </Button>
          </div>
        </div>
      </section>

      {/* 3. SELECT YOUR TIER (4 PRICING CARDS) */}
      <Reveal>
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <SectionHeader
            eyebrow="STRAIGHTFORWARD MEMBERSHIPS"
            eyebrowTone="red"
            title="SELECT YOUR TIER"
            rightContent={
              <p className="text-xs text-slate-400 leading-relaxed">
                Every membership includes full equipment access, clean locker rooms, showers, and
                neighborhood camaraderie.
              </p>
            }
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MEMBERSHIP_TIERS.map((tier) => (
              <PricingCard key={tier.id} tier={tier} onSelect={handleSelectTier} />
            ))}
          </div>
        </section>
      </Reveal>

      {/* 4. PLAN COMPARISON TABLE */}
      <Reveal id="comparison">
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#181C24]">
          <SectionHeader
            eyebrow="AT-A-GLANCE MATRIX"
            eyebrowTone="blue"
            title="PLAN COMPARISON"
          />

          <div className="mt-7">
            <ComparisonTable />
          </div>
        </section>
      </Reveal>

      {/* 5. HONEST ANSWERS FAQ */}
      <Reveal>
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-[#181C24]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4 space-y-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#EF4444] mb-1.5">
                  GOT QUESTIONS?
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white leading-tight">
                  HONEST ANSWERS.
                </h2>
                <p className="mt-2.5 text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                  We pride ourselves on direct communication. If your question is not listed here,
                  speak directly to our front desk team during staffed hours or drop us an email.
                </p>
              </div>

              <Card hoverable={false} className="p-5 space-y-2">
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#7DB7FF]">
                  <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>FRONT DESK DIRECT</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Highland Ave staff is ready to handle your membership questions.
                </p>
                <a
                  href={SITE_INFO.phoneHref}
                  className="block font-display text-2xl font-bold text-white hover:text-[#7DB7FF] transition-colors pt-1"
                >
                  {SITE_INFO.phone}
                </a>
              </Card>
            </div>

            <div className="lg:col-span-8 space-y-3.5">
              {MEMBERSHIP_FAQS.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFaqId === faq.id}
                  onToggle={() =>
                    setOpenFaqId((prev) => (prev === faq.id ? null : faq.id))
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 6. START LIFTING TODAY ONBOARDING SIGNUP */}
      <Reveal id="signup">
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-[#181C24]">
          <Card
            hoverable={false}
            className="p-6 sm:p-8 lg:p-10 relative overflow-hidden bg-gradient-to-br from-[#141720] via-[#131720] to-[#11192A]"
          >
            <div
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#3B82F6]/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Pitch & Info */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#EF4444]">
                    IMMEDIATE ONBOARDING
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white leading-tight">
                    START LIFTING TODAY.
                  </h2>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                    Lock in your membership online in under 2 minutes. Your account is activated
                    instantly, and you can pick up your pre-cut 24/7 key FOB during your next visit.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#7DB7FF] shrink-0" aria-hidden="true" />
                    <span>{SITE_INFO.fullAddress}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#7DB7FF] shrink-0" aria-hidden="true" />
                    <span>Staffed: {SITE_INFO.hours.compact}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#7DB7FF] shrink-0" aria-hidden="true" />
                    <span>{SITE_INFO.email}</span>
                  </li>
                </ul>

                <div className="rounded-lg bg-[#0D1016] border border-[#242A36] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-300 mb-1">
                    NEIGHBORHOOD GUARANTEE
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Locally owned and operated in Pittsburgh. No predatory collection clauses,
                    simple written cancellations, and real-set iron.
                  </p>
                </div>
              </div>

              {/* Right Sign-Up Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleCheckoutSubmit}
                  noValidate
                  className="rounded-xl bg-[#0A0D13] border border-[#222733] p-5 sm:p-7 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      id="signup-first"
                      label="First Name"
                      required
                      placeholder="Marcus"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      error={errors.firstName}
                    />
                    <InputField
                      id="signup-last"
                      label="Last Name"
                      required
                      placeholder="Miller"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      error={errors.lastName}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      id="signup-email"
                      label="Email Address"
                      type="email"
                      required
                      placeholder="marcus@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={errors.email}
                    />
                    <InputField
                      id="signup-phone"
                      label="Phone Number"
                      type="tel"
                      required
                      placeholder="412-555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      error={errors.phone}
                    />
                  </div>

                  <SelectField
                    id="signup-plan"
                    label="Selected Plan"
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    options={ONBOARDING_PLANS}
                  />

                  <CheckboxCard
                    id="signup-247"
                    checked={add247}
                    onChange={setAdd247}
                    title="Add 24/7 Keycard Entry"
                    subtitle="Access gym outside staffed desk hours"
                    priceTag="+$129/yr"
                  />

                  <div className="pt-1">
                    <Button type="submit" variant="primary" size="lg" fullWidth>
                      <span>CONFIRM &amp; PROCEED TO CHECKOUT</span>
                      <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                    </Button>
                  </div>

                  <p className="text-center text-[10px] text-slate-500">
                    Secured with 256-bit encryption. No long-term commitments or surprise maintenance
                    fees.
                  </p>
                </form>
              </div>
            </div>
          </Card>
        </section>
      </Reveal>
    </PageLayout>
  );
};
