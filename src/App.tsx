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
  Youtube,
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
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/5 z-50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="HumanMadeAds" className="h-8 w-auto" />
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
        <a href="#how" className="hover:text-white transition-colors">How It Works</a>
        <a href="#results" className="hover:text-white transition-colors">Results</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#pricing" className="hidden md:block bg-[#f6be1d] text-black px-6 py-2.5 text-sm font-black tracking-wide hover:bg-[#f6be1d]/80 transition-colors uppercase">
          Book A Free Call
        </a>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          <a href="#how" className="text-white hover:text-white transition-colors">How It Works</a>
          <a href="#results" className="text-white hover:text-white transition-colors">Results</a>
          <a href="#pricing" className="text-white hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-white hover:text-white transition-colors">FAQ</a>
          <a href="#pricing" className="bg-[#f6be1d] text-black px-5 py-3 font-black text-sm w-full uppercase text-center block">Get Started</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-black pt-28 pb-20 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f6be1d08_0%,_transparent_60%)] pointer-events-none" />

      {/* Removed top-of-page floating images for a cleaner look */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-[#f6be1d]/10 border border-[#f6be1d]/20 text-[#f6be1d] px-5 py-2 text-xs font-black uppercase tracking-[0.2em] mb-10">
          Human-made creatives only
        </div>

        <h1 className="text-5xl md:text-[5.5rem] font-black text-white leading-[1.05] mb-8 tracking-tight">
          IS YOUR CONTENT THE THING{' '}
          <span className="text-[#f6be1d]">KILLING YOUR SALES?</span>
        </h1>

        <p className="text-white text-xl md:text-2xl mb-4 max-w-2xl mx-auto leading-relaxed font-medium">
          Stop relying on AI-generated content. we help you implement a repeatable marketing strategy designed to drive sales.
        </p>
        <p className="text-white text-base mb-12 max-w-xl mx-auto">
        
        </p>

        <a href="#pricing" className="bg-[#f6be1d] text-black px-12 py-5 text-lg font-black uppercase tracking-wide hover:bg-[#f6be1d]/80 transition-colors inline-block">
          BOOK A FREE CALL
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white mt-12 font-medium">
          {['Fast Delivery', 'Human-Edited Only', 'Fast Replies', '500+ Ads Delivered'].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <Check size={14} className="text-[#f6be1d]" /> {t}
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
    { value: '500+', label: 'Ads Delivered' },
    { value: 'Fast Delivery', label: 'As humanly possible' },
    { value: '4.8/5', label: 'Client Rating' },
  ];
  return (
    <section className="bg-[#f6be1d] py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-3xl md:text-4xl font-black text-black">{s.value}</div>
            <div className="text-black/60 text-xs font-bold uppercase tracking-widest mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#f6be1d] text-xs font-black uppercase tracking-[0.2em] mb-6">The Problem</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
          Your Ads Are Failing Because<br />Your Creative Sucks.
        </h2>
        <p className="text-white text-lg mb-14 leading-relaxed max-w-2xl mx-auto">
          You&apos;re spending money on ads, testing audiences, tweaking budgets — but the real bottleneck?{' '}
          <span className="text-white font-bold">The creative.</span> Generic AI content doesn&apos;t stop the scroll. Human-made content does.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          {[
            { icon: '\u{1F4B8}', title: 'Burning Ad Spend', desc: 'Same tired formats everyone uses. No differentiation means no conversions.' },
            { icon: '\u{1F916}', title: 'AI Slop Everywhere', desc: 'AI-generated content floods every feed. Consumers tune it out instantly.' },
            { icon: '\u{23F3}', title: 'Slow Agencies', desc: 'Most agencies take weeks. You need test-ready creatives now, not next month.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#111] border border-[#222] p-6">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-white font-black text-base mb-2">{item.title}</h3>
              <p className="text-white text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Video examples */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-14 max-w-5xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative aspect-video overflow-hidden group cursor-pointer border border-[#222]">
              <img src={`https://picsum.photos/seed/inf${i}/400/225`} alt="Ad Example" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-colors">
                <div className="w-10 h-10 bg-[#f6be1d] flex items-center justify-center">
                  <Play size={14} fill="black" className="text-black ml-0.5" />
                </div>
              </div>
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
      title: 'Get Launch-Ready Ads',
      desc: 'Receive polished, human-edited video ads. Ready to deploy and start converting immediately.',
      detail: 'Delivered fast. Revisions included.',
    },
  ];

  return (
    <section id="how" className="bg-black py-24 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#f6be1d] text-xs font-black uppercase tracking-[0.2em] mb-6">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">3 Steps.</h2>
          <p className="text-white text-lg">No lengthy onboarding. No back-and-forth. Just results.</p>
        </div>

        {/* Step cards */}
        <div className="grid md:grid-cols-3 gap-0 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-start p-8 border border-white/10 bg-[#111] group hover:border-[#f6be1d] transition-colors duration-300">
              {/* Connector arrow between cards */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-[#111] border border-white/20 text-[#f6be1d] text-lg font-black">
                  →
                </div>
              )}
              {/* Step number */}
              <div className="text-[5rem] font-black leading-none text-[#f6be1d]/40 group-hover:text-[#f6be1d] transition-colors select-none mb-4">
                {step.num}
              </div>
              {/* Content */}
              <h3 className="text-white text-xl font-black mb-3">{step.title}</h3>
              <p className="text-white text-sm leading-relaxed mb-4">{step.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-[#f6be1d] text-xs font-black uppercase tracking-wider">
                <Check size={12} /> {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="hidden md:flex items-center justify-between mt-0 border-x border-b border-white/10 bg-[#f6be1d]/10 px-8 py-3">
          {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-white font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f6be1d]" />
              Step {step.num}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#pricing" className="bg-[#f6be1d] text-black px-12 py-5 text-lg font-black uppercase tracking-wide hover:bg-[#f6be1d]/80 transition-colors inline-block">
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
    <section id="results" className="bg-[#0a0a0a] py-24 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#f6be1d] text-xs font-black uppercase tracking-[0.2em] mb-6">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">We're The Obvious Choice.</h2>
          <p className="text-white text-lg">Stack us up against every alternative. The math is simple.</p>
        </div>

        {/* Mobile: card stack */}
        <div className="md:hidden space-y-4">
          {cols.map((col) => (
            <div key={col.key} className={`border p-5 ${col.highlight ? 'border-[#f6be1d] bg-[#f6be1d]/5' : 'border-[#1e1e1e] bg-[#111]'}`}>
              <h3 className={`font-black text-base mb-4 ${col.highlight ? 'text-[#f6be1d]' : 'text-white'}`}>{col.label}</h3>
              <div className="space-y-2">
                {rows.map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-white font-medium">{row.label}</span>
                    <span className={`font-bold ${col.highlight ? 'text-white' : 'text-white'}`}> 
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
                <th className="text-left py-4 pr-6 text-white text-xs font-black uppercase tracking-widest w-40"></th>
                {cols.map((col) => (
                  <th key={col.key} className={`text-center font-black uppercase tracking-wide ${
                    col.highlight
                      ? 'py-6 px-4 text-[#f6be1d] bg-[#f6be1d]/10 border-x border-t-4 border-x-[#f6be1d]/40 border-t-[#f6be1d]'
                      : 'py-4 px-4 text-white text-sm'
                  }`}>
                    {col.highlight ? (
                      <div className="flex flex-col items-center gap-2">
                        <span className="bg-[#f6be1d] text-black text-[10px] font-black px-3 py-1 tracking-[0.2em] rounded-sm">★ BEST CHOICE</span>
                        <span className="text-xl text-[#f6be1d]">{col.label}</span>
                      </div>
                    ) : col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-[#0d0d0d]' : 'bg-transparent'}>
                  <td className="py-4 pr-6 text-white text-sm font-bold">{row.label}</td>
                  {cols.map((col) => (
                    <td key={col.key} className={`py-4 px-4 text-center text-sm ${col.highlight ? 'text-[#f6be1d] font-black text-base bg-[#f6be1d]/10 border-x border-x-[#f6be1d]/40' : 'text-white font-medium'}`}>
                      {row[col.key as keyof typeof row]}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Bottom border for highlight column */}
              <tr>
                <td></td>
                {cols.map((col) => (
                  <td key={col.key} className={`py-3 ${col.highlight ? 'bg-[#f6be1d]/10 border-x border-b-4 border-x-[#f6be1d]/40 border-b-[#f6be1d]' : ''}`}></td>
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
    { id: 'starter', name: 'Starter', price: '$297', desc: '3 Video Ads · 1 Platform · Fast Delivery' },
    { id: 'growth', name: 'Growth', price: '$597', desc: '5 Video Ads · 2 Platforms · Hook Variations' },
    { id: 'scale', name: 'Scale', price: '$997', desc: '10 Video Ads · All Platforms · Dedicated Editor' },
  ];

  const whatsappNumber = '1234567890';
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the ${packages.find(p => p.id === selectedPackage)?.name} package (${packages.find(p => p.id === selectedPackage)?.price}). I'd like to learn more.`
  );

  return (
    <section id="pricing" className="bg-black py-24 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#f6be1d] text-xs font-black uppercase tracking-[0.2em] mb-6">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Book A Free Strategy Call</h2>
          <p className="text-white text-lg">Select your package, then book a free call or message us on WhatsApp.</p>
        </div>

        {/* Package Selector */}
        <div className="grid md:grid-cols-3 gap-3 mb-10">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`relative text-left p-5 border transition-all ${
                selectedPackage === pkg.id
                  ? 'border-[#f6be1d] bg-[#f6be1d]/5'
                  : 'border-[#222] bg-[#0a0a0a] hover:border-[#444]'
              }`}
            >
              {pkg.id === 'growth' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f6be1d] text-black text-[10px] font-black px-3 py-0.5 tracking-[0.15em]">
                  MOST POPULAR
                </div>
              )}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-black text-base">{pkg.name}</h3>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPackage === pkg.id ? 'border-[#f6be1d]' : 'border-[#444]'
                }`}>
                  {selectedPackage === pkg.id && <div className="w-2.5 h-2.5 rounded-full bg-[#f6be1d]" />}
                </div>
              </div>
              <div className="text-2xl font-black text-white mb-1">{pkg.price}</div>
              <p className="text-white text-xs">{pkg.desc}</p>
            </button>
          ))}
        </div>

        {/* Calendar + WhatsApp */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Book a Call */}
          <div className="border border-[#222] bg-[#0a0a0a] p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#f6be1d]/10 border border-[#f6be1d]/20 flex items-center justify-center mb-6">
              <Calendar size={28} className="text-[#f6be1d]" />
            </div>
            <h3 className="text-white font-black text-xl mb-2">Book A Free Call</h3>
            <p className="text-white text-sm mb-6 leading-relaxed">
              Schedule a free 15-min strategy call. We&apos;ll review your current ads and show you exactly how we can help.
            </p>
            <a
              href="https://calendly.com/YOUR_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f6be1d] text-black w-full py-4 font-black text-sm uppercase tracking-wide hover:bg-[#f6be1d]/80 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar size={16} /> Book Free Call
            </a>
            <p className="text-white text-xs mt-4">No commitment required. 100% free.</p>
          </div>

          {/* WhatsApp */}
          <div className="border border-[#222] bg-[#0a0a0a] p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center mb-6">
              <MessageCircle size={28} className="text-[#25D366]" />
            </div>
            <h3 className="text-white font-black text-xl mb-2">Message Us On WhatsApp</h3>
            <p className="text-white text-sm mb-6 leading-relaxed">
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
            <p className="text-white text-xs mt-4">We reply fast. Usually under 5 minutes.</p>
          </div>
        </div>

        {/* Selected Package Summary */}
        <div className="mt-6 border border-[#222] bg-[#0a0a0a] p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Check size={16} className="text-[#f6be1d]" />
            <span className="text-white text-sm">Selected package:</span>
            <span className="text-white font-black text-sm">
              {packages.find(p => p.id === selectedPackage)?.name} — {packages.find(p => p.id === selectedPackage)?.price}
            </span>
          </div>
          <span className="text-white text-xs hidden md:block">You can change this during the call</span>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="bg-[#f6be1d] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <Shield size={40} className="mx-auto mb-4 text-black" />
        <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
          Love It Or We Fix It. Period.
        </h2>
        <p className="text-black/70 text-lg max-w-xl mx-auto leading-relaxed">
          Not happy with your ads? We revise until you are. No arguments. No fine print. We stand behind our work because we know it converts.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What actually happens after I order?", a: "You pick your package, fill out a short brief (product link, offer, angles), and we get to work. You'll receive your finished ads, platform-optimized, ready to launch." },
    { q: "How is this different from hiring a freelancer?", a: "Freelancers take weeks, miss deadlines, and produce inconsistent quality. We have a systemized process that delivers polished, platform-optimized ads — every single time." },
    { q: "Will these actually convert?", a: "That's the only thing that matters to us. Every ad is built using proven direct-response frameworks. We study what's working right now on Meta and TikTok and apply it to your product." },
    { q: "Do I need to send my product?", a: "Not required. We can work with footage you already have. But if you want fully custom, shot-from-scratch content, we can arrange that too." },
    { q: "What's the revision policy?", a: "Starter gets 1 round. Growth gets 2. Scale gets unlimited. We don't stop until you're satisfied." },
    { q: "Is this right for my business?", a: "If you're selling a physical product online — e-commerce, DTC, dropshipping — and you need ads that actually convert, this is built for you. We've worked across dozens of niches." },
    { q: "How much does it cost?", a: "Packages start at $297 for 3 ads. Growth is $597 for 8 ads. Scale is $997 for 15 ads. No retainers. No hidden fees. Pay once, get your ads." },
  ];

  return (
    <section id="faq" className="bg-[#0a0a0a] py-24 px-4 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#f6be1d] text-xs font-black uppercase tracking-[0.2em] mb-6">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Got Questions?</h2>
        </div>
        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#1a1a1a]">
              <button
                className="w-full py-6 text-left flex items-center justify-between font-bold text-white hover:text-[#f6be1d] transition-colors text-base"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <span className="text-[#f6be1d] ml-4 shrink-0 text-xl">{openIndex === i ? '\u2212' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="pb-6 text-white text-sm leading-relaxed pr-8">
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
    <section className="bg-black py-24 px-4 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Stop Guessing.<br />
          <span className="text-[#f6be1d]">Start Converting.</span>
        </h2>
        <p className="text-white text-lg mb-10 max-w-xl mx-auto">
          Your competitors are already running better ads. The longer you wait, the more money you leave on the table.
        </p>
        <a href="#pricing" className="bg-[#f6be1d] text-black px-14 py-5 text-lg font-black uppercase tracking-wide hover:bg-[#f6be1d]/80 transition-colors inline-block">
          BOOK A FREE CALL
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-14 pb-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <img src={Logo} alt="HumanMadeAds" className="h-8 w-auto mb-4" />
            <p className="text-white text-sm max-w-xs leading-relaxed">
              Hand-crafted e-commerce video ads that actually convert. No AI. No excuses.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-white">
                {['Pricing', 'Results', 'FAQ'].map(l => (
                  <li key={l}><a href="#" className="hover:text-[#f6be1d] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4">Contact</h4>
              <a href="mailto:team@HumanMadeAds.com" className="text-sm text-white hover:text-[#f6be1d] transition-colors flex items-center gap-2">
                <Mail size={14} /> team@HumanMadeAds.com
              </a>
              <div className="flex gap-3 mt-4">
                {[Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 border border-[#222] flex items-center justify-center text-white hover:border-[#f6be1d] hover:text-[#f6be1d] transition-colors">
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#111] pt-6 text-xs text-white text-center leading-relaxed">
          <p>&copy; 2026 HumanMadeAds. All Rights Reserved.</p>
          <p className="mt-2 max-w-2xl mx-auto">Results mentioned are not typical and depend on your product, market, and effort. We do not guarantee specific outcomes. The information on this site is for informational purposes only.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-[#f6be1d]/30">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <WhatYouGet />
        <Proof />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
