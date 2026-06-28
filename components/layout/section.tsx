import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  variant?: "default" | "muted"
  fullBleed?: boolean
  className?: string
  id?: string
  label?: string
}

export function Section({
  children,
  variant = "default",
  fullBleed = false,
  className,
  id,
  label,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "py-6 md:py-8",
        variant === "muted" && "bg-muted/50",
        className,
      )}
    >
      {children}
    </section>
  )
}
