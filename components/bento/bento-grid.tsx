import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/** Site-wide content width — use everywhere for alignment */
export const siteContainerClass = "container mx-auto max-w-screen-2xl px-4 md:px-6"

interface BentoGridProps {
  children: ReactNode
  className?: string
  /** When true, row siblings share the tallest cell height. Default: false (cells hug content). */
  stretch?: boolean
}

export function BentoGrid({ children, className, stretch = false }: BentoGridProps) {
  return (
    <div className={siteContainerClass}>
      <div
        className={cn(
          "grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-12",
          stretch ? "items-stretch" : "items-start",
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
