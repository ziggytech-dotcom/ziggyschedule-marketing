import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ZiggySchedule vs Calendly — Which Is Better for Service Businesses?",
  description:
    "ZiggySchedule vs Calendly: full feature comparison. Team scheduling at $35/mo vs Calendly's $120–$160. See which scheduling tool is right for your service business.",
  keywords: [
    "ZiggySchedule vs Calendly",
    "Calendly alternative",
    "Calendly for service businesses",
    "Calendly vs booking software",
    "cheap Calendly alternative",
  ],
  openGraph: {
    title: "ZiggySchedule vs Calendly — Team scheduling at $35 vs $160",
    description:
      "Full feature comparison. ZiggySchedule gives you team scheduling, group classes, and paid bookings from day one — at $35/mo for 10 people vs Calendly's $160.",
    url: "https://ziggyschedule.com/vs/calendly",
  },
};

const accent = "#f472b6";
const bg = "#0a0a0a";
const cardBg = "#111111";
const border = "1px solid #1f1f1f";
const radius = "14px";
const muted = "#a1a1aa";

export default function VsCalendlyPage() {
  return (
    <>
      <Script
        id="json-ld-vs-calendly"
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

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: bg,
          padding: "88px 24px 72px",
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
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(244,114,182,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: cardBg,
              border,
              borderRadius: "50px",
              padding: "6px 16px",
              fontSize: "0.8125rem",
              color: muted,
              marginBottom: "24px",
            }}
          >
            ZiggySchedule vs Calendly — 2024 Comparison
          </div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: accent }}>ZiggySchedule</span> vs Calendly
            <br />
            Which is right for your business?
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: muted,
              maxWidth: "620px",
              margin: "0 auto 40px",
              lineHeight: 1.65,
            }}
          >
            Calendly is great for individual booking links. The moment you have
            a team, it gets expensive fast. ZiggySchedule gives you team
            scheduling, group classes, and paid bookings from day one —{" "}
            <strong style={{ color: "#fff" }}>
              at $35/mo for 10 people vs Calendly&apos;s $160.
            </strong>
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
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
              Try ZiggySchedule Free
            </Link>
            <Link
              href="#comparison"
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
              See Full Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* ── Price Shock ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0d0d",
          padding: "72px 24px",
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: 800,
              marginBottom: "48px",
            }}
          >
            The price difference is jaw-dropping
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            <div
              style={{
                background: cardBg,
                border: `2px solid ${accent}`,
                borderRadius: radius,
                padding: "36px 28px",
                textAlign: "center",
                boxShadow: "0 0 40px rgba(244,114,182,0.12)",
              }}
            >
              <div
                style={{
                  color: accent,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  marginBottom: "12px",
                }}
              >
                ZIGGYSCHEDULE
              </div>
              <div
                style={{ fontSize: "4rem", fontWeight: 800, lineHeight: 1 }}
              >
                $35
              </div>
              <div style={{ color: muted, fontSize: "0.9rem", marginTop: "6px" }}>
                /mo for 10 users
              </div>
              <div
                style={{
                  color: accent,
                  fontSize: "0.875rem",
                  marginTop: "16px",
                  fontWeight: 600,
                }}
              >
                Team scheduling included
              </div>
            </div>
            <div
              style={{
                background: cardBg,
                border,
                borderRadius: radius,
                padding: "36px 28px",
                textAlign: "center",
                opacity: 0.7,
              }}
            >
              <div
                style={{
                  color: muted,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  marginBottom: "12px",
                }}
              >
                CALENDLY
              </div>
              <div
                style={{
                  fontSize: "4rem",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: muted,
                }}
              >
                $160
              </div>
              <div style={{ color: muted, fontSize: "0.9rem", marginTop: "6px" }}>
                /mo for 10 users ($16/user)
              </div>
              <div
                style={{
                  color: muted,
                  fontSize: "0.875rem",
                  marginTop: "16px",
                }}
              >
                Team scheduling on Teams plan only
              </div>
            </div>
          </div>
          <p
            style={{
              textAlign: "center",
              color: muted,
              marginTop: "32px",
              fontSize: "0.9375rem",
            }}
          >
            That&apos;s{" "}
            <strong style={{ color: "#fff" }}>$1,500/year saved</strong> just
            by switching from Calendly to ZiggySchedule for a 10-person team.
          </p>
        </div>
      </section>

      {/* ── Full Comparison Table ────────────────────────────────────── */}
      <section
        id="comparison"
        style={{ background: bg, padding: "88px 24px" }}
      >
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.25rem",
              fontWeight: 800,
              marginBottom: "48px",
            }}
          >
            Feature-by-feature comparison
          </h2>
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
                  ["Starting price (solo)", "$15/mo", "$12/user/mo (Standard)"],
                  ["10-user team cost", "$35/mo", "$120–$160/mo"],
                  ["Unlimited booking pages", "✅", "✅"],
                  ["Custom intake forms per service", "✅ All plans", "❌ Teams only"],
                  ["Group events & classes", "✅ All plans", "✅ Teams only"],
                  ["Round-robin team scheduling", "✅ Team+", "✅ Teams only"],
                  ["Paid bookings via Stripe", "✅ Business plan", "✅ Pro+ only"],
                  ["SMS reminders", "✅ BYOK Twilio (Team+)", "❌ Not available"],
                  ["Buffer times between bookings", "✅", "✅"],
                  ["Blackout dates", "✅", "✅"],
                  ["Resource management", "✅ Business", "❌"],
                  ["Full analytics", "✅ Business", "❌ Teams only"],
                  ["Priority support", "✅ Business", "❌"],
                  ["Built for service businesses", "✅ Purpose-built", "❌ Corporate focus"],
                ].map(([feature, us, them], i) => (
                  <tr
                    key={feature}
                    style={{
                      borderBottom: "1px solid #1a1a1a",
                      background:
                        i % 2 === 0 ? "transparent" : "rgba(17,17,17,0.6)",
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
        </div>
      </section>

      {/* ── Where Calendly Falls Short ───────────────────────────────── */}
      <section
        style={{
          background: "#0d0d0d",
          padding: "72px 24px",
          borderTop: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: 800,
              marginBottom: "48px",
            }}
          >
            Where Calendly falls short for service businesses
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
                icon: "💰",
                title: "Team pricing is brutal",
                desc: "Calendly charges per user on every plan. 10 staff members = $120–$160/mo. ZiggySchedule covers 10 users for $35.",
              },
              {
                icon: "📝",
                title: "No intake forms on lower plans",
                desc: "Custom intake forms — essential for salons, therapists, coaches — are locked behind Calendly's Teams plan.",
              },
              {
                icon: "💬",
                title: "No SMS reminders at all",
                desc: "Calendly doesn't offer SMS reminders on any plan. ZiggySchedule supports Twilio BYOK SMS on Team and Business.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: cardBg,
                  border,
                  borderRadius: radius,
                  padding: "28px 24px",
                }}
              >
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
                  {item.title}
                </h3>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom Line ──────────────────────────────────────────────── */}
      <section
        style={{
          background: bg,
          padding: "72px 24px",
          borderTop: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div
            style={{
              background: cardBg,
              border: `2px solid ${accent}`,
              borderRadius: radius,
              padding: "40px 36px",
              textAlign: "center",
              boxShadow: "0 0 48px rgba(244,114,182,0.12)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "16px",
              }}
            >
              🏆
            </div>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                marginBottom: "20px",
                lineHeight: 1.25,
              }}
            >
              The bottom line
            </h2>
            <p
              style={{
                color: muted,
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}
            >
              Calendly is great for individual booking links. The moment you
              have a team, it gets expensive fast. ZiggySchedule gives you team
              scheduling, group classes, and paid bookings from day one —{" "}
              <strong style={{ color: "#fff" }}>
                at $35/mo for 10 people vs Calendly&apos;s $160.
              </strong>
            </p>
            <Link
              href="https://app.ziggyschedule.com/signup"
              style={{
                display: "inline-block",
                background: accent,
                color: "#0a0a0a",
                padding: "14px 36px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Switch to ZiggySchedule — Free for 14 Days
            </Link>
            <div
              style={{
                color: muted,
                fontSize: "0.8125rem",
                marginTop: "12px",
              }}
            >
              No credit card required. Cancel anytime.
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0d0d",
          padding: "80px 24px",
          borderTop: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: 800,
              marginBottom: "48px",
            }}
          >
            Common questions about switching
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {[
              {
                q: "Can I import my Calendly bookings into ZiggySchedule?",
                a: "You can set up your ZiggySchedule account and start taking new bookings within minutes. Any existing scheduled meetings in Calendly can stay until they complete — then make the full switch.",
              },
              {
                q: "Will my clients notice the difference?",
                a: "They'll notice it's better — cleaner booking pages, intake forms before appointments, and text reminders if you want them. The booking experience is mobile-first and frictionless.",
              },
              {
                q: "Is ZiggySchedule really cheaper than Calendly for teams?",
                a: "Yes. Calendly charges $12–$16/user/mo. For 10 users, that's $120–$160/mo. ZiggySchedule's Team plan is $35/mo for up to 10 users — all team features included.",
              },
              {
                q: "Does ZiggySchedule have a free plan?",
                a: "We offer a 14-day free trial on any paid plan, no credit card required. Paid plans start at $15/mo for solo practitioners.",
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

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section
        style={{ background: bg, padding: "96px 24px", textAlign: "center" }}
      >
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
              fontWeight: 800,
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            Ready to ditch Calendly&apos;s team tax?
          </h2>
          <p
            style={{
              color: muted,
              fontSize: "1.0625rem",
              marginBottom: "36px",
              lineHeight: 1.65,
            }}
          >
            Start your free 14-day trial. No credit card. Full team features on
            day one.
          </p>
          <Link
            href="https://app.ziggyschedule.com/signup"
            style={{
              display: "inline-block",
              background: accent,
              color: "#0a0a0a",
              padding: "15px 36px",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "1.0625rem",
              textDecoration: "none",
            }}
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}
