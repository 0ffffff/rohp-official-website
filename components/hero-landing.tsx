import Link from "next/link"
import { Calendar, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

import { siteContainerClass } from "@/components/bento-grid"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const socialLinks = [
  { href: "mailto:contact@rohp.berkeley.edu", icon: Mail, label: "Email" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
]

export function HeroLanding() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-[72vh] md:min-h-[78vh]"
    >
      <div
        className={cn(
          siteContainerClass,
          "flex min-h-[inherit] flex-col justify-center pt-8 pb-36 md:pt-12 md:pb-40",
        )}
      >
        <h1 className="font-heading text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-balance text-primary">
          Regents&apos; Overnight Host Program
        </h1>
      </div>

      <div className="absolute inset-x-0 bottom-6 md:bottom-8">
        <div
          className={cn(
            siteContainerClass,
            "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
          )}
        >
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/registration">
                <Calendar className="mr-2 h-5 w-5" />
                Register Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/faq">Learn More</Link>
            </Button>
          </div>
          <div className="flex gap-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-background transition-colors duration-200 hover:border-primary hover:text-primary"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
