'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const faqs = [
  { q: `Can clients reschedule and cancel on their own?`, a: `Yes. Every confirmation email includes a reschedule and cancel link. You can set minimum notice periods and choose whether rescheduled slots open back up automatically.` },
  { q: `How does team scheduling work?`, a: `Pro plan includes team scheduling with round-robin assignment. When a client books, ZiggySchedule automatically assigns the next available team member.` },
  { q: `Can I charge clients at booking?`, a: `Yes. Connect your Stripe account and collect payment at booking — full payment, a deposit, or leave payment optional.` },
  { q: `Can I embed the booking widget on my website?`, a: `Yes. Every booking page can be embedded as an iframe on any website or landing page. The widget is fully responsive.` },
  { q: `Does ZiggySchedule work with video conferencing?`, a: `Yes. Connect your Zoom account and ZiggySchedule automatically generates a unique Zoom link for every video booking.` },
  { q: `How many appointment types can I create?`, a: `Unlimited. Create as many appointment types as you need — each with its own duration, availability, pricing, and intake form.` },
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f472b6] mb-4">FAQ</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Frequently asked questions</h1>
          <p className="text-xl text-[#b3b3b3]">Everything you need to know about ZiggySchedule.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#f472b6]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#f472b6] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {open === i && <div className="px-6 md:px-8 pb-6 md:pb-8"><p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#f472b6]/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-[#b3b3b3] mb-6">Our team is happy to help.</p>
            <Link href="https://app.ziggyschedule.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f472b6] text-white rounded-xl font-semibold hover:opacity-90 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
