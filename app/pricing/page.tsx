'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const starterFeatures = [
  `1 user`,
  `Unlimited bookings`,
  `Intake forms`,
  `Basic appointment types`,
  `Email confirmations`,
  `Google Calendar sync`,
  `Embeddable widget`,
  `Email support`,
]
const proFeatures = [
  `Everything in Starter`,
  `10 users included`,
  `Team scheduling (round-robin)`,
  `SMS reminders (Twilio)`,
  `Stripe payments`,
  `Collective availability`,
  `Custom branding`,
  `Advanced analytics`,
  `Priority support`,
  `API access`,
]
const compRows = [
  { feature: `Users included`, starter: `1 user`, pro: `10 users` },
  { feature: `Additional users`, starter: `$8/user/mo`, pro: `$6/user/mo` },
  { feature: `Unlimited bookings`, starter: true, pro: true },
  { feature: `Intake forms`, starter: true, pro: true },
  { feature: `Google Calendar sync`, starter: true, pro: true },
  { feature: `Email confirmations`, starter: true, pro: true },
  { feature: `Team scheduling`, starter: false, pro: true },
  { feature: `SMS reminders (Twilio)`, starter: false, pro: true },
  { feature: `Stripe payments`, starter: false, pro: true },
  { feature: `Round-robin routing`, starter: false, pro: true },
  { feature: `Custom branding`, starter: false, pro: true },
  { feature: `Priority support`, starter: false, pro: true },
]
const faqs = [
  { q: `Can clients reschedule and cancel on their own?`, a: `Yes. Every confirmation email includes a reschedule and cancel link. You can set minimum notice periods and choose whether rescheduled slots open back up automatically.` },
  { q: `How does team scheduling work?`, a: `Pro plan includes team scheduling with round-robin assignment. When a client books, ZiggySchedule automatically assigns the next available team member.` },
  { q: `Can I charge clients at booking?`, a: `Yes. Connect your Stripe account and collect payment at booking — full payment, a deposit, or leave payment optional.` },
  { q: `Can I embed the booking widget on my website?`, a: `Yes. Every booking page can be embedded as an iframe on any website or landing page. The widget is fully responsive.` },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f472b6] mb-4">Pricing</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Simple, honest pricing</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto">No seat traps. No hidden fees. Just a price that works.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-6xl font-bold text-white">$15</span><span className="text-[#b3b3b3] mb-2 text-lg">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">1 user · +$8/additional user</p>
              <Link href="https://app.ziggyschedule.com/signup" className="block w-full text-center px-6 py-3.5 bg-[#f472b6]/10 border border-[#f472b6]/30 text-[#f472b6] rounded-xl font-semibold hover:bg-[#f472b6]/20 transition-all mb-6">Start free trial</Link>
              <ul className="space-y-3">{starterFeatures.map((f) => <li key={f} className="flex items-start gap-3 text-[#b3b3b3] text-sm"><svg className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>{f}</li>)}</ul>
            </div>
            <div className="bg-[#111111] border-2 border-[#f472b6]/40 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#f472b6] text-white text-xs font-bold rounded-full uppercase">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-6xl font-bold text-white">$35</span><span className="text-[#b3b3b3] mb-2 text-lg">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">10 users included · +$6/additional user</p>
              <Link href="https://app.ziggyschedule.com/signup" className="block w-full text-center px-6 py-3.5 bg-[#f472b6] text-white rounded-xl font-semibold hover:opacity-90 transition-all mb-6">Start free trial</Link>
              <ul className="space-y-3">{proFeatures.map((f) => <li key={f} className="flex items-start gap-3 text-[#b3b3b3] text-sm"><svg className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>{f}</li>)}</ul>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Feature comparison</h2>
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-3 bg-[#1a1a1a] border-b border-[#1f1f1f]">
              <div className="p-4 text-sm font-semibold text-[#b3b3b3]">Feature</div>
              <div className="p-4 text-sm font-semibold text-white text-center">Starter</div>
              <div className="p-4 text-sm font-semibold text-[#f472b6] text-center">Pro</div>
            </div>
            {compRows.map((r) => (
              <div key={r.feature} className="grid grid-cols-3 border-b border-[#1f1f1f] last:border-0 hover:bg-[#151515]">
                <div className="p-4 text-sm text-[#b3b3b3]">{r.feature}</div>
                <div className="p-4 text-center">
                  {typeof r.starter === 'boolean' ? (r.starter ? <svg className="w-5 h-5 text-[#f472b6] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5 text-[#555] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>) : <span className="text-sm text-[#b3b3b3]">{r.starter}</span>}
                </div>
                <div className="p-4 text-center">
                  {typeof r.pro === 'boolean' ? (r.pro ? <svg className="w-5 h-5 text-[#f472b6] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5 text-[#555] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>) : <span className="text-sm text-[#f472b6] font-medium">{r.pro}</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 mb-8 text-center">
            <p className="text-[#b3b3b3] text-sm mb-2">vs the competition</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div><p className="text-[#b3b3b3] text-sm">Calendly</p><p className="text-2xl font-bold text-white">$16<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
              <div><p className="text-[#f472b6] text-sm font-medium">ZiggySchedule</p><p className="text-2xl font-bold text-[#f472b6]">$15<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
              <div><p className="text-[#b3b3b3] text-sm">Acuity Scheduling</p><p className="text-2xl font-bold text-white">$20<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Pricing FAQ</h2>
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#f472b6] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-6"><p className="text-[#b3b3b3] leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Start your free trial today</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14 days free. No credit card required.</p>
          <Link href="https://app.ziggyschedule.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#f472b6] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
