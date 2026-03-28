import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Consultant Scheduling — Let Prospects Book Their Own Discovery Calls",
  description:
    "ZiggySchedule for consultants: discovery call booking, timezone detection, intake forms, and cancellation policies. Let prospects self-schedule. $19/mo.",
  keywords: [
    "consultant scheduling software",
    "consulting booking software",
    "discovery call booking",
    "consultant appointment scheduling",
    "let prospects book online",
  ],
  openGraph: {
    title: "Consultant Scheduling — Let Prospects Book Discovery Calls | ZiggySchedule",
    description: "Stop manually scheduling discovery calls. Share your link, prospects pick a time. $19/mo.",
    url: "https://ziggyschedule.com/consultants",
  },
};

const features = [
  {
    icon: "📞",
    title: "Discovery call self-scheduling",
    desc: "Share one link. Prospects see your real availability and pick a time that works. No back-and-forth, no wasted time.",
  },
  {
    icon: "📝",
    title: "Pre-call intake forms",
    desc: "Collect information before the call — company size, challenges, goals. You show up to every discovery call prepared and qualified.",
  },
  {
    icon: "🌎",
    title: "Global timezone detection",
    desc: "Work with clients around the world. Your booking page shows times in the prospect's timezone automatically.",
  },
  {
    icon: "⏱️",
    title: "Buffer time between calls",
    desc: "Add 15 minutes between calls automatically. Always have time to take notes, prepare, and decompress before the next one.",
  },
  {
    icon: "🔗",
    title: "Embed on your website",
    desc: "Add your booking calendar to your consulting website's Contact page. Visitors go from interested to booked in 60 seconds.",
  },
  {
    icon: "📅",
    title: "Multiple call types",
    desc: "Offer different call types — 30-min intro call, 60-min strategy session, 90-min deep-dive. Each with their own availability and pricing.",
  },
];

export default function ConsultantsPage() {
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
            CONSULTANTS
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Let prospects book<br />
            <span style={{ color: "#f472b6" }}>their own discovery calls.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: "#a1a1aa" }}>
            Consultant scheduling software that turns your website into a 24/7 sales team.
            Share your link. Qualified prospects pick a time. You show up ready.
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

      {/* The pitch */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
            >
              <h3 className="font-bold text-xl mb-4">Without ZiggySchedule</h3>
              <ul className="space-y-3">
                {[
                  "Prospect emails: \"Can we chat?\"",
                  "You reply with 3 time options",
                  "They reply with a conflict",
                  "48 hours of back-and-forth",
                  "They book with a competitor who responded faster",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#a1a1aa" }}>
                    <span className="text-red-400 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#18181b", border: "2px solid #f472b6", boxShadow: "0 0 40px rgba(244,114,182,0.1)" }}
            >
              <h3 className="font-bold text-xl mb-4">With ZiggySchedule</h3>
              <ul className="space-y-3">
                {[
                  "Prospect sees your booking link on your site",
                  "They pick a time in 60 seconds",
                  "They fill your intake form with their details",
                  "You get a notification",
                  "You show up to a qualified, prepared call",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span style={{ color: "#f472b6" }} className="mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Built for consultants
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

      {/* Use it anywhere */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Put your booking link everywhere</h2>
          <p className="mb-10" style={{ color: "#a1a1aa" }}>
            Your link works anywhere a prospect might find you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Email signature",
              "LinkedIn profile",
              "Website Contact page",
              "Proposal footer",
              "Cold outreach",
              "Social media bio",
              "Slide decks",
              "Business card QR",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl p-3 text-sm text-center"
                style={{ backgroundColor: "#18181b", border: "1px solid #27272a", color: "#a1a1aa" }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
