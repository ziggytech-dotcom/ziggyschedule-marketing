import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Gym Class Booking Software — Fill Every Class, Manage Waitlists",
  description:
    "ZiggySchedule gym booking software: class scheduling, seat limits, waitlists, packages, and cancellation policies. Fill every class. $19/mo.",
  keywords: [
    "gym class booking software",
    "fitness class booking",
    "gym scheduling software",
    "class waitlist management",
    "yoga class booking",
  ],
  openGraph: {
    title: "Gym Class Booking Software — Fill Every Class | ZiggySchedule",
    description: "Class scheduling, seat limits, waitlists, and packages for gyms and fitness studios. $19/mo.",
    url: "https://ziggyschedule.com/gyms",
  },
};

const features = [
  {
    icon: "🏋️",
    title: "Class schedule with seat limits",
    desc: "Create recurring classes with maximum capacity. Clients book their spot. When the class is full, booking closes automatically.",
  },
  {
    icon: "📋",
    title: "Automatic waitlists",
    desc: "When a class is full, clients join the waitlist. If a spot opens, the next person is notified automatically. No manual coordination.",
  },
  {
    icon: "📦",
    title: "Class package bundles",
    desc: "Sell a 10-class pack at a discount. Clients pre-pay and use credits to book classes. Increases retention and upfront revenue.",
  },
  {
    icon: "🔄",
    title: "Recurring class schedule",
    desc: "Set up Monday 7am Spin, Wednesday 6pm HIIT once. It repeats every week without you touching it.",
  },
  {
    icon: "🚫",
    title: "Late cancellation policy",
    desc: "Charge for late cancellations so members don't ghost classes. That spot could have gone to someone on the waitlist.",
  },
  {
    icon: "📱",
    title: "Members book from their phone",
    desc: "Your class schedule is mobile-first. Members check open spots and book in 30 seconds — anytime, anywhere.",
  },
];

export default function GymsPage() {
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
            GYMS & FITNESS STUDIOS
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Gym class booking software.<br />
            <span style={{ color: "#f472b6" }}>Fill every class.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: "#a1a1aa" }}>
            Class scheduling, seat limits, automatic waitlists, and class packages — for gyms,
            yoga studios, CrossFit boxes, and fitness studios. $19/mo. Everything included.
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

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { stat: "30%", label: "Reduction in no-shows with automated reminders" },
            { stat: "100%", label: "Class capacity filled with waitlist automation" },
            { stat: "$0", label: "Extra cost for class packages and waitlists" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: "#f472b6" }}>{item.stat}</div>
              <div className="text-sm" style={{ color: "#a1a1aa" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything your fitness studio needs
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

      {/* How the waitlist works */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How the waitlist works</h2>
          <p className="text-center mb-10" style={{ color: "#a1a1aa" }}>
            Stop leaving money (and members) on the table when your popular classes fill up.
          </p>
          <div className="space-y-4">
            {[
              { n: "1", text: "Member tries to book Monday 7am Spin — it's full." },
              { n: "2", text: "They join the waitlist with one click." },
              { n: "3", text: "Another member cancels their spot." },
              { n: "4", text: "Next person on the waitlist gets an automatic notification." },
              { n: "5", text: "They book their spot. Class stays full. You do nothing." },
            ].map((item) => (
              <div
                key={item.n}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
                >
                  {item.n}
                </div>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
