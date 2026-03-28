import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "../../components/CTABanner";

export const metadata: Metadata = {
  title: "ZiggySchedule vs Acuity Scheduling — $19/mo vs $20-61/mo",
  description:
    "ZiggySchedule vs Acuity Scheduling. ZiggySchedule is $19/mo — Acuity starts at $20 and goes up to $61/mo. Same features, fraction of the cost.",
  openGraph: {
    title: "ZiggySchedule vs Acuity Scheduling — Save Up to $42/mo",
    description: "Acuity charges $20–61/mo. ZiggySchedule is $19/mo with all features included. See the comparison.",
    url: "https://ziggyschedule.com/vs/acuity",
  },
};

const rows = [
  { feature: "Starting price", ziggy: "$19/mo", acuity: "$20/mo (Emerging)" },
  { feature: "Full-featured plan", ziggy: "$19/mo", acuity: "$61/mo (Powerhouse)" },
  { feature: "Booking page", ziggy: "✅", acuity: "✅" },
  { feature: "Calendar embed", ziggy: "✅", acuity: "✅" },
  { feature: "Timezone auto-detection", ziggy: "✅", acuity: "✅" },
  { feature: "Google & Outlook sync", ziggy: "✅", acuity: "✅" },
  { feature: "Online payments (Stripe)", ziggy: "✅", acuity: "✅" },
  { feature: "Cancellation policy", ziggy: "✅ Included at $19", acuity: "✅ Growing ($34/mo)" },
  { feature: "Package bookings", ziggy: "✅ Included at $19", acuity: "✅ Growing ($34/mo)" },
  { feature: "Group events / classes", ziggy: "✅ Included at $19", acuity: "✅ Growing ($34/mo)" },
  { feature: "Waitlists", ziggy: "✅ Included at $19", acuity: "✅ Growing ($34/mo)" },
  { feature: "Multiple staff members", ziggy: "✅", acuity: "✅ Growing ($34/mo)" },
  { feature: "Custom branding", ziggy: "✅", acuity: "✅" },
  { feature: "Modern UI/UX", ziggy: "✅ Clean, dark-mode ready", acuity: "⚠️ Dated interface" },
];

const acuityPlans = [
  { name: "Emerging", price: "$20/mo", features: "1 calendar, basic features, limited packages" },
  { name: "Growing", price: "$34/mo", features: "Multiple calendars, packages, classes" },
  { name: "Powerhouse", price: "$61/mo", features: "Full features, custom API, removal of Acuity branding" },
];

export default function VsAcuityPage() {
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
          ZiggySchedule vs<br />Acuity Scheduling
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: "#a1a1aa" }}>
          Acuity starts at $20/mo and climbs to $61/mo to unlock the features you actually need.
          ZiggySchedule is $19/mo. Everything included.
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

      {/* Price comparison */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Acuity&apos;s pricing vs ours</h2>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {/* Ziggy */}
            <div
              className="rounded-2xl p-6 text-center md:col-span-1"
              style={{
                backgroundColor: "#18181b",
                border: "2px solid #f472b6",
                boxShadow: "0 0 40px rgba(244,114,182,0.15)",
              }}
            >
              <div className="text-xs font-semibold mb-2" style={{ color: "#f472b6" }}>ZIGGYSCHEDULE</div>
              <div className="text-4xl font-bold mb-1" style={{ color: "#f472b6" }}>$19</div>
              <div className="text-sm mb-2" style={{ color: "#a1a1aa" }}>/mo</div>
              <div className="text-xs" style={{ color: "#a1a1aa" }}>Everything included</div>
            </div>

            {/* Acuity plans */}
            <div className="md:col-span-3 grid grid-cols-3 gap-4">
              {acuityPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl p-4 text-center"
                  style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
                >
                  <div className="text-xs font-semibold mb-2" style={{ color: "#a1a1aa" }}>ACUITY {plan.name.toUpperCase()}</div>
                  <div className="text-2xl font-bold mb-1">{plan.price}</div>
                  <div className="text-xs" style={{ color: "#a1a1aa" }}>{plan.features}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-6 text-center"
            style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
          >
            <p className="text-lg font-semibold mb-2">
              To get what ZiggySchedule gives you at{" "}
              <span style={{ color: "#f472b6" }}>$19/mo</span>
              {" "}— Acuity charges{" "}
              <span className="line-through" style={{ color: "#a1a1aa" }}>$34–61/mo</span>
            </p>
            <p style={{ color: "#a1a1aa" }}>
              That&apos;s up to <strong className="text-white">$42/mo more</strong> — $504/year extra — for the same functionality.
            </p>
          </div>
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
                    Acuity Scheduling
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
                    <td className="py-3 px-6 text-center text-sm" style={{ color: "#a1a1aa" }}>
                      {row.acuity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why switch */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            The case for switching
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Stop paying for what should be included",
                desc: "Acuity's basic plan ($20/mo) barely covers one calendar and basic bookings. You need the Growing plan ($34/mo) for classes, packages, and cancellation policies. ZiggySchedule includes all of that at $19/mo.",
              },
              {
                title: "A modern booking experience",
                desc: "Acuity's interface was built in a different era. ZiggySchedule was designed from the ground up for modern service businesses. Clean, fast, mobile-first — the kind of booking experience that reflects well on your brand.",
              },
              {
                title: "No confusing tiers",
                desc: "With Acuity, you're constantly checking which plan you need for which feature. With ZiggySchedule, there's one plan and everything is included. Simple.",
              },
              {
                title: "Same features, $15–42/mo cheaper",
                desc: "If you're currently on Acuity Growing or Powerhouse, switching to ZiggySchedule saves you $15–42/mo. That's $180–$504/year back in your pocket.",
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
