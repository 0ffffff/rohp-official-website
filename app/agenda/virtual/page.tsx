import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BentoGrid } from "@/components/bento-grid"
import { BentoTile } from "@/components/bento-tile"
import { CtaTile } from "@/components/cta-tile"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { TimelineList, type TimelineItem } from "@/components/timeline-list"
import { Download, Clock } from "lucide-react"

const timelineEvents: TimelineItem[] = [
  { time: "9:00 AM", title: "Check-ins", description: "Welcome and technical setup" },
  { time: "9:10 AM", title: "Official Opening", description: "Introduction to the program" },
  { time: "9:15 AM", title: "Group Agreements & DEI", description: "Setting community guidelines" },
  { time: "9:35 AM", title: "Icebreaker", description: "Get to know your fellow participants" },
  { time: "9:50 AM", title: "Quizizz", description: "Interactive Berkeley trivia game" },
  { time: "10:10 AM", title: "Faculty Speaker", description: "Presentation from a Berkeley professor", highlight: "primary" },
  { time: "10:30 AM", title: "Benefits Overview", description: "Learn about Regents' Scholarship benefits" },
  { time: "10:40 AM", title: "Campus Experience Panel", description: "Current students share their stories" },
  { time: "11:10 AM", title: "Campus Tour", description: "Virtual tour of Berkeley's campus" },
  { time: "11:55 AM", title: "Meet Your Host", description: "Q&A with current Berkeley students" },
  { time: "12:30 PM", title: "Closing Remarks", description: "Wrap-up and next steps", highlight: "accent" },
]

export default function VirtualAgendaPage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <PageHeader
        title="Virtual Program Agenda"
        description="Join us for a comprehensive virtual experience from the comfort of your home"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Agenda", href: "/agenda" },
          { label: "Virtual" },
        ]}
      />

      <Section variant="muted" label="Program schedule">
        <BentoGrid>
          <BentoTile span={4}>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <div className="font-semibold text-primary">March 14th, 2025</div>
                <div className="text-sm text-muted-foreground">9:00 AM – 12:30 PM PST</div>
                <p className="mt-2 text-sm text-muted-foreground">3.5 hours · 11 sessions · Pacific Time</p>
              </div>
            </div>
            <Button variant="outline" className="mt-4 w-full cursor-pointer gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Download PDF Schedule
            </Button>
          </BentoTile>
          <BentoTile span={8}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              Program Schedule
            </h2>
            <TimelineList items={timelineEvents} className="mt-4" />
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section label="Register">
        <BentoGrid>
          <CtaTile
            title="Ready to Join?"
            description="Register now to secure your spot."
            actions={
              <>
                <Button asChild>
                  <Link href="/registration">Register for Virtual</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/agenda">Other Programs</Link>
                </Button>
              </>
            }
          />
        </BentoGrid>
      </Section>
    </div>
  )
}
