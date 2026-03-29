import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ZiggySchedule — Online Scheduling Software for Service Businesses",
  description:
    "The scheduling tool that works as hard as you do. Unlimited booking pages, custom intake forms, team scheduling, and paid bookings. Starting at $15/mo. 14-day free trial.",
  keywords: [
    "online scheduling software",
    "appointment booking software",
    "service business scheduling",
    "booking pages",
    "Calendly alternative",
    "salon scheduling software",
    "coach booking software",
  ],
  openGraph: {
    title: "ZiggySchedule — Online Scheduling Software for Service Businesses",
    description:
      "Unlimited bookings, intake forms, team scheduling, and paid bookings. Starting at $15/mo.",
    url: "https://ziggyschedule.com",
  },
};

const accent = "#f472b6";
const bg = "#0a0a0a";
const cardBg = "#111111";
const border = "1px solid #1f1f1f";
const radius = "14px";
const muted = "#a1a1aa";

export default function HomePage() {
  return (
    <>
      <Script
        id="json-ld-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ZiggySchedule",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "Offer",
              price: "15",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        style={{
          background: bg,
          padding: "88px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(244,114,182,0.13) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Online Scheduling Software
            <br />
            <span style={{ color: accent }}>Built for Service Businesses</span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: muted,
              maxWidth: "580px",
              margin: "0 auto 40px",
              lineHeight: 1.65,
            }}
          >
            The scheduling tool that works as hard as you do. Share your link,
            clients book themselves — unlimited bookings, custom intake forms,
            and team scheduling from $15/mo.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "36px",
            }}
          >
            <Link
              href="https://app.ziggyschedule.com/signup"
              style={{
                background: accent,
                color: "#0a0a0a",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Start Free Trial
            </Link>
            <Link
              href="#features"
              style={{
                background: "transparent",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-block",
                border: "1px solid #2a2a2a",
              }}
            >
              See Features
            </Link>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              gap: "28px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {["14-day free trial", "No credit card", "Cancel anytime"].map(
              (badge) => (
                <span
                  key={badge}
                  style={{
                    color: muted,
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{ color: accent }}>✓</span>
                  {badge}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Problem Strip ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0d0d",
          padding: "72px 24px",
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "48px",
            }}
          >
            Sound familiar?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: "😩",
                title: "Back-and-forth booking chaos",
                desc: '"Are you free Tuesday? No? How about Thursday?" Hours wasted every week on scheduling emails.',
              },
              {
                icon: "💸",
                title: "No-shows cost you money",
                desc: "Clients forget appointments. No reminders means lost time and lost revenue — every single week.",
              },
              {
                icon: "🧩",
                title: "Calendly wasn't built for you",
                desc: "Calendly is great for corporate meetings. It's not designed for salons, trainers, coaches, or trades.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: cardBg,
                  border,
                  borderRadius: radius,
                  padding: "32px 28px",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: muted, fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────── */}
      <section id="features" style={{ background: bg, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "2.25rem",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              Everything your booking workflow needs
            </h2>
            <p style={{ color: muted, fontSize: "1.0625rem" }}>
              Built for coaches, consultants, salons, gyms, and anyone who sells their time.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                icon: "📅",
                name: "Unlimited Booking Pages",
                desc: "Create as many booking pages as you need — one per service, staff member, or location. No caps.",
              },
              {
                icon: "📝",
                name: "Custom Intake Forms",
                desc: "Ask exactly what you need before the appointment. Custom questions per service type.",
              },
              {
                icon: "📧",
                name: "Automated Email Reminders",
                desc: "Automatic confirmation and reminder emails sent to clients. Reduce no-shows without lifting a finger.",
              },
              {
                icon: "👥",
                name: "Group Events & Classes",
                desc: "Run group sessions, workshops, or classes with seat limits, waitlists, and recurring schedules.",
              },
              {
                icon: "🔄",
                name: "Round-Robin Team Scheduling",
                desc: "Distribute bookings fairly across your team. Clients pick a service — you handle who shows up.",
              },
              {
                icon: "💳",
                name: "Paid Bookings via Stripe",
                desc: "Collect deposits or full payment at booking. Stripe integration built right in. (Business plan)",
              },
              {
                icon: "📱",
                name: "Mobile-Friendly Booking Pages",
                desc: "Every booking page is fully responsive. Clients book from any device without friction.",
              },
              {
                icon: "⏱️",
                name: "Buffer Times & Blackout Dates",
                desc: "Set prep time between appointments and block off unavailable dates with ease.",
              },
            ].map((f) => (
              <div
                key={f.name}
                style={{
                  background: cardBg,
                  border,
                  borderRadius: radius,
                  padding: "28px 24px",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{f.icon}</div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    marginBottom: "10px",
                  }}
                >
                  {f.name}
                </h3>
                <p style={{ color: muted, fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coming Soon Strip ──────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0d0d",
          padding: "64px 24px",
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              marginBottom: "40px",
            }}
          >
            On the roadmap
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                icon: "📆",
                name: "Google Calendar Sync",
                desc: "Two-way sync with Google Calendar. One schedule, zero conflicts.",
              },
              {
                icon: "📲",
                name: "Mobile App",
                desc: "Manage your bookings on the go — iOS and Android apps coming soon.",
              },
              {
                icon: "💬",
                name: "SMS Reminders (Twilio BYOK)",
                desc: "Text reminders via your own Twilio account. Your key, your cost.",
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  background: cardBg,
                  border,
                  borderRadius: radius,
                  padding: "28px 24px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#ff9500",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "20px",
                    letterSpacing: "0.05em",
                  }}
                >
                  IN DEVELOPMENT
                </div>
                <div style={{ fontSize: "2rem", marginBottom: "14px" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    marginBottom: "10px",
                  }}
                >
                  {item.name}
                </h3>
                <p style={{ color: muted, fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ─────────────────────────────────────────────────── */}
      <section style={{ background: bg, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "2.25rem",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              Built for your industry
            </h2>
            <p style={{ color: muted, fontSize: "1.0625rem" }}>
              From salons to trades — ZiggySchedule fits how your business
              actually books.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                icon: "💆",
                name: "Salons & Spas",
                desc: "Appointment booking + rebooking flows + staff scheduling across your full team.",
              },
              {
                icon: "🏋️",
                name: "Fitness & Personal Training",
                desc: "Class schedules + 1:1 sessions + membership-based recurring bookings.",
              },
              {
                icon: "🎓",
                name: "Tutors & Coaches",
                desc: "Discovery calls + recurring sessions + multi-session packages in one flow.",
              },
              {
                icon: "🩺",
                name: "Healthcare & Therapy",
                desc: "New patient intake + recurring appointments + automated reminder sequences.",
              },
              {
                icon: "🔨",
                name: "Contractors & Trades",
                desc: "Estimate appointment booking + job scheduling + follow-up reminders.",
              },
              {
                icon: "🏢",
                name: "Consultants & Agencies",
                desc: "Discovery → Proposal → Kickoff pipeline with scheduling at each step.",
              },
              {
                icon: "📸",
                name: "Photographers & Creatives",
                desc: "Shoot bookings + deposit collection + delivery call scheduling.",
              },
              {
                icon: "🐾",
                name: "Pet Services",
                desc: "Grooming + boarding + vet appointment flows with intake and reminders.",
              },
            ].map((ind) => (
              <div
                key={ind.name}
                style={{
                  background: cardBg,
                  border,
                  borderRadius: radius,
                  padding: "24px 20px",
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "10px" }}>
                  {ind.icon}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  {ind.name}
                </h3>
                <p style={{ color: muted, fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ color: muted, fontSize: "0.9375rem" }}>
              Need a custom setup?{" "}
              <a
                href="mailto:hello@ziggyschedule.com"
                style={{ color: accent, textDecoration: "underline" }}
              >
                Contact us.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ───────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0d0d",
          padding: "88px 24px",
          borderTop: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "2.25rem",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              ZiggySchedule vs Calendly
            </h2>
            <p style={{ color: muted, fontSize: "1.0625rem" }}>
              Team scheduling for 10 people at $35 vs Calendly&apos;s $160.
              You do the math.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9375rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      color: muted,
                      fontWeight: 600,
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "14px 16px",
                      color: accent,
                      fontWeight: 700,
                    }}
                  >
                    ZiggySchedule
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "14px 16px",
                      color: muted,
                      fontWeight: 600,
                    }}
                  >
                    Calendly
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Starting price", "$15/mo", "$12/user/mo"],
                  ["10-person team cost", "$35/mo", "$120–$160/mo"],
                  ["Unlimited booking pages", "✅", "✅"],
                  ["Custom intake forms per service", "✅", "❌ Teams only"],
                  ["Group events & classes", "✅", "✅ Teams only"],
                  ["Round-robin team scheduling", "✅", "✅ Teams only"],
                  ["Paid bookings via Stripe", "✅ Business plan", "✅ Pro+"],
                  ["SMS reminders (BYOK Twilio)", "✅ Team+", "❌"],
                  ["Buffer times & blackout dates", "✅", "✅"],
                  ["Resource management", "✅ Business", "❌"],
                  ["Full analytics", "✅ Business", "❌ Teams only"],
                  ["Built for service businesses", "✅", "❌ Corporate focus"],
                ].map(([feature, us, them], i) => (
                  <tr
                    key={feature}
                    style={{
                      borderBottom: "1px solid #1a1a1a",
                      background:
                        i % 2 === 0
                          ? "transparent"
                          : "rgba(17,17,17,0.6)",
                    }}
                  >
                    <td style={{ padding: "12px 16px" }}>{feature}</td>
                    <td
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        color: accent,
                        fontWeight: 600,
                      }}
                    >
                      {us}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        color: muted,
                      }}
                    >
                      {them}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link
              href="/vs/calendly"
              style={{
                color: accent,
                textDecoration: "underline",
                fontSize: "0.9375rem",
              }}
            >
              See the full comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────────────── */}
      <section id="pricing" style={{ background: bg, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "2.25rem",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              Simple, honest pricing
            </h2>
            <p style={{ color: muted, fontSize: "1.0625rem" }}>
              Start free. Scale when you&apos;re ready. No surprises.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "24px",
              maxWidth: "980px",
              margin: "0 auto",
            }}
          >
            {/* Solo */}
            <div
              style={{
                background: cardBg,
                border,
                borderRadius: radius,
                padding: "36px 28px",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  marginBottom: "8px",
                }}
              >
                Solo
              </div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  marginBottom: "4px",
                  lineHeight: 1,
                }}
              >
                $15
                <span
                  style={{
                    fontSize: "1rem",
                    color: muted,
                    fontWeight: 400,
                  }}
                >
                  /mo
                </span>
              </div>
              <p
                style={{
                  color: muted,
                  fontSize: "0.875rem",
                  marginBottom: "28px",
                  marginTop: "8px",
                }}
              >
                Perfect for solo practitioners
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {[
                  "1 user",
                  "Unlimited bookings",
                  "Custom intake forms",
                  "1 service type",
                  "Automated email reminders",
                  "Mobile-friendly booking page",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.9rem",
                      color: muted,
                    }}
                  >
                    <span style={{ color: accent }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="https://app.ziggyschedule.com/signup"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "12px",
                  borderRadius: "10px",
                  border: `1px solid ${accent}`,
                  color: accent,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                }}
              >
                Start Free Trial
              </Link>
            </div>

            {/* Team — featured */}
            <div
              style={{
                background: cardBg,
                border: `2px solid ${accent}`,
                borderRadius: radius,
                padding: "36px 28px",
                position: "relative",
                boxShadow: "0 0 48px rgba(244,114,182,0.15)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: accent,
                  color: "#0a0a0a",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  padding: "4px 16px",
                  borderRadius: "20px",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.04em",
                }}
              >
                MOST POPULAR
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  marginBottom: "8px",
                }}
              >
                Team
              </div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  marginBottom: "4px",
                  lineHeight: 1,
                }}
              >
                $35
                <span
                  style={{
                    fontSize: "1rem",
                    color: muted,
                    fontWeight: 400,
                  }}
                >
                  /mo
                </span>
              </div>
              <p
                style={{
                  color: muted,
                  fontSize: "0.875rem",
                  marginBottom: "28px",
                  marginTop: "8px",
                }}
              >
                Everything in Solo, plus:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {[
                  "Up to 10 users",
                  "Round-robin scheduling",
                  "Group events & classes",
                  "SMS reminders (BYOK Twilio)",
                  "Team management dashboard",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.9rem",
                      color: muted,
                    }}
                  >
                    <span style={{ color: accent }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="https://app.ziggyschedule.com/signup"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "12px",
                  borderRadius: "10px",
                  background: accent,
                  color: "#0a0a0a",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                }}
              >
                Start Free Trial
              </Link>
            </div>

            {/* Business */}
            <div
              style={{
                background: cardBg,
                border,
                borderRadius: radius,
                padding: "36px 28px",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  marginBottom: "8px",
                }}
              >
                Business
              </div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  marginBottom: "4px",
                  lineHeight: 1,
                }}
              >
                $59
                <span
                  style={{
                    fontSize: "1rem",
                    color: muted,
                    fontWeight: 400,
                  }}
                >
                  /mo
                </span>
              </div>
              <p
                style={{
                  color: muted,
                  fontSize: "0.875rem",
                  marginBottom: "28px",
                  marginTop: "8px",
                }}
              >
                Everything in Team, plus:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {[
                  "Unlimited users",
                  "Paid bookings via Stripe",
                  "Resource management",
                  "Full analytics dashboard",
                  "Priority support",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.9rem",
                      color: muted,
                    }}
                  >
                    <span style={{ color: accent }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="https://app.ziggyschedule.com/signup"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #2a2a2a",
                  color: "#fff",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                }}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0d0d",
          padding: "88px 24px",
          borderTop: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.25rem",
              fontWeight: 800,
              marginBottom: "56px",
            }}
          >
            Frequently asked questions
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {[
              {
                q: "Is ZiggySchedule better than Calendly for service businesses?",
                a: "Yes — Calendly is designed for corporate meeting booking. ZiggySchedule is purpose-built for service businesses: salons, coaches, trainers, contractors. You get intake forms, paid bookings, and real team scheduling at a fraction of the cost.",
              },
              {
                q: "How does the 14-day free trial work?",
                a: "Sign up and get full access to all features on your chosen plan for 14 days — no credit card required. After the trial, add payment to continue. No automatic charges.",
              },
              {
                q: "Can clients book without creating an account?",
                a: "Yes. Your booking page is fully public — clients choose a service, pick a time, fill in their details, and they're booked. No logins, no friction, no abandoned bookings.",
              },
              {
                q: "What's the difference between Solo, Team, and Business?",
                a: "Solo ($15/mo) is for one user with unlimited bookings and intake forms. Team ($35/mo) adds up to 10 users, round-robin scheduling, group events, and SMS reminders. Business ($59/mo) unlocks unlimited users, Stripe payments, resources, analytics, and priority support.",
              },
              {
                q: "Can I collect payment at the time of booking?",
                a: "Yes — on the Business plan, clients can pay via Stripe when they book. Collect a deposit or full payment upfront. Great for reducing no-shows.",
              },
              {
                q: "What does 'BYOK' mean for SMS reminders?",
                a: "BYOK means Bring Your Own Key — you connect your own Twilio account to send SMS reminders. You control your messaging, your costs, and your phone number. No markup from us.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: cardBg,
                  border,
                  borderRadius: radius,
                  padding: "24px 28px",
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "12px",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: bg,
          padding: "100px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(244,114,182,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "20px",
              lineHeight: 1.15,
            }}
          >
            Stop the back-and-forth.
            <br />
            <span style={{ color: accent }}>Start booking smarter.</span>
          </h2>
          <p
            style={{
              color: muted,
              fontSize: "1.125rem",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            Join service businesses that have put their scheduling on autopilot.
            14-day free trial — no credit card required.
          </p>
          <Link
            href="https://app.ziggyschedule.com/signup"
            style={{
              display: "inline-block",
              background: accent,
              color: "#0a0a0a",
              padding: "16px 40px",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "1.125rem",
              textDecoration: "none",
            }}
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}
