import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  { title: `Unlimited Bookings`, desc: `No booking limits, ever. Whether you have 10 appointments a month or 10,000, your price stays the same.`, bullets: [`No booking caps`, `Unlimited appointment types`, `Unlimited booking pages`, `Buffer time between meetings`, `Max daily limits`, `Advance booking windows`] },
  { title: `Intake Forms`, desc: `Collect the information you need before the meeting. Ask custom questions and qualify leads upfront.`, bullets: [`Custom question builder`, `Required vs optional fields`, `File upload support`, `Conditional logic`, `Pre-meeting reminders`, `Answers visible in dashboard`] },
  { title: `Team Scheduling`, desc: `Round-robin assignment, collective availability, and team booking pages. Clients book the next available team member.`, bullets: [`Round-robin assignment`, `Collective availability`, `Team booking pages`, `Max per-person daily limits`, `Admin override`, `Team analytics`] },
  { title: `SMS Reminders`, desc: `Reduce no-shows with automated SMS reminders powered by Twilio.`, bullets: [`Twilio-powered SMS`, `Custom reminder timing`, `Confirmation messages`, `Cancellation notifications`, `Reschedule link in SMS`, `Two-way SMS replies`] },
  { title: `Stripe Payments`, desc: `Collect payment at booking. Charge upfront, require deposits, or let clients pay after.`, bullets: [`Upfront payment`, `Deposit requirements`, `No-show protection`, `Automatic refund support`, `Coupon codes`, `Payment receipts`] },
  { title: `Google Calendar Sync`, desc: `Bidirectional sync with Google Calendar. Block times automatically and prevent double bookings.`, bullets: [`Bidirectional sync`, `Multiple calendar connection`, `Automatic conflict blocking`, `Personal calendar privacy`, `Outlook sync (coming soon)`, `iCal feed support`] },
]

export default function FeaturesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f472b6]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f472b6] mb-4">Features</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Everything ZiggySchedule can do</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8">Every feature explained. No fluff.</p>
          <Link href="https://app.ziggyschedule.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f472b6] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">
            Start Free Trial — 14 days free
          </Link>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                <p className="text-lg text-[#b3b3b3] leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[#b3b3b3]">
                      <div className="w-5 h-5 rounded-full bg-[#f472b6]/20 border border-[#f472b6]/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#f472b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-[#111111] border border-[#1f1f1f] rounded-2xl aspect-video flex items-center justify-center">
                <p className="text-[#555] text-sm">Screenshot coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to see it in action?</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14-day free trial. No credit card required.</p>
          <Link href="https://app.ziggyschedule.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#f472b6] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
