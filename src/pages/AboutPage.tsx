import React from 'react';
import { ArrowRight, Dumbbell, MapPin, ShieldCheck, Users } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SITE_INFO } from '../data/site';

export const AboutPage: React.FC = () => {
  return (
    <PageLayout
      title="About Us | Fitness Factory Pittsburgh"
      description="Locally owned neighborhood gym in East Liberty / Shadyside built with Pittsburgh steel, honest pricing, and zero corporate lock-ins."
    >
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <Badge tone="dark" dot>
              EAST LIBERTY &bull; SHADYSIDE HERITAGE
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase text-white leading-[0.97]">
              BUILT WITH <span className="text-[#7DB7FF]">PITTSBURGH STEEL</span> &amp; PRIDE
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Fitness Factory Pittsburgh exists for one straightforward reason: East Liberty and
              Shadyside deserved a clean, well-stocked, locally run gym where serious lifting and
              everyday wellness live side by side without franchise gimmicks.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              At {SITE_INFO.fullAddress}, our members range from first-time lifters and graduate
              students at Pitt and CMU to nurses on night shifts and competitive powerlifters.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button to="/memberships" variant="primary" size="lg">
                <span>VIEW TRANSPARENT PLANS</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button to="/trainers" variant="secondary" size="lg">
                MEET THE COACHES
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden border border-[#2A2E37]">
              <img
                src="https://images.unsplash.com/photo-1682965635455-3b4ab0cd9023?auto=format&fit=crop&w=1400&q=80"
                alt="Inside Fitness Factory Pittsburgh weight room"
                className="w-full h-full object-cover brightness-80 contrast-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#EF4444]" aria-hidden="true" />
                  {SITE_INFO.fullAddress}
                </span>
                <Badge tone="blue">24/7 KEYCARD</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card topAccent="blue" className="p-6 space-y-2.5">
            <Dumbbell className="w-5 h-5 text-[#7DB7FF]" aria-hidden="true" />
            <h2 className="font-display text-xl font-bold uppercase text-white">REAL EQUIPMENT</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dumbbells up to 150 lbs, Hammer Strength plate-loaded machines, six power racks,
              deadlift platforms, StairMasters, and turf lanes kept maintained weekly.
            </p>
          </Card>

          <Card topAccent="red" className="p-6 space-y-2.5">
            <ShieldCheck className="w-5 h-5 text-[#F87171]" aria-hidden="true" />
            <h2 className="font-display text-xl font-bold uppercase text-white">
              ZERO CORPORATE TRAPS
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              No hidden annual enhancement fees, no multi-year cancellation hoops, and honest
              student, military, and couple pricing.
            </p>
          </Card>

          <Card topAccent="purple" className="p-6 space-y-2.5">
            <Users className="w-5 h-5 text-[#C4B5FD]" aria-hidden="true" />
            <h2 className="font-display text-xl font-bold uppercase text-white">
              NEIGHBORHOOD CULTURE
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Everyone re-racks their plates, spots neighbors when asked, and trains without ego or
              camera tripods blocking the racks.
            </p>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};
