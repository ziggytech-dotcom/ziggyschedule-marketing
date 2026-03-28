import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "./components/CTABanner";

export const metadata: Metadata = {
  title: "ZiggySchedule — Let Clients Book Themselves",
  description:
    "Stop the back-and-forth. ZiggySchedule is online booking and scheduling software for service businesses. Share your link. Clients pick a time. Done. $19/mo.",
  keywords: [
    "online booking software",
    "client scheduling",
    "appointment booking",
    "booking page",
    "service business scheduling",
  ],
  openGraph: {
    title: "ZiggySchedule — Let Clients Book Themselves",
    description: "Stop the back-and-forth. $19/mo. Same as Calendly, way more features for service businesses.",
    url: "https://ziggyschedule.com",
  },
};

const features = [
  {
    icon: "📅",
    title: "Booking Page",
    desc: "A beautiful, branded booking page your clients can use 24/7. No logins, no friction.",
  },
  {
    icon: "🔗",
    title: "Calendar Embed",
    desc: "Paste one line of code. Your booking calendar appears on any website instantly.",
  },
  {
    icon: "🌎",
    title: "Timezone Detection",
    desc: "Auto-detects your client's timezone. No more \"wait, what time is that for you?\"",
  },
  {
    icon: "🚫",
    title: "Cancellation Policy",
    desc: "Set minimum notice windows and no-show fees. Protect your time automatically.",
  },
  {
    icon: "📦",
    title: "Package Bookings",
    desc: "Sell 5-session coaching packages or monthly retainers. Clients pre-pay and auto-book.",
  },
  {
    icon: "👥",
    title: "Group Events & Classes",
    desc: "Run yoga classes, webinars, or group sessions with seat limits and waitlists.",
  },
];

