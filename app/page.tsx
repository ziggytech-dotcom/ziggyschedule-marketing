'use client'
import Link from 'next/link'
import { useState } from 'react'

const features = [
  { title: 'Unlimited Bookings', desc: 'No booking caps, no tier limits. Every plan includes unlimited appointments. Book as many as you can handle.' },
  { title: 'Team Scheduling', desc: 'Manage availability across your entire team. Clients pick the right person — the calendar handles the rest.' },
  { title: 'SMS Reminders', desc: 'Automated text reminders before every appointment. Reduce no-shows without lifting a finger.' },
  { title: 'Stripe Payments', desc: 'Collect deposits or full payment at booking. Stripe-powered, professional, and fully automated.' },
  { title: 'Google Calendar Sync', desc: 'Two-way sync with Google Calendar. Your schedule stays in one place — no double bookings, ever.' },
  { title: 'Intake Forms', desc: 'Collect the info you need before the meeting. Custom forms attached to any booking type.' },
  { title: 'Embed Anywhere', desc: 'Drop your booking widget into any website with a single line of code. No redirects, no friction.' },
  { title: 'Round-Robin', desc: 'Distribute bookings across your team automatically. Everyone stays balanced — no manual assignment needed.' },
]

const faqs = [
  { q: 'How is this different from Calendly?', a: 'Calendly charges $16/user/month. For a 10-person team that is $160/month just to let people book meetings. ZiggySchedule is $35/month for up to 10 users. The math is obvious.' },
  { q: 'Can I collect payment when someone books?', a: 'Yes. Connect Stripe and collect deposits or full payment at booking time. Perfect for consultations, sessions, and services.' },
  { q: 'Does it sync with Google Calendar?', a: 'Yes. Two-way sync so your real availability is always reflected. Bookings show up in Google Calendar automatically.' },
  { q: 'How does the free trial work?', a: '14 days of full Pro access. No credit card required. After 14 days, choose a plan or your account moves to read-only.' },
  { q: 'Can I embed the booking widget on my website?', a: 'Yes. One line of code embeds your booking widget on any website. No redirects — clients book without leaving your page.' },
  { q: 'Is my scheduling data secure?', a: 'Yes. All data is encrypted at rest and in transit. Row-level security means your clients only see their own bookings. 2FA available.' },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              <span style={{ color: '#ff1744' }}>Ziggy</span><span style={{ color: '#f472b6' }}>Schedule</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 text-xs text-[#b3b3b3]">
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Integrations', '/integrations'], ['Suite', '/suite'], ['vs Calendly', '/compare/calendly'], ['vs Acuity', '/compare/acuity']].map(([label, href]) => (
                <Link key={label} href={href} className="px-3 py-2 hover:text-white transition-colors rounded-lg hover:bg-[#1a1a1a]">{label}</Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link href="https://app.ziggyschedule.com/login" className="hidden md:block text-sm text-[#b3b3b3] hover:text-white transition-colors">Sign In</Link>
              <Link href="https://app.ziggyschedule.com/signup" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f472b6] text-white rounded-xl font-semibold text-sm hover:bg-[#f472b6]/90 hover:scale-105 transition-all">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#f472b6]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f472b6]/10 border border-[#f472b6]/20 text-[#f472b6] text-xs font-semibold uppercase tracking-widest mb-8">
            ZiggySchedule — Team Scheduling
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Scheduling that works<br />
            <span style={{ color: '#f472b6' }}>as hard as you do.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed mb-10">
            Calendly at $16/user for our 10-person team was $160/month just to let people book meetings. We built ZiggySchedule — 10 users for $35/month. Unlimited bookings. No compromise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="https://app.ziggyschedule.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f472b6] text-white rounded-xl font-semibold text-lg hover:bg-[#f472b6]/90 hover:scale-105 transition-all">
              Start Free Trial
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f472b6]/10 border border-[#f472b6]/30 text-[#f472b6] rounded-xl font-semibold text-lg hover:bg-[#f472b6]/20 transition-all">
              See Features
            </Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60">14-day free trial · No credit card required · Cancel anytime</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-[#1f1f1f]">
            {['$35/mo for 10 users — vs $160 with Calendly', 'Unlimited bookings on every plan', 'Google Calendar sync', 'SMS reminders included'].map((fact) => (
              <div key={fact} className="flex items-center gap-2 text-sm text-[#b3b3b3]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f472b6]" />
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview placeholder */}
      <section className="py-16 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl border border-[#1f1f1f] overflow-hidden bg-[#111111]" style={{ aspectRatio: '16/9' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#f472b6]/5 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#f472b6]/10 border border-[#f472b6]/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#f472b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <p className="text-white font-semibold text-lg">Product demo coming soon</p>
                <p className="text-[#b3b3b3] text-sm mt-1">See ZiggySchedule in action</p>
                <Link href="https://app.ziggyschedule.com/signup" className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-[#f472b6] text-white rounded-lg text-sm font-medium hover:bg-[#f472b6]/90 transition-colors">Start free trial instead</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#120a10] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f472b6] mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything your team needs to stay booked.</h2>
            <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto leading-relaxed">From solo consultants to 10-person teams — ZiggySchedule handles availability, payments, reminders, and more without the enterprise price tag.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#f472b6]/30 hover:shadow-[0_0_30px_rgba(244,114,182,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#f472b6]/10 border border-[#f472b6]/20 flex items-center justify-center mb-5 group-hover:bg-[#f472b6]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#f472b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-[#b3b3b3] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/features" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f472b6]/10 border border-[#f472b6]/30 text-[#f472b6] rounded-xl font-semibold hover:bg-[#f472b6]/20 transition-all">View all features</Link>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#0f080c] via-[#1a0d12] to-[#0f080c]">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#f472b6]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f472b6] mb-4">Our story</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">We built this because we needed it</h2>
          <div className="space-y-6 text-lg text-[#b3b3b3] leading-relaxed">
            <p>Calendly at $16/user for our 10-person team was $160/month just to let people book meetings. We were not even using half the features. The pricing made no sense for how we actually worked.</p>
            <p>We built ZiggySchedule to fix the math: 10 users for $35/month, unlimited bookings, SMS reminders, Stripe payments, and Google Calendar sync. Everything you need, nothing you do not.</p>
            <p className="text-white font-medium">That&apos;s ZiggySchedule. Built for teams who are tired of paying per seat for basic scheduling.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '$15/mo', label: 'Starting price', color: '#f472b6' },
              { value: '10 users', label: 'On Pro plan', color: '#0ea5e9' },
              { value: 'Unlimited', label: 'Bookings', color: '#f97316' },
              { value: '14 days', label: 'Free to try', color: '#10b981' },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center hover:border-[#f472b6]/30 transition-colors">
                <p className="text-2xl font-bold mb-1" style={{ color: item.color }}>{item.value}</p>
                <p className="text-sm text-[#b3b3b3]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0d0d0d] via-[#110a0e] to-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f472b6] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, honest pricing</h2>
          <p className="text-lg text-[#b3b3b3] mb-12 max-w-2xl mx-auto leading-relaxed">Calendly charges $16/user/month. We give 10 users unlimited bookings for $35/month. No per-user fees after that. No hidden costs.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-left">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$15</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">1 user · Unlimited bookings</p>
              <Link href="https://app.ziggyschedule.com/signup" className="block w-full text-center px-6 py-3 bg-[#f472b6]/10 border border-[#f472b6]/30 text-[#f472b6] rounded-xl font-semibold hover:bg-[#f472b6]/20 transition-all">Start free trial</Link>
            </div>
            <div className="bg-[#111111] border-2 border-[#f472b6]/40 rounded-2xl p-8 text-left relative shadow-[0_0_40px_rgba(244,114,182,0.12)]">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#f472b6] text-white text-xs font-bold rounded-full uppercase tracking-wide">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$35</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">10 users · SMS reminders · Custom branding</p>
              <Link href="https://app.ziggyschedule.com/signup" className="block w-full text-center px-6 py-3 bg-[#f472b6] text-white rounded-xl font-semibold hover:bg-[#f472b6]/90 transition-all">Start free trial</Link>
            </div>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-2 text-[#f472b6] hover:underline font-medium">
            View full pricing and compare plans
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-4 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f472b6] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common questions</h2>
            <p className="text-lg text-[#b3b3b3]">Everything you need to know before you start.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#f472b6]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#f472b6] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-[#b3b3b3] mt-8">More questions? <Link href="/faq" className="text-[#f472b6] hover:underline">View full FAQ</Link></p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#0f080c] via-[#180d14] to-[#0f080c]">
        <div className="absolute inset-0 bg-[#f472b6]/4 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Stop paying $160/mo<br /><span style={{ color: '#f472b6' }}>to schedule meetings.</span></h2>
          <p className="text-xl text-[#b3b3b3] mb-10 leading-relaxed">14 days free. No credit card. Your whole team up and running in minutes.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.ziggyschedule.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#f472b6] text-white rounded-xl font-bold text-xl hover:bg-[#f472b6]/90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(244,114,182,0.3)]">
              Start Free Trial
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#f472b6]/10 border border-[#f472b6]/30 text-[#f472b6] rounded-xl font-bold text-xl hover:bg-[#f472b6]/20 transition-all">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f] py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4"><span style={{ color: '#ff1744' }}>Ziggy</span><span style={{ color: '#f472b6' }}>Schedule</span></p>
              <p className="text-sm text-[#b3b3b3] leading-relaxed">Team scheduling without the per-user pricing.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Product</p>
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Integrations', '/integrations'], ['Suite', '/suite'], ['Changelog', '/changelog'], ['Security', '/security']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Compare</p>
              {[['vs Calendly', '/compare/calendly'], ['vs Acuity', '/compare/acuity'], ['FAQ', '/faq'], ['Blog', '/blog']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Legal</p>
              {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/cookies']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div className="border-t border-[#1f1f1f] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#b3b3b3]">© 2026 ZiggyTech Ventures LLC</p>
            <Link href="https://ziggybusiness.com" className="text-sm text-[#b3b3b3] hover:text-white transition-colors">Part of the ZiggyTech Business Suite →</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
