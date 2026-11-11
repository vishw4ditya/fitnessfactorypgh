import React, { useEffect } from 'react';
import { KeyRound, ShieldCheck, X } from 'lucide-react';
import { LEGAL_DOCUMENTS } from '../../data/faqs';
import { SITE_INFO } from '../../data/site';
import { Button } from '../ui/Button';

export type ModalKind = 'privacy' | 'terms' | 'rules' | 'portal' | null;

interface LegalModalProps {
  openKind: ModalKind;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ openKind, onClose }) => {
  useEffect(() => {
    if (!openKind) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openKind, onClose]);

  if (!openKind) return null;

  if (openKind === 'portal') {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-portal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="w-full max-w-md rounded-2xl bg-[#131720] border border-[#2D3443] border-t-2 border-t-[#3B82F6] p-6 shadow-2xl space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-[#1D4ED8]/25 border border-[#3B82F6]/40 flex items-center justify-center text-[#7DB7FF]">
                <KeyRound className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7DB7FF]">
                  24/7 ACCESS INFO
                </p>
                <h2 id="modal-portal-title" className="font-display text-xl font-bold uppercase text-white">
                  KEYCARD &amp; FRONT DESK
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Pick up or replace your encrypted 24/7 RFID key FOB at the front desk at{' '}
            <strong className="text-white">{SITE_INFO.fullAddress}</strong> during staffed hours (
            {SITE_INFO.hours.compact}).
          </p>
          <div className="rounded-lg bg-[#0B0E14] border border-[#232936] p-3.5 text-xs text-slate-300 space-y-1">
            <p>
              <span className="text-slate-400">Direct Front Desk:</span>{' '}
              <strong className="text-white">{SITE_INFO.phone}</strong>
            </p>
            <p>
              <span className="text-slate-400">Account Changes / Freeze:</span>{' '}
              <strong className="text-[#7DB7FF]">{SITE_INFO.email}</strong>
            </p>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <Button variant="secondary" size="sm" onClick={onClose}>
              CLOSE
            </Button>
            <Button variant="primary" size="sm" to="/memberships#signup" onClick={onClose}>
              ADD 24/7 ACCESS
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const doc = LEGAL_DOCUMENTS[openKind];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-legal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-[#131720] border border-[#2D3443] border-t-2 border-t-[#C8102E] p-6 shadow-2xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-full bg-[#C8102E]/20 border border-[#C8102E]/40 flex items-center justify-center text-[#F87171]">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7DB7FF]">
                {doc.updated}
              </p>
              <h2 id="modal-legal-title" className="font-display text-xl font-bold uppercase text-white">
                {doc.title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          {doc.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
        <div className="flex justify-end pt-2">
          <Button variant="secondary" size="sm" onClick={onClose}>
            GOT IT
          </Button>
        </div>
      </div>
    </div>
  );
};