const comparisonData = [
  { feature: "Price", ziggy: "$19/mo", calendly: "$20/mo (Pro)", acuity: "$20–61/mo" },
  { feature: "Booking page", ziggy: "✅", calendly: "✅", acuity: "✅" },
  { feature: "Calendar embed", ziggy: "✅", calendly: "✅", acuity: "✅" },
  { feature: "Timezone auto-detection", ziggy: "✅", calendly: "✅", acuity: "✅" },
  { feature: "Cancellation policy", ziggy: "✅", calendly: "❌ (Teams only)", acuity: "✅" },
  { feature: "Package bookings", ziggy: "✅", calendly: "❌", acuity: "✅ (higher plan)" },
  { feature: "Group events / classes", ziggy: "✅", calendly: "✅ (Teams only)", acuity: "✅" },
  { feature: "Waitlists", ziggy: "✅", calendly: "❌", acuity: "✅" },
  { feature: "Built for service businesses", ziggy: "✅", calendly: "❌ (corporate focus)", acuity: "Partial" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-6">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(244,114,182,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-8"
            style={{ backgroundColor: "#18181b", border: "1px solid #27272a", color: "#a1a1aa" }}
          >
            <span style={{ color: "#f472b6" }}>●</span>
            $19/mo — Same price as Calendly, built for service businesses
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Stop the <span style={{ color: "#f472b6" }}>back-and-forth.</span>
          </h1>

          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-10" style={{ color: "#a1a1aa" }}>
            Share your link. Clients pick a time. Done.{" "}
            <span className="text-white">$19/mo</span> — same as Calendly, way more features for service businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="https://app.ziggyschedule.com"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-semibold text-lg transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
            >
              Start Free Trial
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-semibold text-lg transition-all border"
              style={{ borderColor: "#27272a", color: "#a1a1aa" }}
            >
              See How It Works
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: "#a1a1aa" }}>
            {["14-day free trial", "No credit card", "Cancel anytime"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span style={{ color: "#f472b6" }}>✓</span>
                {item}
              </div>
            ))}
          </div>

          {/* Booking Page Mockup */}
          <div
            className="mt-16 mx-auto max-w-2xl rounded-2xl overflow-hidden"
            style={{ border: "1px solid #27272a", backgroundColor: "#18181b" }}
          >
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid #27272a", backgroundColor: "#0f0a0a" }}>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff1744" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f472b6" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27272a" }} />
              <div
                className="flex-1 ml-2 text-center text-xs rounded py-0.5"
                style={{ backgroundColor: "#27272a", color: "#a1a1aa" }}
              >
                ziggyschedule.com/book/your-name
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full" style={{ backgroundColor: "#f472b6", opacity: 0.3 }} />
                <div>
                  <div className="h-3 w-32 rounded mb-2" style={{ backgroundColor: "#27272a" }} />
                  <div className="h-2 w-48 rounded" style={{ backgroundColor: "#27272a" }} />
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div key={i} className="text-center text-xs py-1" style={{ color: "#a1a1aa" }}>{d}</div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i - 2;
                  const isHighlight = [7, 9, 14, 16].includes(day);
                  const isPast = day < 1 || day > 31;
                  return (
                    <div
                      key={i}
                      className="text-center text-xs py-2 rounded cursor-pointer"
                      style={{
                        backgroundColor: isHighlight ? "#f472b6" : "transparent",
                        color: isPast ? "#27272a" : isHighlight ? "#0f0a0a" : "#a1a1aa",
                      }}
                    >
                      {isPast ? "" : day}
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-2 flex-wrap">
                {["9:00 AM", "10:00 AM", "2:00 PM", "3:30 PM"].map((t) => (
                  <div
                    key={t}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ border: "1px solid #f472b6", color: "#f472b6" }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            The old way is broken.
          </h2>
          <p className="text-center mb-12" style={{ color: "#a1a1aa" }}>
            Here&apos;s what scheduling looks like before and after ZiggySchedule.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: "#27272a" }}>
                  😩
                </div>
                <h3 className="font-bold text-lg">Back-and-forth emails</h3>
              </div>
              <div className="space-y-3">
                {[
                  '"Are you free Tuesday at 2pm?"',
                  '"Sorry, I have a call. How about Thursday?"',
                  '"Thursday works! Morning or afternoon?"',
                  '"Wait, can we do next week instead?"',
                  "[3 days later, still no meeting booked]",
                ].map((msg, i) => (
                  <div
                    key={i}
                    className="text-sm px-4 py-3 rounded-xl"
                    style={{
                      backgroundColor: i % 2 === 0 ? "#0f0a0a" : "#1a1a1a",
                      color: i === 4 ? "#a1a1aa" : "#ffffff",
                      fontStyle: i === 4 ? "italic" : "normal",
                      border: "1px solid #27272a",
                    }}
                  >
                    {msg}
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#18181b", border: "1px solid #f472b6", boxShadow: "0 0 40px rgba(244,114,182,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}>
                  ✓
                </div>
                <h3 className="font-bold text-lg">Share one link, they book themselves</h3>
              </div>
              <div className="space-y-4">
                <div
                  className="text-sm px-4 py-3 rounded-xl"
                  style={{ backgroundColor: "#0f0a0a", border: "1px solid #27272a" }}
                >
                  You: &ldquo;Here&apos;s my booking link — pick what works for you!&rdquo;
                </div>
                <div
                  className="text-sm px-4 py-3 rounded-xl text-center font-semibold"
                  style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
                >
                  📅 Meeting confirmed — Thursday 10:00 AM
                </div>
                <div
                  className="text-sm px-4 py-3 rounded-xl"
                  style={{ backgroundColor: "#0f0a0a", border: "1px solid #27272a", color: "#a1a1aa" }}
                >
                  ✉️ Confirmation sent to both of you automatically
                </div>
                <div
                  className="text-sm px-4 py-3 rounded-xl"
                  style={{ backgroundColor: "#0f0a0a", border: "1px solid #27272a", color: "#a1a1aa" }}
                >
                  ⏰ Reminder sent 24 hours before
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything a service business needs
            </h2>
            <p style={{ color: "#a1a1aa" }}>
              Built for coaches, consultants, salons, gyms, and anyone who sells their time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 transition-all hover:-translate-y-1"
                style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm" style={{ color: "#a1a1aa" }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/features" style={{ color: "#f472b6" }} className="text-sm hover:underline">
              See all features →
            </Link>
          </div>
        </div>
      </section>

      {/* Deep Feature: Calendar Embed */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-block text-xs px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: "#18181b", color: "#f472b6", border: "1px solid #f472b6" }}
              >
                EMBED ANYWHERE
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Your booking calendar,<br />on your website.
              </h2>
              <p className="mb-6" style={{ color: "#a1a1aa" }}>
                Paste one line of code and your calendar appears directly on your website. No redirects.
                No &ldquo;click here to book on another site.&rdquo; Clients stay on your brand, your page.
              </p>
              <ul className="space-y-3">
                {[
                  "Works on Squarespace, Wix, WordPress, Webflow",
                  "Mobile-responsive by default",
                  "Matches your brand colors",
                  "No iFrame headaches",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span style={{ color: "#f472b6" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-6 font-mono text-sm"
              style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
            >
              <div className="flex items-center gap-2 mb-4" style={{ color: "#a1a1aa" }}>
                <span>📄 index.html</span>
              </div>
              <pre className="text-sm leading-relaxed overflow-x-auto" style={{ color: "#a1a1aa" }}>
{`<html>
  <body>
    <!-- Your website content -->
    <h1>Book a session</h1>

    <!-- Add this one line: -->
    <script src="https://ziggyschedule.com
      /embed.js"
      data-user="your-name">
    </script>

  </body>
</html>`}
              </pre>
              <div
                className="mt-4 p-3 rounded-lg text-xs"
                style={{ backgroundColor: "#0f0a0a", color: "#f472b6", border: "1px solid #27272a" }}
              >
                ✓ That&apos;s it. Calendar appears automatically.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timezone Detection */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-2xl p-8 order-2 md:order-1"
              style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: "#0f0a0a", border: "1px solid #27272a" }}>
                  <div>
                    <div className="text-sm font-medium">Sarah (Your Client)</div>
                    <div className="text-xs" style={{ color: "#a1a1aa" }}>📍 New York, NY — EST</div>
                  </div>
                  <div className="text-sm font-bold" style={{ color: "#f472b6" }}>10:00 AM</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-2xl">⟺</div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: "#0f0a0a", border: "1px solid #27272a" }}>
                  <div>
                    <div className="text-sm font-medium">You</div>
                    <div className="text-xs" style={{ color: "#a1a1aa" }}>📍 Los Angeles, CA — PST</div>
                  </div>
                  <div className="text-sm font-bold" style={{ color: "#f472b6" }}>7:00 AM</div>
                </div>
                <div
                  className="text-center text-xs py-2 rounded-lg"
                  style={{ backgroundColor: "#f472b6", color: "#0f0a0a", fontWeight: "bold" }}
                >
                  ✓ Both calendars updated automatically
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div
                className="inline-block text-xs px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: "#18181b", color: "#f472b6", border: "1px solid #f472b6" }}
              >
                AUTO TIMEZONE
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                No more &ldquo;wait, what time is that for you?&rdquo;
              </h2>
              <p style={{ color: "#a1a1aa" }}>
                ZiggySchedule automatically detects your client&apos;s timezone. They see times in their local time,
                you see them in yours. Confirmations and reminders go out in both timezones.
                No confusion, no missed calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6" id="pricing">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple pricing.</h2>
          <p className="mb-12" style={{ color: "#a1a1aa" }}>
            One plan. Everything included. No upsells.
          </p>

          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "#18181b",
              border: "2px solid #f472b6",
              boxShadow: "0 0 60px rgba(244,114,182,0.15)",
            }}
          >
            <div className="text-sm font-semibold mb-2" style={{ color: "#f472b6" }}>ALL FEATURES INCLUDED</div>
            <div className="flex items-end justify-center gap-2 mb-2">
              <span className="text-6xl font-bold">$19</span>
              <span style={{ color: "#a1a1aa" }}>/mo</span>
            </div>
            <p className="text-sm mb-8" style={{ color: "#a1a1aa" }}>
              Same price as Calendly Pro. Way more features for service businesses.
            </p>
            <Link
              href="https://app.ziggyschedule.com"
              className="block w-full text-center py-3 rounded-full font-semibold text-lg transition-all hover:opacity-90 mb-4"
              style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
            >
              Start 14-Day Free Trial
            </Link>
            <p className="text-xs" style={{ color: "#a1a1aa" }}>No credit card required</p>

            <div style={{ borderTop: "1px solid #27272a" }} className="mt-8 pt-8 grid grid-cols-2 gap-3 text-left text-sm">
              {[
                "Booking page", "Calendar embed", "Timezone auto-detection",
                "Cancellation policy", "Package bookings", "Group events/classes",
                "Waitlists", "Email reminders", "Custom branding", "Unlimited bookings",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span style={{ color: "#f472b6" }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm" style={{ color: "#a1a1aa" }}>
            Need multiple team members?{" "}
            <Link href="/pricing" style={{ color: "#f472b6" }} className="hover:underline">
              See team pricing →
            </Link>
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            How we stack up
          </h2>
          <p className="text-center mb-12" style={{ color: "#a1a1aa" }}>
            Same price as Calendly. More features for service businesses.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #27272a" }}>
                  <th className="text-left py-4 px-4 text-sm font-semibold" style={{ color: "#a1a1aa" }}>Feature</th>
                  <th className="py-4 px-4 text-center text-sm font-bold" style={{ color: "#f472b6" }}>ZiggySchedule</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold" style={{ color: "#a1a1aa" }}>Calendly</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold" style={{ color: "#a1a1aa" }}>Acuity</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{ borderBottom: "1px solid #27272a", backgroundColor: i % 2 === 0 ? "transparent" : "rgba(24,24,27,0.5)" }}
                  >
                    <td className="py-3 px-4 text-sm">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-sm font-medium" style={{ color: "#f472b6" }}>{row.ziggy}</td>
                    <td className="py-3 px-4 text-center text-sm" style={{ color: "#a1a1aa" }}>{row.calendly}</td>
                    <td className="py-3 px-4 text-center text-sm" style={{ color: "#a1a1aa" }}>{row.acuity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/vs/calendly" style={{ color: "#f472b6" }} className="text-center text-sm hover:underline">
              Full ZiggySchedule vs Calendly comparison →
            </Link>
            <Link href="/vs/acuity" style={{ color: "#f472b6" }} className="text-center text-sm hover:underline">
              Full ZiggySchedule vs Acuity comparison →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
