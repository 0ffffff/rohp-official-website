import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: ReactNode
  className?: string
  speed?: "slow" | "normal"
}

export function Marquee({ children, className, speed = "normal" }: MarqueeProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden border-y border-border bg-muted py-3",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "marquee-track flex w-max gap-8",
          speed === "slow" ? "marquee-slow" : "marquee-normal",
        )}
      >
        <div className="flex shrink-0 items-center gap-8">{children}</div>
        <div className="flex shrink-0 items-center gap-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}

interface MarqueeItemProps {
  children: ReactNode
  className?: string
}

export function MarqueeItem({ children, className }: MarqueeItemProps) {
  return (
    <span
      className={cn(
        "whitespace-nowrap font-heading text-sm font-semibold tracking-tight text-muted-foreground md:text-base",
        className,
      )}
    >
      {children}
    </span>
  )
}
