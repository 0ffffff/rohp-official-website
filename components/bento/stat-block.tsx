import { cn } from "@/lib/utils"

interface StatBlockProps {
  value: string
  label: string
  accent?: boolean
}

export function StatBlock({ value, label, accent = false }: StatBlockProps) {
  return (
    <div>
      <div
        className={cn(
          "font-heading text-4xl font-bold tracking-tight md:text-5xl",
          accent ? "text-accent" : "text-primary",
        )}
      >
        {value}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
