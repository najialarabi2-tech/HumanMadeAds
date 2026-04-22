import Pic2 from './Pic2.png';
import React, { useState } from 'react';
import Logo from './Logo.png';
import Pic1 from './Pic1.png';
import {
  Play,
  Menu,
  X,
  Plus,
  Minus,
  Mail,
  Instagram,
  Twitter,
  Check,
  ArrowRight,
  Shield,
  Calendar,
  MessageCircle,
  Phone,
} from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F172A]/95 backdrop-blur-md border-b border-[#F59E0B]/20 z-50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-xl font-black tracking-wide text-[#F8FAFC]">HumanMadeAds.xyz</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#F8FAFC]">
        <a href="#how" className="hover:text-[#F8FAFC] transition-colors">How It Works</a>
        <a href="#results" className="hover:text-[#F8FAFC] transition-colors">Results</a>
        <a href="#pricing" className="hover:text-[#F8FAFC] transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-[#F8FAFC] transition-colors">FAQ</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#pricing" className="hidden md:block bg-[#F59E0B] text-black px-6 py-2.5 text-sm font-black tracking-wide hover:bg-[#F59E0B]/80 transition-colors uppercase">
          Book A Free Call
        </a>
        <button className="md:hidden text-[#F8FAFC]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0F172A] border-b border-[#F59E0B]/20 p-6 flex flex-col gap-4 md:hidden">
          <a href="#how" className="text-[#F8FAFC] hover:text-[#F8FAFC] transition-colors">How It Works</a>
          <a href="#results" className="text-[#F8FAFC] hover:text-[#F8FAFC] transition-colors">Results</a>
          <a href="#pricing" className="text-[#F8FAFC] hover:text-[#F8FAFC] transition-colors">Pricing</a>
          <a href="#faq" className="text-[#F8FAFC] hover:text-[#F8FAFC] transition-colors">FAQ</a>
          <a href="#pricing" className="bg-[#F59E0B] text-white px-5 py-3 font-black text-sm w-full uppercase text-center block">Get Started</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-[#0F172A] pt-28 pb-20 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#F59E0B08_0%,_transparent_60%)] pointer-events-none" />

      {/* Removed top-of-page floating images for a cleaner look */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] px-5 py-2 text-xs font-black uppercase tracking-[0.2em] mb-10">
          Human-made creatives only
        </div>

        <h1 className="text-5xl md:text-[5.5rem] font-black text-[#F8FAFC] leading-[1.05] mb-10 tracking-tight">
          IS YOUR CONTENT THE THING{' '}
          <span><span className="text-[#F59E0B]">KILLING</span> <span className="text-[#F59E0B]">YOUR SALES?</span></span>
        </h1>

        {/* Video placeholder */}
        <div className="relative mx-auto mb-8 max-w-xl aspect-video bg-[#1E293B] border border-[#475569] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F59E0B]/20" />
          <div className="flex flex-col items-center gap-3 z-10">
            <div className="w-16 h-16 bg-[#F59E0B] flex items-center justify-center">
              <Play size={24} fill="black" className="text-white ml-1" />
            </div>
            <span className="text-[#CBD5E1] text-xs uppercase tracking-widest">Video coming soon</span>
          </div>
        </div>

        <p className="text-[#F8FAFC] text-xl md:text-2xl mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
          It’s a repeatable marketing system built to help you stop relying on AI-generated content and start driving real revenue with better creatives.
        </p>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <a href="https://www.instagram.com/HumanMadeAds" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#475569] flex items-center justify-center text-[#F8FAFC] hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://www.twitter.com/HumanMadeAds" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#475569] flex items-center justify-center text-[#F8FAFC] hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors">
            <Twitter size={18} />
          </a>
          <a href="https://www.tiktok.com/@HumanMadeAds" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#475569] flex items-center justify-center text-[#F8FAFC] hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
          </a>
        </div>

        <a href="#pricing" className="bg-[#F59E0B] text-black px-12 py-5 text-lg font-black uppercase tracking-wide hover:bg-[#F59E0B]/80 transition-colors inline-block">
          BOOK A FREE CALL
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#F8FAFC] mt-12 font-medium">
          {['Fast Delivery', 'Human-Edited Only', 'Fast Replies', '500+ Creatives Delivered'].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <Check size={14} className="text-[#F59E0B]" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: '$1M+', label: 'Revenue Generated For Clients' },
    { value: '500+', label: 'Creatives Delivered' },
       { value: '72 Hours', label: 'Fast Delivery' },
    { value: '4.8/5', label: 'Client Rating' },
  ];
  return (
    <section className="bg-[#F59E0B] py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-3xl md:text-4xl font-black text-black">{s.value}</div>
            <div className="text-black/80 text-xs font-bold uppercase tracking-widest mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-[#111827] py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#F59E0B] text-xs font-black uppercase tracking-[0.2em] mb-6">The Problem</p>
        <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] mb-8 leading-tight">
          Your Income Is Low Because<br />Your Creative Sucks.
        </h2>
        <p className="text-[#F8FAFC] text-lg mb-14 leading-relaxed max-w-2xl mx-auto">
          Posting Consistently is key for success. We help your brand show up on schedule with standout content, so you keep your audience engaged and your business growing.
        </p>
        <div className="hidden md:grid md:grid-cols-3 gap-4 text-left">
          {[
            { icon: '\u{1F4B8}', title: 'Burning Ad Spend', desc: 'Same tired formats everyone uses. No differentiation means no conversions.' },
            { icon: '\u{1F916}', title: 'AI Slop Everywhere', desc: 'AI-generated content floods every feed. Consumers tune it out instantly.' },
            { icon: '\u{23F3}', title: 'Slow Agencies', desc: 'Most agencies take weeks. You need test-ready creatives now, not next month.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#1E293B] border border-[#334155] p-6">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-[#F8FAFC] font-black text-base mb-2">{item.title}</h3>
              <p className="text-[#F8FAFC] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  const steps = [
    {
      num: '01',
      title: 'Pick Your Package',
      desc: 'Choose the plan that matches your volume and platform. Meta, TikTok, or both. Takes 60 seconds.',
      detail: 'No sales calls. No waiting for a quote.',
    },
    {
      num: '02',
      title: 'Submit Your Brief',
      desc: 'Drop your product link, offer, and key angles. We handle everything else.',
      detail: 'Short form. No long questionnaires.',
    },
    {
      num: '03',
      title: 'Get Launch-Ready Creatives',
      desc: 'Receive polished, human-edited video creatives. Ready to deploy and start converting immediately.',
      detail: 'Delivered fast. Revisions included.',
    },
  ];

  return (
    <section id="how" className="bg-[#0F172A] py-24 px-4 border-t border-[#F59E0B]/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#F59E0B] text-xs font-black uppercase tracking-[0.2em] mb-6">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] mb-4">3 Steps.</h2>
          <p className="text-[#F8FAFC] text-lg">No lengthy onboarding. No back-and-forth. Just results.</p>
        </div>

        {/* Mobile version */}
        <div className="md:hidden flex flex-col gap-4 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4 border-l-2 border-[#F59E0B] pl-4">
              <span className="text-[#F59E0B] font-black text-sm shrink-0">{step.num}</span>
              <div>
                <h3 className="text-[#F8FAFC] font-black text-base">{step.title}</h3>
                <p className="text-[#F8FAFC]/70 text-sm mt-0.5">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Step cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-0 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-start p-8 border border-[#F59E0B]/20 bg-[#1E293B] group hover:border-[#F59E0B] transition-colors duration-300">
              {/* Connector arrow between cards */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-[#1E293B] border border-[#F59E0B]/30 text-[#F59E0B] text-lg font-black">
                  →
                </div>
              )}
              {/* Step number */}
              <div className="text-[5rem] font-black leading-none text-[#F59E0B]/40 group-hover:text-[#F59E0B] transition-colors select-none mb-4">
                {step.num}
              </div>
              {/* Content */}
              <h3 className="text-[#F8FAFC] text-xl font-black mb-3">{step.title}</h3>
              <p className="text-[#F8FAFC] text-sm leading-relaxed mb-4">{step.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-[#F59E0B] text-xs font-black uppercase tracking-wider">
                <Check size={12} /> {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="hidden md:flex items-center justify-between mt-0 border-x border-b border-[#F59E0B]/20 bg-[#F59E0B]/10 px-8 py-3">
          {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-[#F8FAFC] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              Step {step.num}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#pricing" className="bg-[#F59E0B] text-black px-12 py-5 text-lg font-black uppercase tracking-wide hover:bg-[#F59E0B]/80 transition-colors inline-block">
            BOOK A FREE CALL
          </a>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const rows = [
    { label: 'Turnaround Time',    diy: 'Days / never',  ai: 'Minutes',        freelancer: '1–3 weeks',    agency: '2–4 weeks',   us: 'Fast delivery' },
    { label: 'Human Editing',      diy: '✗',             ai: '✗',              freelancer: 'Sometimes',    agency: 'Yes',         us: '✓ Always' },
    { label: 'Platform-Optimized', diy: '✗',             ai: '✗',              freelancer: 'Varies',       agency: 'Yes',         us: '✓ Meta + TikTok' },
    { label: 'Hook Variations',    diy: '✗',             ai: 'Generic',        freelancer: 'Extra cost',   agency: 'Extra cost',  us: '✓ Included' },
    { label: 'Revisions',          diy: 'N/A',           ai: '✗',              freelancer: '1 (if lucky)', agency: '1–2',         us: '✓ Up to unlimited' },
    { label: 'Price',              diy: 'Your time',     ai: '$20–50/mo',      freelancer: '$200–800/ad',  agency: '$3K–10K+/mo', us: 'From $297 flat' },
    { label: 'Consistent Quality', diy: '✗',             ai: '✗',              freelancer: '✗',            agency: 'Yes',         us: '✓ Guaranteed' },
  ];

  const cols = [
    { key: 'diy',        label: 'DIY' },
    { key: 'ai',         label: 'AI Tools' },
    { key: 'freelancer', label: 'Freelancer' },
    { key: 'agency',     label: 'Big Agency' },
    { key: 'us',         label: 'HumanMadeAds', highlight: true },
  ];

  return (
    <section id="results" className="bg-[#111827] py-24 px-4 border-t border-[#F59E0B]/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#F59E0B] text-xs font-black uppercase tracking-[0.2em] mb-6">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] mb-4">We're The Obvious Choice.</h2>
          <p className="text-[#F8FAFC] text-lg">Stack us up against every alternative. The math is simple.</p>
        </div>

        {/* Mobile: card stack */}
        <div className="md:hidden space-y-4">
          {cols.map((col) => (
            <div key={col.key} className={`border p-5 ${col.highlight ? 'border-[#F59E0B] bg-[#F59E0B]/5' : 'border-[#334155] bg-[#1E293B]'}`}>
              <h3 className={`font-black text-base mb-4 ${col.highlight ? 'text-[#F59E0B]' : 'text-[#F8FAFC]'}`}>{col.label}</h3>
              <div className="space-y-2">
                {rows.map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-[#F8FAFC] font-medium">{row.label}</span>
                    <span className={`font-bold ${col.highlight ? 'text-[#F8FAFC]' : 'text-[#F8FAFC]'}`}> 
                      {row[col.key as keyof typeof row]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: comparison table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 pr-6 text-[#F8FAFC] text-xs font-black uppercase tracking-widest w-40"></th>
                {cols.map((col) => (
                  <th key={col.key} className={`text-center font-black uppercase tracking-wide ${
                    col.highlight
                      ? 'py-6 px-4 text-[#F59E0B] bg-[#F59E0B]/10 border-x border-t-4 border-x-[#F59E0B]/40 border-t-[#F59E0B]'
                      : 'py-4 px-4 text-[#F8FAFC] text-sm'
                  }`}>
                    {col.highlight ? (
                      <div className="flex flex-col items-center gap-2">
                        <span className="bg-[#F59E0B] text-white text-[10px] font-black px-3 py-1 tracking-[0.2em] rounded-sm">★ BEST CHOICE</span>
                        <span className="text-xl text-[#F59E0B]">{col.label}</span>
                      </div>
                    ) : col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-[#1E293B]' : 'bg-transparent'}>
                  <td className="py-4 pr-6 text-[#F8FAFC] text-sm font-bold">{row.label}</td>
                  {cols.map((col) => (
                    <td key={col.key} className={`py-4 px-4 text-center text-sm ${col.highlight ? 'text-[#F59E0B] font-black text-base bg-[#F59E0B]/10 border-x border-x-[#F59E0B]/40' : 'text-[#F8FAFC] font-medium'}`}>
                      {row[col.key as keyof typeof row]}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Bottom border for highlight column */}
              <tr>
                <td></td>
                {cols.map((col) => (
                  <td key={col.key} className={`py-3 ${col.highlight ? 'bg-[#F59E0B]/10 border-x border-b-4 border-x-[#F59E0B]/40 border-b-[#F59E0B]' : ''}`}></td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState('growth');

  const packages = [
    { id: 'starter', name: 'Starter', price: '$297', desc: '3 Video Creatives · 1 Platform · Fast Delivery' },
    { id: 'growth', name: 'Growth', price: '$597', desc: '5 Video Creatives · 2 Platforms · Hook Variations' },
    { id: 'scale', name: 'Scale', price: '$997', desc: '10 Video Creatives · All Platforms · Dedicated Editor' },
  ];

  const whatsappNumber = '1234567890';
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the ${packages.find(p => p.id === selectedPackage)?.name} package (${packages.find(p => p.id === selectedPackage)?.price}). I'd like to learn more.`
  );

  return (
    <section id="pricing" className="bg-[#0F172A] py-24 px-4 border-t border-[#F59E0B]/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#F59E0B] text-xs font-black uppercase tracking-[0.2em] mb-6">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] mb-4">Book A Free Strategy Call</h2>
          <p className="text-[#F8FAFC] text-lg">Select your package, then book a free call or message us on WhatsApp.</p>
        </div>

        {/* Package Selector */}
        <div className="grid md:grid-cols-3 gap-3 mb-10">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`relative text-left p-5 border transition-all ${
                selectedPackage === pkg.id
                  ? 'border-[#F59E0B] bg-[#F59E0B]/5'
                  : 'border-[#334155] bg-[#111827] hover:border-[#475569]'
              }`}
            >
              {pkg.id === 'growth' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white text-[10px] font-black px-3 py-0.5 tracking-[0.15em]">
                  MOST POPULAR
                </div>
              )}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[#F8FAFC] font-black text-base">{pkg.name}</h3>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPackage === pkg.id ? 'border-[#F59E0B]' : 'border-[#475569]'
                }`}>
                  {selectedPackage === pkg.id && <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />}
                </div>
              </div>
              <div className="text-2xl font-black text-[#F8FAFC] mb-1">{pkg.price}</div>
              <p className="text-[#F8FAFC] text-xs">{pkg.desc}</p>
            </button>
          ))}
        </div>

        {/* Calendar + WhatsApp */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Book a Call */}
          <div className="border border-[#334155] bg-[#111827] p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center mb-6">
              <Calendar size={28} className="text-[#F59E0B]" />
            </div>
            <h3 className="text-[#F8FAFC] font-black text-xl mb-2">Book A Free Call</h3>
            <p className="text-[#F8FAFC] text-sm mb-6 leading-relaxed">
              Schedule a free 15-min strategy call. We&apos;ll review your current creatives and show you exactly how we can help.
            </p>
            <a
              href="https://calendly.com/YOUR_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F59E0B] text-black w-full py-4 font-black text-sm uppercase tracking-wide hover:bg-[#F59E0B]/80 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar size={16} /> Book Free Call
            </a>
            <p className="text-[#F8FAFC] text-xs mt-4">No commitment required. 100% free.</p>
          </div>

          {/* WhatsApp */}
          <div className="border border-[#334155] bg-[#111827] p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center mb-6">
              <MessageCircle size={28} className="text-[#F59E0B]" />
            </div>
            <h3 className="text-[#F8FAFC] font-black text-xl mb-2">Message Us On WhatsApp</h3>
            <p className="text-[#F8FAFC] text-sm mb-6 leading-relaxed">
              Prefer to chat? Send us a message on WhatsApp and we&apos;ll get back to you within minutes.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black w-full py-4 font-black text-sm uppercase tracking-wide hover:bg-[#1fb855] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} /> Chat On WhatsApp
            </a>
            <p className="text-[#F8FAFC] text-xs mt-4">We reply fast. Usually under 5 minutes.</p>
          </div>
        </div>

        {/* Selected Package Summary */}
        <div className="mt-6 border border-[#334155] bg-[#111827] p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Check size={16} className="text-[#F59E0B]" />
            <span className="text-[#F8FAFC] text-sm">Selected package:</span>
            <span className="text-[#F8FAFC] font-black text-sm">
              {packages.find(p => p.id === selectedPackage)?.name} — {packages.find(p => p.id === selectedPackage)?.price}
            </span>
          </div>
          <span className="text-[#F8FAFC] text-xs hidden md:block">You can change this during the call</span>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="bg-[#F59E0B] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <Shield size={40} className="mx-auto mb-4 text-black" />
        <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
          Love It Or We Fix It. Period.
        </h2>
        <p className="text-black/85 text-lg max-w-xl mx-auto leading-relaxed">
          Not happy with your creatives? We revise until you are. No arguments. No fine print. We stand behind our work because we know it converts.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What actually happens after I order?", a: "You pick your package, fill out a short brief (product link, offer, angles), and we get to work. You'll receive your finished creatives, platform-optimized, ready to launch." },
    { q: "How is this different from hiring a freelancer?", a: "Freelancers take weeks, miss deadlines, and produce inconsistent quality. We have a systemized process that delivers polished, platform-optimized creatives — every single time." },
    { q: "Will these actually convert?", a: "That's the only thing that matters to us. Every ad is built using proven direct-response frameworks. We study what's working right now on Meta and TikTok and apply it to your product." },
    { q: "What's the revision policy?", a: "Starter gets 1 round. Growth gets 2. Scale gets unlimited. We don't stop until you're satisfied." },
    { q: "Is this right for my business?", a: "If you're selling a physical product online — e-commerce, DTC, dropshipping — and you need creatives that actually convert, this is built for you. We've worked across dozens of niches." },
    { q: "How much does it cost?", a: "Packages start at $297 for 3 creatives. Growth is $597 for 8 creatives. Scale is $997 for 15 creatives. No retainers. No hidden fees. Pay once, get your creatives." },
  ];

  return (
    <section id="faq" className="bg-[#111827] py-24 px-4 border-t border-[#F59E0B]/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#F59E0B] text-xs font-black uppercase tracking-[0.2em] mb-6">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] mb-4">Got Questions?</h2>
        </div>
        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#334155]">
              <button
                className="w-full py-6 text-left flex items-center justify-between font-bold text-[#F8FAFC] hover:text-[#F59E0B] transition-colors text-base"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <span className="text-[#F59E0B] ml-4 shrink-0 text-xl">{openIndex === i ? '\u2212' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="pb-6 text-[#F8FAFC] text-sm leading-relaxed pr-8">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[#0F172A] py-24 px-4 border-t border-[#F59E0B]/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] mb-6 leading-tight">
          Stop Guessing.<br />
          <span className="text-[#F59E0B]">Start Converting.</span>
        </h2>
        <p className="text-[#F8FAFC] text-lg mb-10 max-w-xl mx-auto">
          Your competitors are already running better creatives. The longer you wait, the more money you leave on the table.
        </p>
        <a href="#pricing" className="bg-[#F59E0B] text-black px-14 py-5 text-lg font-black uppercase tracking-wide hover:bg-[#F59E0B]/80 transition-colors inline-block">
          BOOK A FREE CALL
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-[#F59E0B]/20 pt-14 pb-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <span className="text-xl font-black tracking-wide text-[#F8FAFC] mb-4 block">HumanMadeAds.xyz</span>
            <p className="text-[#F8FAFC] text-sm max-w-xs leading-relaxed">
              Hand-crafted video creatives that actually convert. No AI. No excuses.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="text-[#F8FAFC] text-xs font-black uppercase tracking-widest mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-[#F8FAFC]">
                {['Pricing', 'Results', 'FAQ'].map(l => (
                  <li key={l}><a href="#" className="hover:text-[#F59E0B] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#F8FAFC] text-xs font-black uppercase tracking-widest mb-4">Contact</h4>
              <a href="mailto:team@HumanMadeAds.com" className="text-sm text-[#F8FAFC] hover:text-[#F59E0B] transition-colors flex items-center gap-2">
                <Mail size={14} /> team@HumanMadeAds.com
              </a>
              <div className="flex gap-3 mt-4">
                {[
                  { Icon: Instagram, href: 'https://www.instagram.com/HumanMadeAds' },
                  { Icon: Twitter, href: 'https://www.twitter.com/HumanMadeAds' },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-[#334155] flex items-center justify-center text-[#F8FAFC] hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors">
                    <Icon size={14} />
                  </a>
                ))}
                <a href="https://www.tiktok.com/@HumanMadeAds" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-[#334155] flex items-center justify-center text-[#F8FAFC] hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#334155] pt-6 text-xs text-[#F8FAFC] text-center leading-relaxed">
          <p>&copy; 2026 HumanMadeAds. All Rights Reserved.</p>
          <p className="mt-2 max-w-2xl mx-auto">Results mentioned are not typical and depend on your product, market, and effort. We do not guarantee specific outcomes. The information on this site is for informational purposes only.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] font-sans text-[#F8FAFC] selection:bg-[#F59E0B]/30">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <WhatYouGet />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
