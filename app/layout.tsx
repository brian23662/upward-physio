import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

/**
 * Editorial display serif — gives the whole site its premium personality.
 * Distinct enough to avoid the generic "Inter for everything" trap.
 */
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upwardphysio.com"),
  title: {
    default: "Upward Physio — Rise Stronger | Physical Therapy with DJ Keim, DPT",
    template: "%s · Upward Physio",
  },
  description:
    "Premium physical therapy, strength & conditioning, orthopedic rehabilitation, injury prevention, and workplace wellness with DJ Keim, DPT.",
  keywords: [
    "physical therapy",
    "DPT",
    "DJ Keim",
    "orthopedics",
    "strength and conditioning",
    "injury prevention",
    "occupational health",
    "workplace wellness",
    "Upward Physio",
  ],
  authors: [{ name: "Upward Physio LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://upwardphysio.com",
    siteName: "Upward Physio",
    title: "Upward Physio — Rise Stronger",
    description:
      "Physical therapy and performance care designed around your goals by DJ Keim, DPT.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Upward Physio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upward Physio — Rise Stronger",
    description:
      "Physical therapy and performance care designed around your goals by DJ Keim, DPT.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-white text-brand-ink antialiased">
        <Navbar />
        <main className="pt-0">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
