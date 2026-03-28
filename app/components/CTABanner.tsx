import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div
        className="max-w-3xl mx-auto text-center rounded-2xl py-16 px-8"
        style={{ background: "linear-gradient(135deg, #18181b 0%, #1a0d1a 100%)", border: "1px solid #27272a" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to stop the back-and-forth?
        </h2>
        <p className="text-lg mb-8" style={{ color: "#a1a1aa" }}>
          Join thousands of service businesses using ZiggySchedule. 14-day free trial, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://app.ziggyschedule.com"
            className="w-full sm:w-auto text-center px-8 py-3 rounded-full font-semibold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
          >
            Start Free Trial — $19/mo
          </Link>
          <Link
            href="/features"
            className="w-full sm:w-auto text-center px-8 py-3 rounded-full font-semibold text-lg transition-all border"
            style={{ borderColor: "#27272a", color: "#a1a1aa" }}
          >
            See All Features
          </Link>
        </div>
        <p className="mt-4 text-sm" style={{ color: "#a1a1aa" }}>
          14-day free trial • No credit card • Cancel anytime
        </p>
      </div>
    </section>
  );
}
