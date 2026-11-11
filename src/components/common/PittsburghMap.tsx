import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { SITE_INFO } from '../../data/site';

export const PittsburghMap: React.FC = () => {
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=212+S+Highland+Ave+Pittsburgh+PA+15206';

  return (
    <div className="relative rounded-xl overflow-hidden border border-[#2A2E37] bg-[#8FA3B5] shadow-card group">
      {/* Stylized Carto-style East Liberty / Shadyside Street Map */}
      <svg
        viewBox="0 0 600 260"
        className="w-full h-48 sm:h-52 object-cover block select-none"
        role="img"
        aria-label="Map showing 212 S. Highland Ave between East Liberty and Shadyside in Pittsburgh"
      >
        {/* Urban base blocks */}
        <rect width="600" height="260" fill="#A9BBC9" />
        {/* Parks / Mellon Park & Highland Park greens */}
        <path d="M 35 15 L 155 15 L 140 75 L 20 65 Z" fill="#92B89A" opacity="0.65" />
        <path d="M 410 155 L 555 140 L 570 220 L 420 230 Z" fill="#92B89A" opacity="0.6" />
        <path d="M 210 10 L 290 8 L 285 48 L 205 52 Z" fill="#92B89A" opacity="0.45" />

        {/* Allegheny / neighborhood grid minor streets */}
        <g stroke="#CBD7E2" strokeWidth="2.5" opacity="0.85">
          <line x1="0" y1="55" x2="600" y2="55" />
          <line x1="0" y1="95" x2="600" y2="105" />
          <line x1="0" y1="145" x2="600" y2="155" />
          <line x1="0" y1="205" x2="600" y2="210" />
          <line x1="90" y1="0" x2="90" y2="260" />
          <line x1="175" y1="0" x2="175" y2="260" />
          <line x1="255" y1="0" x2="255" y2="260" />
          <line x1="345" y1="0" x2="345" y2="260" />
          <line x1="435" y1="0" x2="435" y2="260" />
          <line x1="515" y1="0" x2="515" y2="260" />
        </g>

        {/* Major Pittsburgh arteries (Penn Ave, Centre Ave, Baum Blvd, S Highland Ave) */}
        <g stroke="#E5ECF2" strokeWidth="5.5" strokeLinecap="round">
          <path d="M 0 82 Q 280 90 600 68" fill="none" />
          <path d="M 0 132 Q 300 120 600 142" fill="none" />
          <path d="M 0 185 L 600 175" fill="none" />
          <path d="M 300 0 L 296 260" fill="none" />
        </g>

        {/* Subtle highway accent */}
        <path d="M 15 245 Q 250 185 590 240" fill="none" stroke="#859BB0" strokeWidth="6" />

        {/* Neighborhood typography */}
        <text
          x="105"
          y="42"
          fill="#3E4E5E"
          fontSize="11"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
        >
          BLOOMFIELD
        </text>
        <text
          x="335"
          y="46"
          fill="#273545"
          fontSize="12"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
        >
          EAST LIBERTY
        </text>
        <text
          x="365"
          y="198"
          fill="#273545"
          fontSize="12"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
        >
          SHADYSIDE
        </text>
        <text
          x="45"
          y="218"
          fill="#334353"
          fontSize="15"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
        >
          Pittsburgh
        </text>
        <text
          x="308"
          y="170"
          fill="#4A5B6B"
          fontSize="9"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          S. Highland Ave
        </text>
        <text
          x="195"
          y="78"
          fill="#4A5B6B"
          fontSize="9"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          Penn Ave
        </text>
      </svg>

      {/* Dark scrim & Center Address Chip matching screenshot */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10]/60 via-transparent to-[#0A0C10]/15 pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10141C]/95 border border-white/20 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-xl">
            <MapPin className="w-3.5 h-3.5 text-[#EF4444]" aria-hidden="true" />
            <span>212 S. HIGHLAND AVE &bull; EAST LIBERTY</span>
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E] ring-4 ring-[#C8102E]/35 mt-1.5" />
        </div>
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${SITE_INFO.fullAddress} in Google Maps`}
        className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-md bg-[#0E131B]/90 hover:bg-[#18202D] border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-200 transition-colors"
      >
        <span>Directions</span>
        <ExternalLink className="w-3 h-3" aria-hidden="true" />
      </a>
    </div>
  );
};
