import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  BentoGrid,
  BentoTile,
  Marquee,
  MarqueeItem,
  StatBlock,
} from "@/components/bento"
import { HeroLanding } from "@/components/features"
import { Section } from "@/components/layout"
import {
  Lightbulb,
  Users,
  Compass,
  Calendar,
  Mail,
  MapPin,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <HeroLanding />

      <Section fullBleed className="py-0" label="Marquee">
        <Marquee>
          <MarqueeItem>UC Berkeley</MarqueeItem>
          <MarqueeItem>·</MarqueeItem>
          <MarqueeItem>Regents Scholars</MarqueeItem>
          <MarqueeItem>·</MarqueeItem>
          <MarqueeItem>Campus Life</MarqueeItem>
          <MarqueeItem>·</MarqueeItem>
          <MarqueeItem>Golden Bears</MarqueeItem>
          <MarqueeItem>·</MarqueeItem>
          <MarqueeItem>Overnight Program</MarqueeItem>
          <MarqueeItem>·</MarqueeItem>
          <MarqueeItem>Virtual & In-Person</MarqueeItem>
        </Marquee>
      </Section>

      <Section variant="muted" label="About ROHP">
        <BentoGrid>
          <BentoTile span={8}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              About ROHP
            </h2>
            <p className="mt-3 max-w-prose text-pretty text-muted-foreground">
              The Regents&apos; Overnight Host Program connects Regents&apos; and Chancellor&apos;s
              Scholarship candidates with current UC Berkeley students for an immersive campus experience.
            </p>
            <div className="mt-5 space-y-4 border-t border-border pt-5">
              <div>
                <h3 className="font-heading text-lg font-semibold tracking-tight text-primary">
                  Who It&apos;s For
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Regents&apos; and Chancellor&apos;s Scholarship candidates exploring Berkeley before their college decision.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold tracking-tight text-primary">
                  Benefits
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Meet faculty, tour campus, connect with current scholars, and experience authentic student life at Cal.
                </p>
              </div>
            </div>
          </BentoTile>
          <BentoTile span={4} variant="accent" className="flex flex-col justify-between">
            <p className="font-heading text-lg font-semibold text-accent-foreground md:text-xl">
              Free for all scholarship candidates
            </p>
            <div className="mt-6 space-y-4 border-t border-accent-foreground/20 pt-5">
              <div>
                <Lightbulb className="mb-1.5 h-5 w-5 text-accent-foreground" />
                <p className="text-sm font-semibold text-accent-foreground">Experience</p>
                <p className="mt-1 text-sm text-accent-foreground/90">
                  Stay overnight, attend events, explore campus life firsthand.
                </p>
              </div>
              <div>
                <Users className="mb-1.5 h-5 w-5 text-accent-foreground" />
                <p className="text-sm font-semibold text-accent-foreground">Interact</p>
                <p className="mt-1 text-sm text-accent-foreground/90">
                  Connect with scholars, faculty, and fellow prospective students.
                </p>
              </div>
              <div>
                <Compass className="mb-1.5 h-5 w-5 text-accent-foreground" />
                <p className="text-sm font-semibold text-accent-foreground">Discover</p>
                <p className="mt-1 text-sm text-accent-foreground/90">
                  Tour facilities and explore academic programs at Cal.
                </p>
              </div>
            </div>
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section label="Videos">
        <BentoGrid>
          <BentoTile span={12}>
            <h2 className="mb-4 font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              See ROHP in Action
            </h2>
            <div className="grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  src="https://www.youtube.com/embed/M5bPQNFYbm8"
                  title="ROHP Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  src="https://www.youtube.com/embed/K48TEIDrJ9E"
                  title="ROHP Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section variant="muted" label="Statistics">
        <BentoGrid>
          <BentoTile span={4} className="text-center">
            <StatBlock value="4" label="Annual Programs" />
          </BentoTile>
          <BentoTile span={4} className="text-center">
            <StatBlock value="250+" label="Participants" accent />
          </BentoTile>
          <BentoTile span={4} className="text-center">
            <StatBlock value="20+" label="Years Running" />
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section label="Get started">
        <BentoGrid>
          <BentoTile span={8}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              Ready to Experience Berkeley?
            </h2>
            <p className="mt-2 max-w-prose text-sm text-pretty text-muted-foreground">
              Join us for an unforgettable program that will help you make the most important decision of your academic journey.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/registration">
                  <Calendar className="mr-2 h-4 w-4" />
                  Register for a Program
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/faq">Learn More</Link>
              </Button>
            </div>
          </BentoTile>
          <BentoTile span={4} variant="primary">
            <h2 className="font-heading text-xl font-semibold tracking-tight">
              Have Questions?
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/90">
              Reach out anytime — we&apos;re happy to help you plan your visit.
            </p>
            <a
              href="mailto:contact@rohp.berkeley.edu"
              className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              contact@rohp.berkeley.edu
            </a>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-primary-foreground/80">
              <MapPin className="h-4 w-4 shrink-0" />
              UC Berkeley, California
            </p>
            <Link
              href="/faq"
              className="mt-4 inline-flex cursor-pointer text-sm font-semibold transition-colors duration-200 hover:text-accent"
            >
              Browse FAQ →
            </Link>
          </BentoTile>
        </BentoGrid>
      </Section>
    </div>
  )
}
