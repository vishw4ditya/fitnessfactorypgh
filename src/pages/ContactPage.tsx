import React, { useState } from 'react';
import { ArrowRight, Clock, KeyRound, Mail, MapPin, Phone } from 'lucide-react';
import { PittsburghMap } from '../components/common/PittsburghMap';
import { PageLayout } from '../components/layout/PageLayout';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { InputField, SelectField, TextareaField, useToast } from '../components/ui/FormFields';
import { SITE_INFO } from '../data/site';

export const ContactPage: React.FC = () => {
  const { showToast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Day Pass / Drop-In');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) next.name = 'Please enter your name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) next.message = 'Please add your question or visit timing.';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    showToast(
      'Inquiry Received',
      `Thanks ${name.trim()}! We'll reply to ${email.trim()} shortly, or stop by ${SITE_INFO.addressLine1} anytime during staffed hours.`
    );
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <PageLayout
      title="Contact & Hours | Fitness Factory Pittsburgh"
      description="Visit Fitness Factory Pittsburgh at 212 S. Highland Ave, Pittsburgh, PA 15206. Call 412-362-6303 or drop in during staffed hours."
    >
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        <div className="max-w-2xl space-y-3">
          <Badge tone="dark" dot>
            EAST LIBERTY &bull; SHADYSIDE DROP-IN
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase text-white leading-[0.97]">
            DROP IN OR <span className="text-[#7DB7FF]">REACH OUT</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Questions about 24/7 RFID keycards, $15 visitor day passes, or personal training? Reach
            our Highland Avenue front desk directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-5">
            <Card hoverable={false} className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#EF4444] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    ADDRESS
                  </p>
                  <p className="text-sm font-medium text-white">{SITE_INFO.fullAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#7DB7FF] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    FRONT DESK PHONE
                  </p>
                  <a href={SITE_INFO.phoneHref} className="text-sm font-medium text-white hover:text-[#7DB7FF]">
                    {SITE_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#7DB7FF] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    EMAIL
                  </p>
                  <a href={SITE_INFO.emailHref} className="text-sm font-medium text-white hover:text-[#7DB7FF]">
                    {SITE_INFO.email}
                  </a>
                </div>
              </div>
              <div className="pt-3 border-t border-[#222733] space-y-1.5 text-xs text-slate-300">
                <p className="inline-flex items-center gap-1.5 font-semibold text-[#C4B5FD]">
                  <KeyRound className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{SITE_INFO.hours.badge}</span>
                </p>
                <p className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                  <span>
                    {SITE_INFO.hours.weekdays} &bull; {SITE_INFO.hours.weekends}
                  </span>
                </p>
              </div>
            </Card>

            <PittsburghMap />
          </div>

          <div className="lg:col-span-7">
            <Card topAccent="red" hoverable={false} className="p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold uppercase text-white">
                SEND US A DIRECT MESSAGE
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Direct inbox to our East Liberty desk staff—never an outsourced call center.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    id="contact-name"
                    label="Your Name"
                    required
                    placeholder="e.g. Jordan Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={errors.name}
                  />
                  <InputField
                    id="contact-email"
                    label="Email Address"
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                  />
                </div>

                <SelectField
                  id="contact-topic"
                  label="Topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  options={[
                    { value: 'Day Pass / Drop-In', label: 'Day Pass / Drop-In' },
                    { value: 'Membership Question / Freeze', label: 'Membership Question / Freeze' },
                    { value: '24/7 RFID Keycard Pickup', label: '24/7 RFID Keycard Pickup' },
                    { value: 'Personal Training Consultation', label: 'Personal Training Consultation' },
                  ]}
                />

                <TextareaField
                  id="contact-msg"
                  label="Message"
                  required
                  placeholder="How can our Highland Ave team help?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  error={errors.message}
                />

                <Button type="submit" variant="primary" size="lg">
                  <span>SEND MESSAGE</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
