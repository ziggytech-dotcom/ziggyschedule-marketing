import Link from "next/link";

const accent = "#f472b6";
const muted = "#a1a1aa";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1f1f1f",
        background: "#0a0a0a",
        padding: "56px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "12px",
              }}
            >
              <span style={{ color: "#ff1744" }}>Ziggy</span>
              <span style={{ color: accent }}>Schedule</span>
            </div>
            <p
              style={{
                color: muted,
                fontSize: "0.875rem",
                lineHeight: 1.65,
                maxWidth: "240px",
                marginBottom: "14px",
              }}
            >
              The scheduling tool that works as hard as you do. Online booking
              for service businesses.
            </p>
            <a
              href="https://ziggybusiness.com"
              style={{
                color: muted,
                fontSize: "0.8rem",
                textDecoration: "none",
                borderBottom: "1px solid #2a2a2a",
                paddingBottom: "2px",
              }}
            >
              Part of the ZiggyTech Business Suite
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.06em",
                color: muted,
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Product
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      color: muted,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.06em",
                color: muted,
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Compare
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                { label: "vs Calendly", href: "/vs/calendly" },
                { label: "vs Acuity", href: "/vs/acuity" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      color: muted,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account & Legal */}
          <div>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.06em",
                color: muted,
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Account
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                {
                  label: "Sign In",
                  href: "https://app.ziggyschedule.com/login",
                },
                {
                  label: "Start Free Trial",
                  href: "https://app.ziggyschedule.com/signup",
                },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      color: muted,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #1f1f1f",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: muted, fontSize: "0.8125rem", margin: 0 }}>
            © {new Date().getFullYear()} ZiggySchedule. All rights reserved.
          </p>
          <p style={{ color: muted, fontSize: "0.8125rem", margin: 0 }}>
            Made for service businesses tired of back-and-forth emails.
          </p>
        </div>
      </div>
    </footer>
  );
}
