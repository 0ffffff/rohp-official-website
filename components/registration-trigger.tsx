import { Button } from "@/components/ui/button"

type RegistrationTriggerProps = {
  label: string
  formUrl: string
}

export function RegistrationTrigger({ label, formUrl }: RegistrationTriggerProps) {
  return (
    <Button asChild className="h-auto w-full py-4">
      <a href={formUrl}>{label}</a>
    </Button>
  )
}
