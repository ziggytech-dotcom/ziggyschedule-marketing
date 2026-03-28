import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "../../components/CTABanner";

export const metadata: Metadata = {
  title: "ZiggySchedule vs Calendly — Same Price, More Features for Service Businesses",
  description:
    "ZiggySchedule vs Calendly comparison. Both $19/mo. ZiggySchedule has cancellation policies, package bookings, waitlists, and more features built for service businesses.",
  openGraph: {
    title: "ZiggySchedule vs Calendly — $19/mo, More Features for Service Businesses",
    description: "Same price as Calendly. More features for coaches, salons, gyms, and consultants. See the full comparison.",
    url: "https://ziggyschedule.com/vs/calendly",
  },
};

const rows = [
  { feature: "Monthly price", ziggy: "$19/mo", calendly: "$20/mo (Pro)", winner: "ziggy" },
  { feature: "Booking page", ziggy: "✅", calendly: "✅", winner: "tie" },
  { feature: "Calendar embed", ziggy: "✅", calendly: "✅", winner: "tie" },
  { feature: "Timezone auto-detection", ziggy: "✅", calendly: "✅", winner: "tie" },
  { feature: "Google & Outlook sync", ziggy: "✅", calendly: "✅", winner: "tie" },
  { feature: "Email reminders", ziggy: "✅", calendly: "✅", winner: "tie" },
  { feature: "Cancellation policy", ziggy: "✅ All plans", calendly: "❌ Teams only ($16/user/mo)", winner: "ziggy" },
  { feature: "Package bookings", ziggy: "✅", calendly: "❌ Not available", winner: "ziggy" },
  { feature: "Group events / classes", ziggy: "✅", calendly: "✅ Teams only", winner: "ziggy" },
  { feature: "Waitlists", ziggy: "✅", calendly: "❌", winner: "ziggy" },
  { feature: "Online payments (Stripe)", ziggy: "✅", calendly: "✅ (Standard+)", winner: "tie" },
  { feature: "Recurring appointments", ziggy: "✅", calendly: "❌", winner: "ziggy" },
  { feature: "Multiple locations", ziggy: "✅", calendly: "❌", winner: "ziggy" },
  { feature: "Built for service businesses", ziggy: "✅", calendly: "❌ (corporate/SaaS focus)", winner: "ziggy" },
];

export default function VsCalendlyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 text-center">
        <div
          className="inline-block text-xs px-3 py-1 rounded-full mb-6"
          style={{ backgroundColor: "#18181b", color: "#f472b6", border: "1px solid #f472b6" }}
        >
          COMPARISON
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          ZiggySchedule vs Calendly
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: "#a1a1aa" }}>
          Same price. Same professional look. But ZiggySchedule is built for service businesses — not just corporate meeting scheduling.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://app.ziggyschedule.com"
            className="px-8 py-3 rounded-full font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
          >
            Try ZiggySchedule Free
          </Link>
          <span className="text-sm" style={{ color: "#a1a1aa" }}>
            14-day trial • No credit card
          </span>
        </div>
      </section>

      {/* The core argument */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              stat: "$19/mo",
              label: "ZiggySchedule",
              sub: "All features included",
              highlight: true,
            },
            {
              stat: "$20/mo",
              label: "Calendly Pro",
              sub: "Basic features only",
              highlight: false,
            },
            {
              stat: "$16+/user",
              label: "Calendly Teams",
              sub: "To get cancellation policies",
              highlight: false,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "#18181b",
                border: item.highlight ? "2px solid #f472b6" : "1px solid #27272a",
                boxShadow: item.highlight ? "0 0 40px rgba(244,114,182,0.15)" : "none",
              }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: item.highlight ? "#f472b6" : "white" }}>
                {item.stat}
              </div>
              <div className="font-semibold mb-1">{item.label}</div>
              <div className="text-sm" style={{ color: "#a1a1aa" }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Feature-by-feature comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid #27272a" }}>
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: "1px solid #27272a", backgroundColor: "#18181b" }}>
                  <th className="text-left py-4 px-6 text-sm font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center text-sm font-bold" style={{ color: "#f472b6" }}>
                    ZiggySchedule
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold" style={{ color: "#a1a1aa" }}>
                    Calendly
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{ borderBottom: "1px solid #27272a", backgroundColor: i % 2 === 0 ? "transparent" : "rgba(24,24,27,0.4)" }}
                  >
                    <td className="py-3 px-6 text-sm">{row.feature}</td>
                    <td className="py-3 px-6 text-center text-sm font-medium" style={{ color: "#f472b6" }}>
                      {row.ziggy}
                    </td>
                    <td className="py-3 px-6 text-center text-sm" style={{ color: row.winner === "ziggy" ? "#a1a1aa" : "white" }}>
                      {row.calendly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key differentiators */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Why service businesses choose ZiggySchedule over Calendly
          </h2>
          <p className="text-center mb-10" style={{ color: "#a1a1aa" }}>
            Calendly is great for scheduling meetings. But it wasn&apos;t built for service businesses that sell their time as a product.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cancellation policies that actually work",
                desc: "With Calendly, you need a $16/user/month Teams plan to get cancellation policy enforcement. With ZiggySchedule, it's included in your $19/mo. Set your policy once, stop losing money to no-shows.",
              },
              {
                title: "Package bookings (Calendly doesn't have this)",
                desc: "Want to sell a 10-session coaching package? You can't do it in Calendly. ZiggySchedule lets you sell packages, track session credits, and let clients book from their balance automatically.",
              },
              {
                title: "Waitlists for group classes",
                desc: "If you run group sessions, Calendly can't manage a waitlist. ZiggySchedule automatically fills cancelled spots from the waitlist and notifies the next person in line.",
              },
              {
                title: "Built for your kind of business",
                desc: "Calendly is designed for SaaS companies scheduling product demos. ZiggySchedule is built for coaches, salons, gyms, consultants, and anyone who sells their time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
              >
                <h3 className="font-bold mb-3" style={{ color: "#f472b6" }}>✓ {item.title}</h3>
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
