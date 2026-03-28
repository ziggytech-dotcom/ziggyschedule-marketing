import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ZiggySchedule — Let Clients Book Themselves",
    template: "%s | ZiggySchedule",
  },
  description:
    "Stop the back-and-forth. ZiggySchedule is online booking software for service businesses. Share your link, clients pick a time. $19/mo.",
  keywords: [
    "online scheduling",
    "booking software",
    "appointment booking",
    "client scheduling",
    "service business booking",
  ],
  openGraph: {
    title: "ZiggySchedule — Let Clients Book Themselves",
    description:
      "Stop the back-and-forth. Share your link. Clients pick a time. Done. $19/mo.",
    url: "https://ziggyschedule.com",
    siteName: "ZiggySchedule",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZiggySchedule — Let Clients Book Themselves",
    description: "Stop the back-and-forth. $19/mo online booking for service businesses.",
  },
  metadataBase: new URL("https://ziggyschedule.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
