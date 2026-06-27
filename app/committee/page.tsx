import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { BentoGrid } from "@/components/bento-grid"
import { BentoTile } from "@/components/bento-tile"
import { CtaTile } from "@/components/cta-tile"
import { CommitteeGrid } from "./committee-grid"
import { Users } from "lucide-react"

export default function CommitteePage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <PageHeader
        title="Meet the Committee"
        description="Get to know the dedicated students who make ROHP possible"
      />

      <Section label="About the committee">
        <BentoGrid>
          <BentoTile span={8}>
            <p className="max-w-prose text-pretty text-muted-foreground">
              Our committee members are current UC Berkeley students passionate about sharing their
              experiences and helping prospective scholars discover what makes Berkeley special.
            </p>
          </BentoTile>
          <BentoTile span={4} variant="primary" className="text-center">
            <Users className="mx-auto mb-2 h-6 w-6" />
            <p className="font-heading text-3xl font-bold tracking-tight">20+</p>
            <p className="text-sm text-primary-foreground/90">Student hosts &amp; organizers</p>
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section variant="muted" label="Committee members">
        <CommitteeGrid />
      </Section>

      <Section label="Register">
        <BentoGrid>
          <CtaTile
            title="Ready to Meet Them in Person?"
            description="Register for a ROHP program to connect with our committee and current students."
            actions={
              <Button asChild>
                <Link href="/registration">Register Now</Link>
              </Button>
            }
          />
        </BentoGrid>
      </Section>
    </div>
  )
}
