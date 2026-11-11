import React, { useState } from 'react';
import { ArrowRight, Check, Compass, Maximize2, RotateCw } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { VIRTUAL_TOUR_ZONES } from '../data/facilities';

export const VirtualTourPage: React.FC = () => {
  const [activeZoneId, setActiveZoneId] = useState(VIRTUAL_TOUR_ZONES[0].id);
  const [panOffset, setPanOffset] = useState(50);

  const activeZone =
    VIRTUAL_TOUR_ZONES.find((z) => z.id === activeZoneId) ?? VIRTUAL_TOUR_ZONES[0];

  return (
    <PageLayout
      title="Virtual 360° Tour | Fitness Factory Pittsburgh"
      description="Explore Fitness Factory Pittsburgh's iron floor, 150 lb dumbbells, Olympic racks, cardio deck, and turf zone at 212 S. Highland Ave."
    >
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <Badge tone="purple">MATTERPORT 360° WALKTHROUGH PREVIEW</Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase text-white leading-[0.98]">
              EXPLORE <span className="text-[#7DB7FF]">212 S. HIGHLAND AVE</span>
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Step onto our East Liberty &amp; Shadyside floor before you drop in. Switch zones
              below and pan across our racks, iron dumbbells, and conditioning deck.
            </p>
          </div>
          <Button to="/memberships#signup" variant="primary" size="lg">
            <span>JOIN OR GRAB A $15 DAY PASS</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        {/* Zone Switcher Tabs */}
        <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Facility tour zones">
          {VIRTUAL_TOUR_ZONES.map((zone) => {
            const active = zone.id === activeZone.id;
            return (
              <button
                key={zone.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setActiveZoneId(zone.id);
                  setPanOffset(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-display font-semibold uppercase tracking-[0.09em] transition-all ${
                  active
                    ? 'bg-[#C8102E] text-white shadow-[0_6px_16px_rgba(200,16,46,0.45)]'
                    : 'bg-[#14171D] text-slate-300 border border-[#2A2E37] hover:border-[#3E4554]'
                }`}
              >
                {zone.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Panoramic Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <Card hoverable={false} className="lg:col-span-8 overflow-hidden relative min-h-[360px] sm:min-h-[440px]">
            <img
              src={activeZone.image}
              alt={activeZone.name}
              style={{ objectPosition: `${panOffset}% center` }}
              className="w-full h-full object-cover transition-[object-position] duration-300 brightness-80 contrast-110"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#090B0F] via-transparent to-[#090B0F]/35 pointer-events-none"
              aria-hidden="true"
            />

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <Badge tone="dark" dot>
                {activeZone.eyebrow}
              </Badge>
            </div>

            <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-[#0B0E14]/90 backdrop-blur-md border border-white/15 px-4 py-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <Compass className="w-4 h-4 text-[#7DB7FF]" aria-hidden="true" />
                <span className="font-display uppercase tracking-wider font-semibold">
                  360° HORIZONTAL PAN
                </span>
              </div>
              <div className="flex items-center gap-3 flex-1 max-w-xs">
                <RotateCw className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={panOffset}
                  onChange={(e) => setPanOffset(Number(e.target.value))}
                  aria-label="Pan 360 degree floor view"
                  className="w-full accent-[#C8102E] cursor-ew-resize"
                />
                <Maximize2 className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              </div>
            </div>
          </Card>

          <Card topAccent="blue" hoverable={false} className="lg:col-span-4 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7DB7FF]">
                {activeZone.eyebrow}
              </p>
              <h2 className="font-display text-2xl font-bold uppercase text-white">
                {activeZone.name}
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                {activeZone.description}
              </p>

              <ul className="space-y-2.5 pt-2 border-t border-[#232834]">
                {activeZone.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="w-4 h-4 rounded-full bg-[#3B82F6]/20 text-[#7DB7FF] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" aria-hidden="true" />
                    </span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#232834] space-y-2.5">
              <Button to="/contact" variant="secondary" fullWidth>
                SCHEDULE AN IN-PERSON WALKTHROUGH
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};
