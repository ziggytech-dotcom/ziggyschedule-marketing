import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #27272a", backgroundColor: "#0f0a0a" }} className="py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold mb-3">
              <span style={{ color: "#ff1744" }}>Ziggy</span>
              <span style={{ color: "#f472b6" }}>Schedule</span>
            </div>
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
              Let clients book themselves. Online scheduling for service businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              {[
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Salons", href: "/salons" },
                { label: "Gyms", href: "/gyms" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Use Cases</h4>
            <ul className="space-y-2">
              {[
                { label: "Coaches", href: "/coaches" },
                { label: "Consultants", href: "/consultants" },
                { label: "vs Calendly", href: "/vs/calendly" },
                { label: "vs Acuity", href: "/vs/acuity" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #27272a" }} className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "#a1a1aa" }}>
            © {new Date().getFullYear()} ZiggySchedule. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "#a1a1aa" }}>
            Made for service businesses that are tired of back-and-forth emails.
          </p>
        </div>
      </div>
    </footer>
  );
}
