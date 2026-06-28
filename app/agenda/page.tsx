import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BentoGrid, BentoTile, CtaTile, PageHeader } from "@/components/bento"
import { Section } from "@/components/layout"
import { Calendar, Clock, Users } from "lucide-react"

export default function AgendaPage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <PageHeader
        title="Program Agenda"
        description="Choose between our virtual or overnight programs to experience UC Berkeley"
      />

      <Section label="Programs">
        <BentoGrid stretch>
          <BentoTile span={4} href="/agenda/virtual" interactive fill>
            <Users className="mb-2 h-6 w-6 text-primary" />
            <h2 className="font-heading text-xl font-bold tracking-tight text-primary">Virtual Program</h2>
            <p className="mt-2 text-sm text-pretty text-muted-foreground">
              Faculty speakers, student panels, and virtual campus tours — all online.
            </p>
            <div className="mt-3 flex flex-col gap-1.5 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>9:00 AM – 12:30 PM PST</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Select dates available</span>
              </div>
            </div>
            <span className="mt-auto inline-block pt-4 text-sm font-semibold text-primary">View agenda →</span>
          </BentoTile>

          <BentoTile span={4} variant="primary" href="/agenda/overnight" interactive fill>
            <Calendar className="mb-2 h-6 w-6" />
            <h2 className="font-heading text-xl font-bold tracking-tight">Overnight Program</h2>
            <p className="mt-2 text-sm text-pretty text-brand-foreground/90">
              Stay in the dorms, meet your host, and participate in campus activities.
            </p>
            <div className="mt-3 flex flex-col gap-1.5 text-sm text-brand-foreground/90">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5:00 PM – 12:30 PM next day</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Multiple weekend dates</span>
              </div>
            </div>
            <span className="mt-auto inline-block pt-4 text-sm font-semibold">View agenda →</span>
          </BentoTile>

          <BentoTile span={4} fill>
            <h2 className="font-heading text-xl font-semibold tracking-tight text-primary">
              What to Expect
            </h2>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="font-semibold text-primary">Faculty Speakers</span>
                <span className="mt-0.5 block">Hear from distinguished professors about academic life at Berkeley</span>
              </li>
              <li>
                <span className="font-semibold text-primary">Student Panels</span>
                <span className="mt-0.5 block">Connect with current scholars and ask about their experiences</span>
              </li>
              <li>
                <span className="font-semibold text-primary">Campus Tours</span>
                <span className="mt-0.5 block">Explore Berkeley&apos;s campus — virtual or in person depending on your program</span>
              </li>
            </ul>
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section variant="muted" label="Register">
        <BentoGrid>
          <CtaTile
            title="Ready to register?"
            description="Secure your spot in a virtual or overnight program."
            actions={
              <Button asChild size="lg">
                <Link href="/registration">Register Now</Link>
              </Button>
            }
          />
        </BentoGrid>
      </Section>
    </div>
  )
}
