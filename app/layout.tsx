import type React from "react"
import type { Metadata } from "next"
import { Outfit, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { AnimatedThemeToggle } from "@/components/ui/animated-theme-toggle"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ROHP - Regents' Overnight Host Program | UC Berkeley",
  description:
    "Experience UC Berkeley through the Regents' Overnight Host Program. Connect with current students and discover life as a Golden Bear.",
  keywords: ["UC Berkeley", "Regents Scholarship", "ROHP", "College Visit", "Campus Tour"],
  icons: {
    icon: [
      {
        url: "/rohp-logo.png",
        type: "image/png",
      },
    ],
    apple: "/rohp-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${sourceSans.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <SmoothScroll>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <AnimatedThemeToggle />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
