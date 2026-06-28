import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  BentoGrid,
  BentoTile,
  CtaTile,
  PageHeader,
  TimelineList,
  type TimelineItem,
} from "@/components/bento"
import { Section } from "@/components/layout"
import { Info } from "lucide-react"

const day1Events: TimelineItem[] = [
  { time: "5:00 PM", title: "Check-in & Welcome", description: "Arrival and registration" },
  { time: "5:30 PM", title: "Official Opening", description: "Program introduction and welcome remarks" },
  { time: "5:50 PM", title: "Icebreakers", description: "Get to know your fellow participants" },
  { time: "6:05 PM", title: "DEI Community Agreements", description: "Setting community guidelines" },
  { time: "6:20 PM", title: "Interactive Quiz", description: "Kahoot trivia game" },
  { time: "6:40 PM", title: "Faculty Speaker", description: "Presentation and Q&A with a Berkeley professor", highlight: "primary" },
  { time: "7:00 PM", title: "Dinner", description: "Meal served together" },
  { time: "7:15 PM", title: "Student Performances", description: "Showcase of student talent" },
  { time: "7:50 PM", title: "Benefits Overview", description: "Learn about Regents' Scholarship benefits" },
  { time: "7:55 PM", title: "Scholar Panel & Q&A", description: "Q&A session with current Regents' Scholars", highlight: "primary" },
  { time: "8:35 PM", title: "Campus Tours", description: "Evening walk through Berkeley's campus" },
  { time: "10:10 PM", title: "Meet Your Host", description: "Connect with your overnight host and get settled" },
  { time: "10:30 PM", title: "Nighttime Activities", description: "Optional social activities and games" },
  { time: "12:00 AM", title: "End of Night", description: "Return to dorms with hosts" },
]

const day2Events: TimelineItem[] = [
  { time: "8:30 AM", title: "Breakfast", description: "Morning meal together" },
  { time: "9:00 AM", title: "Morning Gathering", description: "Good morning and schedule overview" },
  { time: "9:15 AM", title: "Breakfast & Fun Activity", description: "Continue breakfast with interactive activity" },
  { time: "9:45 AM", title: "Focus Tour Groups", description: "Specialized facility tours (Parents welcome at 10:00 AM)" },
  { time: "11:00 AM", title: "Regroup at Campanile", description: "Meet at the iconic bell tower" },
  { time: "11:00 AM", title: "Photo Booth & Free Time", description: "Group photos and time to talk with parents" },
  { time: "11:30 AM", title: "Scholar Panel #2", description: "Second Q&A session with current scholars" },
  { time: "12:00 PM", title: "Closing & Group Photo", description: "Final remarks and group photo", highlight: "accent" },
]

export default function OvernightAgendaPage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <PageHeader
        title="Overnight Program Agenda"
        description="Experience 24 hours of authentic Berkeley life with an overnight stay"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Agenda", href: "/agenda" },
          { label: "Overnight" },
        ]}
      />

      <Section label="Program dates">
        <BentoGrid>
          <BentoTile span={4}>
            <h3 className="font-heading text-xl font-semibold text-primary">Available Program Dates</h3>
            <div className="mt-3 grid gap-2">
              {[
                { date: "Mar 7-8", sublabel: "Download PDF" },
                { date: "Mar 14-15", sublabel: "Download PDF" },
                { date: "Apr 17-18", sublabel: "Scholars Only" },
              ].map(({ date, sublabel }) => (
                <Button key={date} variant="outline" className="h-auto cursor-pointer flex-col gap-0.5 bg-transparent py-2">
                  <span className="font-semibold">{date}</span>
                  <span className="text-xs text-muted-foreground">{sublabel}</span>
                </Button>
              ))}
            </div>
          </BentoTile>
          <BentoTile span={8}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              Day 1 — Evening Activities
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">14 events · 5:00 PM – 12:00 AM</p>
            <TimelineList items={day1Events} className="mt-4" />
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section variant="muted" label="Day 2">
        <BentoGrid>
          <BentoTile span={12}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              Day 2 — Morning & Closing
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">8 events · 8:30 AM – 12:00 PM</p>
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Parents welcome after 10:00 AM on Day 2
              </p>
            </div>
            <TimelineList items={day2Events} className="mt-4" />
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section label="Register">
        <BentoGrid>
          <CtaTile
            title="Ready to Experience Berkeley Overnight?"
            description="Register now to secure your spot."
            actions={
              <>
                <Button asChild>
                  <Link href="/registration">Register for Overnight</Link>
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
