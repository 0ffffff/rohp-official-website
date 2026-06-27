import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RegistrationTrigger } from "@/components/registration-trigger"
import { BentoGrid } from "@/components/bento-grid"
import { BentoTile } from "@/components/bento-tile"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { Download, FileCheck, HelpCircle, MessageSquare } from "lucide-react"

const registrationSteps = [
  {
    icon: Download,
    title: "Step 1",
    description: "Download and sign the appropriate waiver (Virtual or In-Person)",
  },
  {
    icon: FileCheck,
    title: "Step 2",
    description: "Complete the registration form and upload your signed waiver",
    variant: "primary" as const,
  },
  {
    icon: MessageSquare,
    title: "Step 3",
    description: "Optionally submit questions for the Q&A session",
  },
]

export default function RegistrationPage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <PageHeader
        title="Program Registration"
        description="Complete your registration to secure your spot in ROHP"
      />

      <Section label="Registration steps">
        <BentoGrid>
          <BentoTile span={8}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              How to Register
            </h2>
            <ol className="mt-4 space-y-4">
              {registrationSteps.map(({ icon: Icon, title, description, variant }) => (
                <li key={title} className="flex gap-4">
                  <div
                    className={
                      variant === "primary"
                        ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"
                        : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-primary"
                    }
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </BentoTile>
          <BentoTile span={4} href="/faq" interactive className="flex flex-col justify-center">
            <HelpCircle className="mb-2 h-6 w-6 text-primary" />
            <h3 className="font-heading font-semibold text-primary">Need help?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Browse the FAQ or email us with questions</p>
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section variant="muted" label="Waivers">
        <BentoGrid>
          <BentoTile span={4}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              Download Waivers
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Download, fill out, and sign before registering.
            </p>
          </BentoTile>
          <BentoTile span={8} className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="outline" className="flex h-auto flex-1 flex-col gap-1 bg-transparent py-3">
              <a href="/waivers/2025%20ROHP%20In-Person%20Guest%20Waiver.pdf" download>
                <Download className="h-5 w-5" />
                <span className="font-semibold">In-Person Program Waiver</span>
                <span className="text-xs text-muted-foreground">PDF — overnight programs</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="flex h-auto flex-1 flex-col gap-1 bg-transparent py-3">
              <a href="/waivers/2025%20ROHP%20Virtual%20Guest%20Waiver.pdf" download>
                <Download className="h-5 w-5" />
                <span className="font-semibold">Virtual Program Waiver</span>
                <span className="text-xs text-muted-foreground">PDF — virtual programs</span>
              </a>
            </Button>
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section label="Registration forms">
        <BentoGrid>
          <BentoTile span={4}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              Registration Forms
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose your specific ROHP program — each opens the matching Google Form.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">•</span>
                <span>You may only register for ONE program date</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">•</span>
                <span>For Regents&apos; and Chancellor&apos;s Scholarship candidates only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">•</span>
                <span>Confirmation email within 24 hours of submitting</span>
              </li>
            </ul>
          </BentoTile>
          <BentoTile span={8} className="flex flex-col justify-center gap-3">
            <RegistrationTrigger
              label="March 8–9 Overnight"
              formUrl="https://docs.google.com/forms/u/1/d/1zEjurC6QDqixq1P9_xRfYvtLhfR5DiEUtBB44KMbmYY/edit?usp=drive_web&ouid=100170651047177504502"
            />
            <RegistrationTrigger
              label="March 15 Virtual"
              formUrl="https://docs.google.com/forms/d/e/1FAIpQLScinZCqcFKYGjAOqc77UWGLS1BhxGtES3fBbrW30SCqCqiYcQ/viewform?usp=dialog"
            />
            <RegistrationTrigger
              label="March 15–16 Overnight"
              formUrl="https://docs.google.com/forms/d/e/1FAIpQLSc-WPpOxlD3phDenG-U_OKdwFnG6NrQPOVF999NLezK7u5MEA/viewform?usp=publish-editor"
            />
            <RegistrationTrigger
              label="April 18–19 Scholars Only"
              formUrl="https://docs.google.com/forms/d/e/1FAIpQLSfkHsRkrbMmHjJyniK-C5IHB0kxUxBjmI3fkTXVMef_pYzknw/viewform?usp=dialog"
            />
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section variant="muted" label="Q&A and info">
        <BentoGrid>
          <BentoTile span={12}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              Q&amp;A Form (Optional)
            </h2>
            <p className="mt-2 max-w-prose text-sm text-muted-foreground">
              Submit questions you&apos;d like addressed during the program. All programs are completely free — cancel via contact@rohp.berkeley.edu as soon as possible if your plans change.
            </p>
            <div className="relative mx-auto mt-4 aspect-[3/4] w-full max-w-xl overflow-hidden rounded-xl">
              <iframe
                title="ROHP Q&A"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfPBSmuKgV1NGvM-pQNxDvkiAP_OlDCGVGxMn1WqLbKj01AvA/viewform?embedded=true"
                className="absolute inset-0 h-full w-full"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>
            </div>
          </BentoTile>
        </BentoGrid>
      </Section>
    </div>
  )
}
