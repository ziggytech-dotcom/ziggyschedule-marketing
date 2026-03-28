import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Features — Online Scheduling Software for Service Businesses",
  description:
    "ZiggySchedule features: booking pages, calendar embed, timezone detection, cancellation policies, package bookings, group events, team scheduling. $19/mo.",
  openGraph: {
    title: "ZiggySchedule Features — Everything for Service Business Scheduling",
    description: "Booking pages, calendar embed, timezone detection, cancellation policies, packages, and more. $19/mo.",
    url: "https://ziggyschedule.com/features",
  },
};

const featureSections = [
  {
    id: "booking-experience",
    label: "BOOKING EXPERIENCE",
    title: "A booking experience clients actually love",
    description:
      "Your clients deserve a seamless booking experience — not 6 emails and a phone call. ZiggySchedule gives you a professional booking page, embed widget, and smart automations that make booking effortless.",
    features: [
      {
        icon: "📅",
        title: "Beautiful Booking Page",
        desc: "A branded booking page at ziggyschedule.com/book/your-name (or your custom domain). Clients pick a service, pick a time, and book — no account needed.",
      },
      {
        icon: "🔗",
        title: "Calendar Embed Widget",
        desc: "One line of code embeds your full booking calendar on any website. Works with Squarespace, Wix, WordPress, Webflow, and raw HTML.",
      },
      {
        icon: "🌎",
        title: "Timezone Auto-Detection",
        desc: "Your booking page detects the client's timezone automatically. They see times in their local time. No confusion, no missed calls.",
      },
      {
        icon: "📧",
        title: "Automated Email Reminders",
        desc: "Confirmations, reminders, and follow-ups go out automatically. Reduce no-shows without lifting a finger.",
      },
      {
        icon: "🎨",
        title: "Custom Branding",
        desc: "Add your logo, brand colors, and profile photo. Your booking page looks like you, not like a generic SaaS tool.",
      },
      {
        icon: "📱",
        title: "Mobile-First Design",
        desc: "Clients book from their phone just as easily as their desktop. No pinching, no zooming, no frustration.",
      },
    ],
  },
  {
    id: "calendar-management",
    label: "CALENDAR MANAGEMENT",
    title: "Your calendar, finally under control",
    description:
      "Connect your existing calendar, set your availability, and let clients book around your real schedule. ZiggySchedule checks your calendar before every booking.",
    features: [
      {
        icon: "🔄",
        title: "Google & Outlook Sync",
        desc: "Two-way sync with Google Calendar and Outlook. ZiggySchedule reads your existing events and blocks time automatically.",
      },
      {
        icon: "⏰",
        title: "Availability Rules",
        desc: "Set your working hours, buffer time between meetings, and minimum booking notice. Clients can only book times that actually work for you.",
      },
      {
        icon: "🚫",
        title: "Blackout Dates",
        desc: "Block out holidays, vacations, and busy periods with a few clicks. No one books during your time off.",
      },
      {
        icon: "🔢",
        title: "Booking Limits",
        desc: "Cap how many appointments you take per day or week. Protect your capacity without awkward conversations.",
      },
      {
        icon: "📆",
        title: "Multiple Services",
        desc: "Offer different service types with different durations, prices, and availability. One booking page, multiple offerings.",
      },
      {
        icon: "👥",
        title: "Group Events & Classes",
        desc: "Run yoga classes, webinars, group coaching sessions, or workshops with seat limits and automatic waitlists.",
      },
    ],
  },
  {
    id: "payments-policies",
    label: "PAYMENTS & POLICIES",
    title: "Get paid. Protect your time.",
    description:
      "Take deposits, sell packages, enforce cancellation policies, and manage no-shows — all automatically. Stop losing money to last-minute cancellations.",
    features: [
      {
        icon: "💳",
        title: "Online Payments",
        desc: "Accept payments at booking via Stripe. Require deposits or full payment upfront. Money hits your account before the appointment.",
      },
      {
        icon: "🚫",
        title: "Cancellation Policy",
        desc: "Set minimum notice windows (e.g., 24-hour cancellation policy). Charge a fee for late cancellations or no-shows automatically.",
      },
      {
        icon: "📦",
        title: "Package Bookings",
        desc: "Sell 5-session, 10-session, or monthly packages. Clients pre-pay and auto-book sessions from their package balance.",
      },
      {
        icon: "🎁",
        title: "Gift Cards & Vouchers",
        desc: "Let clients give the gift of your services. Gift cards redeemable at checkout, tracked automatically.",
      },
      {
        icon: "📊",
        title: "Revenue Reporting",
        desc: "See your bookings, revenue, and cancellations in one dashboard. Know your numbers without a spreadsheet.",
      },
      {
        icon: "🔁",
        title: "Recurring Appointments",
        desc: "Clients can book the same time every week, two weeks, or month. Perfect for ongoing coaching or recurring sessions.",
      },
    ],
  },
  {
    id: "team-scheduling",
    label: "TEAM SCHEDULING",
    title: "Built for teams, too",
    description:
      "Manage a team of service providers? ZiggySchedule handles multi-staff scheduling, round-robin assignment, and location-based routing.",
    features: [
      {
        icon: "👤",
        title: "Staff Profiles",
        desc: "Each team member gets their own booking page and schedule. Clients can choose their preferred provider.",
      },
      {
        icon: "🔄",
        title: "Round-Robin Assignment",
        desc: "Distribute bookings evenly across your team automatically. No manual assignment needed.",
      },
      {
        icon: "📍",
        title: "Multiple Locations",
        desc: "Manage bookings across multiple locations. Clients pick the location closest to them.",
      },
      {
        icon: "📋",
        title: "Team Calendar View",
        desc: "See all team members' schedules in one view. Spot gaps, manage capacity, stay coordinated.",
      },
      {
        icon: "🔔",
        title: "Staff Notifications",
        desc: "Each team member gets notified of their own bookings. No one misses an appointment.",
      },
      {
        icon: "📈",
        title: "Team Performance",
        desc: "Track bookings and revenue per team member. Identify your busiest providers and peak times.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 text-center">
        <div
          className="inline-block text-xs px-3 py-1 rounded-full mb-6"
          style={{ backgroundColor: "#18181b", color: "#f472b6", border: "1px solid #f472b6" }}
        >
          FEATURES
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          Everything you need to<br />
          <span style={{ color: "#f472b6" }}>run your booking business</span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: "#a1a1aa" }}>
          Booking pages, calendar embed, timezone detection, payments, cancellation policies,
          packages, and group events. All in one plan. $19/mo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://app.ziggyschedule.com"
            className="px-8 py-3 rounded-full font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
          >
            Start Free Trial
          </Link>
          <Link href="/pricing" style={{ color: "#a1a1aa" }} className="text-sm hover:text-white">
            See pricing →
          </Link>
        </div>
      </section>

      {/* Quick nav */}
      <div className="sticky top-16 z-40 py-3 px-4 sm:px-6 overflow-x-auto" style={{ backgroundColor: "rgba(15,10,10,0.95)", borderBottom: "1px solid #27272a", backdropFilter: "blur(8px)" }}>
        <div className="max-w-6xl mx-auto flex items-center gap-6 text-sm whitespace-nowrap">
          {featureSections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>
              {s.label.split(" ").map(w => w[0] + w.slice(1).toLowerCase()).join(" ")}
            </a>
          ))}
        </div>
      </div>

      {/* Feature Sections */}
      {featureSections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className="py-20 px-4 sm:px-6"
          style={{ backgroundColor: idx % 2 === 1 ? "rgba(24,24,27,0.3)" : "transparent" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div
                className="inline-block text-xs px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: "#18181b", color: "#f472b6", border: "1px solid #f472b6" }}
              >
                {section.label}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{section.title}</h2>
              <p className="max-w-2xl mx-auto" style={{ color: "#a1a1aa" }}>{section.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
                >
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm" style={{ color: "#a1a1aa" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABanner />
    </>
  );
}
