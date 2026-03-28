import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Coaching Booking Software — Book Discovery Calls and Sessions Automatically",
  description:
    "ZiggySchedule coaching booking software: discovery call booking, session packages, timezone auto-detection, and cancellation policies. For life coaches, business coaches, and health coaches. $19/mo.",
  keywords: [
    "coaching booking software",
    "life coach scheduling",
    "business coach booking",
    "coaching session booking",
    "discovery call scheduling",
  ],
  openGraph: {
    title: "Coaching Booking Software — Book Discovery Calls Automatically | ZiggySchedule",
    description: "Booking pages, session packages, timezone detection, and cancellation policies for coaches. $19/mo.",
    url: "https://ziggyschedule.com/coaches",
  },
};

const features = [
  {
    icon: "📞",
    title: "Discovery call booking",
    desc: "A dedicated discovery call page. Prospects pick a time, fill out a quick intake form, and land on your calendar ready to buy.",
  },
  {
    icon: "📦",
    title: "Session packages",
    desc: "Sell a 6-session or 12-session coaching package upfront. Clients pre-pay and book individual sessions from their balance.",
  },
  {
    icon: "🌎",
    title: "Timezone auto-detection",
    desc: "Coach clients across time zones without the confusion. Your booking page shows times in their local timezone automatically.",
  },
  {
    icon: "🚫",
    title: "Cancellation policy",
    desc: "Set a 24-hour cancellation window. Charge a fee for no-shows. Protect your coaching hours and your income.",
  },
  {
    icon: "📋",
    title: "Intake forms",
    desc: "Collect information before the session. What are they working on? What's their biggest challenge? Show up prepared.",
  },
  {
    icon: "🔗",
    title: "Embed on your website",
    desc: "Your coaching website gets a live booking calendar with one line of code. No more \"DM me to book\" — just book.",
  },
];

export default function CoachesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 40% at 50% -10%, rgba(244,114,182,0.15) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div
            className="inline-block text-xs px-3 py-1 rounded-full mb-6"
            style={{ backgroundColor: "#18181b", color: "#f472b6", border: "1px solid #f472b6" }}
          >
            COACHES
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Coaching booking software.<br />
            <span style={{ color: "#f472b6" }}>Book sessions automatically.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: "#a1a1aa" }}>
            Discovery calls, session packages, timezone auto-detection, and cancellation policies —
            for life coaches, business coaches, and health coaches. $19/mo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.ziggyschedule.com"
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
            >
              Start Free Trial — $19/mo
            </Link>
          </div>
          <p className="mt-4 text-sm" style={{ color: "#a1a1aa" }}>
            14-day free trial • No credit card
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your best leads go cold while you play scheduling tag.
          </h2>
          <p className="text-lg" style={{ color: "#a1a1aa" }}>
            Someone emails you asking about coaching. You reply with your availability.
            They reply with a different time. Two days later, they&apos;ve signed up with someone else.
            ZiggySchedule lets them book their discovery call in 60 seconds.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Built for coaches
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm" style={{ color: "#a1a1aa" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How packages work */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How coaching packages work</h2>
          <p className="text-center mb-10" style={{ color: "#a1a1aa" }}>
            Sell 6-session packages upfront. Get paid. Let clients book at their own pace.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}>
              <h3 className="font-semibold mb-3" style={{ color: "#f472b6" }}>You set up the package</h3>
              <ul className="space-y-2 text-sm" style={{ color: "#a1a1aa" }}>
                <li>• Package name: &ldquo;6-Week Business Breakthrough&rdquo;</li>
                <li>• Number of sessions: 6</li>
                <li>• Price: $600 (paid upfront)</li>
                <li>• Session duration: 60 minutes</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}>
              <h3 className="font-semibold mb-3" style={{ color: "#f472b6" }}>Client books sessions</h3>
              <ul className="space-y-2 text-sm" style={{ color: "#a1a1aa" }}>
                <li>• Client pays $600 upfront online</li>
                <li>• They get 6 session credits</li>
                <li>• They book sessions from their dashboard</li>
                <li>• Credits track automatically</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
