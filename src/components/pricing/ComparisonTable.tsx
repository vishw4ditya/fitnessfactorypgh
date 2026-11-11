import React from 'react';
import { Check, Minus } from 'lucide-react';
import { COMPARISON_ROWS } from '../../data/plans';

export const ComparisonTable: React.FC = () => {
  const renderCell = (
    value: string | boolean,
    highlightTone: 'slate' | 'red' | 'blue' | 'sky'
  ) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full">
          <Check
            className={`w-4 h-4 ${
              highlightTone === 'red' ? 'text-[#F87171]' : 'text-slate-200'
            }`}
            aria-label="Included"
          />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center text-slate-600" aria-label="Not included">
          <Minus className="w-4 h-4" />
        </span>
      );
    }

    const textColor =
      highlightTone === 'red'
        ? value.includes('+') || value.includes('Rate') || value.includes('90')
          ? 'text-[#F87171] font-semibold'
          : 'text-white font-semibold'
        : highlightTone === 'blue' || highlightTone === 'sky'
          ? value.includes('+') || value.includes('Rate') || value.includes('90')
            ? 'text-[#7DB7FF] font-semibold'
            : 'text-slate-300'
          : 'text-slate-300';

    return <span className={`text-xs ${textColor}`}>{value}</span>;
  };

  return (
    <div className="rounded-xl border border-[#2A2E37] bg-[#12151C] overflow-hidden shadow-card">
      <div className="overflow-x-auto max-h-[540px]">
        <table className="w-full min-w-[680px] text-left border-collapse">
          <thead className="sticky top-0 z-10 bg-[#171B23] border-b border-[#2A2E37]">
            <tr className="text-[11px] font-display font-bold uppercase tracking-[0.12em]">
              <th scope="col" className="py-4 px-5 text-slate-300 w-[34%]">
                FEATURES &amp; AMENITIES
              </th>
              <th scope="col" className="py-4 px-4 text-center text-slate-300">
                DAY / WEEK
              </th>
              <th
                scope="col"
                className="py-4 px-4 text-center text-[#F87171] bg-[#C8102E]/10 border-x border-[#C8102E]/20"
              >
                INDIVIDUAL ($49)
              </th>
              <th scope="col" className="py-4 px-4 text-center text-slate-200">
                COUPLES ($85)
              </th>
              <th scope="col" className="py-4 px-4 text-center text-slate-200">
                DISCOUNTED ($39)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E232D] text-xs">
            {COMPARISON_ROWS.map((row, index) => (
              <tr
                key={row.feature}
                className={index % 2 === 0 ? 'bg-[#12151C]' : 'bg-[#151922]'}
              >
                <th
                  scope="row"
                  className="py-4 px-5 font-medium text-slate-200 text-xs sm:text-[13px]"
                >
                  {row.feature}
                </th>
                <td className="py-4 px-4 text-center">
                  {renderCell(row.dayWeek, 'slate')}
                </td>
                <td className="py-4 px-4 text-center bg-[#C8102E]/[0.06] border-x border-[#C8102E]/15">
                  {renderCell(row.individual, 'red')}
                </td>
                <td className="py-4 px-4 text-center">
                  {renderCell(row.couples, 'blue')}
                </td>
                <td className="py-4 px-4 text-center">
                  {renderCell(row.discounted, 'sky')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
