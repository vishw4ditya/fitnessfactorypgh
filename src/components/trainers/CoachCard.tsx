import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Mail, Quote } from 'lucide-react';
import { Coach } from '../../data/coaches';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface CoachCardProps {
  coach: Coach;
  variant?: 'home' | 'full';
  onBookAssessment?: (coach: Coach) => void;
}

export const CoachCard: React.FC<CoachCardProps> = ({
  coach,
  variant = 'full',
  onBookAssessment,
}) => {
  if (variant === 'home') {
    return (
      <Card className="overflow-hidden flex flex-col">
        {/* Coach Photo with Bottom Tag Overlay */}
        <div className="relative h-60 overflow-hidden bg-[#0E1117]">
          <img
            src={coach.photo}
            alt={`${coach.name} - ${coach.role}`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105 brightness-90 contrast-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#13161D] via-[#13161D]/25 to-transparent"
            aria-hidden="true"
          />
          <span className="absolute bottom-3 left-4 inline-flex items-center px-2.5 py-1 rounded bg-[#0A0C10]/85 border border-white/15 text-[9px] font-bold uppercase tracking-[0.14em] text-[#7DB7FF]">
            {coach.specialtyTag}
          </span>
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-white tracking-tight">
              {coach.name}
            </h3>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#EF4444] mt-0.5">
              {coach.role}
            </p>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed">{coach.bio}</p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-[#232833] flex items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.12em]">
            <span className="text-slate-500">{coach.yearsLabel}</span>
            <Link
              to={`/trainers?coach=${coach.id}`}
              className="inline-flex items-center gap-1 text-[#7DB7FF] hover:text-white transition-colors"
            >
              <span>BIO &amp; RATES</span>
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card topAccent={coach.accentTop} className="p-5 sm:p-6 flex flex-col justify-between">
      <div>
        {/* Top Profile Row */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-lg overflow-hidden border border-[#2C323F] shrink-0 bg-[#0D1017]">
            <img
              src={coach.photo}
              alt={`${coach.name} - ${coach.role}`}
              loading="lazy"
              className="w-full h-full object-cover object-top brightness-90 contrast-110"
            />
            <span className="absolute bottom-1.5 right-1.5 rounded px-1.5 py-0.5 bg-[#0A0C10]/90 border border-white/20 text-[9px] font-bold uppercase tracking-wider text-white">
              {coach.yearsBadge}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            {/* Certification Tags */}
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              {coach.certifications.map((cert, idx) => (
                <span
                  key={cert}
                  className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.12em] ${
                    idx === 0
                      ? 'bg-[#1D4ED8]/25 text-[#7DB7FF] border border-[#3B82F6]/35'
                      : 'bg-[#1B202A] text-slate-300 border border-[#2E3545]'
                  }`}
                >
                  {cert}
                </span>
              ))}
            </div>

            <h3 className="font-display text-2xl sm:text-[1.7rem] font-bold uppercase text-white leading-none tracking-tight">
              {coach.name}
            </h3>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F87171] mt-1">
              {coach.role}
            </p>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">{coach.bio}</p>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="mt-4 rounded-lg bg-[#0D1017] border border-[#222733] px-3.5 py-3 flex items-start gap-2.5">
          <Quote className="w-3.5 h-3.5 text-[#EF4444] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs italic text-slate-300 leading-relaxed">{coach.quote}</p>
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="mt-4 space-y-3.5">
        <div className="grid grid-cols-3 rounded-lg bg-[#0D1017] border border-[#222733] divide-x divide-[#222733] text-center overflow-hidden">
          <div className="py-2.5 px-2">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              SINGLE
            </span>
            <span className="font-display text-lg font-bold text-white">{coach.rates.single}</span>
          </div>
          <div className="py-2.5 px-2 bg-[#161A23]">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              5-PACK
            </span>
            <span className="font-display text-lg font-bold text-white">
              {coach.rates.fivePack}
            </span>
          </div>
          <div className="py-2.5 px-2">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              10-PACK
            </span>
            <span className="font-display text-lg font-bold text-[#7DB7FF]">
              {coach.rates.tenPack}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            variant="primary"
            size="md"
            className="flex-1"
            onClick={() => onBookAssessment?.(coach)}
          >
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            <span>BOOK FREE ASSESSMENT</span>
          </Button>
          <button
            type="button"
            onClick={() => onBookAssessment?.(coach)}
            aria-label={`Message ${coach.name}`}
            title={`Request consultation with ${coach.name}`}
            className="w-10 h-10 rounded-full bg-[#171B24] hover:bg-[#222836] border border-[#2D3443] flex items-center justify-center text-slate-200 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB7FF]"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </Card>
  );
};
