import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { CookieBanner } from "@/app/components/CookieBanner"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: { default: "ZiggySchedule — Scheduling that works as hard as you do", template: "%s | ZiggySchedule" },
  description: "Scheduling that works as hard as you do. Part of the ZiggyTech Business Suite.",
  openGraph: { title: "ZiggySchedule — Scheduling that works as hard as you do", description: "Scheduling that works as hard as you do.", siteName: "ZiggySchedule", url: "https://ziggyschedule.com" },
  icons: { icon: '/favicon.ico' },
  metadataBase: new URL("https://ziggyschedule.com"),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-[#0a0a0a] text-white antialiased" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
