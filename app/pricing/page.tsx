import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Pricing — $35/mo Online Booking Software",
  description:
    "ZiggySchedule is $35/mo. All features included — booking page, calendar embed, timezone detection, cancellation policy, packages, group events. 14-day free trial.",
  openGraph: {
    title: "ZiggySchedule Pricing — $35/mo, All Features Included",
    description: "One plan. $35/mo. 14-day free trial. No credit card required.",
    url: "https://ziggyschedule.com/pricing",
  },
};

const included = [
  "Booking page (your own URL)",
  "Calendar embed widget",
  "Timezone auto-detection",
  "Cancellation policy enforcement",
  "Package bookings",
  "Group events & classes",
  "Waitlists",
  "Online payments (Stripe)",
  "Email confirmations & reminders",
  "Custom branding",
  "Google & Outlook sync",
  "Recurring appointments",
  "Multiple services",
  "Blackout dates",
  "Revenue reporting",
  "Mobile-optimized booking",
];

const faqs = [
  {
    q: "Does ZiggySchedule enforce cancellation policies automatically?",
    a: "Yes. You set your cancellation window (e.g., 24 hours) and your no-show fee. If a client cancels within the window, they're automatically charged the fee via the payment method on file. You don't have to chase anyone.",
  },
  {
    q: "How does the calendar embed work?",
    a: "Copy one line of JavaScript code from your ZiggySchedule dashboard and paste it anywhere on your website. Your full booking calendar appears inline — not a popup, not a redirect. It works with Squarespace, Wix, WordPress, Webflow, and any HTML site.",
  },
  {
    q: "How does timezone detection work?",
    a: "When a client opens your booking page, ZiggySchedule automatically detects their timezone from their browser. They see available times in their local timezone. Your calendar shows the same times in your timezone. Confirmations are sent in both timezones.",
  },
  {
    q: "Can I run group classes or events?",
    a: "Absolutely. Create a group event with a seat limit. Clients book individual spots. When the class is full, a waitlist opens automatically. Great for yoga classes, workshops, webinars, group coaching, and anything with a fixed number of attendees.",
  },
  {
    q: "What are package bookings?",
    a: "You create a package (e.g., '5 coaching sessions — $400'). The client pays upfront and receives a credit for 5 sessions. They can book individual sessions from their package balance at any time. Perfect for coaching, personal training, and tutoring.",
  },
  {
    q: "Can I try before I buy?",
    a: "Yes. 14-day free trial, no credit card required. You get full access to every feature. If you decide ZiggySchedule isn't for you, just don't add a payment method. No awkward cancellation flow.",
  },
  {
    q: "Is there a free plan?",
    a: "No free plan — we're $35/mo. But you get a 14-day trial with no credit card. We'd rather give you the real product to evaluate than a crippled free tier.",
  },
  {
    q: "What payment processors do you support?",
    a: "Stripe. When you connect your Stripe account, clients can pay with any major credit or debit card at booking.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 text-center">
        <div
          className="inline-block text-xs px-3 py-1 rounded-full mb-6"
          style={{ backgroundColor: "#18181b", color: "#f472b6", border: "1px solid #f472b6" }}
        >
          PRICING
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Simple, honest pricing.
        </h1>
        <p className="text-xl mb-4" style={{ color: "#a1a1aa" }}>
          One plan. Everything included. No gotchas.
        </p>
        <p className="text-sm" style={{ color: "#a1a1aa" }}>
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </section>

      {/* Pricing card */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-lg mx-auto">
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "#18181b",
              border: "2px solid #f472b6",
              boxShadow: "0 0 80px rgba(244,114,182,0.15)",
            }}
          >
            <div className="text-center mb-8">
              <div className="text-sm font-semibold mb-2" style={{ color: "#f472b6" }}>
                EVERYTHING INCLUDED
              </div>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-7xl font-bold">$35</span>
                <span className="text-xl mb-2" style={{ color: "#a1a1aa" }}>/mo</span>
              </div>
              <p style={{ color: "#a1a1aa" }}>
                Way less than Acuity ($20/mo) or HoneyBook. Way more for service businesses.
              </p>
            </div>

            <Link
              href="https://app.ziggyschedule.com"
              className="block w-full text-center py-4 rounded-full font-bold text-lg transition-all hover:opacity-90 mb-3"
              style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
            >
              Start 14-Day Free Trial
            </Link>
            <p className="text-center text-xs mb-8" style={{ color: "#a1a1aa" }}>
              No credit card required
            </p>

            <div style={{ borderTop: "1px solid #27272a" }} className="pt-8">
              <h3 className="font-semibold mb-4">Everything included:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <span style={{ color: "#f472b6" }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison links */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
              Comparing options?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/vs/calendly" style={{ color: "#f472b6" }} className="text-sm hover:underline">
                ZiggySchedule vs Calendly →
              </Link>
              <Link href="/vs/acuity" style={{ color: "#f472b6" }} className="text-sm hover:underline">
                ZiggySchedule vs Acuity →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
              >
                <h3 className="font-bold mb-3">{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
