import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Salon Booking Software — Online Booking for Hair, Nails & Spa",
  description:
    "ZiggySchedule is salon booking software for hair stylists, nail technicians, and spa owners. Let clients book online 24/7. No more phone tag. $19/mo.",
  keywords: [
    "salon booking software",
    "hair salon booking",
    "nail salon booking",
    "spa booking software",
    "online booking for salons",
  ],
  openGraph: {
    title: "Salon Booking Software — Online Booking for Hair, Nails & Spa | ZiggySchedule",
    description: "Let salon clients book themselves online. Booking pages, staff scheduling, cancellation policies, packages. $19/mo.",
    url: "https://ziggyschedule.com/salons",
  },
};

const features = [
  {
    icon: "💇",
    title: "Service menu with durations",
    desc: "List every service — haircut, color, blowout, gel nails — with its own duration and price. Clients book the exact service they want.",
  },
  {
    icon: "👩‍🎨",
    title: "Stylist/technician profiles",
    desc: "Each team member has their own schedule and profile. Clients pick their preferred stylist and book directly with them.",
  },
  {
    icon: "🚫",
    title: "Cancellation policy",
    desc: "Require 24-hour cancellation notice. Charge a fee for no-shows. Stop losing revenue to last-minute cancellations automatically.",
  },
  {
    icon: "📦",
    title: "Package bookings",
    desc: "Sell a 6-visit loyalty package. Clients pre-pay and book sessions from their balance. Builds loyalty and upfront revenue.",
  },
  {
    icon: "⏰",
    title: "Buffer time between appointments",
    desc: "Add cleanup and setup time between clients automatically. Your calendar stays realistic without manual blocking.",
  },
  {
    icon: "📱",
    title: "Clients book from their phone",
    desc: "Your booking page is mobile-first. Clients book at 11pm while they think about their roots. You wake up with appointments.",
  },
];

export default function SalonsPage() {
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
            SALONS & SPAS
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Salon booking software<br />
            <span style={{ color: "#f472b6" }}>clients actually use.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: "#a1a1aa" }}>
            Online booking for hair salons, nail salons, and spas. Let clients book themselves 24/7.
            No more phone tag. No more no-shows. Just full chairs.
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your chair is empty because booking is too hard.
          </h2>
          <p className="text-lg" style={{ color: "#a1a1aa" }}>
            Clients want to book at 10pm. You&apos;re not answering the phone at 10pm.
            They move on. ZiggySchedule fixes that — your booking page is open 24/7.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Built for salons and spas
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

      {/* Testimonial-style section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: "#18181b", border: "1px solid #f472b6", boxShadow: "0 0 60px rgba(244,114,182,0.1)" }}
          >
            <div className="text-5xl mb-4">💇‍♀️</div>
            <blockquote className="text-xl font-medium mb-4">
              &ldquo;I used to spend an hour a day going back and forth on text and Instagram DMs to book clients.
              Now they just use my link. I wake up to a full schedule.&rdquo;
            </blockquote>
            <p style={{ color: "#a1a1aa" }}>Hair stylist, Los Angeles</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How it works for your salon</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Set up your services", desc: "Add your services, durations, prices, and staff. Takes 10 minutes." },
              { step: "2", title: "Share your link", desc: "Post your booking link on Instagram, your website, or in your bio. That's your new front desk." },
              { step: "3", title: "Clients book themselves", desc: "They pick a service, pick a time, pay a deposit, and show up. You get a notification." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: "#a1a1aa" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
